'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _empty = require('./../../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

var _single = require('./../../components/single.js');

var _single2 = _interopRequireDefault(_single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetDetail = function (_wepy$page) {
  _inherits(AssetDetail, _wepy$page);

  function AssetDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AssetDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssetDetail.__proto__ || Object.getPrototypeOf(AssetDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消费详情'
    }, _this.$repeat = { "item": { "com": "statement", "props": "statement.sync" } }, _this.$props = { "statement": { "xmlns:v-bind": { "value": "", "for": "item.childs", "item": "st", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "st", "type": "item", "for": "item.childs", "item": "st", "index": "index", "key": "index" } }, "empty": { "title": "暂无数据哦~" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default,
      single: _single2.default,
      statement: _statement2.default
    }, _this.data = {
      asset_id: 0,
      header: {
        income: '0.00',
        expend: '0.00',
        surplus: '0.00'
      },
      list: [],
      amount: '0.00'
    }, _this.methods = {
      showHidden: function showHidden(idx) {
        var value = !this.list[idx].hidden;
        this.list[idx]['hidden'] = value;
      },
      showStatement: function showStatement(id) {
        wx.navigateTo({ url: '/pages/statements/detail?id=' + id });
      },
      showAmountModal: function showAmountModal() {
        wx.navigateTo({ url: '/pages/forms/asset_form?id=' + this.asset_id + '&amount=' + this.source_amount });
      },
      getList: function getList(year, month, index) {
        var value = !this.list[index].hidden;
        this.list[index]['hidden'] = value;
        this.statements(year, month, index);
      }
    }, _this.computed = {
      showEmpty: function showEmpty() {
        return this.list.length <= 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AssetDetail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.asset_id = options.id;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.information();
      this.times();
    }
  }, {
    key: 'information',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('wallet/information', { asset_id: this.asset_id });

              case 2:
                data = _context.sent;

                this.header = data;
                this.amount = this.header.surplus;
                this.source_amount = this.header.source_surplus;
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function information() {
        return _ref2.apply(this, arguments);
      }

      return information;
    }()
  }, {
    key: 'times',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('wallet/time_line', { asset_id: this.asset_id });

              case 2:
                data = _context2.sent.data;

                this.list = data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function times() {
        return _ref3.apply(this, arguments);
      }

      return times;
    }()
  }, {
    key: 'statements',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(year, month, index) {
        var params, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  year: year,
                  month: month,
                  asset_id: this.asset_id
                };
                _context3.next = 3;
                return _wxRequest2.default.Get('wallet/statement_list', params);

              case 3:
                data = _context3.sent.data;

                this.list[index].childs = data;
                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function statements(_x, _x2, _x3) {
        return _ref4.apply(this, arguments);
      }

      return statements;
    }()
  }]);

  return AssetDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(AssetDetail , 'pages/assets/asset_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0X2RldGFpbC5qcyJdLCJuYW1lcyI6WyJBc3NldERldGFpbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJlbXB0eSIsIkVtcHR5Iiwic2luZ2xlIiwiU2luZ2xlIiwic3RhdGVtZW50IiwiSW5kZXhTdGF0ZW1lbnQiLCJkYXRhIiwiYXNzZXRfaWQiLCJoZWFkZXIiLCJpbmNvbWUiLCJleHBlbmQiLCJzdXJwbHVzIiwibGlzdCIsImFtb3VudCIsIm1ldGhvZHMiLCJzaG93SGlkZGVuIiwiaWR4IiwidmFsdWUiLCJoaWRkZW4iLCJzaG93U3RhdGVtZW50IiwiaWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93QW1vdW50TW9kYWwiLCJzb3VyY2VfYW1vdW50IiwiZ2V0TGlzdCIsInllYXIiLCJtb250aCIsImluZGV4Iiwic3RhdGVtZW50cyIsImNvbXB1dGVkIiwic2hvd0VtcHR5IiwibGVuZ3RoIiwib3B0aW9ucyIsImluZm9ybWF0aW9uIiwidGltZXMiLCJ3eFJlcXVlc3QiLCJHZXQiLCJzb3VyY2Vfc3VycGx1cyIsIiRhcHBseSIsInBhcmFtcyIsImNoaWxkcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQzs7OztBQUNDOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsZ0JBQTNCLEVBQVIsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGFBQWxCLEVBQWdDLFFBQU8sSUFBdkMsRUFBNEMsU0FBUSxPQUFwRCxFQUE0RCxPQUFNLE9B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QSxxQkFBS2tDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRXFDRyxlQUFLQyxJOztrQkFBekJuRCxXIiwiZmlsZSI6ImFzc2V0X2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXHRpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBpbXBvcnQgRW1wdHkgZnJvbSAnQC9jb21wb25lbnRzL2VtcHR5J1xuICBpbXBvcnQgSW5kZXhTdGF0ZW1lbnQgZnJvbSAnQC9jb21wb25lbnRzL2luZGV4L3N0YXRlbWVudCdcbiAgaW1wb3J0IFNpbmdsZSBmcm9tICdAL2NvbXBvbmVudHMvc2luZ2xlJ1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXREZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtojotLnor6bmg4UnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wiaXRlbVwiOntcImNvbVwiOlwic3RhdGVtZW50XCIsXCJwcm9wc1wiOlwic3RhdGVtZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJzdGF0ZW1lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIml0ZW0uY2hpbGRzXCIsXCJpdGVtXCI6XCJzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnN0YXRlbWVudC5zeW5jXCI6e1widmFsdWVcIjpcInN0XCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIml0ZW0uY2hpbGRzXCIsXCJpdGVtXCI6XCJzdFwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcImVtcHR5XCI6e1widGl0bGVcIjpcIuaaguaXoOaVsOaNruWTpn5cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZW1wdHk6IEVtcHR5LFxuICAgICAgc2luZ2xlOiBTaW5nbGUsXG4gICAgICBzdGF0ZW1lbnQ6IEluZGV4U3RhdGVtZW50XG4gICAgfVxuXG5cdFx0ZGF0YSA9IHtcbiAgICAgIGFzc2V0X2lkOiAwLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGluY29tZTogJzAuMDAnLFxuICAgICAgICBleHBlbmQ6ICcwLjAwJyxcbiAgICAgICAgc3VycGx1czogJzAuMDAnXG4gICAgICB9LFxuICAgICAgbGlzdDogW10sIFxuICAgICAgYW1vdW50OiAnMC4wMCdcbiAgICB9XG4gICAgXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dIaWRkZW4oaWR4KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICF0aGlzLmxpc3RbaWR4XS5oaWRkZW5cbiAgICAgICAgdGhpcy5saXN0W2lkeF1bJ2hpZGRlbiddID0gdmFsdWVcblx0XHRcdH0sXG4gICAgICBzaG93U3RhdGVtZW50IChpZCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL3N0YXRlbWVudHMvZGV0YWlsP2lkPSR7aWR9YCB9KVxuICAgICAgfSxcbiAgICAgIHNob3dBbW91bnRNb2RhbCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvZm9ybXMvYXNzZXRfZm9ybT9pZD0ke3RoaXMuYXNzZXRfaWR9JmFtb3VudD0ke3RoaXMuc291cmNlX2Ftb3VudH1gIH0pXG4gICAgICB9LFxuICAgICAgZ2V0TGlzdCAoeWVhciwgbW9udGgsIGluZGV4KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICF0aGlzLmxpc3RbaW5kZXhdLmhpZGRlblxuICAgICAgICB0aGlzLmxpc3RbaW5kZXhdWydoaWRkZW4nXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyh5ZWFyLCBtb250aCwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICB0aGlzLmFzc2V0X2lkID0gb3B0aW9ucy5pZFxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmluZm9ybWF0aW9uKClcbiAgICAgIHRoaXMudGltZXMoKVxuICAgIH1cblxuICAgIGFzeW5jIGluZm9ybWF0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCd3YWxsZXQvaW5mb3JtYXRpb24nLCB7YXNzZXRfaWQ6IHRoaXMuYXNzZXRfaWR9KVxuICAgICAgdGhpcy5oZWFkZXIgPSBkYXRhXG4gICAgICB0aGlzLmFtb3VudCA9IHRoaXMuaGVhZGVyLnN1cnBsdXNcbiAgICAgIHRoaXMuc291cmNlX2Ftb3VudCA9IHRoaXMuaGVhZGVyLnNvdXJjZV9zdXJwbHVzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgdGltZXMgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCB3eFJlcXVlc3QuR2V0KCd3YWxsZXQvdGltZV9saW5lJywgeyBhc3NldF9pZDogdGhpcy5hc3NldF9pZCB9KSkuZGF0YVxuICAgICAgdGhpcy5saXN0ID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXRlbWVudHMgKHllYXIsIG1vbnRoLCBpbmRleCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICBhc3NldF9pZDogdGhpcy5hc3NldF9pZFxuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCB3eFJlcXVlc3QuR2V0KCd3YWxsZXQvc3RhdGVtZW50X2xpc3QnLCBwYXJhbXMpKS5kYXRhXG4gICAgICB0aGlzLmxpc3RbaW5kZXhdLmNoaWxkcyA9IGRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHNob3dFbXB0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QubGVuZ3RoIDw9IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuIl19