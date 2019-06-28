'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _session = require('./../utils/session.js');

var _session2 = _interopRequireDefault(_session);

var _empty = require('./../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _statement = require('./../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _actions = require('./../store/actions/index.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页',
      "usingComponents": {
        "i-notice-bar": "../public/iview/notice-bar/index"
      }
    }, _this.data = {
      emptyTitle: '本周还没有开始记账哦~',
      orderEmptyTitle: '无预购清单，点击下方添加一笔吧',

      list: [{ id: '1', description: '今天很能花', category: '吃喝', asset: '招商银行', timeStr: '06-24', money: '10.0' }, { id: '1', description: '雪顶咖啡', category: '吃喝', asset: '招商银行', timeStr: '06-24', money: '10.0' }],
      header: { position_1_human_name: "总支出", position_1_amount: "998", position_2_human_name: "挑战组1-挑战金额", position_2_amount: "1000", position_3_human_name: "挑战预算结余", position_3_amount: "2" }
    }, _this.$repeat = { "list": { "com": "StatementItem", "props": "statement.sync" } }, _this.$props = { "StatementItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } }, "empty": { "v-bind:title.sync": "emptyTitle" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default,
      orderEmpty: _empty2.default,
      StatementItem: _statement2.default
    }, _this.methods = {
      gotoCreate: function gotoCreate() {
        wx.navigateTo({ url: "/pages/statements/create" });
      },
      gotoChallenge: function gotoChallenge() {
        wx.navigateTo({ url: "/pages/asset" });
      }
    }, _this.computed = {
      showEmpty: function showEmpty() {
        return this.list.length <= 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      this.getHeader();
      this.getList();
    }
  }, {
    key: 'getHeader',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_session2.default.get('header_load_cache')) {
                  this.header = _session2.default.get('header_load_cache');
                  this.$apply();
                }

                _context.next = 3;
                return _wxRequest2.default.Get('header');

              case 3:
                data = _context.sent;

                if (!(data === undefined)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', false);

              case 6:

                this.header = data;
                _session2.default.set('header_load_cache', this.header);
                this.$apply();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getHeader() {
        return _ref2.apply(this, arguments);
      }

      return getHeader;
    }()
  }, {
    key: 'getList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var store, result, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_session2.default.get('index_load_cache')) {
                  this.list = _session2.default.get('index_load_cache');
                  this.$apply();
                }

                store = (0, _wepyRedux.getStore)();
                _context2.next = 4;
                return store.dispatch((0, _actions.asyncList)());

              case 4:
                result = _context2.sent;

                if (!(typeof result.payload === 'undefined')) {
                  _context2.next = 8;
                  break;
                }

                _tip2.default.error("可能由于网络问题，获取列表失败", 2300);
                return _context2.abrupt('return', false);

              case 8:
                res = store.getState().statement.statements;

                this.list = res;
                _session2.default.set('index_load_cache', res);
                this.$apply();

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getList() {
        return _ref3.apply(this, arguments);
      }

      return getList;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlbXB0eVRpdGxlIiwib3JkZXJFbXB0eVRpdGxlIiwibGlzdCIsImlkIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImFzc2V0IiwidGltZVN0ciIsIm1vbmV5IiwiaGVhZGVyIiwicG9zaXRpb25fMV9odW1hbl9uYW1lIiwicG9zaXRpb25fMV9hbW91bnQiLCJwb3NpdGlvbl8yX2h1bWFuX25hbWUiLCJwb3NpdGlvbl8yX2Ftb3VudCIsInBvc2l0aW9uXzNfaHVtYW5fbmFtZSIsInBvc2l0aW9uXzNfYW1vdW50IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZW1wdHkiLCJFbXB0eSIsIm9yZGVyRW1wdHkiLCJTdGF0ZW1lbnRJdGVtIiwibWV0aG9kcyIsImdvdG9DcmVhdGUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb3RvQ2hhbGxlbmdlIiwiY29tcHV0ZWQiLCJzaG93RW1wdHkiLCJsZW5ndGgiLCJnZXRIZWFkZXIiLCJnZXRMaXN0IiwiU2Vzc2lvbiIsImdldCIsIiRhcHBseSIsInd4UmVxdWVzdCIsIkdldCIsInVuZGVmaW5lZCIsInNldCIsInN0b3JlIiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJwYXlsb2FkIiwiVGlwIiwiZXJyb3IiLCJyZXMiLCJnZXRTdGF0ZSIsInN0YXRlbWVudCIsInN0YXRlbWVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVAseUJBQW1CO0FBQ2pCLHdCQUFnQjtBQURDO0FBRlosSyxRQU9UQyxJLEdBQU87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akQsSUFBTCxHQUFZOEMsR0FBWjtBQUNBYixrQ0FBUU0sR0FBUixDQUFZLGtCQUFaLEVBQWdDTyxHQUFoQztBQUNBLHFCQUFLWCxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkUrQmUsZUFBS0MsSTs7a0JBQW5CekQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG4gIGltcG9ydCBFbXB0eSBmcm9tICdAL2NvbXBvbmVudHMvZW1wdHknXG4gIGltcG9ydCBTdGF0ZW1lbnRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9pbmRleC9zdGF0ZW1lbnQnXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgYXN5bmNMaXN0IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zJ1xuICBpbXBvcnQgVGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtScsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS1ub3RpY2UtYmFyXCI6IFwiLi4vcHVibGljL2l2aWV3L25vdGljZS1iYXIvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBlbXB0eVRpdGxlOiAn5pys5ZGo6L+Y5rKh5pyJ5byA5aeL6K6w6LSm5ZOmficsXG4gICAgICBvcmRlckVtcHR5VGl0bGU6ICfml6DpooTotK3muIXljZXvvIzngrnlh7vkuIvmlrnmt7vliqDkuIDnrJTlkKcnLFxuICAgICBcbiAgICAgIGxpc3Q6IFsge2lkOiAnMScsIGRlc2NyaXB0aW9uOiAn5LuK5aSp5b6I6IO96IqxJywgY2F0ZWdvcnk6ICflkIPllp0nLCBhc3NldDogJ+aLm+WVhumTtuihjCcsIHRpbWVTdHI6JzA2LTI0JywgbW9uZXk6ICcxMC4wJ30sXG4gICAgICAgICAgICAge2lkOiAnMScsIGRlc2NyaXB0aW9uOiAn6Zuq6aG25ZKW5ZWhJywgY2F0ZWdvcnk6ICflkIPllp0nLCBhc3NldDogJ+aLm+WVhumTtuihjCcsIHRpbWVTdHI6JzA2LTI0JywgbW9uZXk6ICcxMC4wJ30gIF0sXG4gICAgICBoZWFkZXI6IHtwb3NpdGlvbl8xX2h1bWFuX25hbWU6IFwi5oC75pSv5Ye6XCIsIHBvc2l0aW9uXzFfYW1vdW50OiBcIjk5OFwiLCBwb3NpdGlvbl8yX2h1bWFuX25hbWU6IFwi5oyR5oiY57uEMS3mjJHmiJjph5Hpop1cIiwgcG9zaXRpb25fMl9hbW91bnQ6IFwiMTAwMFwiLCBwb3NpdGlvbl8zX2h1bWFuX25hbWU6XCLmjJHmiJjpooTnrpfnu5PkvZlcIiwgcG9zaXRpb25fM19hbW91bnQ6IFwiMlwiIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJTdGF0ZW1lbnRJdGVtXCIsXCJwcm9wc1wiOlwic3RhdGVtZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJTdGF0ZW1lbnRJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiZW1wdHlcIjp7XCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwiZW1wdHlUaXRsZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBlbXB0eTogRW1wdHksXG4gICAgICBvcmRlckVtcHR5OiBFbXB0eSxcbiAgICAgIFN0YXRlbWVudEl0ZW1cblx0XHR9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXRIZWFkZXIoKVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ290b0NyZWF0ZSAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL3N0YXRlbWVudHMvY3JlYXRlXCIgfSlcbiAgICAgIH0sXG4gICAgICBnb3RvQ2hhbGxlbmdlICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvYXNzZXRcIiB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEhlYWRlciAoKSB7XG4gICAgICBpZiAoU2Vzc2lvbi5nZXQoJ2hlYWRlcl9sb2FkX2NhY2hlJykpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBTZXNzaW9uLmdldCgnaGVhZGVyX2xvYWRfY2FjaGUnKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdoZWFkZXInKVxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5oZWFkZXIgPSBkYXRhXG4gICAgICBTZXNzaW9uLnNldCgnaGVhZGVyX2xvYWRfY2FjaGUnLCB0aGlzLmhlYWRlcilcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBnZXRMaXN0KCkge1xuICAgICAgaWYgKFNlc3Npb24uZ2V0KCdpbmRleF9sb2FkX2NhY2hlJykpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gU2Vzc2lvbi5nZXQoJ2luZGV4X2xvYWRfY2FjaGUnKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcmUuZGlzcGF0Y2goYXN5bmNMaXN0KCkpXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYXlsb2FkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBUaXAuZXJyb3IoXCLlj6/og73nlLHkuo7nvZHnu5zpl67popjvvIzojrflj5bliJfooajlpLHotKVcIiwgMjMwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBzdG9yZS5nZXRTdGF0ZSgpLnN0YXRlbWVudC5zdGF0ZW1lbnRzXG4gICAgICB0aGlzLmxpc3QgPSByZXNcbiAgICAgIFNlc3Npb24uc2V0KCdpbmRleF9sb2FkX2NhY2hlJywgcmVzKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgc2hvd0VtcHR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGggPD0gMFxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19