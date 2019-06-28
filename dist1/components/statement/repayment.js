'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _host = require('./../../utils/host.js');

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _qqmapWxJssdk = require('./../../utils/qqmap-wx-jssdk.js');

var _qqmapWxJssdk2 = _interopRequireDefault(_qqmapWxJssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementRepaymentComponent = function (_wepy$component) {
  _inherits(StatementRepaymentComponent, _wepy$component);

  function StatementRepaymentComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementRepaymentComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementRepaymentComponent.__proto__ || Object.getPrototypeOf(StatementRepaymentComponent)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      statement: {
        type: Object
      },
      submiting: {
        type: Boolean,
        default: false
      }
    }, _this.data = {
      nation: '',
      province: '',
      city: '',
      district: '',
      street: '',
      transferType: 0,
      switchCheck: _session2.default.get('getLocationSwitch') || false
    }, _this.methods = {
      dateChange: function dateChange(_ref2) {
        var detail = _ref2.detail;

        this.statement.date = detail.value;
      },
      setAsset: function setAsset(asset) {
        if (this.transferType == 1) {
          this.statement.source = asset.name;
          this.statement.from = asset.id;
        } else {
          this.statement.target = asset.name;
          this.statement.to = asset.id;
        }
      },
      handleAmountInput: function handleAmountInput(_ref3) {
        var detail = _ref3.detail;

        this.statement.amount = detail.value;
      },
      handleDescInput: function handleDescInput(_ref4) {
        var detail = _ref4.detail;

        this.statement.description = detail.value;
      },
      assetFrom: function assetFrom() {
        this.transferType = 1;
        wx.navigateTo({ url: "/pages/statements/chose_asset?type=repayment&asset_type=deposit&hide_frequent=1" });
      },
      assetTo: function assetTo() {
        this.transferType = 2;
        wx.navigateTo({ url: "/pages/statements/chose_asset?type=repayment&asset_type=debt&hide_frequent=1" });
      },
      exchangeAsset: function exchangeAsset() {
        var tmp1 = this.statement.source;
        this.statement.source = this.statement.target;
        this.statement.target = tmp1;

        var tmp2 = this.statement.from;
        this.statement.from = this.statement.to;
        this.statement.to = tmp2;
      },
      formSubmit: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref5) {
          var detail = _ref5.detail;
          var statement;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  statement = detail.value;

                  if (!(statement.amount == 0 || statement.amount == '')) {
                    _context.next = 4;
                    break;
                  }

                  _tip2.default.error('金额不能为零');
                  return _context.abrupt('return', false);

                case 4:
                  if (!(statement.asset_id == 0)) {
                    _context.next = 7;
                    break;
                  }

                  _tip2.default.error('未选择账户');
                  return _context.abrupt('return', false);

                case 7:
                  if (!(this.statement.from == 0 || this.statement.to == 0)) {
                    _context.next = 12;
                    break;
                  }

                  _tip2.default.error('未选择转账账户');
                  return _context.abrupt('return', false);

                case 12:
                  if (!(this.statement.from == this.statement.to)) {
                    _context.next = 17;
                    break;
                  }

                  _tip2.default.error('不能转去同一类型');
                  return _context.abrupt('return', false);

                case 17:
                  statement.from = this.statement.from;
                  statement.to = this.statement.to;

                case 19:
                  statement.upload_files = this.statement.upload_files;
                  this.$emit('submit', statement, detail);

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function formSubmit(_x) {
          return _ref6.apply(this, arguments);
        }

        return formSubmit;
      }(),
      showPicture: function showPicture(item) {
        wx.previewImage({
          current: item,
          urls: this.statement.upload_files
        });
      },
      deleteImage: function deleteImage(item) {
        var index = this.statement.upload_files.indexOf(item);
        this.statement.upload_files.splice(index, 1);
      },
      uploadImage: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var choseImages;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 5,
                    sizeType: ['compressed'],
                    sourceType: ['album', 'camera']
                  });

                case 2:
                  choseImages = _context2.sent;

                  this.statement.upload_files = [].concat(_toConsumableArray(this.statement.upload_files), _toConsumableArray(choseImages.tempFilePaths));
                  this.$apply();

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function uploadImage() {
          return _ref7.apply(this, arguments);
        }

        return uploadImage;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return StatementRepaymentComponent;
}(_wepy2.default.component);

