'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _category_item = require('./../../components/category_item.js');

var _category_item2 = _interopRequireDefault(_category_item);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var choseCategory = function (_wepy$page) {
  _inherits(choseCategory, _wepy$page);

  function choseCategory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, choseCategory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = choseCategory.__proto__ || Object.getPrototypeOf(choseCategory)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      frequent: [],
      last: null,
      list: [],
      type: 'expend',
      already_load: false
    }, _this.$repeat = { "frequent": { "com": "category", "props": "category.sync" }, "item": { "com": "category", "props": "category.sync" } }, _this.$props = { "category": { "xmlns:v-bind": { "value": "", "for": "frequent", "item": "child", "index": "index", "key": "index" }, "v-bind:category.sync": { "value": "child", "type": "item", "for": "item.childs", "item": "child", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "frequent", "item": "child", "index": "index", "key": "index" } } }, _this.$events = { "category": { "v-on:choseItem": "setCategory" } }, _this.components = {
      category: _category_item2.default
    }, _this.methods = {
      setCategory: function setCategory(category) {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        if (this.type == 'expend') {
          prevPage.$Expend$setCategory(category);
        } else {
          prevPage.$Income$setCategory(category);
        }
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }, _this.computed = {
      showLast: function showLast() {
        return this.last == null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(choseCategory, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.type = options.type;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getCategory();
    }
  }, {
    key: 'getCategory',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var sessionKey, cacheData, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionKey = '@statement_form_category_' + this.type + '@';

                if (_session2.default.get(sessionKey)) {
                  cacheData = _session2.default.get(sessionKey);

                  this.frequent = cacheData.frequent;
                  this.last = cacheData.last;
                  this.list = cacheData.categories;
                  this.$apply();
                }

                _context.next = 4;
                return _wxRequest2.default.Get('statements/categories', { type: this.type });

              case 4:
                data = _context.sent;

                if (!(data === undefined)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', false);

              case 7:
                this.frequent = data.frequent;
                this.last = data.last;
                this.list = data.categories;
                this.$apply();
                _session2.default.set(sessionKey, data);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCategory() {
        return _ref2.apply(this, arguments);
      }

      return getCategory;
    }()
  }]);

  return choseCategory;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(choseCategory , 'pages/statements/chose_category'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob3NlX2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbImNob3NlQ2F0ZWdvcnkiLCJkYXRhIiwiZnJlcXVlbnQiLCJsYXN0IiwibGlzdCIsInR5cGUiLCJhbHJlYWR5X2xvYWQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjYXRlZ29yeSIsIkNhdGVnb3J5IiwibWV0aG9kcyIsInNldENhdGVnb3J5IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsIiRFeHBlbmQkc2V0Q2F0ZWdvcnkiLCIkSW5jb21lJHNldENhdGVnb3J5Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiY29tcHV0ZWQiLCJzaG93TGFzdCIsIm9wdGlvbnMiLCJnZXRDYXRlZ29yeSIsInNlc3Npb25LZXkiLCJTZXNzaW9uIiwiZ2V0IiwiY2FjaGVEYXRhIiwiY2F0ZWdvcmllcyIsIiRhcHBseSIsInd4UmVxdWVzdCIsIkdldCIsInVuZGVmaW5lZCIsInNldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLFlBQU0sSUFGRDtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxRQUpEO0FBS0xDLG9CQUFjO0FBTFQsSyxRQVFSQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsZUFBMUIsRUFBWixFQUF1RCxRQUFPLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsZUFBMUIsRUFBOUQsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLFVBQWxCLEVBQTZCLFFBQU8sT0FBcEMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9BQWxFLEVBQWhCLEVBQTJGLHdCQUF1QixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE1BQXhCLEVBQStCLE9BQU0sYUFBckMsRUFBbUQsUUFBTyxPQUExRCxFQUFrRSxTQUFRLE9BQTFFLEVBQWtGLE9BQU0sT0FBeEYsRUFBbEgsRUFBbU4sY0FBYSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxPQUFwQyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sT0FBbEUsRUFBaE8sRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxrQkFBaUIsYUFBbEIsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNYQyxnQkFBVUM7QUFEQyxLLFFBWVZDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0gsUUFETCxFQUNlO0FBQ3JCLFlBQU1JLFFBQVFDLGlCQUFkO0FBQ0EsWUFBTUMsV0FBV0YsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQWpCO0FBQ0EsWUFBSSxLQUFLYixJQUFMLElBQWEsUUFBakIsRUFBMkI7QUFDekJZLG1CQUFTRSxtQkFBVCxDQUE2QlIsUUFBN0I7QUFDRCxTQUZELE1BRU87QUFDTE0sbUJBQVNHLG1CQUFULENBQTZCVCxRQUE3QjtBQUNEO0FBQ0RVLHVCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxpQkFBTztBQURTLFNBQWxCO0FBR0Q7QUFaTyxLLFFBb0NWQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRztBQUNWLGVBQU8sS0FBS3RCLElBQUwsSUFBYSxJQUFwQjtBQUNEO0FBSFEsSzs7Ozs7MkJBNUNIdUIsTyxFQUFTO0FBQ2YsV0FBS3JCLElBQUwsR0FBWXFCLFFBQVFyQixJQUFwQjtBQUNEOzs7NkJBRVM7QUFDUixXQUFLc0IsV0FBTDtBQUNEOzs7Ozs7Ozs7O0FBa0JPQywwQixpQ0FBeUMsS0FBS3ZCLEk7O0FBQ3BELG9CQUFJd0Isa0JBQVFDLEdBQVIsQ0FBWUYsVUFBWixDQUFKLEVBQTZCO0FBQ3JCRywyQkFEcUIsR0FDVEYsa0JBQVFDLEdBQVIsQ0FBWUYsVUFBWixDQURTOztBQUUzQix1QkFBSzFCLFFBQUwsR0FBZ0I2QixVQUFVN0IsUUFBMUI7QUFDQSx1QkFBS0MsSUFBTCxHQUFZNEIsVUFBVTVCLElBQXRCO0FBQ0EsdUJBQUtDLElBQUwsR0FBWTJCLFVBQVVDLFVBQXRCO0FBQ0EsdUJBQUtDLE1BQUw7QUFDRDs7O3VCQUVrQkMsb0JBQVVDLEdBQVYsQ0FBYyx1QkFBZCxFQUF1QyxFQUFFOUIsTUFBTSxLQUFLQSxJQUFiLEVBQXZDLEM7OztBQUFiSixvQjs7c0JBQ0ZBLFNBQVNtQyxTOzs7OztpREFDSixLOzs7QUFFVCxxQkFBS2xDLFFBQUwsR0FBZ0JELEtBQUtDLFFBQXJCO0FBQ0EscUJBQUtDLElBQUwsR0FBWUYsS0FBS0UsSUFBakI7QUFDQSxxQkFBS0MsSUFBTCxHQUFZSCxLQUFLK0IsVUFBakI7QUFDQSxxQkFBS0MsTUFBTDtBQUNBSixrQ0FBUVEsR0FBUixDQUFZVCxVQUFaLEVBQXdCM0IsSUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6RHVDb0IsZUFBS2lCLEk7O2tCQUEzQnRDLGEiLCJmaWxlIjoiY2hvc2VfY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IENhdGVnb3J5IGZyb20gJ0AvY29tcG9uZW50cy9jYXRlZ29yeV9pdGVtJ1xuICBpbXBvcnQgVGlwcyBmcm9tICdALy91dGlscy90aXAnXG4gIGltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hvc2VDYXRlZ29yeSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGZyZXF1ZW50OiBbXSxcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHR5cGU6ICdleHBlbmQnLFxuICAgICAgYWxyZWFkeV9sb2FkOiBmYWxzZVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImZyZXF1ZW50XCI6e1wiY29tXCI6XCJjYXRlZ29yeVwiLFwicHJvcHNcIjpcImNhdGVnb3J5LnN5bmNcIn0sXCJpdGVtXCI6e1wiY29tXCI6XCJjYXRlZ29yeVwiLFwicHJvcHNcIjpcImNhdGVnb3J5LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJjYXRlZ29yeVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiZnJlcXVlbnRcIixcIml0ZW1cIjpcImNoaWxkXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Y2F0ZWdvcnkuc3luY1wiOntcInZhbHVlXCI6XCJjaGlsZFwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJpdGVtLmNoaWxkc1wiLFwiaXRlbVwiOlwiY2hpbGRcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInhtbG5zOnYtb25cIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImZyZXF1ZW50XCIsXCJpdGVtXCI6XCJjaGlsZFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJjYXRlZ29yeVwiOntcInYtb246Y2hvc2VJdGVtXCI6XCJzZXRDYXRlZ29yeVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuXHRcdFx0Y2F0ZWdvcnk6IENhdGVnb3J5XG4gICAgfTtcblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgfVxuICAgIFxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmdldENhdGVnb3J5KClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2V0Q2F0ZWdvcnkgKGNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKClcbiAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxuICAgICAgICBpZiAodGhpcy50eXBlID09ICdleHBlbmQnKSB7XG4gICAgICAgICAgcHJldlBhZ2UuJEV4cGVuZCRzZXRDYXRlZ29yeShjYXRlZ29yeSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2UGFnZS4kSW5jb21lJHNldENhdGVnb3J5KGNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENhdGVnb3J5ICgpIHtcbiAgICAgIGNvbnN0IHNlc3Npb25LZXkgPSBgQHN0YXRlbWVudF9mb3JtX2NhdGVnb3J5XyR7dGhpcy50eXBlfUBgXG4gICAgICBpZiAoU2Vzc2lvbi5nZXQoc2Vzc2lvbktleSkpIHtcbiAgICAgICAgY29uc3QgY2FjaGVEYXRhID0gU2Vzc2lvbi5nZXQoc2Vzc2lvbktleSlcbiAgICAgICAgdGhpcy5mcmVxdWVudCA9IGNhY2hlRGF0YS5mcmVxdWVudFxuICAgICAgICB0aGlzLmxhc3QgPSBjYWNoZURhdGEubGFzdFxuICAgICAgICB0aGlzLmxpc3QgPSBjYWNoZURhdGEuY2F0ZWdvcmllc1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdGF0ZW1lbnRzL2NhdGVnb3JpZXMnLCB7IHR5cGU6IHRoaXMudHlwZSB9KVxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMuZnJlcXVlbnQgPSBkYXRhLmZyZXF1ZW50XG4gICAgICB0aGlzLmxhc3QgPSBkYXRhLmxhc3RcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgU2Vzc2lvbi5zZXQoc2Vzc2lvbktleSwgZGF0YSlcbiAgICB9IFxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBzaG93TGFzdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3QgPT0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19