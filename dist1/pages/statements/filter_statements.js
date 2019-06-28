'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterStatement = function (_wepy$page) {
  _inherits(FilterStatement, _wepy$page);

  function FilterStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FilterStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterStatement.__proto__ || Object.getPrototypeOf(FilterStatement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '账单列表'
    }, _this.$repeat = { "list": { "com": "statement", "props": "statement.sync" } }, _this.$props = { "statement": { "xmlns:v-bind": { "value": "", "for": "list", "item": "st", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "st", "type": "item", "for": "list", "item": "st", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      statement: _statement2.default
    }, _this.data = {
      list: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FilterStatement, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.statements(options.year, options.month, options.category_id);
    }
  }, {
    key: 'statements',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(year, month, category_id) {
        var params, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  year: year,
                  month: month,
                  category_id: category_id
                };
                _context.next = 3;
                return _wxRequest2.default.Get('super_statements/list', params);

              case 3:
                data = _context.sent.data;

                this.list = data;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function statements(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return statements;
    }()
  }]);

  return FilterStatement;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(FilterStatement , 'pages/statements/filter_statements'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcl9zdGF0ZW1lbnRzLmpzIl0sIm5hbWVzIjpbIkZpbHRlclN0YXRlbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzdGF0ZW1lbnQiLCJJbmRleFN0YXRlbWVudCIsImRhdGEiLCJsaXN0Iiwib3B0aW9ucyIsInN0YXRlbWVudHMiLCJ5ZWFyIiwibW9udGgiLCJjYXRlZ29yeV9pZCIsInBhcmFtcyIsInd4UmVxdWVzdCIsIkdldCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsZ0JBQTNCLEVBQVIsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sSUFBaEMsRUFBcUMsU0FBUSxPQUE3QyxFQUFxRCxPQUFNLE9BQTNELEVBQWhCLEVBQW9GLHlCQUF3QixFQUFDLFNBQVEsSUFBVCxFQUFjLFFBQU8sTUFBckIsRUFBNEIsT0FBTSxNQUFsQyxFQUF5QyxRQUFPLElBQWhELEVBQXFELFNBQVEsT0FBN0QsRUFBcUUsT0FBTSxPQUEzRSxFQUE1RyxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGlCQUFXQztBQURILEssUUFJVkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLOzs7OzsyQkFJQ0MsTyxFQUFTO0FBQ2YsV0FBS0MsVUFBTCxDQUFnQkQsUUFBUUUsSUFBeEIsRUFBOEJGLFFBQVFHLEtBQXRDLEVBQTZDSCxRQUFRSSxXQUFyRDtBQUNEOzs7OzJGQUVpQkYsSSxFQUFNQyxLLEVBQU9DLFc7Ozs7OztBQUN6QkMsc0IsR0FBUztBQUNYSCx3QkFBTUEsSUFESztBQUVYQyx5QkFBT0EsS0FGSTtBQUdYQywrQkFBYUE7QUFIRixpQjs7dUJBS09FLG9CQUFVQyxHQUFWLENBQWMsdUJBQWQsRUFBdUNGLE1BQXZDLEM7OztBQUFkUCxvQixpQkFBOERBLEk7O0FBQ3BFLHFCQUFLQyxJQUFMLEdBQVlELElBQVo7QUFDQSxxQkFBS1UsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTVCeUNDLGVBQUtDLEk7O2tCQUE3QnJCLGUiLCJmaWxlIjoiZmlsdGVyX3N0YXRlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IEluZGV4U3RhdGVtZW50IGZyb20gJ0AvY29tcG9uZW50cy9pbmRleC9zdGF0ZW1lbnQnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclN0YXRlbWVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0puWNleWIl+ihqCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJzdGF0ZW1lbnRcIixcInByb3BzXCI6XCJzdGF0ZW1lbnQuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInN0YXRlbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwic3RcIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpzdGF0ZW1lbnQuc3luY1wiOntcInZhbHVlXCI6XCJzdFwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBzdGF0ZW1lbnQ6IEluZGV4U3RhdGVtZW50XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMob3B0aW9ucy55ZWFyLCBvcHRpb25zLm1vbnRoLCBvcHRpb25zLmNhdGVnb3J5X2lkKVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBzdGF0ZW1lbnRzICh5ZWFyLCBtb250aCwgY2F0ZWdvcnlfaWQpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5X2lkXG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gKGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX3N0YXRlbWVudHMvbGlzdCcsIHBhcmFtcykpLmRhdGFcbiAgICAgIHRoaXMubGlzdCA9IGRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==