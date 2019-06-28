'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _category_list = require('./../../components/category_list.js');

var _category_list2 = _interopRequireDefault(_category_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetList = function (_wepy$page) {
  _inherits(AssetList, _wepy$page);

  function AssetList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AssetList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssetList.__proto__ || Object.getPrototypeOf(AssetList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '资产列表'
    }, _this.$repeat = {}, _this.$props = { "List": { "xmlns:v-bind": "", "v-bind:list.sync": "assets", "editUrl": "/pages/assets/asset_form" } }, _this.$events = {}, _this.components = {
      List: _category_list2.default
    }, _this.data = {
      assets: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AssetList, [{
    key: 'onShow',
    value: function onShow() {
      this.getList();
    }
  }, {
    key: 'getList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('assets');

              case 2:
                data = _context.sent;

                this.assets = data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _ref2.apply(this, arguments);
      }

      return getList;
    }()
  }]);

  return AssetList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(AssetList , 'pages/assets/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiQXNzZXRMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkxpc3QiLCJkYXRhIiwiYXNzZXRzIiwiZ2V0TGlzdCIsInd4UmVxdWVzdCIsIkdldCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFFBQXRDLEVBQStDLFdBQVUsMEJBQXpELEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsWUFBTUE7QUFERSxLLFFBR1ZDLEksR0FBTztBQUNMQyxjQUFRO0FBREgsSzs7Ozs7NkJBSUc7QUFDUixXQUFLQyxPQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUdvQkMsb0JBQVVDLEdBQVYsQ0FBYyxRQUFkLEM7OztBQUFiSixvQjs7QUFDTixxQkFBS0MsTUFBTCxHQUFjRCxJQUFkO0FBQ0EscUJBQUtLLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQm1DQyxlQUFLQyxJOztrQkFBdkJmLFMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhdGVnb3J5X2xpc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i1hOS6p+WIl+ihqCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiYXNzZXRzXCIsXCJlZGl0VXJsXCI6XCIvcGFnZXMvYXNzZXRzL2Fzc2V0X2Zvcm1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgTGlzdDogTGlzdFxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgYXNzZXRzOiBbXVxuICAgIH1cbiAgICBcbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBhc3luYyBnZXRMaXN0KCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ2Fzc2V0cycpO1xuICAgICAgdGhpcy5hc3NldHMgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gIH1cbiJdfQ==