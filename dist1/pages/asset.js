'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _session = require('./../utils/session.js');

var _session2 = _interopRequireDefault(_session);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wallet = function (_wepy$page) {
  _inherits(Wallet, _wepy$page);

  function Wallet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Wallet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wallet.__proto__ || Object.getPrototypeOf(Wallet)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '挑战',
      "usingComponents": {
        "i-spin": "../public/iview/spin/index"
      }
    }, _this.data = {
      wallets: [{ name: "极简生活挑战", childs: [{ id: 1, name: "一个月1000块", amount: 1000 }, { id: 2, name: "一个月1500块", amount: 1000 }] }, { name: "腹肌挑战", childs: [{ id: 1, name: "3块腹肌", amount: "" }, { id: 2, name: "六块腹肌", amount: "" }] }],
      netWorth: '0.00',
      totalAssets: '0.00',
      totalDebt: '0.00',
      yesterdayAmount: '0.00',
      seventAmount: '0.00',
      monthAmount: '0.00'
    }, _this.methods = {
      showAsset: function showAsset(id) {
        // wx.navigateTo({ url: `/pages/assets/asset_detail?id=${id}` })
        wx.navigateTo({ url: '/pages/index' });
      },
      eyesTab: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.$parent.globalData.user.hidden_asset_money = !this.$parent.globalData.user.hidden_asset_money;
                  _context.next = 3;
                  return _wxRequest2.default.Put('users/update_user', { user: { hidden_asset_money: this.$parent.globalData.user.hidden_asset_money ? 1 : 0 } });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function eyesTab() {
          return _ref2.apply(this, arguments);
        }

        return eyesTab;
      }()
    }, _this.computed = {
      hiddenMoney: function hiddenMoney() {
        return this.$parent.globalData.user.hidden_asset_money;
      },
      eyeImageClass: function eyeImageClass() {
        return this.hiddenMoney ? 'jz-icon-yanjing-zheng' : 'jz-icon-yanjing-bi';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Wallet, [{
    key: 'onShow',
    value: function onShow() {
      if (_session2.default.get('@asset_list_load_cache@')) {
        // this.wallets = Session.get('@asset_list_load_cache@')
        this.$apply();
      }
      this.getAssets();
    }
  }, {
    key: 'getAssets',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, list, header;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('wallet');

              case 2:
                data = _context2.sent;
                list = data.list;
                header = data.header;

                this.netWorth = header.net_worth, this.totalAssets = header.total_asset, this.totalDebt = header.total_liability, this.yesterdayAmount = header.yesterday_balance, this.seventAmount = header.sevent_day_consumption, this.monthAmount = header.last_month_consumption, this.wallets = list;
                _session2.default.set('@asset_list_load_cache@', this.wallets);
                this.$apply();

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAssets() {
        return _ref3.apply(this, arguments);
      }

      return getAssets;
    }()
  }]);

  return Wallet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Wallet , 'pages/asset'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LmpzIl0sIm5hbWVzIjpbIldhbGxldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwid2FsbGV0cyIsIm5hbWUiLCJjaGlsZHMiLCJpZCIsImFtb3VudCIsIm5ldFdvcnRoIiwidG90YWxBc3NldHMiLCJ0b3RhbERlYnQiLCJ5ZXN0ZXJkYXlBbW91bnQiLCJzZXZlbnRBbW91bnQiLCJtb250aEFtb3VudCIsIm1ldGhvZHMiLCJzaG93QXNzZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJleWVzVGFiIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyIiwiaGlkZGVuX2Fzc2V0X21vbmV5Iiwid3hSZXF1ZXN0IiwiUHV0IiwiY29tcHV0ZWQiLCJoaWRkZW5Nb25leSIsImV5ZUltYWdlQ2xhc3MiLCJTZXNzaW9uIiwiZ2V0IiwiJGFwcGx5IiwiZ2V0QXNzZXRzIiwiR2V0IiwibGlzdCIsImhlYWRlciIsIm5ldF93b3J0aCIsInRvdGFsX2Fzc2V0IiwidG90YWxfbGlhYmlsaXR5IiwieWVzdGVyZGF5X2JhbGFuY2UiLCJzZXZlbnRfZGF5X2NvbnN1bXB0aW9uIiwibGFzdF9tb250aF9jb25zdW1wdGlvbiIsInNldCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUCx5QkFBbUI7QUFDakIsa0JBQVU7QUFETztBQUZaLEssUUFPWEMsSSxHQUFPO0FBQ0pDLGVBQVMsQ0FBQyxFQUFDQyxNQUFNLFFBQVAsRUFBaUJDLFFBQVEsQ0FBQyxFQUFDQyxJQUFJLENBQUwsRUFBUUYsTUFBTSxVQUFkLEVBQTBCRyxRQUFRLElBQWxDLEVBQUQsRUFDQSxFQUFDRCxJQUFJLENBQUwsRUFBUUYsTUFBTSxVQUFkLEVBQTBCRyxRQUFRLElBQWxDLEVBREEsQ0FBekIsRUFBRCxFQUVFLEVBQUNILE1BQU0sTUFBUCxFQUFlQyxRQUFRLENBQUMsRUFBQ0MsSUFBSSxDQUFMLEVBQVFGLE1BQU0sTUFBZCxFQUFzQkcsUUFBUyxFQUEvQixFQUFELEVBQ0MsRUFBQ0QsSUFBSSxDQUFMLEVBQVFGLE1BQU0sTUFBZCxFQUFzQkcsUUFBUSxFQUE5QixFQURELENBQXZCLEVBRkYsQ0FETDtBQU1OQyxnQkFBVSxNQU5KO0FBT05DLG1CQUFhLE1BUFA7QUFRTkMsaUJBQVcsTUFSTDtBQVNOQyx1QkFBaUIsTUFUWDtBQVVOQyxvQkFBYyxNQVZSO0FBV05DLG1CQUFhO0FBWFAsSyxRQWNMQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR1QsRUFESCxFQUNPO0FBQ2I7QUFDQVUsV0FBR0MsVUFBSCxDQUFjLEVBQUVDLG1CQUFGLEVBQWQ7QUFDRCxPQUpPO0FBS0ZDLGFBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTU4sdUJBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsSUFBeEIsQ0FBNkJDLGtCQUE3QixHQUFrRCxDQUFDLEtBQUtILE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsSUFBeEIsQ0FBNkJDLGtCQUFoRjtBQU5NO0FBQUEseUJBT0FDLG9CQUFVQyxHQUFWLENBQWMsbUJBQWQsRUFBbUMsRUFBRUgsTUFBTSxFQUFFQyxvQkFBb0IsS0FBS0gsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxJQUF4QixDQUE2QkMsa0JBQTdCLEdBQWtELENBQWxELEdBQXNELENBQTVFLEVBQVIsRUFBbkMsQ0FQQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEssUUFtQlZHLFEsR0FBVztBQUNUQyxpQkFEUyx5QkFDTTtBQUNiLGVBQU8sS0FBS1AsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxJQUF4QixDQUE2QkMsa0JBQXBDO0FBQ0QsT0FIUTtBQUlUSyxtQkFKUywyQkFJUTtBQUNmLGVBQU8sS0FBS0QsV0FBTCxHQUFtQix1QkFBbkIsR0FBNkMsb0JBQXBEO0FBQ0Q7QUFOUSxLOzs7Ozs2QkFSSDtBQUNOLFVBQUlFLGtCQUFRQyxHQUFSLENBQVkseUJBQVosQ0FBSixFQUE0QztBQUMxQztBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQUNKLFdBQUtDLFNBQUw7QUFDQTs7Ozs7Ozs7Ozs7dUJBWXNCUixvQkFBVVMsR0FBVixDQUFjLFFBQWQsQzs7O0FBQWIvQixvQjtBQUNGZ0Msb0IsR0FBT2hDLEtBQUtnQyxJO0FBQ1pDLHNCLEdBQVNqQyxLQUFLaUMsTTs7QUFDbEIscUJBQUszQixRQUFMLEdBQWdCMkIsT0FBT0MsU0FBdkIsRUFDQSxLQUFLM0IsV0FBTCxHQUFtQjBCLE9BQU9FLFdBRDFCLEVBRUEsS0FBSzNCLFNBQUwsR0FBaUJ5QixPQUFPRyxlQUZ4QixFQUdBLEtBQUszQixlQUFMLEdBQXVCd0IsT0FBT0ksaUJBSDlCLEVBSUEsS0FBSzNCLFlBQUwsR0FBb0J1QixPQUFPSyxzQkFKM0IsRUFLQSxLQUFLM0IsV0FBTCxHQUFtQnNCLE9BQU9NLHNCQUwxQixFQU1BLEtBQUt0QyxPQUFMLEdBQWUrQixJQU5mO0FBT0FMLGtDQUFRYSxHQUFSLENBQVkseUJBQVosRUFBdUMsS0FBS3ZDLE9BQTVDO0FBQ0EscUJBQUs0QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOURnQ1ksZUFBS0MsSTs7a0JBQXBCN0MsTSIsImZpbGUiOiJhc3NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aMkeaImCcsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS1zcGluXCI6IFwiLi4vcHVibGljL2l2aWV3L3NwaW4vaW5kZXhcIlxuICAgICAgfVxuICAgIH1cbiAgICBcblx0XHRkYXRhID0ge1xuICAgIFx0d2FsbGV0czogW3tuYW1lOiBcIuaegeeugOeUn+a0u+aMkeaImFwiLCBjaGlsZHM6IFt7aWQ6IDEsIG5hbWU6IFwi5LiA5Liq5pyIMTAwMOWdl1wiLCBhbW91bnQ6IDEwMDB9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IDIsIG5hbWU6IFwi5LiA5Liq5pyIMTUwMOWdl1wiLCBhbW91bnQ6IDEwMDB9XX0sXG4gICAgICAgICAgICAgICAge25hbWU6IFwi6IW56IKM5oyR5oiYXCIsIGNoaWxkczogW3tpZDogMSwgbmFtZTogXCIz5Z2X6IW56IKMXCIsIGFtb3VudDogIFwiXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IDIsIG5hbWU6IFwi5YWt5Z2X6IW56IKMXCIsIGFtb3VudDogXCJcIn1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG5cdFx0XHRuZXRXb3J0aDogJzAuMDAnLFxuXHRcdFx0dG90YWxBc3NldHM6ICcwLjAwJyxcblx0XHRcdHRvdGFsRGVidDogJzAuMDAnLFxuXHRcdFx0eWVzdGVyZGF5QW1vdW50OiAnMC4wMCcsXG5cdFx0XHRzZXZlbnRBbW91bnQ6ICcwLjAwJyxcblx0XHRcdG1vbnRoQW1vdW50OiAnMC4wMCcsXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dBc3NldCAoaWQpIHtcbiAgICAgICAgLy8gd3gubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9hc3NldHMvYXNzZXRfZGV0YWlsP2lkPSR7aWR9YCB9KVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL2luZGV4YCB9KVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGV5ZXNUYWIgKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLmhpZGRlbl9hc3NldF9tb25leSA9ICF0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyLmhpZGRlbl9hc3NldF9tb25leVxuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuUHV0KCd1c2Vycy91cGRhdGVfdXNlcicsIHsgdXNlcjogeyBoaWRkZW5fYXNzZXRfbW9uZXk6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaGlkZGVuX2Fzc2V0X21vbmV5ID8gMSA6IDAgfSB9KVxuICAgICAgfVxuICAgIH1cblxuXHRcdG9uU2hvdyAoKSB7XG4gICAgICBpZiAoU2Vzc2lvbi5nZXQoJ0Bhc3NldF9saXN0X2xvYWRfY2FjaGVAJykpIHtcbiAgICAgICAgLy8gdGhpcy53YWxsZXRzID0gU2Vzc2lvbi5nZXQoJ0Bhc3NldF9saXN0X2xvYWRfY2FjaGVAJylcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuXHRcdFx0dGhpcy5nZXRBc3NldHMoKVxuXHRcdH1cbiAgICBcbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGhpZGRlbk1vbmV5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXIuaGlkZGVuX2Fzc2V0X21vbmV5XG4gICAgICB9LFxuICAgICAgZXllSW1hZ2VDbGFzcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGRlbk1vbmV5ID8gJ2p6LWljb24teWFuamluZy16aGVuZycgOiAnanotaWNvbi15YW5qaW5nLWJpJ1xuICAgICAgfVxuICAgIH1cblxuXHRcdGFzeW5jIGdldEFzc2V0cygpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCd3YWxsZXQnKTtcbiAgICAgIGxldCBsaXN0ID0gZGF0YS5saXN0XG4gICAgICBsZXQgaGVhZGVyID0gZGF0YS5oZWFkZXJcbiAgICAgIHRoaXMubmV0V29ydGggPSBoZWFkZXIubmV0X3dvcnRoLFxuICAgICAgdGhpcy50b3RhbEFzc2V0cyA9IGhlYWRlci50b3RhbF9hc3NldCxcbiAgICAgIHRoaXMudG90YWxEZWJ0ID0gaGVhZGVyLnRvdGFsX2xpYWJpbGl0eSxcbiAgICAgIHRoaXMueWVzdGVyZGF5QW1vdW50ID0gaGVhZGVyLnllc3RlcmRheV9iYWxhbmNlLFxuICAgICAgdGhpcy5zZXZlbnRBbW91bnQgPSBoZWFkZXIuc2V2ZW50X2RheV9jb25zdW1wdGlvbixcbiAgICAgIHRoaXMubW9udGhBbW91bnQgPSBoZWFkZXIubGFzdF9tb250aF9jb25zdW1wdGlvbixcbiAgICAgIHRoaXMud2FsbGV0cyA9IGxpc3RcbiAgICAgIFNlc3Npb24uc2V0KCdAYXNzZXRfbGlzdF9sb2FkX2NhY2hlQCcsIHRoaXMud2FsbGV0cylcbiAgICAgIHRoaXMuJGFwcGx5KClcblx0XHR9XG4gIH1cbiJdfQ==