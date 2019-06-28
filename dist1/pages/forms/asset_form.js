'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var AssetForm = function (_wepy$page) {
  _inherits(AssetForm, _wepy$page);

  function AssetForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AssetForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssetForm.__proto__ || Object.getPrototypeOf(AssetForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '余额设置',
      "usingComponents": {
        "i-button": "../../public/iview/button/index",
        "i-row": "../../public/iview/row/index",
        "i-col": "../../public/iview/col/index",
        "i-switch": "../../public/iview/switch/index"
      }
    }, _this.data = {
      amount: 0,
      asset_id: 0,
      isMess: false
    }, _this.methods = {
      changeAmount: function changeAmount(e) {
        this.amount = e.detail.value;
      },
      changeMess: function changeMess(e) {
        this.isMess = e.detail.value;
      },
      updateAmount: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wxRequest2.default.Put('wallet/surplus', {
                    asset_id: this.asset_id,
                    amount: this.amount,
                    is_mess: this.isMess ? 1 : 0
                  });

                case 2:
                  _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updateAmount() {
          return _ref2.apply(this, arguments);
        }

        return updateAmount;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AssetForm, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.amount = Number.parseInt(options.amount);
      this.asset_id = options.id;
    }
  }]);

  return AssetForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(AssetForm , 'pages/forms/asset_form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0X2Zvcm0uanMiXSwibmFtZXMiOlsiQXNzZXRGb3JtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhbW91bnQiLCJhc3NldF9pZCIsImlzTWVzcyIsIm1ldGhvZHMiLCJjaGFuZ2VBbW91bnQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaGFuZ2VNZXNzIiwidXBkYXRlQW1vdW50Iiwid3hSZXF1ZXN0IiwiUHV0IiwiaXNfbWVzcyIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbnMiLCJOdW1iZXIiLCJwYXJzZUludCIsImlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVAseUJBQW1CO0FBQ2pCLG9CQUFZLGlDQURLO0FBRWpCLGlCQUFTLDhCQUZRO0FBR2pCLGlCQUFTLDhCQUhRO0FBSWpCLG9CQUFZO0FBSks7QUFGWixLLFFBVVRDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsZ0JBQVUsQ0FGTDtBQUdMQyxjQUFRO0FBSEgsSyxRQVdQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLENBRE4sRUFDUztBQUNmLGFBQUtMLE1BQUwsR0FBY0ssRUFBRUMsTUFBRixDQUFTQyxLQUF2QjtBQUNELE9BSE87QUFJUkMsZ0JBSlEsc0JBSUlILENBSkosRUFJTztBQUNiLGFBQUtILE1BQUwsR0FBY0csRUFBRUMsTUFBRixDQUFTQyxLQUF2QjtBQUNELE9BTk87QUFPRkUsa0JBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFRQUMsb0JBQVVDLEdBQVYsQ0FBYyxnQkFBZCxFQUNOO0FBQ0VWLDhCQUFVLEtBQUtBLFFBRGpCO0FBRUVELDRCQUFRLEtBQUtBLE1BRmY7QUFHRVksNkJBQVMsS0FBS1YsTUFBTCxHQUFjLENBQWQsR0FBa0I7QUFIN0IsbUJBRE0sQ0FSQTs7QUFBQTtBQWNOVyxpQ0FBS0MsWUFBTCxDQUFrQjtBQUNoQkMsMkJBQU87QUFEUyxtQkFBbEI7O0FBZE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7OzsyQkFMRkMsTyxFQUFTO0FBQ2YsV0FBS2hCLE1BQUwsR0FBY2lCLE9BQU9DLFFBQVAsQ0FBZ0JGLFFBQVFoQixNQUF4QixDQUFkO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQmUsUUFBUUcsRUFBeEI7QUFDRDs7OztFQXBCb0NOLGVBQUtPLEk7O2tCQUF2QnhCLFMiLCJmaWxlIjoiYXNzZXRfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEZvcm0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvZnpop3orr7nva4nLFxuICAgICAgXCJ1c2luZ0NvbXBvbmVudHNcIjoge1xuICAgICAgICBcImktYnV0dG9uXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L2J1dHRvbi9pbmRleFwiLFxuICAgICAgICBcImktcm93XCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L3Jvdy9pbmRleFwiLFxuICAgICAgICBcImktY29sXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L2NvbC9pbmRleFwiLFxuICAgICAgICBcImktc3dpdGNoXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L3N3aXRjaC9pbmRleFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGFtb3VudDogMCxcbiAgICAgIGFzc2V0X2lkOiAwLFxuICAgICAgaXNNZXNzOiBmYWxzZVxuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIucGFyc2VJbnQob3B0aW9ucy5hbW91bnQpXG4gICAgICB0aGlzLmFzc2V0X2lkID0gb3B0aW9ucy5pZFxuICAgIH1cbiAgICBcbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlQW1vdW50IChlKSB7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBjaGFuZ2VNZXNzIChlKSB7XG4gICAgICAgIHRoaXMuaXNNZXNzID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBhc3luYyB1cGRhdGVBbW91bnQgKCkge1xuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuUHV0KCd3YWxsZXQvc3VycGx1cycsIFxuICAgICAgICB7XG4gICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYXNzZXRfaWQsXG4gICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgICAgICBpc19tZXNzOiB0aGlzLmlzTWVzcyA/IDEgOiAwXG4gICAgICAgIH0pXG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19