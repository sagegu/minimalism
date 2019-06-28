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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于洁账',
      "usingComponents": {
        "i-button": "../../public/iview/button/index"
      }
    }, _this.data = {
      about: {}
    }, _this.methods = {
      cleanSession: function cleanSession() {
        wx.clearStorage();
        _tip2.default.toast('清理成功');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'onShow',
    value: function onShow() {
      this.getAbout();
    }
  }, {
    key: 'getAbout',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_session2.default.get('settings_about_data')) {
                  this.header = _session2.default.get('settings_about_data');
                  this.$apply();
                }

                _context.next = 3;
                return _wxRequest2.default.Get('settings/about');

              case 3:
                data = _context.sent;

                this.about = data;
                _session2.default.set('settings_about_data', this.about);
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAbout() {
        return _ref2.apply(this, arguments);
      }

      return getAbout;
    }()
  }]);

  return About;
}(_wepy2.default.page);

exports.default = About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhYm91dCIsIm1ldGhvZHMiLCJjbGVhblNlc3Npb24iLCJ3eCIsImNsZWFyU3RvcmFnZSIsInRpcCIsInRvYXN0IiwiZ2V0QWJvdXQiLCJTZXNzaW9uIiwiZ2V0IiwiaGVhZGVyIiwiJGFwcGx5Iiwid3hSZXF1ZXN0IiwiR2V0Iiwic2V0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVAseUJBQW1CO0FBQ2pCLG9CQUFZO0FBREs7QUFGWixLLFFBT1RDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSyxRQVFQQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ1E7QUFDZEMsV0FBR0MsWUFBSDtBQUNBQyxzQkFBSUMsS0FBSixDQUFVLE1BQVY7QUFDRDtBQUpPLEs7Ozs7OzZCQUpBO0FBQ1IsV0FBS0MsUUFBTDtBQUNEOzs7Ozs7Ozs7O0FBVUMsb0JBQUlDLGtCQUFRQyxHQUFSLENBQVkscUJBQVosQ0FBSixFQUF3QztBQUN0Qyx1QkFBS0MsTUFBTCxHQUFjRixrQkFBUUMsR0FBUixDQUFZLHFCQUFaLENBQWQ7QUFDQSx1QkFBS0UsTUFBTDtBQUNEOzs7dUJBRWtCQyxvQkFBVUMsR0FBVixDQUFjLGdCQUFkLEM7OztBQUFiZCxvQjs7QUFDTixxQkFBS0MsS0FBTCxHQUFhRCxJQUFiO0FBQ0FTLGtDQUFRTSxHQUFSLENBQVkscUJBQVosRUFBbUMsS0FBS2QsS0FBeEM7QUFDQSxxQkFBS1csTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhDK0JJLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHRpcCBmcm9tICcuLi8uLi91dGlscy90aXAnXG4gIGltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFs+S6jua0gei0picsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS1idXR0b25cIjogXCIuLi8uLi9wdWJsaWMvaXZpZXcvYnV0dG9uL2luZGV4XCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGF0YSA9IHtcbiAgICAgIGFib3V0OiB7fVxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmdldEFib3V0KClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2xlYW5TZXNzaW9uICgpIHtcbiAgICAgICAgd3guY2xlYXJTdG9yYWdlKClcbiAgICAgICAgdGlwLnRvYXN0KCfmuIXnkIbmiJDlip8nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEFib3V0ICgpIHtcbiAgICAgIGlmIChTZXNzaW9uLmdldCgnc2V0dGluZ3NfYWJvdXRfZGF0YScpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gU2Vzc2lvbi5nZXQoJ3NldHRpbmdzX2Fib3V0X2RhdGEnKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzZXR0aW5ncy9hYm91dCcpXG4gICAgICB0aGlzLmFib3V0ID0gZGF0YVxuICAgICAgU2Vzc2lvbi5zZXQoJ3NldHRpbmdzX2Fib3V0X2RhdGEnLCB0aGlzLmFib3V0KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgICBcbiAgfVxuIl19