'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _empty = require('./../../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagesStatement = function (_wepy$page) {
  _inherits(ImagesStatement, _wepy$page);

  function ImagesStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImagesStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImagesStatement.__proto__ || Object.getPrototypeOf(ImagesStatement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '账单图库'
    }, _this.data = {
      itemWidth: 0,
      list: [],
      avatars: [],
      emptyTitle: '新建账单的关联图片会显示在这里~'
    }, _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:title.sync": "emptyTitle" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default
    }, _this.methods = {
      showPicture: function showPicture(item) {
        wx.previewImage({
          current: item,
          urls: this.avatars
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImagesStatement, [{
    key: 'onLoad',
    value: function onLoad() {
      this.itemWidth = _wepy2.default.getSystemInfoSync().screenWidth / 4 - 2;
      this.getStatementImages();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getStatementImages();
    }
  }, {
    key: 'getStatementImages',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('statements/images');

              case 2:
                data = _context.sent.data;

                this.list = data.avatar_timeline;
                this.avatars = data.avatars;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getStatementImages() {
        return _ref2.apply(this, arguments);
      }

      return getStatementImages;
    }()
  }]);

  return ImagesStatement;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ImagesStatement , 'pages/statements/images'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy5qcyJdLCJuYW1lcyI6WyJJbWFnZXNTdGF0ZW1lbnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIml0ZW1XaWR0aCIsImxpc3QiLCJhdmF0YXJzIiwiZW1wdHlUaXRsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVtcHR5IiwiRW1wdHkiLCJtZXRob2RzIiwic2hvd1BpY3R1cmUiLCJpdGVtIiwid3giLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsIndlcHkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInNjcmVlbldpZHRoIiwiZ2V0U3RhdGVtZW50SW1hZ2VzIiwid3hSZXF1ZXN0IiwiR2V0IiwiYXZhdGFyX3RpbWVsaW5lIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLENBRE47QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxrQkFBWTtBQUpQLEssUUFPUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixZQUF2QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9DO0FBREMsSyxRQWFWQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0tDLElBREwsRUFDVztBQUNqQkMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxtQkFBU0gsSUFESztBQUVkSSxnQkFBTSxLQUFLZDtBQUZHLFNBQWhCO0FBSUQ7QUFOTyxLOzs7Ozs2QkFUQTtBQUNSLFdBQUtGLFNBQUwsR0FBa0JpQixlQUFLQyxpQkFBTCxHQUF5QkMsV0FBMUIsR0FBeUMsQ0FBekMsR0FBNkMsQ0FBOUQ7QUFDQSxXQUFLQyxrQkFBTDtBQUNEOzs7NkJBRVM7QUFDUixXQUFLQSxrQkFBTDtBQUNEOzs7Ozs7Ozs7Ozt1QkFZcUJDLG9CQUFVQyxHQUFWLENBQWMsbUJBQWQsQzs7O0FBQWR2QixvQixpQkFBa0RBLEk7O0FBQ3hELHFCQUFLRSxJQUFMLEdBQVlGLEtBQUt3QixlQUFqQjtBQUNBLHFCQUFLckIsT0FBTCxHQUFlSCxLQUFLRyxPQUFwQjtBQUNBLHFCQUFLc0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpDeUNQLGVBQUtRLEk7O2tCQUE3QjdCLGUiLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBFbXB0eSBmcm9tICdAL2NvbXBvbmVudHMvZW1wdHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1N0YXRlbWVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0puWNleWbvuW6kydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaXRlbVdpZHRoOiAwLFxuICAgICAgbGlzdDogW10sXG4gICAgICBhdmF0YXJzOiBbXSxcbiAgICAgIGVtcHR5VGl0bGU6ICfmlrDlu7rotKbljZXnmoTlhbPogZTlm77niYfkvJrmmL7npLrlnKjov5nph4x+J1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJlbXB0eVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUuc3luY1wiOlwiZW1wdHlUaXRsZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBlbXB0eTogRW1wdHlcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5pdGVtV2lkdGggPSAod2VweS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoKSAvIDQgLSAyXG4gICAgICB0aGlzLmdldFN0YXRlbWVudEltYWdlcygpXG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuZ2V0U3RhdGVtZW50SW1hZ2VzKClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd1BpY3R1cmUgKGl0ZW0pIHtcbiAgICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgICBjdXJyZW50OiBpdGVtLFxuICAgICAgICAgIHVybHM6IHRoaXMuYXZhdGFyc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFN0YXRlbWVudEltYWdlcygpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3RhdGVtZW50cy9pbWFnZXMnKSkuZGF0YVxuICAgICAgdGhpcy5saXN0ID0gZGF0YS5hdmF0YXJfdGltZWxpbmVcbiAgICAgIHRoaXMuYXZhdGFycyA9IGRhdGEuYXZhdGFyc1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19