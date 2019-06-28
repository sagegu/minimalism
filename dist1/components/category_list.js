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
// 收入/支出分类列表、资产列表


var CategoryList = function (_wepy$component) {
  _inherits(CategoryList, _wepy$component);

  function CategoryList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        default: []
      },
      type: String,
      editUrl: String
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return CategoryList;
}(_wepy2.default.component);

exports.default = CategoryList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5X2xpc3QuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0IiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsIlN0cmluZyIsImVkaXRVcmwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxLQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtORixZQUFNRyxNQUxBO0FBTU5DLGVBQVNEO0FBTkgsSzs7OztFQURnQ0UsZUFBS0MsUzs7a0JBQTFCVCxZIiwiZmlsZSI6ImNhdGVnb3J5X2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOaUtuWFpS/mlK/lh7rliIbnsbvliJfooajjgIHotYTkuqfliJfooahcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZWRpdFVybDogU3RyaW5nXG4gIH07XG59XG4iXX0=