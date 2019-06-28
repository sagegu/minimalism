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

var ChildBudget = function (_wepy$page) {
  _inherits(ChildBudget, _wepy$page);

  function ChildBudget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChildBudget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChildBudget.__proto__ || Object.getPrototypeOf(ChildBudget)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预算设置'
    }, _this.data = {
      budget: {},
      childs: [],
      rootId: 0,
      curCategoryId: 0,
      amount: '0.00',
      source_amount: 0
    }, _this.methods = {
      showAmount: function showAmount(id, amount) {
        wx.navigateTo({ url: '/pages/forms/budget_form?id=' + id + '&amount=' + amount + '&root_id=' + this.rootId });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChildBudget, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var id = options.id;
      this.rootId = id;
      this.getData(id);
    }
  }, {
    key: 'getData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('budgets/' + id);

              case 2:
                data = _context.sent;

                this.budget = data.root;
                this.amount = this.budget.amount;
                this.source_amount = this.budget.source_amount;
                this.childs = data.childs;
                this.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData(_x) {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }]);

  return ChildBudget;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ChildBudget , 'pages/budgets/child_budget'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkX2J1ZGdldC5qcyJdLCJuYW1lcyI6WyJDaGlsZEJ1ZGdldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYnVkZ2V0IiwiY2hpbGRzIiwicm9vdElkIiwiY3VyQ2F0ZWdvcnlJZCIsImFtb3VudCIsInNvdXJjZV9hbW91bnQiLCJtZXRob2RzIiwic2hvd0Ftb3VudCIsImlkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsImdldERhdGEiLCJ3eFJlcXVlc3QiLCJHZXQiLCJyb290IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsY0FBUSxFQUZIO0FBR0xDLGNBQVEsQ0FISDtBQUlMQyxxQkFBZSxDQUpWO0FBS0xDLGNBQVEsTUFMSDtBQU1MQyxxQkFBZTtBQU5WLEssUUFlUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxFQURILEVBQ09KLE1BRFAsRUFDZTtBQUNyQkssV0FBR0MsVUFBSCxDQUFjLEVBQUVDLHNDQUFvQ0gsRUFBcEMsZ0JBQWlESixNQUFqRCxpQkFBbUUsS0FBS0YsTUFBMUUsRUFBZDtBQUNEO0FBSE8sSzs7Ozs7MkJBTkZVLE8sRUFBUztBQUNmLFVBQUlKLEtBQUtJLFFBQVFKLEVBQWpCO0FBQ0EsV0FBS04sTUFBTCxHQUFjTSxFQUFkO0FBQ0EsV0FBS0ssT0FBTCxDQUFhTCxFQUFiO0FBQ0Q7Ozs7MkZBUWFBLEU7Ozs7Ozs7dUJBQ09NLG9CQUFVQyxHQUFWLGNBQXlCUCxFQUF6QixDOzs7QUFBYlQsb0I7O0FBQ04scUJBQUtDLE1BQUwsR0FBY0QsS0FBS2lCLElBQW5CO0FBQ0EscUJBQUtaLE1BQUwsR0FBYyxLQUFLSixNQUFMLENBQVlJLE1BQTFCO0FBQ0EscUJBQUtDLGFBQUwsR0FBcUIsS0FBS0wsTUFBTCxDQUFZSyxhQUFqQztBQUNBLHFCQUFLSixNQUFMLEdBQWNGLEtBQUtFLE1BQW5CO0FBQ0EscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENxQ0MsZUFBS0MsSTs7a0JBQXpCdkIsVyIsImZpbGUiOiJjaGlsZF9idWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZEJ1ZGdldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOeul+iuvue9ridcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYnVkZ2V0OiB7fSxcbiAgICAgIGNoaWxkczogW10sXG4gICAgICByb290SWQ6IDAsXG4gICAgICBjdXJDYXRlZ29yeUlkOiAwLFxuICAgICAgYW1vdW50OiAnMC4wMCcsXG4gICAgICBzb3VyY2VfYW1vdW50OiAwXG4gICAgfVxuXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICBsZXQgaWQgPSBvcHRpb25zLmlkXG4gICAgICB0aGlzLnJvb3RJZCA9IGlkXG4gICAgICB0aGlzLmdldERhdGEoaWQpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dBbW91bnQoaWQsIGFtb3VudCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL2Zvcm1zL2J1ZGdldF9mb3JtP2lkPSR7aWR9JmFtb3VudD0ke2Ftb3VudH0mcm9vdF9pZD0ke3RoaXMucm9vdElkfWAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXREYXRhKGlkKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldChgYnVkZ2V0cy8ke2lkfWApXG4gICAgICB0aGlzLmJ1ZGdldCA9IGRhdGEucm9vdFxuICAgICAgdGhpcy5hbW91bnQgPSB0aGlzLmJ1ZGdldC5hbW91bnRcbiAgICAgIHRoaXMuc291cmNlX2Ftb3VudCA9IHRoaXMuYnVkZ2V0LnNvdXJjZV9hbW91bnRcbiAgICAgIHRoaXMuY2hpbGRzID0gZGF0YS5jaGlsZHNcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==