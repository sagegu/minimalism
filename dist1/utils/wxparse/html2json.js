'use strict';

/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 * 
 * 
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

var __placeImgeUrlHttps = "https";
var __emojisReg = '';
var __emojisBaseSrc = '';
var __emojis = {};
var wxDiscode = require('./wxDiscode.js');
var HTMLParser = require('./htmlparser.js');
// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
// Block Elements - HTML 5
var block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
function makeMap(str) {
    var obj = {},
        items = str.split(",");
    for (var i = 0; i < items.length; i++) {
        obj[items[i]] = true;
    }return obj;
}

function q(v) {
    return '"' + v + '"';
}

function removeDOCTYPE(html) {
    return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\>\n/, '').replace(/<.*!DOCTYPE.*\>\n/, '');
}

function trimHtml(html) {
    return html.replace(/\r?\n+/g, '').replace(/<!--.*?-->/ig, '').replace(/\/\*.*?\*\//ig, '').replace(/[ ]+</ig, '<');
}

function html2json(html, bindName) {
    //处理字符串
    html = removeDOCTYPE(html);
    html = trimHtml(html);
    html = wxDiscode.strDiscode(html);
    //生成node节点
    var bufArray = [];
    var results = {
        node: bindName,
        nodes: [],
        images: [],
        imageUrls: []
    };
    var index = 0;
    HTMLParser(html, {
        start: function start(tag, attrs, unary) {
            //debug(tag, attrs, unary);
            // node for this element
            var node = {
                node: 'element',
                tag: tag
            };

            if (bufArray.length === 0) {
                node.index = index.toString();
                index += 1;
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
            }

            if (block[tag]) {
                node.tagType = "block";
            } else if (inline[tag]) {
                node.tagType = "inline";
            } else if (closeSelf[tag]) {
                node.tagType = "closeSelf";
            }

            if (attrs.length !== 0) {
                node.attr = attrs.reduce(function (pre, attr) {
                    var name = attr.name;
                    var value = attr.value;
                    if (name == 'class') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.classStr = value;
                    }
                    // has multi attibutes
                    // make it array of attribute
                    if (name == 'style') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.styleStr = value;
                    }
                    if (value.match(/ /)) {
                        value = value.split(' ');
                    }

                    // if attr already exists
                    // merge it
                    if (pre[name]) {
                        if (Array.isArray(pre[name])) {
                            // already array, push to last
                            pre[name].push(value);
                        } else {
                            // single value, make it array
                            pre[name] = [pre[name], value];
                        }
                    } else {
                        // not exist, put it
                        pre[name] = value;
                    }

                    return pre;
                }, {});
            }

            //对img添加额外数据
            if (node.tag === 'img') {
                node.imgIndex = results.images.length;
                var imgUrl = node.attr.src;
                if (imgUrl[0] == '') {
                    imgUrl.splice(0, 1);
                }
                imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
                node.attr.src = imgUrl;
                node.from = bindName;
                results.images.push(node);
                results.imageUrls.push(imgUrl);
            }

            // 处理font标签样式属性
            if (node.tag === 'font') {
                var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
                var styleAttrs = {
                    'color': 'color',
                    'face': 'font-family',
                    'size': 'font-size'
                };
                if (!node.attr.style) node.attr.style = [];
                if (!node.styleStr) node.styleStr = '';
                for (var key in styleAttrs) {
                    if (node.attr[key]) {
                        var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
                        node.attr.style.push(styleAttrs[key]);
                        node.attr.style.push(value);
                        node.styleStr += styleAttrs[key] + ': ' + value + ';';
                    }
                }
            }

            //临时记录source资源
            if (node.tag === 'source') {
                results.source = node.attr.src;
            }

            if (unary) {
                // if this tag doesn't have end tag
                // like <img src="hoge.png"/>
                // add to parents
                var parent = bufArray[0] || results;
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            } else {
                bufArray.unshift(node);
            }
        },
        end: function end(tag) {
            //debug(tag);
            // merge into parent tag
            var node = bufArray.shift();
            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

            //当有缓存source资源时于于video补上src资源
            if (node.tag === 'video' && results.source) {
                node.attr.src = results.source;
                delete results.source;
            }

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        chars: function chars(text) {
            //debug(text);
            var node = {
                node: 'text',
                text: text,
                textArray: transEmojiStr(text)
            };

            if (bufArray.length === 0) {
                node.index = index.toString();
                index += 1;
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
                parent.nodes.push(node);
            }
        },
        comment: function comment(text) {
            //debug(text);
            // var node = {
            //     node: 'comment',
            //     text: text,
            // };
            // var parent = bufArray[0];
            // if (parent.nodes === undefined) {
            //     parent.nodes = [];
            // }
            // parent.nodes.push(node);
        }
    });
    return results;
};

