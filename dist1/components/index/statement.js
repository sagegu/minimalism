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

var IndexStatement = function (_wepy$component) {
  _inherits(IndexStatement, _wepy$component);

  function IndexStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IndexStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IndexStatement.__proto__ || Object.getPrototypeOf(IndexStatement)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      statement: {
        type: Object,
        default: {}
      }
    }, _this.methods = {
      statement: function statement(key, id) {
        _wepy2.default.navigateTo({
          url: '/pages/statements/detail?' + key + '=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return IndexStatement;
}(_wepy2.default.component);

exports.default = IndexStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleFN0YXRlbWVudCIsInByb3BzIiwic3RhdGVtZW50IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtZXRob2RzIiwia2V5IiwiaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNBQU1DLE1BREc7QUFFVEMsaUJBQVM7QUFGQTtBQURMLEssUUFPUkMsTyxHQUFVO0FBQ1JKLGVBRFEscUJBQ0dLLEdBREgsRUFDUUMsRUFEUixFQUNZO0FBQ2xCQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyw2Q0FBaUNKLEdBQWpDLFNBQXdDQztBQUQxQixTQUFoQjtBQUdEO0FBTE8sSzs7OztFQVJnQ0MsZUFBS0csUzs7a0JBQTVCWixjIiwiZmlsZSI6InN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFN0YXRlbWVudCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHN0YXRlbWVudDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN0YXRlbWVudCAoa2V5LCBpZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0ZW1lbnRzL2RldGFpbD8ke2tleX09JHtpZH1gXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=