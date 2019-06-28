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

var _empty = require('./../../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchSetting = function (_wepy$page) {
  _inherits(SearchSetting, _wepy$page);

  function SearchSetting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchSetting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchSetting.__proto__ || Object.getPrototypeOf(SearchSetting)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索中心',
      "usingComponents": {
        "i-load-more": "../../public/iview/load-more/index",
        "i-spin": "../../public/iview/spin/index"
      }
    }, _this.data = {
      emptyTitle: '暂未查询到相关数据',
      keyword: '',
      page: 1,
      result: [],
      bottomLoading: false,
      searchNone: false
    }, _this.$repeat = { "result": { "com": "StatementItem", "props": "statement.sync" } }, _this.$props = { "StatementItem": { "xmlns:v-bind": { "value": "", "for": "result", "item": "item", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "item", "type": "item", "for": "result", "item": "item", "index": "index", "key": "index" } }, "empty": { "v-bind:title.sync": "emptyTitle" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default,
      StatementItem: _statement2.default
    }, _this.methods = {
      handleSearch: function handleSearch(e) {
        this.result = [];
        this.keyword = e.detail.value;
        this.bottomLoading = false;
        this.searchNone = false;
        this.page = 1;
        this.doSearch();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchSetting, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.bottomLoading = true;
      this.page += 1;
      this.doSearch();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 这是为了返回时初始化数据
      this.result = [];
      this.page = 1;
      this.doSearch();
    }
  }, {
    key: 'doSearch',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('search', {
                  keyword: this.keyword,
                  page: this.page
                });

              case 2:
                data = _context.sent;

                if (data.status != 404) {
                  if (data.length == 0) {
                    this.searchNone = true;
                  }
                  this.result = [].concat(_toConsumableArray(this.result), _toConsumableArray(data));
                } else {
                  this.result = [];
                }
                this.bottomLoading = false;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doSearch() {
        return _ref2.apply(this, arguments);
      }

      return doSearch;
    }()
  }]);

  return SearchSetting;
}(_wepy2.default.page);

exports.default = SearchSetting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hTZXR0aW5nIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJlbXB0eVRpdGxlIiwia2V5d29yZCIsInBhZ2UiLCJyZXN1bHQiLCJib3R0b21Mb2FkaW5nIiwic2VhcmNoTm9uZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVtcHR5IiwiRW1wdHkiLCJTdGF0ZW1lbnRJdGVtIiwibWV0aG9kcyIsImhhbmRsZVNlYXJjaCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImRvU2VhcmNoIiwid3hSZXF1ZXN0IiwiR2V0Iiwic3RhdHVzIiwibGVuZ3RoIiwiJGFwcGx5Iiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQLHlCQUFtQjtBQUNqQix1QkFBZSxvQ0FERTtBQUVqQixrQkFBVTtBQUZPO0FBRlosSyxRQVFUQyxJLEdBQU87QUFDTEMsa0JBQVksV0FEUDtBQUVMQyxlQUFTLEVBRko7QUFHTEMsWUFBTSxDQUhEO0FBSUxDLGNBQVEsRUFKSDtBQUtMQyxxQkFBZSxLQUxWO0FBTUxDLGtCQUFZO0FBTlAsSyxRQVNSQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsT0FBTSxlQUFQLEVBQXVCLFNBQVEsZ0JBQS9CLEVBQVYsRSxRQUNiQyxNLEdBQVMsRUFBQyxpQkFBZ0IsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sUUFBbEIsRUFBMkIsUUFBTyxNQUFsQyxFQUF5QyxTQUFRLE9BQWpELEVBQXlELE9BQU0sT0FBL0QsRUFBaEIsRUFBd0YseUJBQXdCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxRQUFwQyxFQUE2QyxRQUFPLE1BQXBELEVBQTJELFNBQVEsT0FBbkUsRUFBMkUsT0FBTSxPQUFqRixFQUFoSCxFQUFqQixFQUE0TixTQUFRLEVBQUMscUJBQW9CLFlBQXJCLEVBQXBPLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9DLGVBREM7QUFFUkM7QUFGUSxLLFFBS1ZDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsQ0FETixFQUNTO0FBQ2YsYUFBS1osTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLRixPQUFMLEdBQWVjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxhQUFLYixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLGFBQUtILElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBS2dCLFFBQUw7QUFDRDtBQVJPLEs7Ozs7O29DQVdPO0FBQ2YsV0FBS2QsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFdBQUtGLElBQUwsSUFBYSxDQUFiO0FBQ0EsV0FBS2dCLFFBQUw7QUFDRDs7OzZCQUVTO0FBQ1I7QUFDQSxXQUFLZixNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtELElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS2dCLFFBQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBR29CQyxvQkFBVUMsR0FBVixDQUFjLFFBQWQsRUFBd0I7QUFDekNuQiwyQkFBUyxLQUFLQSxPQUQyQjtBQUV6Q0Msd0JBQU0sS0FBS0E7QUFGOEIsaUJBQXhCLEM7OztBQUFiSCxvQjs7QUFJTixvQkFBSUEsS0FBS3NCLE1BQUwsSUFBZSxHQUFuQixFQUF3QjtBQUN0QixzQkFBSXRCLEtBQUt1QixNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDcEIseUJBQUtqQixVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRCx1QkFBS0YsTUFBTCxnQ0FBa0IsS0FBS0EsTUFBdkIsc0JBQWtDSixJQUFsQztBQUNELGlCQUxELE1BS087QUFDTCx1QkFBS0ksTUFBTCxHQUFjLEVBQWQ7QUFDRDtBQUNELHFCQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EscUJBQUttQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEV1Q0MsZUFBS3RCLEk7O2tCQUEzQk4sYSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IEVtcHR5IGZyb20gJ0AvY29tcG9uZW50cy9lbXB0eSdcbiAgaW1wb3J0IFN0YXRlbWVudEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL2luZGV4L3N0YXRlbWVudCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoU2V0dGluZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQnOe0ouS4reW/gycsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS1sb2FkLW1vcmVcIjogXCIuLi8uLi9wdWJsaWMvaXZpZXcvbG9hZC1tb3JlL2luZGV4XCIsXG4gICAgICAgIFwiaS1zcGluXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L3NwaW4vaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBlbXB0eVRpdGxlOiAn5pqC5pyq5p+l6K+i5Yiw55u45YWz5pWw5o2uJyxcbiAgICAgIGtleXdvcmQ6ICcnLFxuICAgICAgcGFnZTogMSxcbiAgICAgIHJlc3VsdDogW10sXG4gICAgICBib3R0b21Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlYXJjaE5vbmU6IGZhbHNlXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge1wicmVzdWx0XCI6e1wiY29tXCI6XCJTdGF0ZW1lbnRJdGVtXCIsXCJwcm9wc1wiOlwic3RhdGVtZW50LnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJTdGF0ZW1lbnRJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJyZXN1bHRcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpzdGF0ZW1lbnQuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcInJlc3VsdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcImVtcHR5XCI6e1widi1iaW5kOnRpdGxlLnN5bmNcIjpcImVtcHR5VGl0bGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgZW1wdHk6IEVtcHR5LFxuICAgICAgU3RhdGVtZW50SXRlbVxuXHRcdH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVTZWFyY2ggKGUpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBbXVxuICAgICAgICB0aGlzLmtleXdvcmQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmJvdHRvbUxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLnNlYXJjaE5vbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnBhZ2UgPSAxXG4gICAgICAgIHRoaXMuZG9TZWFyY2goKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20gKCkge1xuICAgICAgdGhpcy5ib3R0b21Mb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5wYWdlICs9IDFcbiAgICAgIHRoaXMuZG9TZWFyY2goKVxuICAgIH1cblxuICAgIG9uU2hvdyAoKSB7XG4gICAgICAvLyDov5nmmK/kuLrkuobov5Tlm57ml7bliJ3lp4vljJbmlbDmja5cbiAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgIHRoaXMucGFnZSA9IDFcbiAgICAgIHRoaXMuZG9TZWFyY2goKVxuICAgIH1cblxuICAgIGFzeW5jIGRvU2VhcmNoICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzZWFyY2gnLCB7XG4gICAgICAgIGtleXdvcmQ6IHRoaXMua2V5d29yZCxcbiAgICAgICAgcGFnZTogdGhpcy5wYWdlXG4gICAgICB9KVxuICAgICAgaWYgKGRhdGEuc3RhdHVzICE9IDQwNCkge1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoTm9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdCA9IFsuLi50aGlzLnJlc3VsdCwgLi4uZGF0YV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gW11cbiAgICAgIH1cbiAgICAgIHRoaXMuYm90dG9tTG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=