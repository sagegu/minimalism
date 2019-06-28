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

var PrepareOrderItem = function (_wepy$component) {
  _inherits(PrepareOrderItem, _wepy$component);

  function PrepareOrderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrepareOrderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrepareOrderItem.__proto__ || Object.getPrototypeOf(PrepareOrderItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      good: {
        type: Object,
        default: {}
      }
    }, _this.methods = {
      getGood: function getGood(id) {
        this.$emit('getGood', id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PrepareOrderItem;
}(_wepy2.default.component);

exports.default = PrepareOrderItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXBhcmVfb3JkZXJfaXRlbS5qcyJdLCJuYW1lcyI6WyJQcmVwYXJlT3JkZXJJdGVtIiwicHJvcHMiLCJnb29kIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtZXRob2RzIiwiZ2V0R29vZCIsImlkIiwiJGVtaXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7OzBNQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBREEsSyxRQU9SQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQ0MsRUFERCxFQUNLO0FBQ1gsYUFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBc0JELEVBQXRCO0FBQ0Q7QUFITyxLOzs7O0VBUmtDRSxlQUFLQyxTOztrQkFBOUJYLGdCIiwiZmlsZSI6InByZXBhcmVfb3JkZXJfaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVwYXJlT3JkZXJJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBnb29kOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB7fVxuICAgIH1cbiAgfVxuICBcbiAgbWV0aG9kcyA9IHtcbiAgICBnZXRHb29kIChpZCkge1xuICAgICAgdGhpcy4kZW1pdCgnZ2V0R29vZCcsIGlkKVxuICAgIH1cbiAgfVxufVxuIl19