exports.default = StatementRepaymentComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGF5bWVudC5qcyJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRSZXBheW1lbnRDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlbWVudCIsInR5cGUiLCJPYmplY3QiLCJzdWJtaXRpbmciLCJCb29sZWFuIiwiZGVmYXVsdCIsImRhdGEiLCJuYXRpb24iLCJwcm92aW5jZSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldCIsInRyYW5zZmVyVHlwZSIsInN3aXRjaENoZWNrIiwiU2Vzc2lvbiIsImdldCIsIm1ldGhvZHMiLCJkYXRlQ2hhbmdlIiwiZGV0YWlsIiwiZGF0ZSIsInZhbHVlIiwic2V0QXNzZXQiLCJhc3NldCIsInNvdXJjZSIsIm5hbWUiLCJmcm9tIiwiaWQiLCJ0YXJnZXQiLCJ0byIsImhhbmRsZUFtb3VudElucHV0IiwiYW1vdW50IiwiaGFuZGxlRGVzY0lucHV0IiwiZGVzY3JpcHRpb24iLCJhc3NldEZyb20iLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhc3NldFRvIiwiZXhjaGFuZ2VBc3NldCIsInRtcDEiLCJ0bXAyIiwiZm9ybVN1Ym1pdCIsIlRpcCIsImVycm9yIiwiYXNzZXRfaWQiLCJ1cGxvYWRfZmlsZXMiLCIkZW1pdCIsInNob3dQaWN0dXJlIiwiaXRlbSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiZGVsZXRlSW1hZ2UiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJ1cGxvYWRJbWFnZSIsIndlcHkiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiY2hvc2VJbWFnZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMkI7Ozs7Ozs7Ozs7Ozs7O2dPQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNB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ZUFBS0MsV0FBTCxDQUFpQjtBQUN6Q0MsMkJBQU8sQ0FEa0M7QUFFekNDLDhCQUFVLENBQUMsWUFBRCxDQUYrQjtBQUd6Q0MsZ0NBQVksQ0FBQyxPQUFELEVBQVUsUUFBVjtBQUg2QixtQkFBakIsQ0F4RXBCOztBQUFBO0FBd0VBQyw2QkF4RUE7O0FBNkVOLHVCQUFLOUQsU0FBTCxDQUFlNkMsWUFBZixnQ0FBa0MsS0FBSzdDLFNBQUwsQ0FBZTZDLFlBQWpELHNCQUFrRWlCLFlBQVlDLGFBQTlFO0FBQ0EsdUJBQUtDLE1BQUw7O0FBOUVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7OztFQXJCNkNQLGVBQUtRLFM7O2tCQUF6Q25FLDJCIiwiZmlsZSI6InJlcGF5bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG5pbXBvcnQgeyBtYXBLZXkgfSBmcm9tICdAL3V0aWxzL2hvc3QnXG5pbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG5pbXBvcnQgVGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuaW1wb3J0IFFRTWFwV1ggZnJvbSAnQC91dGlscy9xcW1hcC13eC1qc3Nkay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50UmVwYXltZW50Q29tcG9uZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBzdGF0ZW1lbnQ6IHtcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIH0sXG4gICAgc3VibWl0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdGlvbjogJycsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIGRpc3RyaWN0OiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIHRyYW5zZmVyVHlwZTogMCxcbiAgICBzd2l0Y2hDaGVjazogU2Vzc2lvbi5nZXQoJ2dldExvY2F0aW9uU3dpdGNoJykgfHwgZmFsc2VcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgZGF0ZUNoYW5nZSh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5kYXRlID0gZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBzZXRBc3NldCAoYXNzZXQpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zZmVyVHlwZSA9PSAxKSB7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50LnNvdXJjZSA9IGFzc2V0Lm5hbWVcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnQuZnJvbSA9IGFzc2V0LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlbWVudC50YXJnZXQgPSBhc3NldC5uYW1lXG4gICAgICAgIHRoaXMuc3RhdGVtZW50LnRvID0gYXNzZXQuaWRcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUFtb3VudElucHV0ICh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5hbW91bnQgPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGhhbmRsZURlc2NJbnB1dCAoeyBkZXRhaWwgfSkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuZGVzY3JpcHRpb24gPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGFzc2V0RnJvbSAoKSB7XG4gICAgICB0aGlzLnRyYW5zZmVyVHlwZSA9IDFcbiAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXQ/dHlwZT1yZXBheW1lbnQmYXNzZXRfdHlwZT1kZXBvc2l0JmhpZGVfZnJlcXVlbnQ9MVwiIH0pXG4gICAgfSxcbiAgICBhc3NldFRvICgpIHtcbiAgICAgIHRoaXMudHJhbnNmZXJUeXBlID0gMlxuICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvc3RhdGVtZW50cy9jaG9zZV9hc3NldD90eXBlPXJlcGF5bWVudCZhc3NldF90eXBlPWRlYnQmaGlkZV9mcmVxdWVudD0xXCIgfSlcbiAgICB9LFxuICAgIGV4Y2hhbmdlQXNzZXQgKCkge1xuICAgICAgY29uc3QgdG1wMSA9IHRoaXMuc3RhdGVtZW50LnNvdXJjZVxuICAgICAgdGhpcy5zdGF0ZW1lbnQuc291cmNlID0gdGhpcy5zdGF0ZW1lbnQudGFyZ2V0XG4gICAgICB0aGlzLnN0YXRlbWVudC50YXJnZXQgPSB0bXAxXG5cbiAgICAgIGNvbnN0IHRtcDIgPSB0aGlzLnN0YXRlbWVudC5mcm9tXG4gICAgICB0aGlzLnN0YXRlbWVudC5mcm9tID0gdGhpcy5zdGF0ZW1lbnQudG9cbiAgICAgIHRoaXMuc3RhdGVtZW50LnRvID0gdG1wMlxuICAgIH0sXG4gICAgYXN5bmMgZm9ybVN1Ym1pdCAoeyBkZXRhaWwgfSkge1xuICAgICAgbGV0IHN0YXRlbWVudCA9IGRldGFpbC52YWx1ZVxuICAgICAgaWYgKHN0YXRlbWVudC5hbW91bnQgPT0gMCB8fCBzdGF0ZW1lbnQuYW1vdW50ID09ICcnKSB7XG4gICAgICAgIFRpcC5lcnJvcign6YeR6aKd5LiN6IO95Li66Zu2JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQuYXNzZXRfaWQgPT0gMCkge1xuICAgICAgICBUaXAuZXJyb3IoJ+acqumAieaLqei0puaItycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZW1lbnQuZnJvbSA9PSAwIHx8IHRoaXMuc3RhdGVtZW50LnRvID09IDApIHtcbiAgICAgICAgVGlwLmVycm9yKCfmnKrpgInmi6novazotKbotKbmiLcnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQuZnJvbSA9PSB0aGlzLnN0YXRlbWVudC50bykge1xuICAgICAgICBUaXAuZXJyb3IoJ+S4jeiDvei9rOWOu+WQjOS4gOexu+WeiycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVtZW50LmZyb20gPSB0aGlzLnN0YXRlbWVudC5mcm9tXG4gICAgICAgIHN0YXRlbWVudC50byA9IHRoaXMuc3RhdGVtZW50LnRvXG4gICAgICB9XG4gICAgICBzdGF0ZW1lbnQudXBsb2FkX2ZpbGVzID0gdGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzXG4gICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnLCBzdGF0ZW1lbnQsIGRldGFpbClcbiAgICB9LFxuICAgIHNob3dQaWN0dXJlIChpdGVtKSB7XG4gICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiBpdGVtLFxuICAgICAgICB1cmxzOiB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZWxldGVJbWFnZSAoaXRlbSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMuaW5kZXhPZihpdGVtKVxuICAgICAgdGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9LFxuICAgIGFzeW5jIHVwbG9hZEltYWdlICgpIHtcbiAgICAgIGNvbnN0IGNob3NlSW1hZ2VzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiA1LFxuICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ11cbiAgICAgIH0pXG4gICAgICB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMgPSBbLi4udGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzLCAuLi5jaG9zZUltYWdlcy50ZW1wRmlsZVBhdGhzXVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxufVxuIl19