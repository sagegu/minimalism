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

var _wxchartMin = require('./../../utils/wxchart.min.js');

var _wxchartMin2 = _interopRequireDefault(_wxchartMin);

var _empty = require('./../../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var superChart = function (_wepy$page) {
  _inherits(superChart, _wepy$page);

  function superChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, superChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = superChart.__proto__ || Object.getPrototypeOf(superChart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消费报表'
    }, _this.data = {
      chartData: [],
      header: {},
      info: {},
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      categories: [],
      emptyTitle: '找不到数据呢~试试其它',
      showFilter: false
    }, _this.components = {
      empty: _empty2.default
    }, _this.methods = {
      setParams: function setParams(type) {
        type == 'next' ? this.nextMonth() : this.prevMonth();
        this.initChart();
      },
      redirectTo: function redirectTo(category_id) {
        _wepy2.default.navigateTo({
          url: '/pages/statements/filter_statements?year=' + this.year + '&month=' + this.month + '&category_id=' + category_id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(superChart, [{
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

                this.initChart();

              case 4:
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
    key: 'initChart',
    value: function initChart() {
      this.getHeader();
      this.getWeekChartData();
      this.getPieData();
      this.getLineChartData();
      this.getCategoriesData();
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      if (this.month == 12) {
        this.year += 1;
        this.month = 1;
      } else {
        this.month += 1;
      }
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      if (this.month == 1) {
        this.year -= 1;
        this.month = 12;
      } else {
        this.month -= 1;
      }
    }
  }, {
    key: 'getHeader',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('super_chart/header', {
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context2.sent;

                this.header = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHeader() {
        return _ref3.apply(this, arguments);
      }

      return getHeader;
    }()
  }, {
    key: 'getWeekChartData',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('super_chart/week_data', {
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context3.sent;

                if (data.weeks.length > 0) {
                  new _wxchartMin2.default({
                    canvasId: 'weekExpendCanvas',
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

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getWeekChartData() {
        return _ref4.apply(this, arguments);
      }

      return getWeekChartData;
    }()
  }, {
    key: 'getPieData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('super_chart/get_pie_data', {
                  year: this.year,
                  month: this.month
                });

              case 2:
                data = _context4.sent;

                if (data.data.length > 0) this.initPieChart(data.data);
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPieData() {
        return _ref5.apply(this, arguments);
      }

      return getPieData;
    }()
  }, {
    key: 'getLineChartData',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Get('super_chart/line_chart', { year: this.year });

              case 2:
                data = _context5.sent;

                try {
                  if (data.months.length > 0) {
                    this.initLineChart(data);
                  }
                } catch (e) {
                  console.log(e);
                }

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getLineChartData() {
        return _ref6.apply(this, arguments);
      }

      return getLineChartData;
    }()
  }, {
    key: 'getCategoriesData',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wxRequest2.default.Get('super_chart/categories_list', { year: this.year, month: this.month });

              case 2:
                data = _context6.sent;

                this.categories = data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCategoriesData() {
        return _ref7.apply(this, arguments);
      }

      return getCategoriesData;
    }()
  }, {
    key: 'initPieChart',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                new _wxchartMin2.default({
                  canvasId: 'pieCanvas',
                  type: 'pie',
                  series: data,
                  width: this.info.screenWidth,
                  height: 280,
                  legend: true,
                  dataLabel: true
                });

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function initPieChart(_x) {
        return _ref8.apply(this, arguments);
      }

      return initPieChart;
    }()
  }, {
    key: 'initLineChart',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                new _wxchartMin2.default({
                  canvasId: 'expendLineCanvas',
                  type: 'line',
                  categories: data.months,
                  series: [{
                    name: '支出',
                    data: data.expends,
                    color: '#008000'
                  }],
                  yAxis: {
                    title: '金额',
                    min: 0
                  },
                  extra: {
                    lineStyle: 'curve'
                  },
                  width: this.info.screenWidth,
                  height: 280
                });

                new _wxchartMin2.default({
                  canvasId: 'incomeLineCanvas',
                  type: 'line',
                  categories: data.months,
                  series: [{
                    name: '收入',
                    data: data.incomes,
                    color: '#FF0000'
                  }],
                  yAxis: {
                    title: '金额',
                    min: 0
                  },
                  extra: {
                    lineStyle: 'curve'
                  },
                  width: this.info.screenWidth,
                  height: 280
                });

                new _wxchartMin2.default({
                  canvasId: 'surplusLineCanvas',
                  type: 'line',
                  categories: data.months,
                  series: [{
                    name: '结余',
                    data: data.surplus,
                    color: '#cccccc'
                  }],
                  yAxis: {
                    title: '金额',
                    min: 0
                  },
                  extra: {
                    lineStyle: 'curve'
                  },
                  width: this.info.screenWidth,
                  height: 280
                });

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function initLineChart(_x2) {
        return _ref9.apply(this, arguments);
      }

      return initLineChart;
    }()
  }, {
    key: 'toggleFilter',
    value: function toggleFilter() {
      this.showFilter = !this.showFilter;
    }
  }]);

  return superChart;
}(_wepy2.default.page);

exports.default = superChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cGVyX2NoYXJ0LmpzIl0sIm5hbWVzIjpbInN1cGVyQ2hhcnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNoYXJ0RGF0YSIsImhlYWRlciIsImluZm8iLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNhdGVnb3JpZXMiLCJlbXB0eVRpdGxlIiwic2hvd0ZpbHRlciIsImNvbXBvbmVudHMiLCJlbXB0eSIsIkVtcHR5IiwibWV0aG9kcyIsInNldFBhcmFtcyIsInR5cGUiLCJuZXh0TW9udGgiLCJwcmV2TW9udGgiLCJpbml0Q2hhcnQiLCJyZWRpcmVjdFRvIiwiY2F0ZWdvcnlfaWQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImdldFN5c3RlbUluZm8iLCJnZXRIZWFkZXIiLCJnZXRXZWVrQ2hhcnREYXRhIiwiZ2V0UGllRGF0YSIsImdldExpbmVDaGFydERhdGEiLCJnZXRDYXRlZ29yaWVzRGF0YSIsInd4UmVxdWVzdCIsIkdldCIsIiRhcHBseSIsIndlZWtzIiwibGVuZ3RoIiwid3hDaGFydHMiLCJjYW52YXNJZCIsInNlcmllcyIsIm5hbWUiLCJ5QXhpcyIsInRpdGxlIiwibWluIiwiZXh0cmEiLCJsaW5lU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImluaXRQaWVDaGFydCIsIm1vbnRocyIsImluaXRMaW5lQ2hhcnQiLCJlIiwiY29uc29sZSIsImxvZyIsInNjcmVlbldpZHRoIiwibGVnZW5kIiwiZGF0YUxhYmVsIiwiZXhwZW5kcyIsImNvbG9yIiwiaW5jb21lcyIsInN1cnBsdXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FB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LCJmaWxlIjoic3VwZXJfY2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHd4Q2hhcnRzIGZyb20gJ0AvdXRpbHMvd3hjaGFydC5taW4uanMnXG4gIGltcG9ydCBFbXB0eSBmcm9tICdAL2NvbXBvbmVudHMvZW1wdHknXG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzdXBlckNoYXJ0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5raI6LS55oql6KGoJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjaGFydERhdGE6IFtdLFxuICAgICAgaGVhZGVyOiB7fSxcbiAgICAgIGluZm86IHt9LFxuICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIGVtcHR5VGl0bGU6ICfmib7kuI3liLDmlbDmja7lkaJ+6K+V6K+V5YW25a6DJyxcbiAgICAgIHNob3dGaWx0ZXI6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIGVtcHR5OiBFbXB0eVxuXHRcdH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZXRQYXJhbXMgKHR5cGUpIHtcbiAgICAgICAgdHlwZSA9PSAnbmV4dCcgPyB0aGlzLm5leHRNb250aCgpIDogdGhpcy5wcmV2TW9udGgoKVxuICAgICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB9LFxuICAgICAgcmVkaXJlY3RUbyAoY2F0ZWdvcnlfaWQpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvc3RhdGVtZW50cy9maWx0ZXJfc3RhdGVtZW50cz95ZWFyPSR7dGhpcy55ZWFyfSZtb250aD0ke3RoaXMubW9udGh9JmNhdGVnb3J5X2lkPSR7Y2F0ZWdvcnlfaWR9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIG9uU2hvdygpIHtcbiAgICAgIHRoaXMuaW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpXG4gICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgfVxuXG4gICAgaW5pdENoYXJ0ICgpIHtcbiAgICAgIHRoaXMuZ2V0SGVhZGVyKClcbiAgICAgIHRoaXMuZ2V0V2Vla0NoYXJ0RGF0YSgpXG4gICAgICB0aGlzLmdldFBpZURhdGEoKVxuICAgICAgdGhpcy5nZXRMaW5lQ2hhcnREYXRhKClcbiAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllc0RhdGEoKVxuICAgIH1cblxuICAgIG5leHRNb250aCAoKSB7XG4gICAgICBpZiAodGhpcy5tb250aCA9PSAxMikge1xuICAgICAgICB0aGlzLnllYXIgKz0gMVxuICAgICAgICB0aGlzLm1vbnRoID0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb250aCArPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldk1vbnRoICgpIHtcbiAgICAgIGlmICh0aGlzLm1vbnRoID09IDEpIHtcbiAgICAgICAgdGhpcy55ZWFyIC09IDFcbiAgICAgICAgdGhpcy5tb250aCA9IDEyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vbnRoIC09IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L2hlYWRlcicsIHtcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIHRoaXMuaGVhZGVyID0gZGF0YS5kYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0V2Vla0NoYXJ0RGF0YSAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3VwZXJfY2hhcnQvd2Vla19kYXRhJyx7XG4gICAgICAgIHllYXI6IHRoaXMueWVhcixcbiAgICAgICAgbW9udGg6IHRoaXMubW9udGhcbiAgICAgIH0pXG4gICAgICBpZiAoZGF0YS53ZWVrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyB3eENoYXJ0cyh7XG4gICAgICAgICAgY2FudmFzSWQ6ICd3ZWVrRXhwZW5kQ2FudmFzJyxcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgY2F0ZWdvcmllczogZGF0YS53ZWVrcyxcbiAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICBuYW1lOiAn5q+P5ZGo5raI6LS5JyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6ICfmtojotLnph5Hpop0gKOWFgyknLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgbGluZVN0eWxlOiAnY3VydmUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aWR0aDogMzIwLFxuICAgICAgICAgIGhlaWdodDogMjAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBpZURhdGEgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L2dldF9waWVfZGF0YScsIHtcbiAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICBtb250aDogdGhpcy5tb250aFxuICAgICAgfSlcbiAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkgdGhpcy5pbml0UGllQ2hhcnQoZGF0YS5kYXRhKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIGdldExpbmVDaGFydERhdGEgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX2NoYXJ0L2xpbmVfY2hhcnQnLCB7eWVhcjogdGhpcy55ZWFyfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGRhdGEubW9udGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmluaXRMaW5lQ2hhcnQoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENhdGVnb3JpZXNEYXRhICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdXBlcl9jaGFydC9jYXRlZ29yaWVzX2xpc3QnLCB7eWVhcjogdGhpcy55ZWFyLCBtb250aDogdGhpcy5tb250aH0pXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBkYXRhLmRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBpbml0UGllQ2hhcnQgKGRhdGEpIHtcbiAgICAgIG5ldyB3eENoYXJ0cyh7XG4gICAgICAgIGNhbnZhc0lkOiAncGllQ2FudmFzJyxcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHNlcmllczogZGF0YSxcbiAgICAgICAgd2lkdGg6IHRoaXMuaW5mby5zY3JlZW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiAyODAsXG4gICAgICAgIGxlZ2VuZDogdHJ1ZSxcbiAgICAgICAgZGF0YUxhYmVsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0TGluZUNoYXJ0IChkYXRhKSB7XG4gICAgICBuZXcgd3hDaGFydHMoe1xuICAgICAgICBjYW52YXNJZDogJ2V4cGVuZExpbmVDYW52YXMnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGNhdGVnb3JpZXM6IGRhdGEubW9udGhzLFxuICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICBuYW1lOiAn5pSv5Ye6JyxcbiAgICAgICAgICAgIGRhdGE6ICBkYXRhLmV4cGVuZHMsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDgwMDAnXG4gICAgICAgIH1dLFxuICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6ICfph5Hpop0nLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgbGluZVN0eWxlOiAnY3VydmUnXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB0aGlzLmluZm8uc2NyZWVuV2lkdGgsXG4gICAgICAgIGhlaWdodDogMjgwXG4gICAgICB9KTtcblxuICAgICAgbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgY2FudmFzSWQ6ICdpbmNvbWVMaW5lQ2FudmFzJyxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLm1vbnRocyxcbiAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ+aUtuWFpScsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmluY29tZXMsXG4gICAgICAgICAgICBjb2xvcjogJyNGRjAwMDAnXG4gICAgICAgIH1dLFxuICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6ICfph5Hpop0nLFxuICAgICAgICAgICAgbWluOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgbGluZVN0eWxlOiAnY3VydmUnXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB0aGlzLmluZm8uc2NyZWVuV2lkdGgsXG4gICAgICAgIGhlaWdodDogMjgwXG4gICAgICB9KTtcblxuICAgICAgbmV3IHd4Q2hhcnRzKHtcbiAgICAgICAgY2FudmFzSWQ6ICdzdXJwbHVzTGluZUNhbnZhcycsXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgY2F0ZWdvcmllczogZGF0YS5tb250aHMsXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICBuYW1lOiAn57uT5L2ZJyxcbiAgICAgICAgICBkYXRhOiAgZGF0YS5zdXJwbHVzLFxuICAgICAgICAgIGNvbG9yOiAnI2NjY2NjYydcbiAgICAgICAgfV0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+mHkeminScsXG4gICAgICAgICAgICBtaW46IDBcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICBsaW5lU3R5bGU6ICdjdXJ2ZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IHRoaXMuaW5mby5zY3JlZW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiAyODBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUZpbHRlciAoKSB7XG4gICAgICB0aGlzLnNob3dGaWx0ZXIgPSAhdGhpcy5zaG93RmlsdGVyXG4gICAgfVxuICB9XG4iXX0=