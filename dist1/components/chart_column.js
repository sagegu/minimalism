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
// 收支统计图表页面所需


var chartColumn = function (_wepy$component) {
  _inherits(chartColumn, _wepy$component);

  function chartColumn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, chartColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = chartColumn.__proto__ || Object.getPrototypeOf(chartColumn)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      obj: {
        type: Array,
        default: []
      },
      hide: {
        type: Boolean,
        default: false
      }
    }, _this.methods = {
      showStatement: function showStatement(id) {
        _wepy2.default.navigateTo({
          url: '/pages/statements/detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return chartColumn;
}(_wepy2.default.component);

exports.default = chartColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0X2NvbHVtbi5qcyJdLCJuYW1lcyI6WyJjaGFydENvbHVtbiIsInByb3BzIiwib2JqIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImhpZGUiLCJCb29sZWFuIiwibWV0aG9kcyIsInNob3dTdGF0ZW1lbnQiLCJpZCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUM7Ozs7Ozs7Ozs7O0FBREE7OztJQUVzQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxjQUFNQyxLQURIO0FBRUhDLGlCQUFTO0FBRk4sT0FEQztBQUtOQyxZQUFNO0FBQ0pILGNBQU1JLE9BREY7QUFFSkYsaUJBQVM7QUFGTDtBQUxBLEssUUFXUkcsTyxHQUFVO0FBQ1JDLG1CQURRLHlCQUNPQyxFQURQLEVBQ1c7QUFDckJDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ1ZDLGdEQUFvQ0g7QUFEMUIsU0FBaEI7QUFHQTtBQUxVLEs7Ozs7RUFaNkJDLGVBQUtHLFM7O2tCQUF6QmQsVyIsImZpbGUiOiJjaGFydF9jb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblx0Ly8g5pS25pSv57uf6K6h5Zu+6KGo6aG16Z2i5omA6ZyAXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoYXJ0Q29sdW1uIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgb2JqOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIGhpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dTdGF0ZW1lbnQgKGlkKSB7XG5cdFx0XHRcdHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3N0YXRlbWVudHMvZGV0YWlsP2lkPSR7aWR9YFxuICAgICAgICB9KVxuXHRcdFx0fVxuICAgIH1cbiAgfVxuIl19