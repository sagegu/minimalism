'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _wxchartMin = require('./../../utils/wxchart.min.js');

var _wxchartMin2 = _interopRequireDefault(_wxchartMin);

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

var _empty = require('./../../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthsIndex = function (_wepy$page) {
  _inherits(MonthsIndex, _wepy$page);

  function MonthsIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthsIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthsIndex.__proto__ || Object.getPrototypeOf(MonthsIndex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '月账单'
    }, _this.data = {
      info: {},
      year: 0,
      month: 0,
      dashboard: {},
      expendChart: {},
      dayChart: {},
      weekChart: {},
      surplusChart: {},
      budgetChart: {},
      totalAsset: {},
      userinfo: {},
      lastTen: [],
      emptyTitle: '找不到相关数据呢，请多记账吧：）'
    }, _this.$repeat = { "lastTen": { "com": "StatementItem", "props": "statement.sync" } }, _this.$props = { "StatementItem": { "v-bind:statement.sync": { "value": "item", "type": "item", "for": "lastTen", "item": "item", "index": "index", "key": "index" } }, "Empty": { "xmlns:v-bind": "", "v-bind:title.sync": "emptyTitle" } }, _this.$events = {}, _this.components = {
      StatementItem: _statement2.default,
      Empty: _empty2.default
    }, _this.computed = {
      expendPercent: function expendPercent() {
        var data = this.dashboard.expend;
        var total = this.dashboard.income * 1 + this.dashboard.expend * 1 + Math.abs(this.dashboard.surplus * 1);
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      },
      incomePercent: function incomePercent() {
        var data = this.dashboard.income;
        var total = this.dashboard.income * 1 + this.dashboard.expend * 1 + Math.abs(this.dashboard.surplus * 1);
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      },
      surplusPercent: function surplusPercent() {
        var data = Math.abs(this.dashboard.surplus * 1);
        var total = this.dashboard.income * 1 + this.dashboard.expend * 1 + Math.abs(this.dashboard.surplus * 1);
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      },
      assetPercent: function assetPercent() {
        var data = this.totalAsset.all_asset * 1;
        var total = this.totalAsset.all_asset * 1 + this.totalAsset.net_worth * 1 + this.totalAsset.total_liability * 1;
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      },
      netPercent: function netPercent() {
        var data = this.totalAsset.net_worth * 1;
        var total = this.totalAsset.all_asset * 1 + this.totalAsset.net_worth * 1 + this.totalAsset.total_liability * 1;
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      },
      debtPercent: function debtPercent() {
        var data = this.totalAsset.total_liability * 1;
        var total = this.totalAsset.all_asset * 1 + this.totalAsset.net_worth * 1 + this.totalAsset.total_liability * 1;
        if (total == 0 || data == 0) {
          return '10%';
        } else {
          return data * 100 / total + '%';
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthsIndex, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.year = options.year;
      this.month = options.month;
      this.information();
      this.initDashboardChart();
      this.initExpendChart();
      this.initDayAvgChart();
      this.initWeekAvgChart();
      this.initSurplusChart();
      this.initBudgetChart();
      this.initAssetAllChart();
      this.initLast10();
      this.markRead(options.id);
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getSystemInfo();

              case 2:
                this.info = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'initDashboardChart',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'dashboard_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context2.sent;

                this.dashboard = data;
                this.$apply();
                if (data.data != null) {
                  new _wxchartMin2.default({
                    canvasId: 'monthChart',
                    type: 'pie',
                    series: data.data,
                    width: this.info.screenWidth,
                    height: 280
                  });
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initDashboardChart() {
        return _ref3.apply(this, arguments);
      }

      return initDashboardChart;
    }()
  }, {
    key: 'initExpendChart',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'expend_compare',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context3.sent;

                this.expendChart = data;
                this.$apply();
                if (data.categories.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'expendChart',
                    type: 'column',
                    categories: data.categories,
                    series: [{
                      name: '上月',
                      data: data.last_month
                    }, {
                      name: '当月',
                      data: data.current_month
                    }],
                    yAxis: {
                      format: function format(val) {
                        return val + '元';
                      }
                    },
                    width: this.info.screenWidth,
                    height: 200
                  });
                }

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initExpendChart() {
        return _ref4.apply(this, arguments);
      }

      return initExpendChart;
    }()
  }, {
    key: 'initDayAvgChart',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'day_avg_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context4.sent;

                this.dayChart = data;
                this.$apply();
                if (data.months.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'dayAvgChart',
                    type: 'line',
                    categories: data.months,
                    series: [{
                      name: '日均消费',
                      data: data.data
                    }],
                    yAxis: {
                      title: '消费金额 (元)',
                      min: 0
                    },
                    extra: {
                      lineStyle: 'curve'
                    },
                    width: 320,
                    height: 200
                  });
                }

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function initDayAvgChart() {
        return _ref5.apply(this, arguments);
      }

      return initDayAvgChart;
    }()
  }, {
    key: 'initWeekAvgChart',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'week_avg_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context5.sent;

                this.weekChart = data;
                this.$apply();
                if (data.weeks.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'weekChart',
                    type: 'line',
                    categories: data.weeks,
                    series: [{
                      name: '每周消费',
                      data: data.data
                    }],
                    yAxis: {
                      title: '消费金额 (元)',
                      min: 0
                    },
                    extra: {
                      lineStyle: 'curve'
                    },
                    width: 320,
                    height: 200
                  });
                }

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function initWeekAvgChart() {
        return _ref6.apply(this, arguments);
      }

      return initWeekAvgChart;
    }()
  }, {
    key: 'initSurplusChart',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'month_surplus_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context6.sent;

                this.surplusChart = data;
                this.$apply();
                if (data.months.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'surplusChart',
                    type: 'line',
                    categories: data.months,
                    series: [{
                      name: '月均消费',
                      data: data.data
                    }],
                    yAxis: {
                      title: '消费金额 (元)',
                      min: 0
                    },
                    extra: {
                      lineStyle: 'curve'
                    },
                    width: 320,
                    height: 200
                  });
                }

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function initSurplusChart() {
        return _ref7.apply(this, arguments);
      }

      return initSurplusChart;
    }()
  }, {
    key: 'initAssetAllChart',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'asset_total_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context7.sent;

                this.totalAsset = data;
                this.$apply();
                if (data.data != null) {
                  new _wxchartMin2.default({
                    canvasId: 'assetAllChart',
                    type: 'ring',
                    series: data.data,
                    yAxis: {
                      title: '消费金额 (元)',
                      min: 0
                    },
                    width: 320,
                    height: 280,
                    dataLabel: false
                  });
                }

              case 6:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function initAssetAllChart() {
        return _ref8.apply(this, arguments);
      }

      return initAssetAllChart;
    }()
  }, {
    key: 'initBudgetChart',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'budget_chart',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context8.sent;

                this.budgetChart = data;
                this.$apply();
                if (data.categories.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'budgetChart',
                    type: 'column',
                    categories: data.categories,
                    series: [{
                      name: '预算',
                      data: data.budget
                    }, {
                      name: '实际消费',
                      data: data.amount
                    }],
                    yAxis: {
                      format: function format(val) {
                        return val + '元';
                      }
                    },
                    width: this.info.screenWidth,
                    height: 200
                  });
                }

              case 6:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function initBudgetChart() {
        return _ref9.apply(this, arguments);
      }

      return initBudgetChart;
    }()
  }, {
    key: 'information',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'information',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context9.sent;

                this.userinfo = data;
                this.$apply();

              case 5:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function information() {
        return _ref10.apply(this, arguments);
      }

      return information;
    }()
  }, {
    key: 'initLast10',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _wxRequest2.default.Get('super_chart/month_chart', {
                  type: 'month_last_10',
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context10.sent;

                this.lastTen = data;
                this.$apply();

              case 5:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function initLast10() {
        return _ref11.apply(this, arguments);
      }

      return initLast10;
    }()
  }, {
    key: 'markRead',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(id) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _wxRequest2.default.Get('message/' + id, {});

              case 2:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function markRead(_x) {
        return _ref12.apply(this, arguments);
      }

      return markRead;
    }()
  }]);

  return MonthsIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MonthsIndex , 'pages/months/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1vbnRoc0luZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbmZvIiwieWVhciIsIm1vbnRoIiwiZGFzaGJvYXJkIiwiZXhwZW5kQ2hhcnQiLCJkYXlDaGFydCIsIndlZWtDaGFydCIsInN1cnBsdXNDaGFydCIsImJ1ZGdldENoYXJ0IiwidG90YWxBc3NldCIsInVzZXJpbmZvIiwibGFzdFRlbiIsImVtcHR5VGl0bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGF0ZW1lbnRJdGVtIiwiRW1wdHkiLCJjb21wdXRlZCIsImV4cGVuZFBlcmNlbnQiLCJleHBlbmQiLCJ0b3RhbCIsImluY29tZSIsIk1hdGgiLCJhYnMiLCJzdXJwbHVzIiwiaW5jb21lUGVyY2VudCIsInN1cnBsdXNQZXJjZW50IiwiYXNzZXRQZXJjZW50IiwiYWxsX2Fzc2V0IiwibmV0X3dvcnRoIiwidG90YWxfbGlhYmlsaXR5IiwibmV0UGVyY2VudCIsImRlYnRQZXJjZW50Iiwib3B0aW9ucyIsImluZm9ybWF0aW9uIiwiaW5pdERhc2hib2FyZENoYXJ0IiwiaW5pdEV4cGVuZENoYXJ0IiwiaW5pdERheUF2Z0NoYXJ0IiwiaW5pdFdlZWtBdmdDaGFydCIsImluaXRTdXJwbHVzQ2hhcnQiLCJpbml0QnVkZ2V0Q2hhcnQiLCJpbml0QXNzZXRBbGxDaGFydCIsImluaXRMYXN0MTAiLCJtYXJrUmVhZCIsImlkIiwid2VweSIsImdldFN5c3RlbUluZm8iLCJ3eFJlcXVlc3QiLCJHZXQiLCJ0eXBlIiwiJGFwcGx5Iiwid3hDaGFydHMiLCJjYW52YXNJZCIsInNlcmllcyIsIndpZHRoIiwic2NyZWVuV2lkdGgiLCJoZWlnaHQiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwibmFtZSIsImxhc3RfbW9udGgiLCJjdXJyZW50X21vbnRoIiwieUF4aXMiLCJmb3JtYXQiLCJ2YWwiLCJtb250aHMiLCJ0aXRsZSIsIm1pbiIsImV4dHJhIiwibGluZVN0eWxlIiwid2Vla3MiLCJkYXRhTGFiZWwiLCJidWRnZXQiLCJhbW91bnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxZQUFNLENBRkQ7QUFHTEMsYUFBTyxDQUhGO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLGlCQUFXLEVBUE47QUFRTEMsb0JBQWMsRUFSVDtBQVNMQyxtQkFBYSxFQVRSO0FBVUxDLGtCQUFZLEVBVlA7QUFXTEMsZ0JBQVUsRUFYTDtBQVlMQyxlQUFTLEVBWko7QUFhTEMsa0JBQVk7QUFiUCxLLFFBOFBSQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxlQUFQLEVBQXVCLFNBQVEsZ0JBQS9CLEVBQVgsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyx5QkFBd0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFNBQXBDLEVBQThDLFFBQU8sTUFBckQsRUFBNEQsU0FBUSxPQUFwRSxFQUE0RSxPQUFNLE9BQWxGLEVBQXpCLEVBQWpCLEVBQXNJLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsWUFBdkMsRUFBOUksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsd0NBRFE7QUFFUkM7QUFGUSxLLFFBS1ZDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDUTtBQUNmLFlBQUlyQixPQUFPLEtBQUtJLFNBQUwsQ0FBZWtCLE1BQTFCO0FBQ0EsWUFBSUMsUUFBUSxLQUFLbkIsU0FBTCxDQUFlb0IsTUFBZixHQUFzQixDQUF0QixHQUEwQixLQUFLcEIs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QUFFMURsRCx3QkFBTSxLQUFLQSxJQUYrQztBQUcxREMseUJBQU8sS0FBS0E7QUFIOEMsaUJBQXpDLEM7OztBQUFiSCxvQjs7QUFLTixxQkFBS1ksT0FBTCxHQUFlWixJQUFmO0FBQ0EscUJBQUtxRCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhGQUdhTixFOzs7Ozs7dUJBQ1BHLG9CQUFVQyxHQUFWLGNBQXlCSixFQUF6QixFQUErQixFQUEvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaFErQkMsZUFBSzZCLEk7O2tCQUF6QmhGLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHd4Q2hhcnRzIGZyb20gJ0AvdXRpbHMvd3hjaGFydC5taW4uanMnXG4gIGltcG9ydCBTdGF0ZW1lbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9pbmRleC9zdGF0ZW1lbnQnXG4gIGltcG9ydCBFbXB0eSBmcm9tICdAL2NvbXBvbmVudHMvZW1wdHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoc0luZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pyI6LSm5Y2VJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbmZvOiB7fSxcbiAgICAgIHllYXI6IDAsXG4gICAgICBtb250aDogMCxcbiAgICAgIGRhc2hib2FyZDoge30sXG4gICAgICBleHBlbmRDaGFydDoge30sXG4gICAgICBkYXlDaGFydDoge30sXG4gICAgICB3ZWVrQ2hhcnQ6IHt9LFxuICAgICAgc3VycGx1c0NoYXJ0OiB7fSxcbiAgICAgIGJ1ZGdldENoYXJ0OiB7fSxcbiAgICAgIHRvdGFsQXNzZXQ6IHt9LFxuICAgICAgdXNlcmluZm86IHt9LFxuICAgICAgbGFzdFRlbjogW10sXG4gICAgICBlbXB0eVRpdGxlOiAn5om+5LiN5Yiw55u45YWz5pWw5o2u5ZGi77yM6K+35aSa6K6w6LSm5ZCn77ya77yJJ1xuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy55ZWFyID0gb3B0aW9ucy55ZWFyXG4gICAgICB0aGlzLm1vbnRoID0gb3B0aW9ucy5tb250aFxuICAgICAgdGhpcy5pbmZvcm1hdGlvbigpXG4gICAgICB0aGlzLmluaXREYXNoYm9hcmRDaGFydCgpXG4gICAgICB0aGlzLmluaXRFeHBlbmRDaGFydCgpXG4gICAgICB0aGlzLmluaXREYXlBdmdDaGFydCgpXG4gICAgICB0aGlzLmluaXRXZWVrQXZnQ2hhcnQoKVxuICAgICAgdGhpcy5pbml0U3VycGx1c0NoYXJ0KClcbiAgICAgIHRoaXMuaW5pdEJ1ZGdldENoYXJ0KClcbiAgICAgIHRoaXMuaW5pdEFzc2V0QWxsQ2hhcnQoKVxuICAgICAgdGhpcy5pbml0TGFzdDEwKClcbiAgICAgIHRoaXMubWFya1JlYWQob3B0aW9ucy5pZClcbiAgICB9XG5cbiAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgdGhpcy5pbmZvID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKClcbiAgICB9XG5cbiAgICBhc3luYyBpbml0RGFzaGJvYXJkQ2hhcnQgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L21vbnRoX2NoYXJ0Jywge1xuICAgICAgICB0eXBlOiAnZGFzaGJvYXJkX2NoYXJ0JyxcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIHRoaXMuZGFzaGJvYXJkID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgaWYgKGRhdGEuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgIG5ldyB3eENoYXJ0cyh7XG4gICAgICAgICAgY2FudmFzSWQ6ICdtb250aENoYXJ0JyxcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBzZXJpZXM6IGRhdGEuZGF0YSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5pbmZvLnNjcmVlbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogMjgwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEV4cGVuZENoYXJ0ICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdXBlcl9jaGFydC9tb250aF9jaGFydCcsIHtcbiAgICAgICAgdHlwZTogJ2V4cGVuZF9jb21wYXJlJyxcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIHRoaXMuZXhwZW5kQ2hhcnQgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBpZiAoZGF0YS5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgICBjYW52YXNJZDogJ2V4cGVuZENoYXJ0JyxcbiAgICAgICAgICB0eXBlOiAnY29sdW1uJyxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXG4gICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICBuYW1lOiAn5LiK5pyIJyxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5sYXN0X21vbnRoXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBuYW1lOiAn5b2T5pyIJyxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5jdXJyZW50X21vbnRoXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsICsgJ+WFgyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5pbmZvLnNjcmVlbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogMjAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGluaXREYXlBdmdDaGFydCAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3VwZXJfY2hhcnQvbW9udGhfY2hhcnQnLCB7XG4gICAgICAgIHR5cGU6ICdkYXlfYXZnX2NoYXJ0JyxcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIHRoaXMuZGF5Q2hhcnQgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBpZiAoZGF0YS5tb250aHMubGVuZ3RoID4gMCkge1xuICAgICAgICBuZXcgd3hDaGFydHMoe1xuICAgICAgICAgIGNhbnZhc0lkOiAnZGF5QXZnQ2hhcnQnLFxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLm1vbnRocyxcbiAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICBuYW1lOiAn5pel5Z2H5raI6LS5JyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6ICfmtojotLnph5Hpop0gKOWFgyknLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgbGluZVN0eWxlOiAnY3VydmUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aWR0aDogMzIwLFxuICAgICAgICAgIGhlaWdodDogMjAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGluaXRXZWVrQXZnQ2hhcnQgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L21vbnRoX2NoYXJ0Jywge1xuICAgICAgICB0eXBlOiAnd2Vla19hdmdfY2hhcnQnLFxuICAgICAgICB5ZWFyOiB0aGlzLnllYXIsXG4gICAgICAgIG1vbnRoOiB0aGlzLm1vbnRoXG4gICAgICB9KVxuICAgICAgdGhpcy53ZWVrQ2hhcnQgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBpZiAoZGF0YS53ZWVrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyB3eENoYXJ0cyh7XG4gICAgICAgICAgY2FudmFzSWQ6ICd3ZWVrQ2hhcnQnLFxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLndlZWtzLFxuICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIG5hbWU6ICfmr4/lkajmtojotLknLFxuICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+a2iOi0uemHkeminSAo5YWDKScsXG4gICAgICAgICAgICBtaW46IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICBsaW5lU3R5bGU6ICdjdXJ2ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpZHRoOiAzMjAsXG4gICAgICAgICAgaGVpZ2h0OiAyMDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdFN1cnBsdXNDaGFydCAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3VwZXJfY2hhcnQvbW9udGhfY2hhcnQnLCB7XG4gICAgICAgIHR5cGU6ICdtb250aF9zdXJwbHVzX2NoYXJ0JyxcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIHRoaXMuc3VycGx1c0NoYXJ0ID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgaWYgKGRhdGEubW9udGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgICBjYW52YXNJZDogJ3N1cnBsdXNDaGFydCcsXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGRhdGEubW9udGhzLFxuICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIG5hbWU6ICfmnIjlnYfmtojotLknLFxuICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5raI6LS56YeR6aKdICjlhYMpJyxcbiAgICAgICAgICAgIG1pbjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICAgIGxpbmVTdHlsZTogJ2N1cnZlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBpbml0QXNzZXRBbGxDaGFydCAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3VwZXJfY2hhcnQvbW9udGhfY2hhcnQnLCB7XG4gICAgICAgIHR5cGU6ICdhc3NldF90b3RhbF9jaGFydCcsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMubW9udGhcbiAgICAgIH0pXG4gICAgICB0aGlzLnRvdGFsQXNzZXQgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBpZiAoZGF0YS5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgICBjYW52YXNJZDogJ2Fzc2V0QWxsQ2hhcnQnLFxuICAgICAgICAgIHR5cGU6ICdyaW5nJyxcbiAgICAgICAgICBzZXJpZXM6IGRhdGEuZGF0YSxcbiAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6ICfmtojotLnph5Hpop0gKOWFgyknLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aWR0aDogMzIwLFxuICAgICAgICAgIGhlaWdodDogMjgwLFxuICAgICAgICAgIGRhdGFMYWJlbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEJ1ZGdldENoYXJ0ICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdXBlcl9jaGFydC9tb250aF9jaGFydCcsIHtcbiAgICAgICAgdHlwZTogJ2J1ZGdldF9jaGFydCcsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMubW9udGhcbiAgICAgIH0pXG4gICAgICB0aGlzLmJ1ZGdldENoYXJ0ID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgaWYgKGRhdGEuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyB3eENoYXJ0cyh7XG4gICAgICAgICAgY2FudmFzSWQ6ICdidWRnZXRDaGFydCcsXG4gICAgICAgICAgdHlwZTogJ2NvbHVtbicsXG4gICAgICAgICAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxuICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgbmFtZTogJ+mihOeulycsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEuYnVkZ2V0XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBuYW1lOiAn5a6e6ZmF5raI6LS5JyxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5hbW91bnRcbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWwgKyAn5YWDJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmluZm8uc2NyZWVuV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiAyMDBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBpbmZvcm1hdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3VwZXJfY2hhcnQvbW9udGhfY2hhcnQnLCB7XG4gICAgICAgIHR5cGU6ICdpbmZvcm1hdGlvbicsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMubW9udGhcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJpbmZvID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIGluaXRMYXN0MTAgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L21vbnRoX2NoYXJ0Jywge1xuICAgICAgICB0eXBlOiAnbW9udGhfbGFzdF8xMCcsXG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMubW9udGhcbiAgICAgIH0pXG4gICAgICB0aGlzLmxhc3RUZW4gPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgbWFya1JlYWQoaWQpIHtcbiAgICAgIGF3YWl0IHd4UmVxdWVzdC5HZXQoYG1lc3NhZ2UvJHtpZH1gLCB7fSlcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJsYXN0VGVuXCI6e1wiY29tXCI6XCJTdGF0ZW1lbnRJdGVtXCIsXCJwcm9wc1wiOlwic3RhdGVtZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJTdGF0ZW1lbnRJdGVtXCI6e1widi1iaW5kOnN0YXRlbWVudC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGFzdFRlblwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcIkVtcHR5XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJlbXB0eVRpdGxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXRlbWVudEl0ZW0sXG4gICAgICBFbXB0eVxuICAgIH1cbiAgICBcbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGV4cGVuZFBlcmNlbnQgKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGFzaGJvYXJkLmV4cGVuZFxuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLmRhc2hib2FyZC5pbmNvbWUqMSArIHRoaXMuZGFzaGJvYXJkLmV4cGVuZCoxICsgTWF0aC5hYnModGhpcy5kYXNoYm9hcmQuc3VycGx1cyoxKVxuICAgICAgICBpZiAodG90YWwgPT0gMCB8fCBkYXRhID09IDApIHtcbiAgICAgICAgICByZXR1cm4gJzEwJSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAkeyhkYXRhICogMTAwIC8gdG90YWwpfSVgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbmNvbWVQZXJjZW50ICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhc2hib2FyZC5pbmNvbWVcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5kYXNoYm9hcmQuaW5jb21lKjEgKyB0aGlzLmRhc2hib2FyZC5leHBlbmQqMSArIE1hdGguYWJzKHRoaXMuZGFzaGJvYXJkLnN1cnBsdXMqMSlcbiAgICAgICAgaWYgKHRvdGFsID09IDAgfHwgZGF0YSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcxMCUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHsoZGF0YSAqIDEwMCAvIHRvdGFsKX0lYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VycGx1c1BlcmNlbnQgKCkge1xuICAgICAgICBsZXQgZGF0YSA9IE1hdGguYWJzKHRoaXMuZGFzaGJvYXJkLnN1cnBsdXMqMSlcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5kYXNoYm9hcmQuaW5jb21lKjEgKyB0aGlzLmRhc2hib2FyZC5leHBlbmQqMSArIE1hdGguYWJzKHRoaXMuZGFzaGJvYXJkLnN1cnBsdXMqMSlcbiAgICAgICAgaWYgKHRvdGFsID09IDAgfHwgZGF0YSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcxMCUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHsoZGF0YSAqIDEwMCAvIHRvdGFsKX0lYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXNzZXRQZXJjZW50ICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRvdGFsQXNzZXQuYWxsX2Fzc2V0ICogMVxuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLnRvdGFsQXNzZXQuYWxsX2Fzc2V0ICogMSArIHRoaXMudG90YWxBc3NldC5uZXRfd29ydGggKiAxICsgdGhpcy50b3RhbEFzc2V0LnRvdGFsX2xpYWJpbGl0eSAqIDFcbiAgICAgICAgaWYgKHRvdGFsID09IDAgfHwgZGF0YSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcxMCUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHsoZGF0YSAqIDEwMCAvIHRvdGFsKX0lYFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbmV0UGVyY2VudCAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy50b3RhbEFzc2V0Lm5ldF93b3J0aCAqIDFcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy50b3RhbEFzc2V0LmFsbF9hc3NldCAqIDEgKyB0aGlzLnRvdGFsQXNzZXQubmV0X3dvcnRoICogMSArIHRoaXMudG90YWxBc3NldC50b3RhbF9saWFiaWxpdHkgKiAxXG4gICAgICAgIGlmICh0b3RhbCA9PSAwIHx8IGRhdGEgPT0gMCkge1xuICAgICAgICAgIHJldHVybiAnMTAlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYCR7KGRhdGEgKiAxMDAgLyB0b3RhbCl9JWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlYnRQZXJjZW50ICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRvdGFsQXNzZXQudG90YWxfbGlhYmlsaXR5ICogMVxuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLnRvdGFsQXNzZXQuYWxsX2Fzc2V0ICogMSArIHRoaXMudG90YWxBc3NldC5uZXRfd29ydGggKiAxICsgdGhpcy50b3RhbEFzc2V0LnRvdGFsX2xpYWJpbGl0eSAqIDFcbiAgICAgICAgaWYgKHRvdGFsID09IDAgfHwgZGF0YSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcxMCUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHsoZGF0YSAqIDEwMCAvIHRvdGFsKX0lYFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=