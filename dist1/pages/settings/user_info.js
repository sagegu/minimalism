'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_wepy$page) {
  _inherits(UserInfo, _wepy$page);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人信息',
      "usingComponents": {
        "i-cell-group": "../../public/iview/cell-group/index",
        "i-cell": "../../public/iview/cell/index",
        "i-avatar": "../../public/iview/avatar/index",
        "i-load-more": "../../public/iview/load-more/index",
        "i-switch": "../../public/iview/switch/index"
      }
    }, _this.data = {
      user: {}
    }, _this.methods = {
      uploadUserAvatar: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var choseImages;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 1,
                    sizeType: ['compressed'],
                    sourceType: ['album', 'camera']
                  });

                case 2:
                  choseImages = _context.sent;

                  if (!(choseImages.tempFiles.length == 0)) {
                    _context.next = 6;
                    break;
                  }

                  wx.showToast({
                    title: '上传失败， 请稍后再试',
                    icon: 'none',
                    mask: false,
                    duration: 1000
                  });
                  return _context.abrupt('return', false);

                case 6:
                  _context.next = 8;
                  return _wxRequest2.default.Upload(choseImages.tempFiles[0].path, {
                    type: 'user_avatar'
                  });

                case 8:
                  this.getUser();

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function uploadUserAvatar() {
          return _ref2.apply(this, arguments);
        }

        return uploadUserAvatar;
      }(),
      editNickname: function editNickname() {
        _wepy2.default.navigateTo({
          url: '/pages/settings/nickname_edit'
        });
      },
      changeRemind: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
          var detail = _ref3.detail;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.user.remind = detail.value;
                  _context2.next = 3;
                  return _wxRequest2.default.Put('users/update_remind', { remind: detail.value ? 1 : 0 });

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function changeRemind(_x) {
          return _ref4.apply(this, arguments);
        }

        return changeRemind;
      }(),
      cancelLoginStatus: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _wxRequest2.default.Put('users/cancel_login_status');

                case 2:
                  wx.navigateBack({
                    delta: 1
                  });

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function cancelLoginStatus() {
          return _ref5.apply(this, arguments);
        }

        return cancelLoginStatus;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserInfo, [{
    key: 'onShow',
    value: function onShow() {
      this.getUser();
    }
  }, {
    key: 'getUser',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('users');

              case 2:
                data = _context4.sent;

                this.user = data;
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUser() {
        return _ref6.apply(this, arguments);
      }

      return getUser;
    }()
  }]);

  return UserInfo;
}(_wepy2.default.page);

