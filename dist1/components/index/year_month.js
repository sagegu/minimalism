'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexYear = function (_wepy$component) {
  _inherits(IndexYear, _wepy$component);

  function IndexYear() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IndexYear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IndexYear.__proto__ || Object.getPrototypeOf(IndexYear)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Object,
        default: {}
      }
    }, _this.methods = {
      statement: function statement(id) {
        _wepy2.default.navigateTo({
          url: '/pages/statements/detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return IndexYear;
}(_wepy2.default.component);

exports.default = IndexYear;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllYXJfbW9udGguanMiXSwibmFtZXMiOlsiSW5kZXhZZWFyIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtZXRob2RzIiwic3RhdGVtZW50IiwiaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUztBQUZMO0FBREEsSyxRQU9SQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsRUFESCxFQUNPO0FBQ2JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGdEQUFvQ0g7QUFEdEIsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7RUFSMkJDLGVBQUtHLFM7O2tCQUF2QlosUyIsImZpbGUiOiJ5ZWFyX21vbnRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4WWVhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtZXRob2RzID0ge1xuICAgICAgc3RhdGVtZW50IChpZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0ZW1lbnRzL2RldGFpbD9pZD0ke2lkfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==