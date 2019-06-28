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

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

var _single = require('./../../components/single.js');

var _single2 = _interopRequireDefault(_single);

var _filter = require('./../../components/filter.js');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperStatement = function (_wepy$page) {
  _inherits(SuperStatement, _wepy$page);

  function SuperStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SuperStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SuperStatement.__proto__ || Object.getPrototypeOf(SuperStatement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '超级账单'
    }, _this.$repeat = { "item": { "com": "statement", "props": "statement.sync" } }, _this.$props = { "statement": { "xmlns:v-bind": { "value": "", "for": "item.childs", "item": "st", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "st", "type": "item", "for": "item.childs", "item": "st", "index": "index", "key": "index" } }, "filter": { "xmlns:v-on": "" } }, _this.$events = { "filter": { "v-on:paramsFilter": "setParams" } }, _this.components = {
      filter: _filter2.default,
      single: _single2.default,
      statement: _statement2.default
    }, _this.data = {
      header: {
        income: 0,
        expend: 0,
        left: 0
      },
      list: [],
      params: {},
      statements: [],
      cacheStatement: {}
    }, _this.methods = {
      setParams: function setParams(params) {
        this.params = params;
        this.getMonths();
      },
      getList: function getList(year, month, index) {
        var value = !this.list[index].hidden;
        this.list[index]['hidden'] = value;
        this.statement(year, month, index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SuperStatement, [{
    key: 'onShow',
    value: function onShow() {
      this.getMonths();
    }
  }, {
    key: 'getMonths',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('super_statements/time', this.params);

              case 2:
                data = _context.sent.data;

                this.header = data.header;
                this.list = data.statements;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMonths() {
        return _ref2.apply(this, arguments);
      }

      return getMonths;
    }()
  }, {
    key: 'statement',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(year, month, index) {
        var params, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  year: year,
                  month: month
                };

                params = Object.assign(params, this.params);
                _context2.next = 4;
                return _wxRequest2.default.Get('super_statements/list', params);

              case 4:
                data = _context2.sent.data;

                this.list[index].childs = data;
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function statement(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return statement;
    }()
  }]);

  return SuperStatement;
}(_wepy2.default.page);

exports.default = SuperStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cGVyX3N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJTdXBlclN0YXRlbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmaWx0ZXIiLCJGaWx0ZXIiLCJzaW5nbGUiLCJTaW5nbGUiLCJzdGF0ZW1lbnQiLCJJbmRleFN0YXRlbWVudCIsImRhdGEiLCJoZWFkZXIiLCJpbmNvbWUiLCJleHBlbmQiLCJsZWZ0IiwibGlzdCIsInBhcmFtcyIsInN0YXRlbWVudHMiLCJjYWNoZVN0YXRlbWVudCIsIm1ldGhvZHMiLCJzZXRQYXJhbXMiLCJnZXRNb250aHMiLCJnZXRMaXN0IiwieWVhciIsIm1vbnRoIiwiaW5kZXgiLCJ2YWx1ZSIsImhpZGRlbiIsInd4UmVxdWVzdCIsIkdldCIsIiRhcHBseSIsIk9iamVjdCIsImFzc2lnbiIsImNoaWxkcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sV0FBUCxFQUFtQixTQUFRLGdCQUEzQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxhQUFsQixFQUFnQyxRQUFPLElBQXZDLEVBQTRDLFNBQVEsT0FBcEQsRUFBNEQsT0FBTSxPQUFsRSxFQUFoQixFQUEyRix5QkFBd0IsRUFBQyxTQUFRLElBQVQsRUFBYyxRQUFPLE1BQXJCLEVBQTRCLE9BQU0sYUFBbEMsRUFBZ0QsUUFBTyxJQUF2RCxFQUE0RCxTQUFRLE9BQXBFLEVBQTRFLE9BQU0sT0FBbEYsRUFBbkgsRUFBYixFQUE0TixVQUFTLEVBQUMsY0FBYSxFQUFkLEVBQXJPLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLHFCQUFvQixXQUFyQixFQUFWLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGNBQVFDLGdCQURBO0FBRVJDLGNBQVFDLGdCQUZBO0FBR1JDLGlCQUFXQztBQUhILEssUUFNVkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFDTkMsZ0JBQVEsQ0FERjtBQUVOQyxnQkFBUSxDQUZGO0FBR05DLGNBQU07QUFIQSxPQURIO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxjQUFRLEVBUEg7QUFRTEMsa0JBQVksRUFSUDtBQVNMQyxzQkFBZ0I7QUFUWCxLLFFBZ0JQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0osTUFESCxFQUNXO0FBQ2pCLGFBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtLLFNBQUw7QUFDRCxPQUpPO0FBS1JDLGFBTFEsbUJBS0NDLElBTEQsRUFLT0MsS0FMUCxFQUtjQyxLQUxkLEVBS3FCO0FBQzNCLFlBQUlDLFFBQVEsQ0FBQyxLQUFLWCxJQUFMLENBQVVVLEtBQVYsRUFBaUJFLE1BQTlCO0FBQ0EsYUFBS1osSUFBTCxDQUFVVSxLQUFWLEVBQWlCLFFBQWpCLElBQTZCQyxLQUE3QjtBQUNBLGFBQUtsQixTQUFMLENBQWVlLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxLQUE1QjtBQUNEO0FBVE8sSzs7Ozs7NkJBSkE7QUFDUixXQUFLSixTQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQWVxQk8sb0JBQVVDLEdBQVYsQ0FBYyx1QkFBZCxFQUF1QyxLQUFLYixNQUE1QyxDOzs7QUFBZE4sb0IsaUJBQW1FQSxJOztBQUN6RSxxQkFBS0MsTUFBTCxHQUFjRCxLQUFLQyxNQUFuQjtBQUNBLHFCQUFLSSxJQUFMLEdBQVlMLEtBQUtPLFVBQWpCO0FBQ0EscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR2VQLEksRUFBTUMsSyxFQUFPQyxLOzs7Ozs7QUFDeEJULHNCLEdBQVM7QUFDWE8sd0JBQU1BLElBREs7QUFFWEMseUJBQU9BO0FBRkksaUI7O0FBSWJSLHlCQUFTZSxPQUFPQyxNQUFQLENBQWNoQixNQUFkLEVBQXNCLEtBQUtBLE1BQTNCLENBQVQ7O3VCQUNvQlksb0JBQVVDLEdBQVYsQ0FBYyx1QkFBZCxFQUF1Q2IsTUFBdkMsQzs7O0FBQWROLG9CLGtCQUE4REEsSTs7QUFDcEUscUJBQUtLLElBQUwsQ0FBVVUsS0FBVixFQUFpQlEsTUFBakIsR0FBMEJ2QixJQUExQjtBQUNBLHFCQUFLb0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpEd0NJLGVBQUtDLEk7O2tCQUE1QnRDLGMiLCJmaWxlIjoic3VwZXJfc3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCBJbmRleFN0YXRlbWVudCBmcm9tICdAL2NvbXBvbmVudHMvaW5kZXgvc3RhdGVtZW50J1xuICBpbXBvcnQgU2luZ2xlIGZyb20gJ0AvY29tcG9uZW50cy9zaW5nbGUnXG4gIGltcG9ydCBGaWx0ZXIgZnJvbSAnQC9jb21wb25lbnRzL2ZpbHRlcidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwZXJTdGF0ZW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotoXnuqfotKbljZUnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wiaXRlbVwiOntcImNvbVwiOlwic3RhdGVtZW50XCIsXCJwcm9wc1wiOlwic3RhdGVtZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJzdGF0ZW1lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIml0ZW0uY2hpbGRzXCIsXCJpdGVtXCI6XCJzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnN0YXRlbWVudC5zeW5jXCI6e1widmFsdWVcIjpcInN0XCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIml0ZW0uY2hpbGRzXCIsXCJpdGVtXCI6XCJzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcImZpbHRlclwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJmaWx0ZXJcIjp7XCJ2LW9uOnBhcmFtc0ZpbHRlclwiOlwic2V0UGFyYW1zXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBmaWx0ZXI6IEZpbHRlcixcbiAgICAgIHNpbmdsZTogU2luZ2xlLFxuICAgICAgc3RhdGVtZW50OiBJbmRleFN0YXRlbWVudFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgaW5jb21lOiAwLFxuICAgICAgICBleHBlbmQ6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBzdGF0ZW1lbnRzOiBbXSxcbiAgICAgIGNhY2hlU3RhdGVtZW50OiB7fVxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmdldE1vbnRocygpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNldFBhcmFtcyAocGFyYW1zKSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zXG4gICAgICAgIHRoaXMuZ2V0TW9udGhzKClcbiAgICAgIH0sXG4gICAgICBnZXRMaXN0ICh5ZWFyLCBtb250aCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gIXRoaXMubGlzdFtpbmRleF0uaGlkZGVuXG4gICAgICAgIHRoaXMubGlzdFtpbmRleF1bJ2hpZGRlbiddID0gdmFsdWVcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnQoeWVhciwgbW9udGgsIGluZGV4KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE1vbnRocyAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gKGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX3N0YXRlbWVudHMvdGltZScsIHRoaXMucGFyYW1zKSkuZGF0YVxuICAgICAgdGhpcy5oZWFkZXIgPSBkYXRhLmhlYWRlclxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5zdGF0ZW1lbnRzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgc3RhdGVtZW50ICh5ZWFyLCBtb250aCwgaW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIG1vbnRoOiBtb250aFxuICAgICAgfVxuICAgICAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihwYXJhbXMsIHRoaXMucGFyYW1zKVxuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdXBlcl9zdGF0ZW1lbnRzL2xpc3QnLCBwYXJhbXMpKS5kYXRhXG4gICAgICB0aGlzLmxpc3RbaW5kZXhdLmNoaWxkcyA9IGRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==