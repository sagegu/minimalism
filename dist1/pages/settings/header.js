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

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

var _host = require('./../../utils/host.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingHeader = function (_wepy$page) {
  _inherits(SettingHeader, _wepy$page);

  function SettingHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SettingHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SettingHeader.__proto__ || Object.getPrototypeOf(SettingHeader)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页看板设置',
      "usingComponents": {
        "i-panel": "../../public/iview/panel/index",
        "i-cell": "../../public/iview/cell/index",
        "i-action-sheet": "../../public/iview/action-sheet/index"
      }
    }, _this.data = {
      dataVisible: false,
      currentPosition: 1,
      actionsList: [],
      user: {},
      avatars: []
    }, _this.computed = {
      actions: function actions() {
        return this.actionsList[this.currentPosition];
      }
    }, _this.methods = {
      handleCancel: function handleCancel() {
        this.dataVisible = false;
      },
      handleClickItem: function handleClickItem(e) {
        var action = this.actionsList[this.currentPosition][e.detail.index];
        this.updatePosition(action.value, this.currentPosition);
        this.dataVisible = false;
      },
      showActionSheet: function showActionSheet(position) {
        this.currentPosition = position;
        this.dataVisible = true;
      },
      setAvatar: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(val) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wxRequest2.default.Put('users/update_user', {
                    user: { bg_avatar_id: val }
                  });

                case 2:
                  this.getUser();

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function setAvatar(_x) {
          return _ref2.apply(this, arguments);
        }

        return setAvatar;
      }(),
      deleteItem: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wxRequest2.default.Destroy('settings/cover_destroy', { id: id });

                case 2:
                  this.getAvatars();

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function deleteItem(_x2) {
          return _ref3.apply(this, arguments);
        }

        return deleteItem;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SettingHeader, [{
    key: 'onShow',
    value: function onShow() {
      this.getUser();
      this.getAvatars();
      this.getPositions();
    }
  }, {
    key: 'getAvatars',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('settings/covers');

              case 2:
                data = _context3.sent;

                this.avatars = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAvatars() {
        return _ref4.apply(this, arguments);
      }

      return getAvatars;
    }()
  }, {
    key: 'getUser',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
        return _ref5.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'getPositions',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Get('settings/positions');

              case 2:
                data = _context5.sent;

                this.actionsList = data.data;

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPositions() {
        return _ref6.apply(this, arguments);
      }

      return getPositions;
    }()
  }, {
    key: 'updatePosition',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(value, position) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wxRequest2.default.Put('users/update_position', {
                  value: value,
                  position: Number.parseInt(position) + 1
                });

              case 2:
                this.getUser();

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updatePosition(_x3, _x4) {
        return _ref7.apply(this, arguments);
      }

      return updatePosition;
    }()
  }, {
    key: 'uploadUserAvatar',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var choseImages;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _wepy2.default.chooseImage({
                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 2:
                choseImages = _context7.sent;

                if (!(choseImages.tempFiles.length == 0)) {
                  _context7.next = 6;
                  break;
                }

                wx.showToast({
                  title: '上传失败， 请稍后再试',
                  icon: 'none',
                  mask: false,
                  duration: 1000
                });
                return _context7.abrupt('return', false);

              case 6:
                _context7.next = 8;
                return _wxRequest2.default.Upload(choseImages.tempFiles[0].path, {
                  type: 'index_header_bg'
                });

              case 8:
                this.getAvatars();

              case 9:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function uploadUserAvatar() {
        return _ref8.apply(this, arguments);
      }

      return uploadUserAvatar;
    }()
  }]);

  return SettingHeader;
}(_wepy2.default.page);

