'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// asset_detail 消费详情


var Single = function (_wepy$component) {
  _inherits(Single, _wepy$component);

  function Single() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Single);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Single.__proto__ || Object.getPrototypeOf(Single)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      item: {
        type: Object,
        default: {}
      }
    }, _this.methods = {
      showStatement: function showStatement(id) {
        _wepy2.default.navigateTo({
          url: '/pages/statements/detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Single;
}(_wepy2.default.component);

exports.default = Single;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS5qcyJdLCJuYW1lcyI6WyJTaW5nbGUiLCJwcm9wcyIsIml0ZW0iLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJzaG93U3RhdGVtZW50IiwiaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVDOzs7Ozs7Ozs7OztBQURBOzs7SUFFc0JBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBREEsSyxRQU1SQyxPLEdBQVU7QUFDUkMsbUJBRFEseUJBQ09DLEVBRFAsRUFDVztBQUNyQkMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDVkMsZ0RBQW9DSDtBQUQxQixTQUFoQjtBQUdBO0FBTFUsSzs7OztFQVB3QkMsZUFBS0csUzs7a0JBQXBCWixNIiwiZmlsZSI6InNpbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXHQvLyBhc3NldF9kZXRhaWwg5raI6LS56K+m5oOFXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfVxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dTdGF0ZW1lbnQgKGlkKSB7XG5cdFx0XHRcdHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRlbWVudHMvZGV0YWlsP2lkPSR7aWR9YFxuICAgICAgICB9KVxuXHRcdFx0fVxuICAgIH1cbiAgfVxuIl19