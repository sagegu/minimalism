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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NicknameEdit = function (_wepy$page) {
  _inherits(NicknameEdit, _wepy$page);

  function NicknameEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NicknameEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NicknameEdit.__proto__ || Object.getPrototypeOf(NicknameEdit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '昵称设置',
      "usingComponents": {
        "i-cell": "../../public/iview/cell/index",
        "i-button": "../../public/iview/button/index"
      }
    }, _this.data = {
      nickname: ''
    }, _this.methods = {
      formSubmit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var nickname;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  nickname = e.detail.value.nickname;

                  if (!(nickname === '')) {
                    _context.next = 4;
                    break;
                  }

                  _tip2.default.error('随便输点东西也行呀~');
                  return _context.abrupt('return', false);

                case 4:
                  _context.next = 6;
                  return _wxRequest2.default.Put('users/update_user', { user: { nickName: nickname } });

                case 6:
                  _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function formSubmit(_x) {
          return _ref2.apply(this, arguments);
        }

        return formSubmit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NicknameEdit, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getUser();
    }
  }, {
    key: 'getUser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('users');

              case 2:
                data = _context2.sent;

                this.nickname = data.nickname;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUser() {
        return _ref3.apply(this, arguments);
      }

      return getUser;
    }()
  }]);

  return NicknameEdit;
}(_wepy2.default.page);

exports.default = NicknameEdit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pY2tuYW1lX2VkaXQuanMiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuaWNrbmFtZSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImRldGFpbCIsInZhbHVlIiwidGlwIiwiZXJyb3IiLCJ3eFJlcXVlc3QiLCJQdXQiLCJ1c2VyIiwibmlja05hbWUiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJnZXRVc2VyIiwiR2V0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVAseUJBQW1CO0FBQ2pCLGtCQUFVLCtCQURPO0FBRWpCLG9CQUFZO0FBRks7QUFGWixLLFFBUVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFRUEMsTyxHQUFVO0FBQ0ZDLGdCQURFO0FBQUEsNkZBQ1VDLENBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFILDBCQUZBLEdBRVdHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlTCxRQUYxQjs7QUFBQSx3QkFHRkEsYUFBYSxFQUhYO0FBQUE7QUFBQTtBQUFBOztBQUlKTSxnQ0FBSUMsS0FBSixDQUFVLFlBQVY7QUFKSSxtREFLRyxLQUxIOztBQUFBO0FBQUE7QUFBQSx5QkFPQUMsb0JBQVVDLEdBQVYsQ0FBYyxtQkFBZCxFQUFtQyxFQUFFQyxNQUFNLEVBQUNDLFVBQVVYLFFBQVgsRUFBUixFQUFuQyxDQVBBOztBQUFBO0FBUU5ZLGlDQUFLQyxZQUFMLENBQWtCO0FBQ2hCQywyQkFBTztBQURTLG1CQUFsQjs7QUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7OzZCQUpBO0FBQ1IsV0FBS0MsT0FBTDtBQUNEOzs7Ozs7Ozs7Ozt1QkFpQm9CUCxvQkFBVVEsR0FBVixDQUFjLE9BQWQsQzs7O0FBQWJqQixvQjs7QUFDTixxQkFBS0MsUUFBTCxHQUFnQkQsS0FBS0MsUUFBckI7QUFDQSxxQkFBS2lCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsQ3NDTCxlQUFLTSxJOztrQkFBMUJ0QixZIiwiZmlsZSI6Im5pY2tuYW1lX2VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmlja25hbWVFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pi156ew6K6+572uJyxcbiAgICAgIFwidXNpbmdDb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJpLWNlbGxcIjogXCIuLi8uLi9wdWJsaWMvaXZpZXcvY2VsbC9pbmRleFwiLFxuICAgICAgICBcImktYnV0dG9uXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L2J1dHRvbi9pbmRleFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG5pY2tuYW1lOiAnJ1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmdldFVzZXIoKVxuICAgIH1cbiAgICBcbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgZm9ybVN1Ym1pdCAoZSkge1xuICAgICAgICBjb25zdCBuaWNrbmFtZSA9IGUuZGV0YWlsLnZhbHVlLm5pY2tuYW1lXG4gICAgICAgIGlmIChuaWNrbmFtZSA9PT0gJycpIHtcbiAgICAgICAgICB0aXAuZXJyb3IoJ+maj+S+v+i+k+eCueS4nOilv+S5n+ihjOWRgH4nKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHd4UmVxdWVzdC5QdXQoJ3VzZXJzL3VwZGF0ZV91c2VyJywgeyB1c2VyOiB7bmlja05hbWU6IG5pY2tuYW1lIH19KVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRVc2VyICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCd1c2VycycpXG4gICAgICB0aGlzLm5pY2tuYW1lID0gZGF0YS5uaWNrbmFtZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19