exports.default = SettingHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJTZXR0aW5nSGVhZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkYXRhVmlzaWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImFjdGlvbnNMaXN0IiwidXNlciIsImF2YXRhcnMiLCJjb21wdXRlZCIsImFjdGlvbnMiLCJtZXRob2RzIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQ2xpY2tJdGVtIiwiZSIsImFjdGlvbiIsImRldGFpbCIsImluZGV4IiwidXBkYXRlUG9zaXRpb24iLCJ2YWx1ZSIsInNob3dBY3Rpb25TaGVldCIsInBvc2l0aW9uIiwic2V0QXZhdGFyIiwidmFsIiwid3hSZXF1ZXN0IiwiUHV0IiwiYmdfYXZhdGFyX2lkIiwiZ2V0VXNlciIsImRlbGV0ZUl0ZW0iLCJpZCIsIkRlc3Ryb3kiLCJnZXRBdmF0YXJzIiwiZ2V0UG9zaXRpb25zIiwiR2V0IiwiJGFwcGx5IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImNob3NlSW1hZ2VzIiwidGVtcEZpbGVzIiwibGVuZ3RoIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJtYXNrIiwiZHVyYXRpb24iLCJVcGxvYWQiLCJwYXRoIiwidHlwZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFFBRGpCO0FBRVAseUJBQW1CO0FBQ2pCLG1CQUFXLGdDQURNO0FBRWpCLGtCQUFVLCtCQUZPO0FBR2pCLDBCQUFrQjtBQUhEO0FBRlosSyxRQVNUQyxJLEdBQU87QUFDTEMsbUJBQWEsS0FEUjtBQUVMQyx1QkFBaUIsQ0FGWjtBQUdMQyxtQkFBYSxFQUhSO0FB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QUlYQyw0QkFBVTtBQUpDLGlCQUFiO2tEQU1PLEs7Ozs7dUJBR0gxQixvQkFBVTJCLE1BQVYsQ0FBaUJULFlBQVlDLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUJTLElBQTFDLEVBQWdEO0FBQ3BEQyx3QkFBTTtBQUQ4QyxpQkFBaEQsQzs7O0FBR04scUJBQUt0QixVQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkd1Q00sZUFBS2lCLEk7O2tCQUEzQnRELGEiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIGltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcbiAgaW1wb3J0IHsgaG9zdCB9IGZyb20gJ0AvdXRpbHMvaG9zdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nSGVhZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG155yL5p2/6K6+572uJyxcbiAgICAgIFwidXNpbmdDb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJpLXBhbmVsXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L3BhbmVsL2luZGV4XCIsXG4gICAgICAgIFwiaS1jZWxsXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L2NlbGwvaW5kZXhcIixcbiAgICAgICAgXCJpLWFjdGlvbi1zaGVldFwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy9hY3Rpb24tc2hlZXQvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBkYXRhVmlzaWJsZTogZmFsc2UsXG4gICAgICBjdXJyZW50UG9zaXRpb246IDEsXG4gICAgICBhY3Rpb25zTGlzdDogW10sXG4gICAgICB1c2VyOiB7fSxcbiAgICAgIGF2YXRhcnM6IFtdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBhY3Rpb25zICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uc0xpc3RbdGhpcy5jdXJyZW50UG9zaXRpb25dXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuZGF0YVZpc2libGUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUNsaWNrSXRlbSAoZSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbnNMaXN0W3RoaXMuY3VycmVudFBvc2l0aW9uXVtlLmRldGFpbC5pbmRleF1cbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihhY3Rpb24udmFsdWUsIHRoaXMuY3VycmVudFBvc2l0aW9uKVxuICAgICAgICB0aGlzLmRhdGFWaXNpYmxlID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaG93QWN0aW9uU2hlZXQgKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgdGhpcy5kYXRhVmlzaWJsZSA9IHRydWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBzZXRBdmF0YXIgKHZhbCkge1xuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuUHV0KCd1c2Vycy91cGRhdGVfdXNlcicsIHtcbiAgICAgICAgICB1c2VyOiB7IGJnX2F2YXRhcl9pZDogdmFsIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5nZXRVc2VyKClcbiAgICAgIH0sXG4gICAgICBhc3luYyBkZWxldGVJdGVtKGlkKSB7XG4gICAgICAgIGF3YWl0IHd4UmVxdWVzdC5EZXN0cm95KCdzZXR0aW5ncy9jb3Zlcl9kZXN0cm95Jywge2lkOiBpZH0pXG4gICAgICAgIHRoaXMuZ2V0QXZhdGFycygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuZ2V0VXNlcigpXG4gICAgICB0aGlzLmdldEF2YXRhcnMoKVxuICAgICAgdGhpcy5nZXRQb3NpdGlvbnMoKVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBnZXRBdmF0YXJzICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzZXR0aW5ncy9jb3ZlcnMnKVxuICAgICAgdGhpcy5hdmF0YXJzID0gZGF0YS5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlciAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgndXNlcnMnKVxuICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBvc2l0aW9ucyAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc2V0dGluZ3MvcG9zaXRpb25zJylcbiAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSBkYXRhLmRhdGFcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVQb3NpdGlvbiAodmFsdWUsIHBvc2l0aW9uKSB7XG4gICAgICBhd2FpdCB3eFJlcXVlc3QuUHV0KCd1c2Vycy91cGRhdGVfcG9zaXRpb24nLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcG9zaXRpb246IE51bWJlci5wYXJzZUludChwb3NpdGlvbikgKyAxXG4gICAgICB9KVxuICAgICAgdGhpcy5nZXRVc2VyKClcbiAgICB9XG5cbiAgICBhc3luYyB1cGxvYWRVc2VyQXZhdGFyICgpIHtcbiAgICAgIGNvbnN0IGNob3NlSW1hZ2VzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ11cbiAgICAgIH0pXG4gICAgICBpZiAoY2hvc2VJbWFnZXMudGVtcEZpbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfkuIrkvKDlpLHotKXvvIwg6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgbWFzazogZmFsc2UsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHd4UmVxdWVzdC5VcGxvYWQoY2hvc2VJbWFnZXMudGVtcEZpbGVzWzBdLnBhdGgsIHtcbiAgICAgICAgdHlwZTogJ2luZGV4X2hlYWRlcl9iZydcbiAgICAgIH0pXG4gICAgICB0aGlzLmdldEF2YXRhcnMoKVxuICAgIH1cbiAgICBcbiAgfVxuIl19