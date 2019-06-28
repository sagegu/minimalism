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

var CategoryItem = function (_wepy$component) {
  _inherits(CategoryItem, _wepy$component);

  function CategoryItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryItem.__proto__ || Object.getPrototypeOf(CategoryItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      category: {
        type: Object,
        default: {}
      }
    }, _this.methods = {
      choseCategory: function choseCategory(category) {
        this.$emit('choseItem', category);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return CategoryItem;
}(_wepy2.default.component);

exports.default = CategoryItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5X2l0ZW0uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlJdGVtIiwicHJvcHMiLCJjYXRlZ29yeSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwibWV0aG9kcyIsImNob3NlQ2F0ZWdvcnkiLCIkZW1pdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNQyxNQURFO0FBRVJDLGlCQUFTO0FBRkQ7QUFESixLLFFBT1JDLE8sR0FBVTtBQUNSQyxtQkFEUSx5QkFDT0wsUUFEUCxFQUNpQjtBQUN2QixhQUFLTSxLQUFMLENBQVcsV0FBWCxFQUF3Qk4sUUFBeEI7QUFDRDtBQUhPLEs7Ozs7RUFSOEJPLGVBQUtDLFM7O2tCQUExQlYsWSIsImZpbGUiOiJjYXRlZ29yeV9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNob3NlQ2F0ZWdvcnkgKGNhdGVnb3J5KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nob3NlSXRlbScsIGNhdGVnb3J5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19