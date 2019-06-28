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

var BudgetForm = function (_wepy$page) {
  _inherits(BudgetForm, _wepy$page);

  function BudgetForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BudgetForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BudgetForm.__proto__ || Object.getPrototypeOf(BudgetForm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预算设置'
    }, _this.data = {
      amount: 0,
      category_id: 0,
      rootId: 0
    }, _this.methods = {
      formSubmit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var amount;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  amount = e.detail.value.amount;

                  if (this.category_id == 0) {
                    this.updateRootBudget(amount);
                  } else {
                    this.updateCategoryBudget(amount);
                  }

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function formSubmit(_x) {
          return _ref2.apply(this, arguments);
        }

        return formSubmit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BudgetForm, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.amount = options.amount;
      this.category_id = options.id;
      this.rootId = options.root_id;
    }
  }, {
    key: 'updateRootBudget',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(amount) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Put('budgets/0', { type: 'user', amount: amount });

              case 2:
                res = _context2.sent;

                if (res.status === 200) {
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                } else {
                  _tip2.default.error(res.msg);
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateRootBudget(_x2) {
        return _ref3.apply(this, arguments);
      }

      return updateRootBudget;
    }()
  }, {
    key: 'updateCategoryBudget',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(amount) {
        var res, pages, prevPage;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Put('budgets/0', {
                  type: 'category',
                  category_id: this.category_id,
                  amount: amount
                });

              case 2:
                res = _context3.sent;

                if (res.status == 200) {
                  pages = getCurrentPages();
                  prevPage = pages[pages.length - 2];

                  prevPage.getData(this.rootId);
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                } else {
                  _tip2.default.error(res.msg);
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateCategoryBudget(_x3) {
        return _ref4.apply(this, arguments);
      }

      return updateCategoryBudget;
    }()
  }]);

  return BudgetForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(BudgetForm , 'pages/forms/budget_form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdldF9mb3JtLmpzIl0sIm5hbWVzIjpbIkJ1ZGdldEZvcm0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFtb3VudCIsImNhdGVnb3J5X2lkIiwicm9vdElkIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ1cGRhdGVSb290QnVkZ2V0IiwidXBkYXRlQ2F0ZWdvcnlCdWRnZXQiLCJvcHRpb25zIiwiaWQiLCJyb290X2lkIiwid3hSZXF1ZXN0IiwiUHV0IiwidHlwZSIsInJlcyIsInN0YXR1cyIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInRpcCIsImVycm9yIiwibXNnIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsImdldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLG1CQUFhLENBRlI7QUFHTEMsY0FBUTtBQUhILEssUUFZUEMsTyxHQUFVO0FBQ0ZDLGdCQURFO0FBQUEsNkZBQ1VDLENBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZMLHdCQUZFLEdBRU9LLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlUCxNQUZ0Qjs7QUFHTixzQkFBSSxLQUFLQyxXQUFMLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLHlCQUFLTyxnQkFBTCxDQUFzQlIsTUFBdEI7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtTLG9CQUFMLENBQTBCVCxNQUExQjtBQUNEOztBQVBLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7MkJBTkZVLE8sRUFBUztBQUNmLFdBQUtWLE1BQUwsR0FBY1UsUUFBUVYsTUFBdEI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CUyxRQUFRQyxFQUEzQjtBQUNBLFdBQUtULE1BQUwsR0FBY1EsUUFBUUUsT0FBdEI7QUFDRDs7Ozs0RkFhc0JaLE07Ozs7Ozs7dUJBQ0hhLG9CQUFVQyxHQUFWLENBQWMsV0FBZCxFQUEyQixFQUFFQyxNQUFNLE1BQVIsRUFBZ0JmLFFBQVFBLE1BQXhCLEVBQTNCLEM7OztBQUFaZ0IsbUI7O0FBQ04sb0JBQUlBLElBQUlDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QkMsaUNBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLDJCQUFPO0FBRFMsbUJBQWxCO0FBR0QsaUJBSkQsTUFJTztBQUNMQyxnQ0FBSUMsS0FBSixDQUFVTixJQUFJTyxHQUFkO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR3lCdkIsTTs7Ozs7Ozt1QkFDUmEsb0JBQVVDLEdBQVYsQ0FBYyxXQUFkLEVBQ2hCO0FBQ0VDLHdCQUFNLFVBRFI7QUFFRWQsK0JBQWEsS0FBS0EsV0FGcEI7QUFHRUQsMEJBQVFBO0FBSFYsaUJBRGdCLEM7OztBQUFaZ0IsbUI7O0FBTU4sb0JBQUlBLElBQUlDLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNkTyx1QkFEYyxHQUNOQyxpQkFETTtBQUVkQywwQkFGYyxHQUVIRixNQUFNQSxNQUFNRyxNQUFOLEdBQWUsQ0FBckIsQ0FGRzs7QUFHcEJELDJCQUFTRSxPQUFULENBQWlCLEtBQUsxQixNQUF0QjtBQUNEZ0IsaUNBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLDJCQUFPO0FBRFMsbUJBQWxCO0FBR0QsaUJBUEQsTUFPTztBQUNMQyxnQ0FBSUMsS0FBSixDQUFVTixJQUFJTyxHQUFkO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2RG1DTCxlQUFLVyxJOztrQkFBeEJqQyxVIiwiZmlsZSI6ImJ1ZGdldF9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWRnZXRGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKE566X6K6+572uJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBhbW91bnQ6IDAsXG4gICAgICBjYXRlZ29yeV9pZDogMCxcbiAgICAgIHJvb3RJZDogMFxuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy5hbW91bnQgPSBvcHRpb25zLmFtb3VudFxuICAgICAgdGhpcy5jYXRlZ29yeV9pZCA9IG9wdGlvbnMuaWRcbiAgICAgIHRoaXMucm9vdElkID0gb3B0aW9ucy5yb290X2lkXG4gICAgfVxuICAgIFxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBmb3JtU3VibWl0IChlKSB7XG4gICAgICAgIGxldCBhbW91bnQgPSBlLmRldGFpbC52YWx1ZS5hbW91bnRcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlfaWQgPT0gMCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUm9vdEJ1ZGdldChhbW91bnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDYXRlZ29yeUJ1ZGdldChhbW91bnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVSb290QnVkZ2V0KGFtb3VudCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LlB1dCgnYnVkZ2V0cy8wJywgeyB0eXBlOiAndXNlcicsIGFtb3VudDogYW1vdW50fSlcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IocmVzLm1zZylcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBkYXRlQ2F0ZWdvcnlCdWRnZXQgKGFtb3VudCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LlB1dCgnYnVkZ2V0cy8wJyxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgY2F0ZWdvcnlfaWQ6IHRoaXMuY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgYW1vdW50OiBhbW91bnRcbiAgICAgICAgfSlcbiAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxuICAgICAgICAgcHJldlBhZ2UuZ2V0RGF0YSh0aGlzLnJvb3RJZClcbiAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IocmVzLm1zZylcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuIl19