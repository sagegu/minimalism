'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _host = require('./../../utils/host.js');

var _host2 = _interopRequireDefault(_host);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconsChose = function (_wepy$page) {
  _inherits(IconsChose, _wepy$page);

  function IconsChose() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconsChose);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconsChose.__proto__ || Object.getPrototypeOf(IconsChose)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '图标选择'
    }, _this.data = {
      icons: []
    }, _this.computed = {
      host: function host() {
        return _host2.default.host;
      }
    }, _this.methods = {
      choseIcon: function choseIcon(icon) {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        prevPage.setIcon({ icon: icon });
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconsChose, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.getIcons(options.url);
    }
  }, {
    key: 'getIcons',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('icons/' + url);

              case 2:
                data = _context.sent;

                this.icons = data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getIcons(_x) {
        return _ref2.apply(this, arguments);
      }

      return getIcons;
    }()
  }]);

  return IconsChose;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(IconsChose , 'pages/forms/icons_chose'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25zX2Nob3NlLmpzIl0sIm5hbWVzIjpbIkljb25zQ2hvc2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImljb25zIiwiY29tcHV0ZWQiLCJob3N0IiwiSG9zdCIsIm1ldGhvZHMiLCJjaG9zZUljb24iLCJpY29uIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInNldEljb24iLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwiZ2V0SWNvbnMiLCJ1cmwiLCJ3eFJlcXVlc3QiLCJHZXQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFJUEMsUSxHQUFXO0FBQ1RDLFVBRFMsa0JBQ0Q7QUFDTixlQUFPQyxlQUFLRCxJQUFaO0FBQ0Q7QUFIUSxLLFFBVVhFLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxJQURILEVBQ1M7QUFDZixZQUFNQyxRQUFRQyxpQkFBZDtBQUNBLFlBQU1DLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFqQjtBQUNBRCxpQkFBU0UsT0FBVCxDQUFpQixFQUFDTCxNQUFNQSxJQUFQLEVBQWpCO0FBQ0FNLHVCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxpQkFBTztBQURTLFNBQWxCO0FBR0Q7QUFSTyxLOzs7OzsyQkFKRkMsTyxFQUFTO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFRRSxHQUF0QjtBQUNEOzs7OzJGQVllQSxHOzs7Ozs7O3VCQUNLQyxvQkFBVUMsR0FBVixZQUF1QkYsR0FBdkIsQzs7O0FBQWJsQixvQjs7QUFDTixxQkFBS0MsS0FBTCxHQUFhRCxJQUFiO0FBQ0EscUJBQUtxQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENvQ1IsZUFBS1MsSTs7a0JBQXhCekIsVSIsImZpbGUiOiJpY29uc19jaG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgSG9zdCBmcm9tICdAL3V0aWxzL2hvc3QnXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25zQ2hvc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflm77moIfpgInmi6knXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25zOiBbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaG9zdCAoKSB7XG4gICAgICAgIHJldHVybiBIb3N0Lmhvc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICB0aGlzLmdldEljb25zKG9wdGlvbnMudXJsKVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaG9zZUljb24gKGljb24pIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICBjb25zdCBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdXG4gICAgICAgIHByZXZQYWdlLnNldEljb24oe2ljb246IGljb259KVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0SWNvbnMgKHVybCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoYGljb25zLyR7dXJsfWApXG4gICAgICB0aGlzLmljb25zID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19