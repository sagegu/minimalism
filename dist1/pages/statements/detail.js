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

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementDetail = function (_wepy$page) {
  _inherits(StatementDetail, _wepy$page);

  function StatementDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementDetail.__proto__ || Object.getPrototypeOf(StatementDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '账单详情'
    }, _this.data = {
      id: 0,
      statement: {}
    }, _this.methods = {
      edit: function edit() {
        _wepy2.default.navigateTo({
          url: '/pages/statements/edit?id=' + this.id
        });
      },
      del: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var store;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _tip2.default.confirm('是否删除该条账单？', {}, '提示');

                case 2:
                  _context.next = 4;
                  return _wxRequest2.default.Destroy('statements/' + this.id);

                case 4:
                  store = (0, _wepyRedux.getStore)();

                  store.dispatch((0, _actions.delStatement)(this.id));
                  _wepy2.default.navigateBack({
                    delta: 1
                  });

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function del() {
          return _ref2.apply(this, arguments);
        }

        return del;
      }(),
      showPicture: function showPicture(item) {
        wx.previewImage({
          current: item,
          urls: this.statement.upload_files
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatementDetail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.id = options.id;
      if (this.id == undefined) {
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getStatement();
    }
  }, {
    key: 'getStatement',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('statements/detail', { id: this.id });

              case 2:
                data = _context2.sent;

                this.statement = data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStatement() {
        return _ref3.apply(this, arguments);
      }

      return getStatement;
    }()
  }]);

  return StatementDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatementDetail , 'pages/statements/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJTdGF0ZW1lbnREZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImlkIiwic3RhdGVtZW50IiwibWV0aG9kcyIsImVkaXQiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImRlbCIsInRpcCIsImNvbmZpcm0iLCJ3eFJlcXVlc3QiLCJEZXN0cm95Iiwic3RvcmUiLCJkaXNwYXRjaCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd1BpY3R1cmUiLCJpdGVtIiwid3giLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInVwbG9hZF9maWxlcyIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJnZXRTdGF0ZW1lbnQiLCJHZXQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsVUFBSSxDQURDO0FBRUxDLGlCQUFXO0FBRk4sSyxRQWtCUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0E7QUFDTkMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsOENBQWtDLEtBQUtOO0FBRHpCLFNBQWhCO0FBR0QsT0FMTztBQU1GTyxTQU5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFPQUMsY0FBSUMsT0FBSixDQUFZLFdBQVosRUFBeUIsRUFBekIsRUFBNkIsSUFBN0IsQ0FQQTs7QUFBQTtBQUFBO0FBQUEseUJBUUFDLG9CQUFVQyxPQUFWLGlCQUFnQyxLQUFLWCxFQUFyQyxDQVJBOztBQUFBO0FBU0FZLHVCQVRBLEdBU1EsMEJBVFI7O0FBVU5BLHdCQUFNQyxRQUFOLENBQWUsMkJBQWEsS0FBS2IsRUFBbEIsQ0FBZjtBQUNBSSxpQ0FBS1UsWUFBTCxDQUFrQjtBQUNoQkMsMkJBQU87QUFEUyxtQkFBbEI7O0FBWE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFlUkMsaUJBZlEsdUJBZUtDLElBZkwsRUFlVztBQUNqQkMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxtQkFBU0gsSUFESztBQUVkSSxnQkFBTSxLQUFLcEIsU0FBTCxDQUFlcUI7QUFGUCxTQUFoQjtBQUlEO0FBcEJPLEs7Ozs7OzJCQWJGQyxPLEVBQVM7QUFDZixXQUFLdkIsRUFBTCxHQUFVdUIsUUFBUXZCLEVBQWxCO0FBQ0EsVUFBRyxLQUFLQSxFQUFMLElBQVd3QixTQUFkLEVBQXlCO0FBQ3ZCcEIsdUJBQUtVLFlBQUwsQ0FBa0I7QUFDaEJDLGlCQUFPO0FBRFMsU0FBbEI7QUFHRDtBQUNGOzs7NkJBRVE7QUFDUCxXQUFLVSxZQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQTBCb0JmLG9CQUFVZ0IsR0FBVixDQUFjLG1CQUFkLEVBQW1DLEVBQUUxQixJQUFJLEtBQUtBLEVBQVgsRUFBbkMsQzs7O0FBQWJELG9COztBQUNOLHFCQUFLRSxTQUFMLEdBQWlCRixJQUFqQjtBQUNBLHFCQUFLNEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpEeUN2QixlQUFLd0IsSTs7a0JBQTdCaEMsZSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgaW1wb3J0IHsgZ2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgeyBkZWxTdGF0ZW1lbnQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50RGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSm5Y2V6K+m5oOFJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHN0YXRlbWVudDoge31cbiAgICB9XG5cbiAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkXG4gICAgICBpZih0aGlzLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLmdldFN0YXRlbWVudCgpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGVkaXQgKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9zdGF0ZW1lbnRzL2VkaXQ/aWQ9JHt0aGlzLmlkfWBcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBkZWwgKCkge1xuICAgICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm5Yig6Zmk6K+l5p2h6LSm5Y2V77yfJywge30sICfmj5DnpLonKVxuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuRGVzdHJveShgc3RhdGVtZW50cy8ke3RoaXMuaWR9YClcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGRlbFN0YXRlbWVudCh0aGlzLmlkKSlcbiAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2hvd1BpY3R1cmUgKGl0ZW0pIHtcbiAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBpdGVtLFxuICAgICAgICAgIHVybHM6IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFN0YXRlbWVudCAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3RhdGVtZW50cy9kZXRhaWwnLCB7IGlkOiB0aGlzLmlkIH0pXG4gICAgICB0aGlzLnN0YXRlbWVudCA9IGRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgXG4gIH1cbiJdfQ==