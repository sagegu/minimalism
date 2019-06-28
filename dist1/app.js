'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

var _actions = require('./store/actions/index.js');

var _wxRequest = require('./utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _session = require('./utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _wepyRedux.setStore)((0, _store2.default)());

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.getUser();
      // this.checkVersionUpdate()
      this.uploadData();
    }

    // 预加载用户

  }, {
    key: 'getUser',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('users');

              case 2:
                data = _context.sent;

                if (typeof data !== 'undefined') {
                  this.globalData.user = data;
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUser() {
        return _ref.apply(this, arguments);
      }

      return getUser;
    }()

    // 检查更新

  }, {
    key: 'checkVersionUpdate',
    value: function checkVersionUpdate() {
      if (!wx.canIUse('getUpdateManager')) {
        return false;
      }

      _wxRequest2.default.WX('check_update', {}, function (res) {
        var data = res.data;
        if (data === 0) return false;
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，请重启应用',
                success: function success(res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                  }
                }
              });
            });
            updateManager.onUpdateFailed(function () {
              // 新的版本下载失败
              wx.showModal({
                title: '已经有新版本了哟~',
                content: '新版本下载失败，请关闭微信后重新打开即可'
              });
            });
          }
        });
      });
    }
  }, {
    key: 'uploadData',
    value: function uploadData() {
      // 记录请求错误的日志
      var errs = _session2.default.getErrors();
      if (!!errs && errs.length > 0) {
        var _loop = function _loop(index, length) {
          var err = errs[index];
          _wxRequest2.default.PostBasic('error_upload', { err: err }, {}, function () {
            errs.splice(errs.indexOf(err), 1);
            _session2.default.set(_session2.default.key['errorKey'], errs);
          });
        };

        for (var index = 0, length = errs.length; index < length; ++index) {
          _loop(index, length);
        }
      }

      // 同步本地数据到远程服务端
      var statements = _session2.default.getStatements();
      if (!!statements && statements.length > 0) {
        var _loop2 = function _loop2(index, length) {
          var statement = statements[index];
          _wxRequest2.default.PostBasic('statements', statement, {}, function () {
            statements.splice(statements.indexOf(statement), 1);
            _session2.default.set(_session2.default.key['localStatementKey'], statements);
          });
        };

        for (var index = 0, length = statements.length; index < length; ++index) {
          _loop2(index, length);
        }
      }
    }
  }]);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/index",
      // "pages/chart",
      "pages/asset",
      // "pages/setting",

      // 记一笔
      "pages/statements/create", "pages/statements/edit", "pages/statements/detail", "pages/statements/chose_category", "pages/statements/chose_asset",
      // "pages/statements/filter_statements",

      // 余额设置
      // "pages/forms/asset_form",
      // "pages/forms/budget_form",
      // "pages/forms/icons_chose",

      // 预算
      // "pages/budgets/budget",
      // "pages/budgets/child_budget",

      // 设置
      // "pages/settings/feedback",
      // "pages/settings/header",
      // "pages/settings/super_chart",
      // "pages/settings/user_info",
      // "pages/settings/nickname_edit",
      // "pages/settings/prepare_buy",
      // "pages/settings/super_statement",
      // "pages/settings/about",
      // "pages/settings/search",

      // 账单墙
      "pages/statements/images",

      // 编辑账单类型分类/资产分类
      "pages/categories/list", "pages/categories/child", "pages/categories/category_form", "pages/categories/category_statement", "pages/assets/list", "pages/assets/asset_form", "pages/assets/asset_detail"],
      window: {
        "backgroundColor": "#efefef",
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "backgroundTextStyle": "light",
        "navigationBarTitleText": "洁账",
        // navigationBarTextStyle: "white",
        "enablePullDownRefresh": false
      },
      // tabBar: {
      //   backgroundColor: "#fff",
      //   color: "#000000",
      //   selectedColor: "#2196F3",
      //   list: [
      //     {
      //       pagePath: "pages/index",
      //       iconPath: "public/images/settings/statement.png",
      //       selectedIconPath: "public/images/settings/statement-active.png",
      //       text: "首页"
      //     },
      //     {
      //       pagePath: "pages/chart",
      //       iconPath: "public/images/settings/statistic.png",
      //       selectedIconPath: "public/images/settings/statistic-active.png",
      //       text: "统计"
      //     },
      //     {
      //       pagePath: "pages/asset",
      //       iconPath: "public/images/settings/asset.png",
      //       selectedIconPath: "public/images/settings/asset-active.png",
      //       text: "资产"
      //     },
      //     {
      //       pagePath: "pages/setting",
      //       iconPath: "public/images/settings/user_1.png",
      //       selectedIconPath: "public/images/settings/user_1-active.png",
      //       text: "我的"
      //     }
      //   ]
      // },
      networkTimeout: {
        request: 100000,
        downloadFile: 100000
      },
      permission: {
        "scope.userLocation": {
          "desc": "您的位置信息将用于记录账单的地理位置"
        }
      },
      debug: false

    };
    _this.globalData = {
      user: {}
    };

    _this.use('requestfix');
    _this.use('promisify');

    _this.intercept('request', {
      config: function config(p) {
        return p;
      },
      success: function success(p) {
        return p;
      }
    });
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnZXRVc2VyIiwidXBsb2FkRGF0YSIsInd4UmVxdWVzdCIsIkdldCIsImRhdGEiLCJnbG9iYWxEYXRhIiwidXNlciIsInd4IiwiY2FuSVVzZSIsIldYIiwicmVzIiwidXBkYXRlTWFuYWdlciIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInN1Y2Nlc3MiLCJjb25maXJtIiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsImVycnMiLCJTZXNzaW9uIiwiZ2V0RXJyb3JzIiwibGVuZ3RoIiwiaW5kZXgiLCJlcnIiLCJQb3N0QmFzaWMiLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0Iiwia2V5Iiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnQiLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImRvd25sb2FkRmlsZSIsInBlcm1pc3Npb24iLCJkZWJ1ZyIsInVzZSIsImludGVyY2VwdCIsInAiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5QkFBUyxzQkFBVDs7Ozs7OzsrQkFzSGM7QUFDVixXQUFLQSxPQUFMO0FBQ0E7QUFDQSxXQUFLQyxVQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozt1QkFFcUJDLG9CQUFVQyxHQUFWLENBQWMsT0FBZCxDOzs7QUFBYkMsb0I7O0FBQ04sb0JBQUksT0FBT0EsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQix1QkFBS0MsVUFBTCxDQUFnQkMsSUFBaEIsR0FBdUJGLElBQXZCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0g7Ozs7eUNBQ3FCO0FBQ25C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VixlQUFPQSxDQUFQO0FBQ0Q7QUFOdUIsS0FBMUI7QUFMYTtBQWFkOzs7RUE3TTBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCB7IHNldFN0b3JlLCBnZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCB7IGFzeW5jTGlzdCB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucydcbmltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG5pbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG5zZXRTdG9yZShjb25maWdTdG9yZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAvLyBcInBhZ2VzL2NoYXJ0XCIsXG4gICAgICBcInBhZ2VzL2Fzc2V0XCIsXG4gICAgICAvLyBcInBhZ2VzL3NldHRpbmdcIixcblxuICAgICAgLy8g6K6w5LiA56yUXG4gICAgICBcInBhZ2VzL3N0YXRlbWVudHMvY3JlYXRlXCIsXG4gICAgICBcInBhZ2VzL3N0YXRlbWVudHMvZWRpdFwiLFxuICAgICAgXCJwYWdlcy9zdGF0ZW1lbnRzL2RldGFpbFwiLFxuICAgICAgXCJwYWdlcy9zdGF0ZW1lbnRzL2Nob3NlX2NhdGVnb3J5XCIsXG4gICAgICBcInBhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXRcIixcbiAgICAgIC8vIFwicGFnZXMvc3RhdGVtZW50cy9maWx0ZXJfc3RhdGVtZW50c1wiLFxuXG4gICAgICAvLyDkvZnpop3orr7nva5cbiAgICAgIC8vIFwicGFnZXMvZm9ybXMvYXNzZXRfZm9ybVwiLFxuICAgICAgLy8gXCJwYWdlcy9mb3Jtcy9idWRnZXRfZm9ybVwiLFxuICAgICAgLy8gXCJwYWdlcy9mb3Jtcy9pY29uc19jaG9zZVwiLFxuXG4gICAgICAvLyDpooTnrpdcbiAgICAgIC8vIFwicGFnZXMvYnVkZ2V0cy9idWRnZXRcIixcbiAgICAgIC8vIFwicGFnZXMvYnVkZ2V0cy9jaGlsZF9idWRnZXRcIixcblxuICAgICAgLy8g6K6+572uXG4gICAgICAvLyBcInBhZ2VzL3NldHRpbmdzL2ZlZWRiYWNrXCIsXG4gICAgICAvLyBcInBhZ2VzL3NldHRpbmdzL2hlYWRlclwiLFxuICAgICAgLy8gXCJwYWdlcy9zZXR0aW5ncy9zdXBlcl9jaGFydFwiLFxuICAgICAgLy8gXCJwYWdlcy9zZXR0aW5ncy91c2VyX2luZm9cIixcbiAgICAgIC8vIFwicGFnZXMvc2V0dGluZ3Mvbmlja25hbWVfZWRpdFwiLFxuICAgICAgLy8gXCJwYWdlcy9zZXR0aW5ncy9wcmVwYXJlX2J1eVwiLFxuICAgICAgLy8gXCJwYWdlcy9zZXR0aW5ncy9zdXBlcl9zdGF0ZW1lbnRcIixcbiAgICAgIC8vIFwicGFnZXMvc2V0dGluZ3MvYWJvdXRcIixcbiAgICAgIC8vIFwicGFnZXMvc2V0dGluZ3Mvc2VhcmNoXCIsXG5cbiAgICAgIC8vIOi0puWNleWimVxuICAgICAgXCJwYWdlcy9zdGF0ZW1lbnRzL2ltYWdlc1wiLFxuICAgICAgXG4gICAgICAvLyDnvJbovpHotKbljZXnsbvlnovliIbnsbsv6LWE5Lqn5YiG57G7XG4gICAgICBcInBhZ2VzL2NhdGVnb3JpZXMvbGlzdFwiLFxuICAgICAgXCJwYWdlcy9jYXRlZ29yaWVzL2NoaWxkXCIsXG4gICAgICBcInBhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnlfZm9ybVwiLFxuICAgICAgXCJwYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3J5X3N0YXRlbWVudFwiLFxuICAgICAgXCJwYWdlcy9hc3NldHMvbGlzdFwiLFxuICAgICAgXCJwYWdlcy9hc3NldHMvYXNzZXRfZm9ybVwiLFxuICAgICAgXCJwYWdlcy9hc3NldHMvYXNzZXRfZGV0YWlsXCIsXG4gICAgICBcbiAgICAgIC8vIOa2iOaBr1xuICAgICAgLy8gXCJwYWdlcy9tZXNzYWdlXCIsXG4gICAgICAvLyBcInBhZ2VzL21lc3NhZ2UvZGV0YWlsXCIsXG5cbiAgICAgIC8vIOaciOi0puWNlVxuICAgICAgLy8gXCJwYWdlcy9tb250aHMvaW5kZXhcIixcblxuICAgICAgLy8g5aW95Y+LXG4gICAgICAvLyBcInBhZ2VzL2ZyaWVuZHMvaW5kZXhcIixcbiAgICAgIC8vIFwicGFnZXMvZnJpZW5kcy9zZWFyY2hcIlxuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZmVmZWZcIixcbiAgICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOiBcImJsYWNrXCIsXG4gICAgICBcImJhY2tncm91bmRUZXh0U3R5bGVcIjogXCJsaWdodFwiLFxuICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6IFwi5rSB6LSmXCIsXG4gICAgICAvLyBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCIsXG4gICAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiBmYWxzZVxuICAgIH0sXG4gICAgLy8gdGFiQmFyOiB7XG4gICAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIC8vICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgIC8vICAgc2VsZWN0ZWRDb2xvcjogXCIjMjE5NkYzXCIsXG4gICAgLy8gICBsaXN0OiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleFwiLFxuICAgIC8vICAgICAgIGljb25QYXRoOiBcInB1YmxpYy9pbWFnZXMvc2V0dGluZ3Mvc3RhdGVtZW50LnBuZ1wiLFxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwicHVibGljL2ltYWdlcy9zZXR0aW5ncy9zdGF0ZW1lbnQtYWN0aXZlLnBuZ1wiLFxuICAgIC8vICAgICAgIHRleHQ6IFwi6aaW6aG1XCJcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NoYXJ0XCIsXG4gICAgLy8gICAgICAgaWNvblBhdGg6IFwicHVibGljL2ltYWdlcy9zZXR0aW5ncy9zdGF0aXN0aWMucG5nXCIsXG4gICAgLy8gICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJwdWJsaWMvaW1hZ2VzL3NldHRpbmdzL3N0YXRpc3RpYy1hY3RpdmUucG5nXCIsXG4gICAgLy8gICAgICAgdGV4dDogXCLnu5/orqFcIlxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgcGFnZVBhdGg6IFwicGFnZXMvYXNzZXRcIixcbiAgICAvLyAgICAgICBpY29uUGF0aDogXCJwdWJsaWMvaW1hZ2VzL3NldHRpbmdzL2Fzc2V0LnBuZ1wiLFxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwicHVibGljL2ltYWdlcy9zZXR0aW5ncy9hc3NldC1hY3RpdmUucG5nXCIsXG4gICAgLy8gICAgICAgdGV4dDogXCLotYTkuqdcIlxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgcGFnZVBhdGg6IFwicGFnZXMvc2V0dGluZ1wiLFxuICAgIC8vICAgICAgIGljb25QYXRoOiBcInB1YmxpYy9pbWFnZXMvc2V0dGluZ3MvdXNlcl8xLnBuZ1wiLFxuICAgIC8vICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwicHVibGljL2ltYWdlcy9zZXR0aW5ncy91c2VyXzEtYWN0aXZlLnBuZ1wiLFxuICAgIC8vICAgICAgIHRleHQ6IFwi5oiR55qEXCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXVxuICAgIC8vIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIHJlcXVlc3Q6IDEwMDAwMCxcbiAgICAgIGRvd25sb2FkRmlsZTogMTAwMDAwXG4gICAgfSxcbiAgICBwZXJtaXNzaW9uOiB7XG4gICAgICBcInNjb3BlLnVzZXJMb2NhdGlvblwiOiB7XG4gICAgICAgIFwiZGVzY1wiOiBcIuaCqOeahOS9jee9ruS/oeaBr+WwhueUqOS6juiusOW9lei0puWNleeahOWcsOeQhuS9jee9rlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgIFxuICB9XG4gIFxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXI6IHt9XG4gIH1cblxuICBvbkxhdW5jaCAoKSB7XG4gICAgdGhpcy5nZXRVc2VyKClcbiAgICAvLyB0aGlzLmNoZWNrVmVyc2lvblVwZGF0ZSgpXG4gICAgdGhpcy51cGxvYWREYXRhKClcbiAgfVxuXG4gIC8vIOmihOWKoOi9veeUqOaIt1xuICBhc3luYyBnZXRVc2VyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCd1c2VycycpXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXIgPSBkYXRhXG4gICAgfVxuICB9XG5cbiAgLy8g5qOA5p+l5pu05pawXG4gIGNoZWNrVmVyc2lvblVwZGF0ZSgpIHtcbiAgICBpZiAoIXd4LmNhbklVc2UoJ2dldFVwZGF0ZU1hbmFnZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgd3hSZXF1ZXN0LldYKCdjaGVja191cGRhdGUnLCB7fSwgKHJlcykgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhXG4gICAgICBpZiAoZGF0YSA9PT0gMCkgcmV0dXJuIGZhbHNlXG4gICAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpXG4gICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzLmhhc1VwZGF0ZSkge1xuICAgICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzor7fph43lkK/lupTnlKgnLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXG4gICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOS4i+i9veWksei0pVxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflt7Lnu4/mnInmlrDniYjmnKzkuoblk59+JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOS4i+i9veWksei0pe+8jOivt+WFs+mXreW+ruS/oeWQjumHjeaWsOaJk+W8gOWNs+WPrydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdXBsb2FkRGF0YSgpIHtcbiAgICAvLyDorrDlvZXor7fmsYLplJnor6/nmoTml6Xlv5dcbiAgICBsZXQgZXJycyA9IFNlc3Npb24uZ2V0RXJyb3JzKClcbiAgICBpZiAoISFlcnJzICYmIGVycnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVycnMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBjb25zdCBlcnIgPSBlcnJzW2luZGV4XVxuICAgICAgICB3eFJlcXVlc3QuUG9zdEJhc2ljKGBlcnJvcl91cGxvYWRgLCB7ZXJyOiBlcnJ9LCB7fSwgKCkgPT4ge1xuICAgICAgICAgIGVycnMuc3BsaWNlKGVycnMuaW5kZXhPZihlcnIpLCAxKVxuICAgICAgICAgIFNlc3Npb24uc2V0KFNlc3Npb24ua2V5WydlcnJvcktleSddLCBlcnJzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQjOatpeacrOWcsOaVsOaNruWIsOi/nOeoi+acjeWKoeerr1xuICAgIGxldCBzdGF0ZW1lbnRzID0gU2Vzc2lvbi5nZXRTdGF0ZW1lbnRzKClcbiAgICBpZiAoISFzdGF0ZW1lbnRzICYmIHN0YXRlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IHN0YXRlbWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRzW2luZGV4XVxuICAgICAgICB3eFJlcXVlc3QuUG9zdEJhc2ljKGBzdGF0ZW1lbnRzYCwgc3RhdGVtZW50LCB7fSwgKCkgPT4ge1xuICAgICAgICAgIHN0YXRlbWVudHMuc3BsaWNlKHN0YXRlbWVudHMuaW5kZXhPZihzdGF0ZW1lbnQpLCAxKVxuICAgICAgICAgIFNlc3Npb24uc2V0KFNlc3Npb24ua2V5Wydsb2NhbFN0YXRlbWVudEtleSddLCBzdGF0ZW1lbnRzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIFxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgY29uZmlnIChwKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3MgKHApIHtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==