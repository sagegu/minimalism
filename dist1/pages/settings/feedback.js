'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var Feedback = function (_wepy$page) {
  _inherits(Feedback, _wepy$page);

  function Feedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '帮助与反馈'
    }, _this.data = {
      content: '',
      type: 1,
      items: [{ name: '程序错误', value: '1', checked: 'true' }, { name: '功能建议', value: '2' }]
    }, _this.methods = {
      radioChange: function radioChange(e) {
        this.type = e.detail.value;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wxRequest2.default.Post('settings/feedback', {
                    content: this.content,
                    type: this.type
                  });

                case 2:
                  data = _context.sent;

                  if (data.status == 200) {
                    _tip2.default.success('提交成功!');
                    this.content = '';
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  } else {
                    _tip2.default.error(data.msg);
                  }
                  this.$apply();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }(),
      bindKeyRemark: function bindKeyRemark(e) {
        this.content = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Feedback;
}(_wepy2.default.page);

exports.default = Feedback;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmpzIl0sIm5hbWVzIjpbIkZlZWRiYWNrIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb250ZW50IiwidHlwZSIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIm1ldGhvZHMiLCJyYWRpb0NoYW5nZSIsImUiLCJkZXRhaWwiLCJzdWJtaXQiLCJ3eFJlcXVlc3QiLCJQb3N0Iiwic3RhdHVzIiwidGlwIiwic3VjY2VzcyIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImVycm9yIiwibXNnIiwiJGFwcGx5IiwiYmluZEtleVJlbWFyayIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLFlBQU0sQ0FGRDtBQUdMQyxhQUFPLENBQ0wsRUFBQ0MsTUFBTSxNQUFQLEVBQWVDLE9BQU8sR0FBdEIsRUFBMkJDLFNBQVMsTUFBcEMsRUFESyxFQUVMLEVBQUNGLE1BQU0sTUFBUCxFQUFlQyxPQUFPLEdBQXRCLEVBRks7QUFIRixLLFFBU1BFLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsQ0FETCxFQUNRO0FBQ2QsYUFBS1AsSUFBTCxHQUFZTyxFQUFFQyxNQUFGLENBQVNMLEtBQXJCO0FBQ0QsT0FITztBQUlGTSxZQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFLYUMsb0JBQVVDLElBQVYsQ0FBZSxtQkFBZixFQUFvQztBQUNuRFosNkJBQVMsS0FBS0EsT0FEcUM7QUFFbkRDLDBCQUFNLEtBQUtBO0FBRndDLG1CQUFwQyxDQUxiOztBQUFBO0FBS0FGLHNCQUxBOztBQVNOLHNCQUFJQSxLQUFLYyxNQUFMLElBQWUsR0FBbkIsRUFBd0I7QUFDdEJDLGtDQUFJQyxPQUFKLENBQVksT0FBWjtBQUNBLHlCQUFLZixPQUFMLEdBQWUsRUFBZjtBQUNBZ0IsbUNBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLDZCQUFPO0FBRFMscUJBQWxCO0FBR0QsbUJBTkQsTUFNTztBQUNMSixrQ0FBSUssS0FBSixDQUFVcEIsS0FBS3FCLEdBQWY7QUFDRDtBQUNELHVCQUFLQyxNQUFMOztBQWxCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQW9CUkMsbUJBcEJRLHlCQW9CT2QsQ0FwQlAsRUFvQlU7QUFDaEIsYUFBS1IsT0FBTCxHQUFlUSxFQUFFQyxNQUFGLENBQVNMLEtBQXhCO0FBQ0Q7QUF0Qk8sSzs7OztFQWQwQlksZUFBS08sSTs7a0JBQXRCM0IsUSIsImZpbGUiOiJmZWVkYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJy4uLy4uL3V0aWxzL3RpcCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGZWVkYmFjayBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W4ruWKqeS4juWPjemmiCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY29udGVudDogJycsXG4gICAgICB0eXBlOiAxLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge25hbWU6ICfnqIvluo/plJnor68nLCB2YWx1ZTogJzEnLCBjaGVja2VkOiAndHJ1ZSd9LFxuICAgICAgICB7bmFtZTogJ+WKn+iDveW7uuiuricsIHZhbHVlOiAnMid9XG4gICAgICBdXG4gICAgfVxuICAgIFxuICAgIG1ldGhvZHMgPSB7XG4gICAgICByYWRpb0NoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHN1Ym1pdCAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuUG9zdCgnc2V0dGluZ3MvZmVlZGJhY2snLCB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgICAgICB9KVxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgdGlwLnN1Y2Nlc3MoJ+aPkOS6pOaIkOWKnyEnKVxuICAgICAgICAgIHRoaXMuY29udGVudCA9ICcnXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpcC5lcnJvcihkYXRhLm1zZylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgYmluZEtleVJlbWFyayAoZSkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuIl19