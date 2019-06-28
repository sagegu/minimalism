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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Budget = function (_wepy$page) {
  _inherits(Budget, _wepy$page);

  function Budget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Budget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Budget.__proto__ || Object.getPrototypeOf(Budget)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预算设置'
    }, _this.data = {
      header: {},
      list: [],
      amount: '0.00',
      source_amount: 0
    }, _this.methods = {
      redirect: function redirect(id) {
        _wepy2.default.redirectTo({
          url: '/pages/budgets/child_budget?id=' + id
        });
      },
      showAmountModal: function showAmountModal() {
        wx.navigateTo({ url: '/pages/forms/budget_form?id=0&amount=' + this.source_amount });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Budget, [{
    key: 'onShow',
    value: function onShow() {
      this.getHeaderData();
      this.getParentBudget();
    }
  }, {
    key: 'getHeaderData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('budgets');

              case 2:
                data = _context.sent;

                this.header = data;
                this.amount = this.header.amount;
                this.source_amount = this.header.source_amount;
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getHeaderData() {
        return _ref2.apply(this, arguments);
      }

      return getHeaderData;
    }()
  }, {
    key: 'getParentBudget',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('budgets/parent');

              case 2:
                data = _context2.sent;

                this.list = data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getParentBudget() {
        return _ref3.apply(this, arguments);
      }

      return getParentBudget;
    }()
  }, {
    key: 'updateBudget',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(amount) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Put('budgets/0', {
                  type: 'user',
                  amount: amount
                });

              case 2:
                data = _context3.sent;

                this.getHeaderData();
                if (data.status != 200) {
                  _tip2.default.error(data.msg);
                }

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateBudget(_x) {
        return _ref4.apply(this, arguments);
      }

      return updateBudget;
    }()
  }]);

  return Budget;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Budget , 'pages/budgets/budget'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdldC5qcyJdLCJuYW1lcyI6WyJCdWRnZXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlYWRlciIsImxpc3QiLCJhbW91bnQiLCJzb3VyY2VfYW1vdW50IiwibWV0aG9kcyIsInJlZGlyZWN0IiwiaWQiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInVybCIsInNob3dBbW91bnRNb2RhbCIsInd4IiwibmF2aWdhdGVUbyIsImdldEhlYWRlckRhdGEiLCJnZXRQYXJlbnRCdWRnZXQiLCJ3eFJlcXVlc3QiLCJHZXQiLCIkYXBwbHkiLCJQdXQiLCJ0eXBlIiwic3RhdHVzIiwidGlwIiwiZXJyb3IiLCJtc2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxjQUFRLE1BSEg7QUFJTEMscUJBQWU7QUFKVixLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxFQURGLEVBQ007QUFDWkMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxvQ0FBa0NIO0FBRHpCLFNBQWhCO0FBR0QsT0FMTztBQU1SSSxxQkFOUSw2QkFNVztBQUNqQkMsV0FBR0MsVUFBSCxDQUFjLEVBQUVILCtDQUE2QyxLQUFLTixhQUFwRCxFQUFkO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFXQTtBQUNSLFdBQUtVLGFBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUdvQkMsb0JBQVVDLEdBQVYsQ0FBYyxTQUFkLEM7OztBQUFiakIsb0I7O0FBQ04scUJBQUtDLE1BQUwsR0FBY0QsSUFBZDtBQUNBLHFCQUFLRyxNQUFMLEdBQWMsS0FBS0YsTUFBTCxDQUFZRSxNQUExQjtBQUNBLHFCQUFLQyxhQUFMLEdBQXFCLEtBQUtILE1BQUwsQ0FBWUcsYUFBakM7QUFDQSxxQkFBS2MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSW1CRixvQkFBVUMsR0FBVixDQUFjLGdCQUFkLEM7OztBQUFiakIsb0I7O0FBQ04scUJBQUtFLElBQUwsR0FBWUYsSUFBWjtBQUNBLHFCQUFLa0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHa0JmLE07Ozs7Ozs7dUJBQ0NhLG9CQUFVRyxHQUFWLENBQWMsV0FBZCxFQUNqQjtBQUNFQyx3QkFBTSxNQURSO0FBRUVqQiwwQkFBUUE7QUFGVixpQkFEaUIsQzs7O0FBQWJILG9COztBQUtOLHFCQUFLYyxhQUFMO0FBQ0Esb0JBQUlkLEtBQUtxQixNQUFMLElBQWUsR0FBbkIsRUFBd0I7QUFDdEJDLGdDQUFJQyxLQUFKLENBQVV2QixLQUFLd0IsR0FBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkQrQmhCLGVBQUtpQixJOztrQkFBcEI1QixNIiwiZmlsZSI6ImJ1ZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWRnZXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooTnrpforr7nva4nXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGhlYWRlcjoge30sXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGFtb3VudDogJzAuMDAnLFxuICAgICAgc291cmNlX2Ftb3VudDogMFxuICAgIH1cbiAgIFxuICAgIG1ldGhvZHMgPSB7XG4gICAgICByZWRpcmVjdCAoaWQpIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvYnVkZ2V0cy9jaGlsZF9idWRnZXQ/aWQ9JytpZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHNob3dBbW91bnRNb2RhbCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvZm9ybXMvYnVkZ2V0X2Zvcm0/aWQ9MCZhbW91bnQ9JHt0aGlzLnNvdXJjZV9hbW91bnR9YCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICB0aGlzLmdldEhlYWRlckRhdGEoKVxuICAgICAgdGhpcy5nZXRQYXJlbnRCdWRnZXQoKVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBnZXRIZWFkZXJEYXRhKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ2J1ZGdldHMnKVxuICAgICAgdGhpcy5oZWFkZXIgPSBkYXRhXG4gICAgICB0aGlzLmFtb3VudCA9IHRoaXMuaGVhZGVyLmFtb3VudFxuICAgICAgdGhpcy5zb3VyY2VfYW1vdW50ID0gdGhpcy5oZWFkZXIuc291cmNlX2Ftb3VudFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmVudEJ1ZGdldCgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdidWRnZXRzL3BhcmVudCcpXG4gICAgICB0aGlzLmxpc3QgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlQnVkZ2V0IChhbW91bnQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuUHV0KCdidWRnZXRzLzAnLFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3VzZXInLFxuICAgICAgICAgIGFtb3VudDogYW1vdW50XG4gICAgICAgIH0pXG4gICAgICB0aGlzLmdldEhlYWRlckRhdGEoKVxuICAgICAgaWYgKGRhdGEuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICB0aXAuZXJyb3IoZGF0YS5tc2cpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=