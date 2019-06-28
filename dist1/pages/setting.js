'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _session = require('./../utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setting = function (_wepy$page) {
  _inherits(Setting, _wepy$page);

  function Setting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Setting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Setting.__proto__ || Object.getPrototypeOf(Setting)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的',
      "usingComponents": {
        "i-cell-group": "../public/iview/cell-group/index",
        "i-cell": "../public/iview/cell/index",
        "i-load-more": "../public/iview/load-more/index",
        "i-grid": "../public/iview/grid/index",
        "i-grid-item": "../public/iview/grid-item/index",
        "i-grid-icon": "../public/iview/grid-icon/index",
        "i-grid-label": "../public/iview/grid-label/index"
      }
    }, _this.data = {
      user: {
        name: '访客',
        bonus_points: 0,
        avatar_url: '../public/images/no_login_avatar.png',
        already_login: true
      },
      version: ''
    }, _this.computed = {
      sayHello: function sayHello() {
        var now = new Date();
        var hour = now.getHours();
        if (hour < 6) {
          return '凌晨好';
        } else if (hour < 9) {
          return '早上好';
        } else if (hour < 12) {
          return '上午好';
        } else if (hour < 14) {
          return '中午好';
        } else if (hour < 17) {
          return '下午好';
        } else if (hour < 24) {
          return '晚上好';
        } else {
          return '你好';
        }
      }
    }, _this.methods = {
      redirect: function redirect(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      },
      cleanSession: function cleanSession() {
        wx.clearStorage();
        _tip2.default.toast('清理成功');
      },
      getUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var userInfo;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(e.detail.errMsg != 'getUserInfo:ok')) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return', false);

                case 2:
                  userInfo = e.detail.userInfo;
                  _context.next = 5;
                  return _wxRequest2.default.Put('users/update_user', { user: userInfo, already_login: true });

                case 5:
                  this.getCurrentUser();
                  this.$apply();

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getUserInfo(_x) {
          return _ref2.apply(this, arguments);
        }

        return getUserInfo;
      }(),
      developing: function developing() {
        wx.showToast({
          title: '开发中，敬请期待',
          icon: 'none'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Setting, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.showShareMenu({
        withShareTicket: true
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getCurrentUser();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(ops) {
      return {
        title: '推荐你使用洁账',
        path: '/pages/index',
        imageUrl: 'https://xiaoyounger.com/covers/default-11.jpeg',
        success: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _tip2.default.toast('感谢支持');
                    _context2.next = 3;
                    return _wxRequest2.default.Post('settings/recommend', { ticket: res['shareTickets'][0] });

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function success(_x2) {
            return _ref3.apply(this, arguments);
          }

          return success;
        }()
      };
    }
  }, {
    key: 'getCurrentUser',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loadByCache();
                _context3.next = 3;
                return _wxRequest2.default.Get('settings');

              case 3:
                data = _context3.sent;

                _session2.default.set('user_load_cache', data);
                if (data.user) {
                  this.user = data.user;
                }
                this.version = data.version;
                this.$apply();

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCurrentUser() {
        return _ref4.apply(this, arguments);
      }

      return getCurrentUser;
    }()
  }, {
    key: 'loadByCache',
    value: function loadByCache() {
      var cacheData = _session2.default.get('user_load_cache');
      if (cacheData) {
        this.user = cacheData.user;
        this.version = cacheData.version;
        this.$apply();
      }
    }
  }]);

  return Setting;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Setting , 'pages/setting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuanMiXSwibmFtZXMiOlsiU2V0dGluZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlciIsIm5hbWUiLCJib251c19wb2ludHMiLCJhdmF0YXJfdXJsIiwiYWxyZWFkeV9sb2dpbiIsInZlcnNpb24iLCJjb21wdXRlZCIsInNheUhlbGxvIiwibm93IiwiRGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1ldGhvZHMiLCJyZWRpcmVjdCIsInVybCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwiY2xlYW5TZXNzaW9uIiwid3giLCJjbGVhclN0b3JhZ2UiLCJ0aXAiLCJ0b2FzdCIsImdldFVzZXJJbmZvIiwiZSIsImRldGFpbCIsImVyck1zZyIsInVzZXJJbmZvIiwid3hSZXF1ZXN0IiwiUHV0IiwiZ2V0Q3VycmVudFVzZXIiLCIkYXBwbHkiLCJkZXZlbG9waW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm9wcyIsInBhdGgiLCJpbWFnZVVybCIsInN1Y2Nlc3MiLCJyZXMiLCJQb3N0IiwidGlja2V0IiwibG9hZEJ5Q2FjaGUiLCJHZXQiLCJTZXNzaW9uIiwic2V0IiwiY2FjaGVEYXRhIiwiZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUCx5QkFBbUI7QUFDakIsd0JBQWdCLGtDQURDO0FBRWpCLGtCQUFVLDRCQUZPO0FBR2pCLHVCQUFlLGlDQUhFO0FBSWpCLGtCQUFVLDRCQUpPO0FBS2pCLHVCQUFlLGlDQUxFO0FBTWpCLHVCQUFlLGlDQU5FO0FBT2pCLHdCQUFnQjtBQVBDO0FBRlosSyxRQWFUQyxJLEdBQU87QUFDTEMsWUFBTTtBQUNKQyxjQUFNLElB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QkFBS0ssT0FBTCxHQUFlTixLQUFLTSxPQUFwQjtBQUNBLHFCQUFLeUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdZO0FBQ1osVUFBTWtCLFlBQVlGLGtCQUFRRyxHQUFSLENBQVksaUJBQVosQ0FBbEI7QUFDQSxVQUFJRCxTQUFKLEVBQWU7QUFDYixhQUFLaEQsSUFBTCxHQUFZZ0QsVUFBVWhELElBQXRCO0FBQ0EsYUFBS0ssT0FBTCxHQUFlMkMsVUFBVTNDLE9BQXpCO0FBQ0EsYUFBS3lCLE1BQUw7QUFDRDtBQUNGOzs7O0VBL0drQ2YsZUFBS21DLEk7O2tCQUFyQnRELE8iLCJmaWxlIjoic2V0dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBpbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS1jZWxsLWdyb3VwXCI6IFwiLi4vcHVibGljL2l2aWV3L2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgICAgXCJpLWNlbGxcIjogXCIuLi9wdWJsaWMvaXZpZXcvY2VsbC9pbmRleFwiLFxuICAgICAgICBcImktbG9hZC1tb3JlXCI6IFwiLi4vcHVibGljL2l2aWV3L2xvYWQtbW9yZS9pbmRleFwiLFxuICAgICAgICBcImktZ3JpZFwiOiBcIi4uL3B1YmxpYy9pdmlldy9ncmlkL2luZGV4XCIsXG4gICAgICAgIFwiaS1ncmlkLWl0ZW1cIjogXCIuLi9wdWJsaWMvaXZpZXcvZ3JpZC1pdGVtL2luZGV4XCIsXG4gICAgICAgIFwiaS1ncmlkLWljb25cIjogXCIuLi9wdWJsaWMvaXZpZXcvZ3JpZC1pY29uL2luZGV4XCIsXG4gICAgICAgIFwiaS1ncmlkLWxhYmVsXCI6IFwiLi4vcHVibGljL2l2aWV3L2dyaWQtbGFiZWwvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkYXRhID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICBuYW1lOiAn6K6/5a6iJyxcbiAgICAgICAgYm9udXNfcG9pbnRzOiAwLFxuICAgICAgICBhdmF0YXJfdXJsOiAnLi4vcHVibGljL2ltYWdlcy9ub19sb2dpbl9hdmF0YXIucG5nJyxcbiAgICAgICAgYWxyZWFkeV9sb2dpbjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHZlcnNpb246ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBzYXlIZWxsbyAoKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICAgICAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpXG4gICAgICAgIGlmKGhvdXIgPCA2KXtcbiAgICAgICAgICByZXR1cm4gJ+WHjOaZqOWlvSdcbiAgICAgICAgfSBlbHNlIGlmIChob3VyIDwgOSkge1xuICAgICAgICAgIHJldHVybiAn5pep5LiK5aW9J1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgIHJldHVybiAn5LiK5Y2I5aW9J1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNCkge1xuICAgICAgICAgIHJldHVybiAn5Lit5Y2I5aW9J1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgICAgIHJldHVybiAn5LiL5Y2I5aW9J1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAyNCkge1xuICAgICAgICAgIHJldHVybiAn5pma5LiK5aW9J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAn5L2g5aW9J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICAgIH0pOyBcbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuXHRcdFx0dGhpcy5nZXRDdXJyZW50VXNlcigpXG4gICAgfVxuICAgIFxuICAgIG1ldGhvZHMgPSB7XG4gICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbGVhblNlc3Npb24gKCkge1xuICAgICAgICB3eC5jbGVhclN0b3JhZ2UoKVxuICAgICAgICB0aXAudG9hc3QoJ+a4heeQhuaIkOWKnycpXG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0VXNlckluZm8gKGUpIHtcbiAgICAgICAgaWYoZS5kZXRhaWwuZXJyTXNnICE9ICdnZXRVc2VySW5mbzpvaycpIHJldHVybiBmYWxzZVxuICAgICAgICBjb25zdCB1c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgICAgIGF3YWl0IHd4UmVxdWVzdC5QdXQoJ3VzZXJzL3VwZGF0ZV91c2VyJywgeyB1c2VyOiB1c2VySW5mbywgYWxyZWFkeV9sb2dpbjogdHJ1ZSB9KVxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIGRldmVsb3BpbmcgKCkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5byA5Y+R5Lit77yM5pWs6K+35pyf5b6FJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UgKG9wcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfmjqjojZDkvaDkvb/nlKjmtIHotKYnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcbiAgICAgICAgaW1hZ2VVcmw6ICdodHRwczovL3hpYW95b3VuZ2VyLmNvbS9jb3ZlcnMvZGVmYXVsdC0xMS5qcGVnJyxcbiAgICAgICAgc3VjY2VzczogYXN5bmMgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHRpcC50b2FzdCgn5oSf6LCi5pSv5oyBJylcbiAgICAgICAgICBhd2FpdCB3eFJlcXVlc3QuUG9zdCgnc2V0dGluZ3MvcmVjb21tZW5kJywgeyB0aWNrZXQ6IHJlc1snc2hhcmVUaWNrZXRzJ11bMF0gfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRVc2VyICgpIHtcbiAgICAgIHRoaXMubG9hZEJ5Q2FjaGUoKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3NldHRpbmdzJylcbiAgICAgIFNlc3Npb24uc2V0KCd1c2VyX2xvYWRfY2FjaGUnLCBkYXRhKVxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXJcbiAgICAgIH1cbiAgICAgIHRoaXMudmVyc2lvbiA9IGRhdGEudmVyc2lvblxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGxvYWRCeUNhY2hlKCkge1xuICAgICAgY29uc3QgY2FjaGVEYXRhID0gU2Vzc2lvbi5nZXQoJ3VzZXJfbG9hZF9jYWNoZScpXG4gICAgICBpZiAoY2FjaGVEYXRhKSB7XG4gICAgICAgIHRoaXMudXNlciA9IGNhY2hlRGF0YS51c2VyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IGNhY2hlRGF0YS52ZXJzaW9uXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==