function transEmojiStr(str) {
    // var eReg = new RegExp("["+__reg+' '+"]");
    //   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')

    var emojiObjs = [];
    //如果正则表达式为空
    if (__emojisReg.length == 0 || !__emojis) {
        var emojiObj = {};
        emojiObj.node = "text";
        emojiObj.text = str;
        array = [emojiObj];
        return array;
    }
    //这个地方需要调整
    str = str.replace(/\[([^\[\]]+)\]/g, ':$1:');
    var eReg = new RegExp("[:]");
    var array = str.split(eReg);
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        var emojiObj = {};
        if (__emojis[ele]) {
            emojiObj.node = "element";
            emojiObj.tag = "emoji";
            emojiObj.text = __emojis[ele];
            emojiObj.baseSrc = __emojisBaseSrc;
        } else {
            emojiObj.node = "text";
            emojiObj.text = ele;
        }
        emojiObjs.push(emojiObj);
    }

    return emojiObjs;
}

function emojisInit() {
    var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
    var emojis = arguments[2];

    __emojisReg = reg;
    __emojisBaseSrc = baseSrc;
    __emojis = emojis;
}

module.exports = {
    html2json: html2json,
    emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwyanNvbi5qcyJdLCJuYW1lcyI6WyJfX3BsYWNlSW1nZVVybEh0dHBzIiwiX19lbW9qaXNSZWciLCJfX2Vtb2ppc0Jhc2VTcmMiLCJfX2Vtb2ppcyIsInd4RGlzY29kZSIsInJlcXVpcmUiLCJIVE1MUGFyc2VyIiwiZW1wdHkiLCJtYWtlTWFwIiwiYmxvY2siLCJpbmxpbmUiLCJjbG9zZVNlbGYiLCJmaWxsQXR0cnMiLCJzcGVjaWFsIiwic3RyIiwib2JqIiwiaXRlbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJxIiwidiIsInJlbW92ZURPQ1RZUEUiLCJodG1sIiwicmVwbGFjZSIsInRyaW1IdG1sIiwiaHRtbDJqc29uIiwiYmluZE5hbWUiLCJzdHJEaXNjb2RlIiwiYnVmQXJyYXkiLCJyZXN1bHRzIiwibm9kZSIsIm5vZGVzIiwiaW1hZ2VzIiwiaW1hZ2VVcmxzIiwiaW5kZXgiLCJzdGFydCIsInRhZyIsImF0dHJzIiwidW5hcnkiLCJ0b1N0cmluZyIsInBhcmVudCIsInVuZGVmaW5lZCIsInRhZ1R5cGUiLCJhdHRyIiwicmVkdWNlIiwicHJlIiwibmFtZSIsInZhbHVlIiwiY2xhc3NTdHIiLCJzdHlsZVN0ciIsIm1hdGNoIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsImltZ0luZGV4IiwiaW1nVXJsIiwic3JjIiwic3BsaWNlIiwidXJsVG9IdHRwVXJsIiwiZnJvbSIsImZvbnRTaXplIiwic3R5bGVBdHRycyIsInN0eWxlIiwia2V5Iiwic291cmNlIiwidW5zaGlmdCIsImVuZCIsInNoaWZ0IiwiY29uc29sZSIsImVycm9yIiwiY2hhcnMiLCJ0ZXh0IiwidGV4dEFycmF5IiwidHJhbnNFbW9qaVN0ciIsImNvbW1lbnQiLCJlbW9qaU9ianMiLCJlbW9qaU9iaiIsImFycmF5IiwiZVJlZyIsIlJlZ0V4cCIsImVsZSIsImJhc2VTcmMiLCJlbW9qaXNJbml0IiwicmVnIiwiZW1vamlzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7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QVM4RSxHQUFULENBQWhCO0FBQ0FKLHFCQUFTSyxPQUFULEdBQWtCaEYsZUFBbEI7QUFDRCxTQUxELE1BS0s7QUFDSDJFLHFCQUFTOUMsSUFBVCxHQUFnQixNQUFoQjtBQUNBOEMscUJBQVNMLElBQVQsR0FBZ0JTLEdBQWhCO0FBQ0Q7QUFDREwsa0JBQVV0QixJQUFWLENBQWV1QixRQUFmO0FBQ0Q7O0FBRUQsV0FBT0QsU0FBUDtBQUNEOztBQUVELFNBQVNPLFVBQVQsR0FBNkQ7QUFBQSxRQUF6Q0MsR0FBeUMsdUVBQXJDLEVBQXFDO0FBQUEsUUFBbENGLE9BQWtDLHVFQUExQixrQkFBMEI7QUFBQSxRQUFQRyxNQUFPOztBQUN6RHBGLGtCQUFjbUYsR0FBZDtBQUNBbEYsc0JBQWdCZ0YsT0FBaEI7QUFDQS9FLGVBQVNrRixNQUFUO0FBQ0g7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYjdELGVBQVdBLFNBREU7QUFFYnlELGdCQUFXQTtBQUZFLENBQWpCIiwiZmlsZSI6Imh0bWwyanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogaHRtbDJKc29uIOaUuemAoOadpeiHqjogaHR0cHM6Ly9naXRodWIuY29tL0p4Y2svaHRtbDJqc29uXG4gKiBcbiAqIFxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxuICogb3JnYW5pemF0aW9uOiBXZUFwcERldijlvq7kv6HlsI/nqIvluo/lvIDlj5HorrrlnZspKGh0dHA6Ly93ZWFwcGRldi5jb20pXG4gKiAgICAgICAgICAgICAgIOWeguebtOW+ruS/oeWwj+eoi+W6j+W8gOWPkeS6pOa1geekvuWMulxuICogXG4gKiBnaXRodWLlnLDlnYA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2luZHkvd3hQYXJzZVxuICogXG4gKiBmb3I6IOW+ruS/oeWwj+eoi+W6j+WvjOaWh+acrOino+aekFxuICogZGV0YWlsIDogaHR0cDovL3dlYXBwZGV2LmNvbS90L3d4cGFyc2UtYWxwaGEwLTEtaHRtbC1tYXJrZG93bi8xODRcbiAqL1xuXG52YXIgX19wbGFjZUltZ2VVcmxIdHRwcyA9IFwiaHR0cHNcIjtcbnZhciBfX2Vtb2ppc1JlZyA9ICcnO1xudmFyIF9fZW1vamlzQmFzZVNyYyA9ICcnO1xudmFyIF9fZW1vamlzID0ge307XG52YXIgd3hEaXNjb2RlID0gcmVxdWlyZSgnLi93eERpc2NvZGUuanMnKTtcbnZhciBIVE1MUGFyc2VyID0gcmVxdWlyZSgnLi9odG1scGFyc2VyLmpzJyk7XG4vLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNVxudmFyIGVtcHR5ID0gbWFrZU1hcChcImFyZWEsYmFzZSxiYXNlZm9udCxicixjb2wsZnJhbWUsaHIsaW1nLGlucHV0LGxpbmssbWV0YSxwYXJhbSxlbWJlZCxjb21tYW5kLGtleWdlbixzb3VyY2UsdHJhY2ssd2JyXCIpO1xuLy8gQmxvY2sgRWxlbWVudHMgLSBIVE1MIDVcbnZhciBibG9jayA9IG1ha2VNYXAoXCJicixhLGNvZGUsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlucyxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW9cIik7XG5cbi8vIElubGluZSBFbGVtZW50cyAtIEhUTUwgNVxudmFyIGlubGluZSA9IG1ha2VNYXAoXCJhYmJyLGFjcm9ueW0sYXBwbGV0LGIsYmFzZWZvbnQsYmRvLGJpZyxidXR0b24sY2l0ZSxkZWwsZGZuLGVtLGZvbnQsaSxpZnJhbWUsaW1nLGlucHV0LGlucyxrYmQsbGFiZWwsbWFwLG9iamVjdCxxLHMsc2FtcCxzY3JpcHQsc2VsZWN0LHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRleHRhcmVhLHR0LHUsdmFyXCIpO1xuXG4vLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cbi8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcbnZhciBjbG9zZVNlbGYgPSBtYWtlTWFwKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyXCIpO1xuXG4vLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSB0aGVpciB2YWx1ZXMgZmlsbGVkIGluIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxudmFyIGZpbGxBdHRycyA9IG1ha2VNYXAoXCJjaGVja2VkLGNvbXBhY3QsZGVjbGFyZSxkZWZlcixkaXNhYmxlZCxpc21hcCxtdWx0aXBsZSxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3dyYXAscmVhZG9ubHksc2VsZWN0ZWRcIik7XG5cbi8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxudmFyIHNwZWNpYWwgPSBtYWtlTWFwKFwid3h4eGNvZGUtc3R5bGUsc2NyaXB0LHN0eWxlLHZpZXcsc2Nyb2xsLXZpZXcsYmxvY2tcIik7XG5mdW5jdGlvbiBtYWtlTWFwKHN0cikge1xuICAgIHZhciBvYmogPSB7fSwgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXG4gICAgICAgIG9ialtpdGVtc1tpXV0gPSB0cnVlO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHEodikge1xuICAgIHJldHVybiAnXCInICsgdiArICdcIic7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURPQ1RZUEUoaHRtbCkge1xuICAgIHJldHVybiBodG1sXG4gICAgICAgIC5yZXBsYWNlKC88XFw/eG1sLipcXD8+XFxuLywgJycpXG4gICAgICAgIC5yZXBsYWNlKC88LiohZG9jdHlwZS4qXFw+XFxuLywgJycpXG4gICAgICAgIC5yZXBsYWNlKC88LiohRE9DVFlQRS4qXFw+XFxuLywgJycpO1xufVxuXG5mdW5jdGlvbiB0cmltSHRtbChodG1sKSB7XG4gIHJldHVybiBodG1sXG4gICAgICAgIC5yZXBsYWNlKC9cXHI/XFxuKy9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoLzwhLS0uKj8tLT4vaWcsICcnKVxuICAgICAgICAucmVwbGFjZSgvXFwvXFwqLio/XFwqXFwvL2lnLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1sgXSs8L2lnLCAnPCcpXG59XG5cblxuZnVuY3Rpb24gaHRtbDJqc29uKGh0bWwsIGJpbmROYW1lKSB7XG4gICAgLy/lpITnkIblrZfnrKbkuLJcbiAgICBodG1sID0gcmVtb3ZlRE9DVFlQRShodG1sKTtcbiAgICBodG1sID0gdHJpbUh0bWwoaHRtbCk7XG4gICAgaHRtbCA9IHd4RGlzY29kZS5zdHJEaXNjb2RlKGh0bWwpO1xuICAgIC8v55Sf5oiQbm9kZeiKgueCuVxuICAgIHZhciBidWZBcnJheSA9IFtdO1xuICAgIHZhciByZXN1bHRzID0ge1xuICAgICAgICBub2RlOiBiaW5kTmFtZSxcbiAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICBpbWFnZXM6W10sXG4gICAgICAgIGltYWdlVXJsczpbXVxuICAgIH07XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBIVE1MUGFyc2VyKGh0bWwsIHtcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCB1bmFyeSkge1xuICAgICAgICAgICAgLy9kZWJ1Zyh0YWcsIGF0dHJzLCB1bmFyeSk7XG4gICAgICAgICAgICAvLyBub2RlIGZvciB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgICAgICAgIG5vZGU6ICdlbGVtZW50JyxcbiAgICAgICAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChidWZBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlLmluZGV4ID0gaW5kZXgudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5pbmRleCA9IHBhcmVudC5pbmRleCArICcuJyArIHBhcmVudC5ub2Rlcy5sZW5ndGhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJsb2NrW3RhZ10pIHtcbiAgICAgICAgICAgICAgICBub2RlLnRhZ1R5cGUgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlubGluZVt0YWddKSB7XG4gICAgICAgICAgICAgICAgbm9kZS50YWdUeXBlID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xvc2VTZWxmW3RhZ10pIHtcbiAgICAgICAgICAgICAgICBub2RlLnRhZ1R5cGUgPSBcImNsb3NlU2VsZlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRyID0gYXR0cnMucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NTdHIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBoYXMgbXVsdGkgYXR0aWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgaXQgYXJyYXkgb2YgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVTdHIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUubWF0Y2goLyAvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGF0dHIgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2UgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJlW25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgYXJyYXksIHB1c2ggdG8gbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZVtuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luZ2xlIHZhbHVlLCBtYWtlIGl0IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlW25hbWVdID0gW3ByZVtuYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGV4aXN0LCBwdXQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZTtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5a+5aW1n5re75Yqg6aKd5aSW5pWw5o2uXG4gICAgICAgICAgICBpZiAobm9kZS50YWcgPT09ICdpbWcnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbWdJbmRleCA9IHJlc3VsdHMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsID0gbm9kZS5hdHRyLnNyYztcbiAgICAgICAgICAgICAgICBpZiAoaW1nVXJsWzBdID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ1VybC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ1VybCA9IHd4RGlzY29kZS51cmxUb0h0dHBVcmwoaW1nVXJsLCBfX3BsYWNlSW1nZVVybEh0dHBzKTtcbiAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3JjID0gaW1nVXJsO1xuICAgICAgICAgICAgICAgIG5vZGUuZnJvbSA9IGJpbmROYW1lO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuaW1hZ2VzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5pbWFnZVVybHMucHVzaChpbWdVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDlpITnkIZmb2505qCH562+5qC35byP5bGe5oCnXG4gICAgICAgICAgICBpZiAobm9kZS50YWcgPT09ICdmb250Jykge1xuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneC1sYXJnZScsICd4eC1sYXJnZScsICctd2Via2l0LXh4eC1sYXJnZSddO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZUF0dHJzID0ge1xuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnY29sb3InLFxuICAgICAgICAgICAgICAgICAgICAnZmFjZSc6ICdmb250LWZhbWlseScsXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogJ2ZvbnQtc2l6ZSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5hdHRyLnN0eWxlKSBub2RlLmF0dHIuc3R5bGUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuc3R5bGVTdHIpIG5vZGUuc3R5bGVTdHIgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGVBdHRycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hdHRyW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGtleSA9PT0gJ3NpemUnID8gZm9udFNpemVbbm9kZS5hdHRyW2tleV0tMV0gOiBub2RlLmF0dHJba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0ci5zdHlsZS5wdXNoKHN0eWxlQXR0cnNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3R5bGUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlU3RyICs9IHN0eWxlQXR0cnNba2V5XSArICc6ICcgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/kuLTml7borrDlvZVzb3VyY2XotYTmupBcbiAgICAgICAgICAgIGlmKG5vZGUudGFnID09PSAnc291cmNlJyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zb3VyY2UgPSBub2RlLmF0dHIuc3JjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodW5hcnkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHRhZyBkb2Vzbid0IGhhdmUgZW5kIHRhZ1xuICAgICAgICAgICAgICAgIC8vIGxpa2UgPGltZyBzcmM9XCJob2dlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gcGFyZW50c1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXSB8fCByZXN1bHRzO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZkFycmF5LnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZDogZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgLy9kZWJ1Zyh0YWcpO1xuICAgICAgICAgICAgLy8gbWVyZ2UgaW50byBwYXJlbnQgdGFnXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGJ1ZkFycmF5LnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAobm9kZS50YWcgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xuXG4gICAgICAgICAgICAvL+W9k+aciee8k+WtmHNvdXJjZei1hOa6kOaXtuS6juS6jnZpZGVv6KGl5LiKc3Jj6LWE5rqQXG4gICAgICAgICAgICBpZihub2RlLnRhZyA9PT0gJ3ZpZGVvJyAmJiByZXN1bHRzLnNvdXJjZSl7XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRyLnNyYyA9IHJlc3VsdHMuc291cmNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRzLnNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGJ1ZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYXJzOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgLy9kZWJ1Zyh0ZXh0KTtcbiAgICAgICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgICAgICAgIG5vZGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICAgIHRleHRBcnJheTp0cmFuc0Vtb2ppU3RyKHRleHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYnVmQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbmRleCA9IGluZGV4LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gYnVmQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmluZGV4ID0gcGFyZW50LmluZGV4ICsgJy4nICsgcGFyZW50Lm5vZGVzLmxlbmd0aFxuICAgICAgICAgICAgICAgIHBhcmVudC5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21tZW50OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgLy9kZWJ1Zyh0ZXh0KTtcbiAgICAgICAgICAgIC8vIHZhciBub2RlID0ge1xuICAgICAgICAgICAgLy8gICAgIG5vZGU6ICdjb21tZW50JyxcbiAgICAgICAgICAgIC8vICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIC8vIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgICAgIC8vIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gICAgIHBhcmVudC5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5mdW5jdGlvbiB0cmFuc0Vtb2ppU3RyKHN0cil7XG4gIC8vIHZhciBlUmVnID0gbmV3IFJlZ0V4cChcIltcIitfX3JlZysnICcrXCJdXCIpO1xuLy8gICBzdHIgPSBzdHIucmVwbGFjZSgvXFxbKFteXFxbXFxdXSspXFxdL2csJzokMTonKVxuICBcbiAgdmFyIGVtb2ppT2JqcyA9IFtdO1xuICAvL+WmguaenOato+WImeihqOi+vuW8j+S4uuepulxuICBpZihfX2Vtb2ppc1JlZy5sZW5ndGggPT0gMCB8fCAhX19lbW9qaXMpe1xuICAgICAgdmFyIGVtb2ppT2JqID0ge31cbiAgICAgIGVtb2ppT2JqLm5vZGUgPSBcInRleHRcIjtcbiAgICAgIGVtb2ppT2JqLnRleHQgPSBzdHI7XG4gICAgICBhcnJheSA9IFtlbW9qaU9ial07XG4gICAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLy/ov5nkuKrlnLDmlrnpnIDopoHosIPmlbRcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhbXlxcW1xcXV0rKVxcXS9nLCc6JDE6JylcbiAgdmFyIGVSZWcgPSBuZXcgUmVnRXhwKFwiWzpdXCIpO1xuICB2YXIgYXJyYXkgPSBzdHIuc3BsaXQoZVJlZyk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIGVsZSA9IGFycmF5W2ldO1xuICAgIHZhciBlbW9qaU9iaiA9IHt9O1xuICAgIGlmKF9fZW1vamlzW2VsZV0pe1xuICAgICAgZW1vamlPYmoubm9kZSA9IFwiZWxlbWVudFwiO1xuICAgICAgZW1vamlPYmoudGFnID0gXCJlbW9qaVwiO1xuICAgICAgZW1vamlPYmoudGV4dCA9IF9fZW1vamlzW2VsZV07XG4gICAgICBlbW9qaU9iai5iYXNlU3JjPSBfX2Vtb2ppc0Jhc2VTcmM7XG4gICAgfWVsc2V7XG4gICAgICBlbW9qaU9iai5ub2RlID0gXCJ0ZXh0XCI7XG4gICAgICBlbW9qaU9iai50ZXh0ID0gZWxlO1xuICAgIH1cbiAgICBlbW9qaU9ianMucHVzaChlbW9qaU9iaik7XG4gIH1cbiAgXG4gIHJldHVybiBlbW9qaU9ianM7XG59XG5cbmZ1bmN0aW9uIGVtb2ppc0luaXQocmVnPScnLGJhc2VTcmM9XCIvd3hQYXJzZS9lbW9qaXMvXCIsZW1vamlzKXtcbiAgICBfX2Vtb2ppc1JlZyA9IHJlZztcbiAgICBfX2Vtb2ppc0Jhc2VTcmM9YmFzZVNyYztcbiAgICBfX2Vtb2ppcz1lbW9qaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGh0bWwyanNvbjogaHRtbDJqc29uLFxuICAgIGVtb2ppc0luaXQ6ZW1vamlzSW5pdFxufTtcblxuIl19