exports.default = UserInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJfaW5mby5qcyJdLCJuYW1lcyI6WyJVc2VySW5mbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlciIsIm1ldGhvZHMiLCJ1cGxvYWRVc2VyQXZhdGFyIiwid2VweSIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJjaG9zZUltYWdlcyIsInRlbXBGaWxlcyIsImxlbmd0aCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImR1cmF0aW9uIiwid3hSZXF1ZXN0IiwiVXBsb2FkIiwicGF0aCIsInR5cGUiLCJnZXRVc2VyIiwiZWRpdE5pY2tuYW1lIiwibmF2aWdhdGVUbyIsInVybCIsImNoYW5nZVJlbWluZCIsImRldGFpbCIsInJlbWluZCIsInZhbHVlIiwiUHV0IiwiY2FuY2VsTG9naW5TdGF0dXMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIkdldCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQLHlCQUFtQjtBQUNqQix3QkFBZ0IscUNBREM7QUFFakIsa0JBQVUsK0JBRk87QUFHakIsb0JBQVksaUNBSEs7QUFJakIsdUJBQWUsb0NBSkU7QUFLakIsb0JBQVk7QUFMSztBQUZaLEssUUFXVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBSVBDLE8sR0FBVTtBQUNGQyxzQkFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRW9CQyxlQUFLQyxXQUFMLENBQWlCO0FBQ3pDQywyQkFBTyxDQURrQztBQUV6Q0MsOEJBQVUsQ0FBQyxZQUFELENBRitCO0FBR3pDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBSDZCLG1CQUFqQixDQUZwQjs7QUFBQTtBQUVBQyw2QkFGQTs7QUFBQSx3QkFPRkEsWUFBWUMsU0FBWixDQUFzQkMsTUFBdEIsSUFBZ0MsQ0FQOUI7QUFBQTtBQUFBO0FBQUE7O0FBUUpDLHFCQUFHQyxTQUFILENBQWE7QUFDWEMsMkJBQU8sYUFESTtBQUVYQywwQkFBTSxNQUZLO0FBR1hDLDBCQUFNLEtBSEs7QUFJWEMsOEJBQVU7QUFKQyxtQkFBYjtBQVJJLG1EQWNHLEtBZEg7O0FBQUE7QUFBQTtBQUFBLHlCQWdCQUMsb0JBQVVDLE1BQVYsQ0FBaUJWLFlBQVlDLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUJVLElBQTFDLEVBQWdEO0FBQ3BEQywwQkFBTTtBQUQ4QyxtQkFBaEQsQ0FoQkE7O0FBQUE7QUFtQk4sdUJBQUtDLE9BQUw7O0FBbkJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBcUJSQyxrQkFyQlEsMEJBcUJRO0FBQ2RuQix1QkFBS29CLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F6Qk87QUEwQkZDLGtCQTFCRTtBQUFBO0FBQUEsY0EwQmFDLE1BMUJiLFNBMEJhQSxNQTFCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJOLHVCQUFLMUIsSUFBTCxDQUFVMkIsTUFBVixHQUFtQkQsT0FBT0UsS0FBMUI7QUEzQk07QUFBQSx5QkE0QkFYLG9CQUFVWSxHQUFWLENBQWMscUJBQWQsRUFBcUMsRUFBRUYsUUFBUUQsT0FBT0UsS0FBUCxHQUFlLENBQWYsR0FBbUIsQ0FBN0IsRUFBckMsQ0E1QkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE4QkZFLHVCQTlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQStCQWIsb0JBQVVZLEdBQVYsQ0FBYywyQkFBZCxDQS9CQTs7QUFBQTtBQWdDTmxCLHFCQUFHb0IsWUFBSCxDQUFnQjtBQUNkQywyQkFBTztBQURPLG1CQUFoQjs7QUFoQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7Ozs2QkFzQ0E7QUFDUixXQUFLWCxPQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUdvQkosb0JBQVVnQixHQUFWLENBQWMsT0FBZCxDOzs7QUFBYmxDLG9COztBQUNOLHFCQUFLQyxJQUFMLEdBQVlELElBQVo7QUFDQSxxQkFBS21DLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RGtDL0IsZUFBS2dDLEk7O2tCQUF0QnZDLFEiLCJmaWxlIjoidXNlcl9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkv6Hmga8nLFxuICAgICAgXCJ1c2luZ0NvbXBvbmVudHNcIjoge1xuICAgICAgICBcImktY2VsbC1ncm91cFwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICAgIFwiaS1jZWxsXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L2NlbGwvaW5kZXhcIixcbiAgICAgICAgXCJpLWF2YXRhclwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy9hdmF0YXIvaW5kZXhcIixcbiAgICAgICAgXCJpLWxvYWQtbW9yZVwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy9sb2FkLW1vcmUvaW5kZXhcIixcbiAgICAgICAgXCJpLXN3aXRjaFwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy9zd2l0Y2gvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VyOiB7fVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyB1cGxvYWRVc2VyQXZhdGFyICgpIHtcbiAgICAgICAgY29uc3QgY2hvc2VJbWFnZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXVxuICAgICAgICB9KVxuICAgICAgICBpZiAoY2hvc2VJbWFnZXMudGVtcEZpbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5aSx6LSl77yMIOivt+eojeWQjuWGjeivlScsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBtYXNrOiBmYWxzZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuVXBsb2FkKGNob3NlSW1hZ2VzLnRlbXBGaWxlc1swXS5wYXRoLCB7XG4gICAgICAgICAgdHlwZTogJ3VzZXJfYXZhdGFyJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmdldFVzZXIoKVxuICAgICAgfSxcbiAgICAgIGVkaXROaWNrbmFtZSAoKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NldHRpbmdzL25pY2tuYW1lX2VkaXQnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgY2hhbmdlUmVtaW5kICh7ZGV0YWlsfSkge1xuICAgICAgICB0aGlzLnVzZXIucmVtaW5kID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGF3YWl0IHd4UmVxdWVzdC5QdXQoJ3VzZXJzL3VwZGF0ZV9yZW1pbmQnLCB7IHJlbWluZDogZGV0YWlsLnZhbHVlID8gMSA6IDAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBjYW5jZWxMb2dpblN0YXR1cygpIHtcbiAgICAgICAgYXdhaXQgd3hSZXF1ZXN0LlB1dCgndXNlcnMvY2FuY2VsX2xvZ2luX3N0YXR1cycpXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXRVc2VyKClcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZ2V0VXNlciAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgndXNlcnMnKVxuICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19