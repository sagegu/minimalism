'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _empty = require('./../components/empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_wepy$page) {
  _inherits(Message, _wepy$page);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消息中心'
    }, _this.data = {
      indicatorDots: false,
      autoplay: false,
      duration: 300,
      swiperHeight: 400,
      current: 0,
      activeItem: 'system',
      user: {},
      friendsEmptyTitle: '好友功能开发中，敬请期待',
      systemEmptyTitle: '暂无系统消息',
      systemList: []
    }, _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:title.sync": "friendsEmptyTitle" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default
    }, _this.methods = {
      switchTab: function switchTab(type) {
        this.current = type === 'system' ? 0 : 1;
      },
      swiperChange: function swiperChange(e) {
        this.current = e.detail.current;
      },
      toPage: function toPage(url) {
        wx.navigateTo({ url: url });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      wx.getSystemInfo({
        success: function success(res) {
          _this2.swiperHeight = res.windowHeight - 40;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getData();
    }
  }, {
    key: 'getData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('message');

              case 2:
                data = _context.sent;

                this.systemList = data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }]);

  return Message;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Message , 'pages/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiZHVyYXRpb24iLCJzd2lwZXJIZWlnaHQiLCJjdXJyZW50IiwiYWN0aXZlSXRlbSIsInVzZXIiLCJmcmllbmRzRW1wdHlUaXRsZSIsInN5c3RlbUVtcHR5VGl0bGUiLCJzeXN0ZW1MaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZW1wdHkiLCJFbXB0eSIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJ0eXBlIiwic3dpcGVyQ2hhbmdlIiwiZSIsImRldGFpbCIsInRvUGFnZSIsInVybCIsInd4IiwibmF2aWdhdGVUbyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0IiwiJGFwcGx5IiwiZ2V0RGF0YSIsInd4UmVxdWVzdCIsIkdldCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMscUJBQWUsS0FEVjtBQUVMQyxnQkFBVSxLQUZMO0FBR0xDLGdCQUFVLEdBSEw7QUFJTEMsb0JBQWMsR0FKVDtBQUtMQyxlQUFTLENBTEo7QUFNTEMsa0JBQVksUUFOUDtBQU9MQyxZQUFNLEVBUEQ7QUFRTEMseUJBQW1CLGNBUmQ7QUFTTEMsd0JBQWtCLFFBVGI7QUFVTEMsa0JBQVk7QUFWUCxLLFFBYVJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsbUJBQXZDLEVBQVQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsYUFBT0M7QUFEQyxLLFFBaUJWQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNTO0FBQ2YsYUFBS2QsT0FBTCxHQUFnQmMsU0FBUyxRQUFWLEdBQXNCLENBQXRCLEdBQTBCLENBQXpDO0FBQ0QsT0FITztBQUlSQyxrQkFKUSx3QkFJTUMsQ0FKTixFQUlTO0FBQ2YsYUFBS2hCLE9BQUwsR0FBZWdCLEVBQUVDLE1BQUYsQ0FBU2pCLE9BQXhCO0FBQ0QsT0FOTztBQU9Sa0IsWUFQUSxrQkFPQUMsR0FQQSxFQU9LO0FBQ1hDLFdBQUdDLFVBQUgsQ0FBYyxFQUFFRixLQUFLQSxHQUFQLEVBQWQ7QUFDRDtBQVRPLEs7Ozs7OzZCQWJBO0FBQUE7O0FBQ1JDLFNBQUdFLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixpQkFBS3pCLFlBQUwsR0FBb0J5QixJQUFJQyxZQUFKLEdBQW1CLEVBQXZDO0FBQ0EsaUJBQUtDLE1BQUw7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs2QkFFUztBQUNSLFdBQUtDLE9BQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBZW9CQyxvQkFBVUMsR0FBVixDQUFjLFNBQWQsQzs7O0FBQWJsQyxvQjs7QUFDTixxQkFBS1UsVUFBTCxHQUFrQlYsSUFBbEI7QUFDQSxxQkFBSytCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyRGlDSSxlQUFLQyxJOztrQkFBckJ2QyxPIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEVtcHR5IGZyb20gJ0AvY29tcG9uZW50cy9lbXB0eSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBr+S4reW/gydcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5kaWNhdG9yRG90czogZmFsc2UsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgc3dpcGVySGVpZ2h0OiA0MDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgYWN0aXZlSXRlbTogJ3N5c3RlbScsXG4gICAgICB1c2VyOiB7fSxcbiAgICAgIGZyaWVuZHNFbXB0eVRpdGxlOiAn5aW95Y+L5Yqf6IO95byA5Y+R5Lit77yM5pWs6K+35pyf5b6FJyxcbiAgICAgIHN5c3RlbUVtcHR5VGl0bGU6ICfmmoLml6Dns7vnu5/mtojmga8nLFxuICAgICAgc3lzdGVtTGlzdDogW11cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZW1wdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLnN5bmNcIjpcImZyaWVuZHNFbXB0eVRpdGxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGVtcHR5OiBFbXB0eVxuICAgIH1cbiAgICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnN3aXBlckhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgLSA0MFxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXREYXRhKClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc3dpdGNoVGFiICh0eXBlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICh0eXBlID09PSAnc3lzdGVtJykgPyAwIDogMVxuICAgICAgfSxcbiAgICAgIHN3aXBlckNoYW5nZSAoZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50XG4gICAgICB9LFxuICAgICAgdG9QYWdlICh1cmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogdXJsIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGF0YSAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnbWVzc2FnZScpXG4gICAgICB0aGlzLnN5c3RlbUxpc3QgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=