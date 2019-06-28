'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _empty = require('./../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _chart_column = require('./../components/chart_column.js');

var _chart_column2 = _interopRequireDefault(_chart_column);

var _statement = require('./../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NowDate = new Date();

var Chart = function (_wepy$page) {
	_inherits(Chart, _wepy$page);

	function Chart() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Chart);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chart.__proto__ || Object.getPrototypeOf(Chart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
			navigationBarTitleText: '日历统计',
			"usingComponents": {
				"calendar": "plugin://calendar/calendar"
			}
		}, _this.data = {
			today: NowDate.getDate(),
			tabActive: 'single',
			startColor: '#FF7F00',
			endColor: '#8B8B83',
			days: [],
			mutipleData: [],
			singleData: [],
			singleList: [],
			daySelect: []
		}, _this.methods = {
			dayClick: function dayClick(event) {
				var detail = event.detail;
				var dataLen = this.daySelect.length;
				var curObj = this.daySelectObject(detail.year, detail.month, detail.day, '');
				if (dataLen == 1) {
					// 插入起始日期
					curObj.background = this.startColor;
					this.daySelect.push(curObj);
				} else if (dataLen == 2) {
					// 插入结束日期
					var start = this.daySelect[1];
					var startDate = new Date(start.year + '-' + start.mon + '-' + start.day);
					var choseDate = new Date(detail.year + '-' + detail.month + '-' + detail.day);
					if (startDate < choseDate) {
						curObj.background = this.endColor;
						this.daySelect.push(curObj);
					} else {
						this.daySelect[1].background = this.endColor;
						curObj.background = this.startColor;
						this.daySelect.splice(1, 0, curObj);
					}
				} else {
					// 起始日期和结束日期存在的情况下插入..
					var _start = this.daySelect[1];
					var end = this.daySelect[2];
					var _startDate = new Date(_start.year + '-' + _start.mon + '-' + _start.day);
					var endDate = new Date(end.year + '-' + end.mon + '-' + end.day);
					var curDate = new Date(detail.year + '-' + detail.month + '-' + detail.day);
					if (curDate > endDate) {
						curObj.background = this.endColor;
						this.daySelect[2] = curObj;
					} else if (curDate.getTime() == endDate.getTime()) {
						this.daySelect.splice(1, 1);
					} else if (curDate.getTime() == _startDate.getTime()) {
						this.daySelect.splice(2, 1);
					} else {
						curObj.background = this.startColor;
						this.daySelect[1] = curObj;
					}
				}
				this.getChart();
			},

			changeTab: function changeTab(item) {
				this.tabActive = item;
			},
			monthChange: function monthChange(event) {
				var detail = event.detail;
				for (var i = 0, len = this.daySelect.length; i < len; ++i) {
					if (this.daySelect[i].mon == detail.currentMonth) {
						this.daySelect[i].month = 'current';
					} else {
						this.daySelect[i].month = null;
					}
				}
			},
			showStatement: function showStatement(id) {
				_wepy2.default.navigateTo({
					url: '/pages/statements/detail?id=' + id
				});
			},
			getCategoryList: function () {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, index) {
					var query, data, value;
					return regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									query = this.timeParams();

									query.id = id;
									_context.next = 4;
									return _wxRequest2.default.Get('chart/spread', query);

								case 4:
									data = _context.sent;
									value = !this.mutipleData[index].hidden;

									this.mutipleData[index]['hidden'] = value;
									this.mutipleData[index].childs = data;
									this.$apply();

								case 9:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, this);
				}));

				function getCategoryList(_x, _x2) {
					return _ref2.apply(this, arguments);
				}

				return getCategoryList;
			}()
		}, _this.computed = {
			monthAndDay: function monthAndDay() {
				var str = '';
				var query = this.timeParams();
				if (typeof query.start_time != 'undefined') {
					var startArray = query.start_time.split('-');
					str = startArray[1] + '-' + startArray[2];
				}
				if (typeof query.end_time != 'undefined') {
					var endArray = query.end_time.split('-');
					str += ' ~ ';
					str += endArray[1] + '-' + endArray[2];
				}
				return str;
			}
		}, _this.$repeat = { "item": { "com": "statement", "props": "statement.sync" } }, _this.$props = { "statement": { "xmlns:v-bind": { "value": "", "for": "item.childs", "item": "st", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "st", "type": "item", "for": "item.childs", "item": "st", "index": "index", "key": "index" } }, "empty": { "title": "这天还没有记账呢~" } }, _this.$events = {}, _this.components = {
			empty: _empty2.default,
			singleColumn: _chart_column2.default,
			statement: _statement2.default
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Chart, [{
		key: 'onLoad',
		value: function onLoad() {
			this.daySelect.push(this.daySelectObject(NowDate.getFullYear(), NowDate.getMonth() + 1, this.today, '#2196F3'));
			this.getChart();
		}
	}, {
		key: 'getChart',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var res;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _wxRequest2.default.Get('chart', this.timeParams());

							case 2:
								res = _context2.sent;

								this.singleData = res.single;
								this.singleList = this.singleData.list;
								this.mutipleData = res.categories;
								this.$apply();

							case 7:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getChart() {
				return _ref3.apply(this, arguments);
			}

			return getChart;
		}()

		/**
   * 时间参数组装
   * 默认取 daySelect 数组
   * 	daySelect[0] 当前日期
   * 	daySelect[1] 起始日期
   *  daySelect[2] 结束日期
  */

	}, {
		key: 'timeParams',
		value: function timeParams() {
			var query = {};
			var length = this.daySelect.length;
			if (length == 0) {
				return query;
			}

			if (length <= 2) {
				var start = this.daySelect[length - 1];
				query.start_time = start.year + '-' + start.mon + '-' + start.day;
			} else {
				var _start2 = this.daySelect[1];
				var end = this.daySelect[2];
				query.start_time = _start2.year + '-' + _start2.mon + '-' + _start2.day;
				query.end_time = end.year + '-' + end.mon + '-' + end.day;
			}
			return query;
		}
	}, {
		key: 'daySelectObject',
		value: function daySelectObject(year, month, day, bgColor) {
			return {
				year: year,
				mon: month,
				day: day,
				background: bgColor,
				month: 'current',
				color: 'white'
			};
		}
	}]);

	return Chart;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chart , 'pages/chart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIl0sIm5hbWVzIjpbIk5vd0RhdGUiLCJEYXRlIiwiQ2hhcnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRvZGF5IiwiZ2V0RGF0ZSIsInRhYkFjdGl2ZSIsInN0YXJ0Q29sb3IiLCJlbmRDb2xvciIsImRheXMiLCJtdXRpcGxlRGF0YSIsInNpbmdsZURhdGEiLCJzaW5nbGVMaXN0IiwiZGF5U2VsZWN0IiwibWV0aG9kcyIsImRheUNsaWNrIiwiZXZlbnQiLCJkZXRhaWwiLCJkYXRhTGVuIiwibGVuZ3RoIiwiY3VyT2JqIiwiZGF5U2VsZWN0T2JqZWN0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiYmFja2dyb3VuZCIsInB1c2giLCJzdGFydCIsInN0YXJ0RGF0ZSIsIm1vbiIsImNob3NlRGF0ZSIsInNwbGljZSIsImVuZCIsImVuZERhdGUiLCJjdXJEYXRlIiwiZ2V0VGltZSIsImdldENoYXJ0IiwiY2hhbmdlVGFiIiwiaXRlbSIsIm1vbnRoQ2hhbmdlIiwiaSIsImxlbiIsImN1cnJlbnRNb250aCIsInNob3dTdGF0ZW1lbnQiLCJpZCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0Q2F0ZWdvcnlMaXN0IiwiaW5kZXgiLCJxdWVyeSIsInRpbWVQYXJhbXMiLCJ3eFJlcXVlc3QiLCJHZXQiLCJ2YWx1ZSIsImhpZGRlbiIsImNoaWxkcyIsIiRhcHBseSIsImNvbXB1dGVkIiwibW9udGhBbmREYXkiLCJzdHIiLCJzdGFydF90aW1lIiwic3RhcnRBcnJheSIsInNwbGl0IiwiZW5kX3RpbWUiLCJlbmRBcnJheSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVtcHR5IiwiRW1wdHkiLCJzaW5nbGVDb2x1bW4iLCJzdGF0ZW1lbnQiLCJJbmRleFN0YXRlbWVudCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJyZXMiLCJzaW5nbGUiLCJsaXN0IiwiY2F0ZWdvcmllcyIsImJn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T0FBSS9CLFNBQVMsS0FBS04sU0FBTCxDQUFlTSxNQUE1QjtBQUNBLE9BQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNoQixXQUFPK0IsS0FBUDtBQUNBOztBQUVELE9BQUkvQixVQUFVLENBQWQsRUFBaUI7QUFDaEIsUUFBSVEsUUFBUSxLQUFLZCxTQUFMLENBQWVNLFNBQVMsQ0FBeEIsQ0FBWjtBQUNJK0IsVUFBTVcsVUFBTixHQUFzQmxDLE1BQU1MLElBQTVCLFNBQW9DSyxNQUFNRSxHQUExQyxTQUFpREYsTUFBTUgsR0FBdkQ7QUFDRCxJQUhKLE1BR1U7QUFDVCxRQUFJRyxVQUFRLEtBQUtkLFNBQUwsQ0FBZSxDQUFmLENBQVo7QUFDQSxRQUFJbUIsTUFBTSxLQUFLbkIsU0FBTCxDQUFlLENBQWYsQ0FBVjtBQUNJcUMsVUFBTVcsVUFBTixHQUFzQmxDLFFBQU1MLElBQTVCLFNBQW9DSyxRQUFNRSxHQUExQyxTQUFpREYsUUFBTUgsR0FBdkQ7QUFDQTBCLFVBQU1jLFFBQU4sR0FBb0JoQyxJQUFJVixJQUF4QixTQUFnQ1UsSUFBSUgsR0FBcEMsU0FBMkNHLElBQUlSLEdBQS9DO0FBQ0o7QUFDRCxVQUFPMEIsS0FBUDtBQUNBOzs7a0NBRWdCNUIsSSxFQUFNQyxLLEVBQU9DLEcsRUFBS3lELE8sRUFBUztBQUMzQyxVQUFPO0FBQ04zRCxVQUFNQSxJQURBO0FBRU5PLFNBQUtOLEtBRkM7QUFHTkMsU0FBS0EsR0FIQztBQUlOQyxnQkFBWXdELE9BSk47QUFLTjFELFdBQU8sU0FMRDtBQU1OMkQsV0FBTztBQU5ELElBQVA7QUFRQTs7OztFQWhKa0NyQyxlQUFLc0MsSTs7a0JBQW5CbkYsSyIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXHRpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuXHRpbXBvcnQgRW1wdHkgZnJvbSAnQC9jb21wb25lbnRzL2VtcHR5J1xuXHRpbXBvcnQgc2luZ2xlQ29sdW1uIGZyb20gJ0AvY29tcG9uZW50cy9jaGFydF9jb2x1bW4nXG5cdGltcG9ydCBJbmRleFN0YXRlbWVudCBmcm9tICdAL2NvbXBvbmVudHMvaW5kZXgvc3RhdGVtZW50J1xuXG5cdGNvbnN0IE5vd0RhdGUgPSBuZXcgRGF0ZSgpXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG5cdFx0XHRuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pel5Y6G57uf6K6hJyxcblx0XHRcdFwidXNpbmdDb21wb25lbnRzXCI6IHtcblx0XHRcdFx0XCJjYWxlbmRhclwiOiBcInBsdWdpbjovL2NhbGVuZGFyL2NhbGVuZGFyXCJcblx0XHRcdH1cbiAgICB9XG5cblx0XHRkYXRhID0ge1xuXHRcdFx0dG9kYXk6IE5vd0RhdGUuZ2V0RGF0ZSgpLFxuXHRcdFx0dGFiQWN0aXZlOiAnc2luZ2xlJyxcblx0XHRcdHN0YXJ0Q29sb3I6ICcjRkY3RjAwJyxcblx0XHRcdGVuZENvbG9yOiAnIzhCOEI4MycsXG5cdFx0XHRkYXlzOiBbXSxcblx0XHRcdG11dGlwbGVEYXRhOiBbXSxcblx0XHRcdHNpbmdsZURhdGE6IFtdLFxuXHRcdFx0c2luZ2xlTGlzdDogW10sXG5cdFx0XHRkYXlTZWxlY3Q6IFtdXG5cdFx0fTtcblx0XHRcblx0XHRvbkxvYWQgKCkge1xuXHRcdFx0dGhpcy5kYXlTZWxlY3QucHVzaCh0aGlzLmRheVNlbGVjdE9iamVjdChOb3dEYXRlLmdldEZ1bGxZZWFyKCksIE5vd0RhdGUuZ2V0TW9udGgoKSArIDEsIHRoaXMudG9kYXksICcjMjE5NkYzJykpXG5cdFx0XHR0aGlzLmdldENoYXJ0KClcblx0XHR9XG5cblx0XHRtZXRob2RzID0ge1xuXHRcdFx0ZGF5Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRsZXQgZGV0YWlsID0gZXZlbnQuZGV0YWlsXG5cdFx0XHRcdGxldCBkYXRhTGVuID0gdGhpcy5kYXlTZWxlY3QubGVuZ3RoXG5cdFx0XHRcdGxldCBjdXJPYmogPSB0aGlzLmRheVNlbGVjdE9iamVjdChkZXRhaWwueWVhciwgZGV0YWlsLm1vbnRoLCBkZXRhaWwuZGF5LCAnJylcblx0XHRcdFx0aWYgKGRhdGFMZW4gPT0gMSkge1xuXHRcdFx0XHRcdC8vIOaPkuWFpei1t+Wni+aXpeacn1xuXHRcdFx0XHRcdGN1ck9iai5iYWNrZ3JvdW5kID0gdGhpcy5zdGFydENvbG9yXG5cdFx0XHRcdFx0dGhpcy5kYXlTZWxlY3QucHVzaChjdXJPYmopXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YUxlbiA9PSAyKSB7XG5cdFx0XHRcdFx0Ly8g5o+S5YWl57uT5p2f5pel5pyfXG5cdFx0XHRcdFx0bGV0IHN0YXJ0ID0gdGhpcy5kYXlTZWxlY3RbMV1cblx0XHRcdFx0XHRsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoYCR7c3RhcnQueWVhcn0tJHtzdGFydC5tb259LSR7c3RhcnQuZGF5fWApXG5cdFx0XHRcdFx0bGV0IGNob3NlRGF0ZSA9IG5ldyBEYXRlKGAke2RldGFpbC55ZWFyfS0ke2RldGFpbC5tb250aH0tJHtkZXRhaWwuZGF5fWApXG5cdFx0XHRcdFx0aWYgKHN0YXJ0RGF0ZSA8IGNob3NlRGF0ZSkge1xuXHRcdFx0XHRcdFx0Y3VyT2JqLmJhY2tncm91bmQgPSB0aGlzLmVuZENvbG9yXG5cdFx0XHRcdFx0XHR0aGlzLmRheVNlbGVjdC5wdXNoKGN1ck9iailcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXlTZWxlY3RbMV0uYmFja2dyb3VuZCA9IHRoaXMuZW5kQ29sb3Jcblx0XHRcdFx0XHRcdGN1ck9iai5iYWNrZ3JvdW5kID0gdGhpcy5zdGFydENvbG9yXG5cdFx0XHRcdFx0XHR0aGlzLmRheVNlbGVjdC5zcGxpY2UoMSwgMCwgY3VyT2JqKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyDotbflp4vml6XmnJ/lkoznu5PmnZ/ml6XmnJ/lrZjlnKjnmoTmg4XlhrXkuIvmj5LlhaUuLlxuXHRcdFx0XHRcdGxldCBzdGFydCA9IHRoaXMuZGF5U2VsZWN0WzFdXG5cdFx0XHRcdFx0bGV0IGVuZCA9IHRoaXMuZGF5U2VsZWN0WzJdXG5cdFx0XHRcdFx0bGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGAke3N0YXJ0LnllYXJ9LSR7c3RhcnQubW9ufS0ke3N0YXJ0LmRheX1gKVxuXHRcdFx0XHRcdGxldCBlbmREYXRlID0gbmV3IERhdGUoYCR7ZW5kLnllYXJ9LSR7ZW5kLm1vbn0tJHtlbmQuZGF5fWApXG5cdFx0XHRcdFx0bGV0IGN1ckRhdGUgPSBuZXcgRGF0ZShgJHtkZXRhaWwueWVhcn0tJHtkZXRhaWwubW9udGh9LSR7ZGV0YWlsLmRheX1gKVxuXHRcdFx0XHRcdGlmIChjdXJEYXRlID4gZW5kRGF0ZSkge1xuXHRcdFx0XHRcdFx0Y3VyT2JqLmJhY2tncm91bmQgPSB0aGlzLmVuZENvbG9yXG5cdFx0XHRcdFx0XHR0aGlzLmRheVNlbGVjdFsyXSA9IGN1ck9ialxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VyRGF0ZS5nZXRUaW1lKCkgPT0gZW5kRGF0ZS5nZXRUaW1lKCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF5U2VsZWN0LnNwbGljZSgxLCAxKVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VyRGF0ZS5nZXRUaW1lKCkgPT0gc3RhcnREYXRlLmdldFRpbWUoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXlTZWxlY3Quc3BsaWNlKDIsIDEpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1ck9iai5iYWNrZ3JvdW5kID0gdGhpcy5zdGFydENvbG9yXG5cdFx0XHRcdFx0XHR0aGlzLmRheVNlbGVjdFsxXSA9IGN1ck9ialxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmdldENoYXJ0KClcblx0XHRcdH0sXG5cdFxuXHRcdFx0Y2hhbmdlVGFiKGl0ZW0pIHtcblx0XHRcdFx0dGhpcy50YWJBY3RpdmUgPSBpdGVtXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRtb250aENoYW5nZSAoZXZlbnQpIHtcblx0XHRcdFx0bGV0IGRldGFpbCA9IGV2ZW50LmRldGFpbFxuXHRcdFx0XHRmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmRheVNlbGVjdC5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRheVNlbGVjdFtpXS5tb24gPT0gZGV0YWlsLmN1cnJlbnRNb250aCkge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXlTZWxlY3RbaV0ubW9udGggPSAnY3VycmVudCdcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXlTZWxlY3RbaV0ubW9udGggPSBudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzaG93U3RhdGVtZW50IChpZCkge1xuXHRcdFx0XHR3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0ZW1lbnRzL2RldGFpbD9pZD0ke2lkfWBcbiAgICAgICAgfSlcblx0XHRcdH0sXG5cblx0XHRcdGFzeW5jIGdldENhdGVnb3J5TGlzdCAoaWQsIGluZGV4KSB7XG5cdFx0XHRcdGxldCBxdWVyeSA9IHRoaXMudGltZVBhcmFtcygpXG5cdFx0XHRcdHF1ZXJ5LmlkID0gaWRcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ2NoYXJ0L3NwcmVhZCcsIHF1ZXJ5KVxuXHRcdFx0XHRsZXQgdmFsdWUgPSAhdGhpcy5tdXRpcGxlRGF0YVtpbmRleF0uaGlkZGVuXG5cdFx0XHRcdHRoaXMubXV0aXBsZURhdGFbaW5kZXhdWydoaWRkZW4nXSA9IHZhbHVlXG5cdFx0XHRcdHRoaXMubXV0aXBsZURhdGFbaW5kZXhdLmNoaWxkcyA9IGRhdGFcblx0XHRcdFx0dGhpcy4kYXBwbHkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFzeW5jIGdldENoYXJ0KCkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnY2hhcnQnLCB0aGlzLnRpbWVQYXJhbXMoKSlcblx0XHRcdHRoaXMuc2luZ2xlRGF0YSA9IHJlcy5zaW5nbGVcblx0XHRcdHRoaXMuc2luZ2xlTGlzdCA9IHRoaXMuc2luZ2xlRGF0YS5saXN0XG5cdFx0XHR0aGlzLm11dGlwbGVEYXRhID0gcmVzLmNhdGVnb3JpZXNcblx0XHRcdHRoaXMuJGFwcGx5KClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiDml7bpl7Tlj4LmlbDnu4Too4Vcblx0XHQgKiDpu5jorqTlj5YgZGF5U2VsZWN0IOaVsOe7hFxuXHRcdCAqIFx0ZGF5U2VsZWN0WzBdIOW9k+WJjeaXpeacn1xuXHRcdCAqIFx0ZGF5U2VsZWN0WzFdIOi1t+Wni+aXpeacn1xuXHRcdCAqICBkYXlTZWxlY3RbMl0g57uT5p2f5pel5pyfXG5cdFx0Ki9cblx0XHR0aW1lUGFyYW1zICgpIHtcblx0XHRcdGxldCBxdWVyeSA9IHt9XG5cdFx0XHRsZXQgbGVuZ3RoID0gdGhpcy5kYXlTZWxlY3QubGVuZ3RoXG5cdFx0XHRpZiAobGVuZ3RoID09IDApIHtcblx0XHRcdFx0cmV0dXJuIHF1ZXJ5XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsZW5ndGggPD0gMikge1xuXHRcdFx0XHRsZXQgc3RhcnQgPSB0aGlzLmRheVNlbGVjdFtsZW5ndGggLSAxXVxuICAgICAgICBxdWVyeS5zdGFydF90aW1lID0gYCR7c3RhcnQueWVhcn0tJHtzdGFydC5tb259LSR7c3RhcnQuZGF5fWBcbiAgICAgIH0gZWxzZSB7XG5cdFx0XHRcdGxldCBzdGFydCA9IHRoaXMuZGF5U2VsZWN0WzFdXG5cdFx0XHRcdGxldCBlbmQgPSB0aGlzLmRheVNlbGVjdFsyXVxuICAgICAgICBxdWVyeS5zdGFydF90aW1lID0gYCR7c3RhcnQueWVhcn0tJHtzdGFydC5tb259LSR7c3RhcnQuZGF5fWBcbiAgICAgICAgcXVlcnkuZW5kX3RpbWUgPSBgJHtlbmQueWVhcn0tJHtlbmQubW9ufS0ke2VuZC5kYXl9YFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXJ5XG5cdFx0fVxuXG5cdFx0ZGF5U2VsZWN0T2JqZWN0ICh5ZWFyLCBtb250aCwgZGF5LCBiZ0NvbG9yKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5ZWFyOiB5ZWFyLFxuXHRcdFx0XHRtb246IG1vbnRoLFxuXHRcdFx0XHRkYXk6IGRheSxcblx0XHRcdFx0YmFja2dyb3VuZDogYmdDb2xvcixcblx0XHRcdFx0bW9udGg6ICdjdXJyZW50Jyxcblx0XHRcdFx0Y29sb3I6ICd3aGl0ZSdcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb21wdXRlZCA9IHtcblx0XHRcdG1vbnRoQW5kRGF5KCkge1xuXHRcdFx0XHRsZXQgc3RyID0gJydcblx0XHRcdFx0bGV0IHF1ZXJ5ID0gdGhpcy50aW1lUGFyYW1zKClcblx0XHRcdFx0aWYgKHR5cGVvZiBxdWVyeS5zdGFydF90aW1lICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0QXJyYXkgPSBxdWVyeS5zdGFydF90aW1lLnNwbGl0KCctJylcblx0XHRcdFx0XHRzdHIgPSBzdGFydEFycmF5WzFdICsgJy0nICsgc3RhcnRBcnJheVsyXVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgcXVlcnkuZW5kX3RpbWUgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRsZXQgZW5kQXJyYXkgPSBxdWVyeS5lbmRfdGltZS5zcGxpdCgnLScpXG5cdFx0XHRcdFx0c3RyICs9ICcgfiAnXG5cdFx0XHRcdFx0c3RyICs9IGVuZEFycmF5WzFdICsgJy0nICsgZW5kQXJyYXlbMl1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc3RyXG4gICAgICB9XG5cdFx0fVxuXG5cdCRyZXBlYXQgPSB7XCJpdGVtXCI6e1wiY29tXCI6XCJzdGF0ZW1lbnRcIixcInByb3BzXCI6XCJzdGF0ZW1lbnQuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInN0YXRlbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiaXRlbS5jaGlsZHNcIixcIml0ZW1cIjpcInN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjp7XCJ2YWx1ZVwiOlwic3RcIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiaXRlbS5jaGlsZHNcIixcIml0ZW1cIjpcInN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiZW1wdHlcIjp7XCJ0aXRsZVwiOlwi6L+Z5aSp6L+Y5rKh5pyJ6K6w6LSm5ZGiflwifX07XHJcbiRldmVudHMgPSB7fTtcclxuXHRjb21wb25lbnRzID0ge1xuXHRcdFx0ZW1wdHk6IEVtcHR5LFxuXHRcdFx0c2luZ2xlQ29sdW1uOiBzaW5nbGVDb2x1bW4sXG5cdFx0XHRzdGF0ZW1lbnQ6IEluZGV4U3RhdGVtZW50XG5cdFx0fTtcblx0XHRcbiAgfVxuIl19