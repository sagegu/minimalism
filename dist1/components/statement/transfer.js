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

var StatementTransferComponent = function (_wepy$component) {
  _inherits(StatementTransferComponent, _wepy$component);

  function StatementTransferComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementTransferComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementTransferComponent.__proto__ || Object.getPrototypeOf(StatementTransferComponent)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
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
        wx.navigateTo({ url: "/pages/statements/chose_asset?type=transfer" });
      },
      assetTo: function assetTo() {
        this.transferType = 2;
        wx.navigateTo({ url: "/pages/statements/chose_asset?type=transfer" });
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

                  _tip2.default.error('未选择转账分类');
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

  return StatementTransferComponent;
}(_wepy2.default.component);

exports.default = StatementTransferComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbIlN0YXRlbWVudFRyYW5zZmVyQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZW1lbnQiLCJ0eXBlIiwiT2JqZWN0Iiwic3VibWl0aW5nIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRhIiwibmF0aW9uIiwicHJvdmluY2UiLCJjaXR5IiwiZGlzdHJpY3QiLCJzdHJlZXQiLCJ0cmFuc2ZlclR5cGUiLCJzd2l0Y2hDaGVjayIsIlNlc3Npb24iLCJnZXQiLCJtZXRob2RzIiwiZGF0ZUNoYW5nZSIsImRldGFpbCIsImRhdGUiLCJ2YWx1ZSIsInNldEFzc2V0IiwiYXNzZXQiLCJzb3VyY2UiLCJuYW1lIiwiZnJvbSIsImlkIiwidGFyZ2V0IiwidG8iLCJoYW5kbGVBbW91bnRJbnB1dCIsImFtb3VudCIsImhhbmRsZURlc2NJbnB1dCIsImRlc2NyaXB0aW9uIiwiYXNzZXRGcm9tIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYXNzZXRUbyIsImV4Y2hhbmdlQXNzZXQiLCJ0bXAxIiwidG1wMiIsImZvcm1TdWJtaXQiLCJUaXAiLCJlcnJvciIsImFzc2V0X2lkIiwidXBsb2FkX2ZpbGVzIiwiJGVtaXQiLCJzaG93UGljdHVyZSIsIml0ZW0iLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidXBsb2FkSW1hZ2UiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImNob3NlSW1hZ2VzIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDBCOzs7Ozs7Ozs7Ozs7Ozs4TkFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFN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QUFLQyxXQUFMLENBQWlCO0FBQ3pDQywyQkFBTyxDQURrQztBQUV6Q0MsOEJBQVUsQ0FBQyxZQUFELENBRitCO0FBR3pDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBSDZCLG1CQUFqQixDQXpFcEI7O0FBQUE7QUF5RUFDLDZCQXpFQTs7QUE4RU4sdUJBQUs5RCxTQUFMLENBQWU2QyxZQUFmLGdDQUFrQyxLQUFLN0MsU0FBTCxDQUFlNkMsWUFBakQsc0JBQWtFaUIsWUFBWUMsYUFBOUU7QUFDQSx1QkFBS0MsTUFBTDs7QUEvRU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBckI0Q1AsZUFBS1EsUzs7a0JBQXhDbkUsMEIiLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuaW1wb3J0IHsgbWFwS2V5IH0gZnJvbSAnQC91dGlscy9ob3N0J1xuaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuaW1wb3J0IFRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbmltcG9ydCBRUU1hcFdYIGZyb20gJ0AvdXRpbHMvcXFtYXAtd3gtanNzZGsuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudFRyYW5zZmVyQ29tcG9uZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBzdGF0ZW1lbnQ6IHtcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIH0sXG4gICAgc3VibWl0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdGlvbjogJycsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIGRpc3RyaWN0OiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIHRyYW5zZmVyVHlwZTogMCxcbiAgICBzd2l0Y2hDaGVjazogU2Vzc2lvbi5nZXQoJ2dldExvY2F0aW9uU3dpdGNoJykgfHwgZmFsc2VcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgZGF0ZUNoYW5nZSh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5kYXRlID0gZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBzZXRBc3NldCAoYXNzZXQpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zZmVyVHlwZSA9PSAxKSB7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50LnNvdXJjZSA9IGFzc2V0Lm5hbWVcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnQuZnJvbSA9IGFzc2V0LmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlbWVudC50YXJnZXQgPSBhc3NldC5uYW1lXG4gICAgICAgIHRoaXMuc3RhdGVtZW50LnRvID0gYXNzZXQuaWRcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUFtb3VudElucHV0ICh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5hbW91bnQgPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGhhbmRsZURlc2NJbnB1dCAoeyBkZXRhaWwgfSkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuZGVzY3JpcHRpb24gPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGFzc2V0RnJvbSAoKSB7XG4gICAgICB0aGlzLnRyYW5zZmVyVHlwZSA9IDFcbiAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXQ/dHlwZT10cmFuc2ZlclwiIH0pXG4gICAgfSxcbiAgICBhc3NldFRvICgpIHtcbiAgICAgIHRoaXMudHJhbnNmZXJUeXBlID0gMlxuICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvc3RhdGVtZW50cy9jaG9zZV9hc3NldD90eXBlPXRyYW5zZmVyXCIgfSlcbiAgICB9LFxuICAgIGV4Y2hhbmdlQXNzZXQgKCkge1xuICAgICAgY29uc3QgdG1wMSA9IHRoaXMuc3RhdGVtZW50LnNvdXJjZVxuICAgICAgdGhpcy5zdGF0ZW1lbnQuc291cmNlID0gdGhpcy5zdGF0ZW1lbnQudGFyZ2V0XG4gICAgICB0aGlzLnN0YXRlbWVudC50YXJnZXQgPSB0bXAxXG5cbiAgICAgIGNvbnN0IHRtcDIgPSB0aGlzLnN0YXRlbWVudC5mcm9tXG4gICAgICB0aGlzLnN0YXRlbWVudC5mcm9tID0gdGhpcy5zdGF0ZW1lbnQudG9cbiAgICAgIHRoaXMuc3RhdGVtZW50LnRvID0gdG1wMlxuICAgIH0sXG4gICAgYXN5bmMgZm9ybVN1Ym1pdCAoeyBkZXRhaWwgfSkge1xuICAgICAgbGV0IHN0YXRlbWVudCA9IGRldGFpbC52YWx1ZVxuICAgICAgaWYgKHN0YXRlbWVudC5hbW91bnQgPT0gMCB8fCBzdGF0ZW1lbnQuYW1vdW50ID09ICcnKSB7XG4gICAgICAgIFRpcC5lcnJvcign6YeR6aKd5LiN6IO95Li66Zu2JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQuYXNzZXRfaWQgPT0gMCkge1xuICAgICAgICBUaXAuZXJyb3IoJ+acqumAieaLqei0puaItycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZW1lbnQuZnJvbSA9PSAwIHx8IHRoaXMuc3RhdGVtZW50LnRvID09IDApIHtcbiAgICAgICAgVGlwLmVycm9yKCfmnKrpgInmi6novazotKbliIbnsbsnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQuZnJvbSA9PSB0aGlzLnN0YXRlbWVudC50bykge1xuICAgICAgICBUaXAuZXJyb3IoJ+S4jeiDvei9rOWOu+WQjOS4gOexu+WeiycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVtZW50LmZyb20gPSB0aGlzLnN0YXRlbWVudC5mcm9tXG4gICAgICAgIHN0YXRlbWVudC50byA9IHRoaXMuc3RhdGVtZW50LnRvXG4gICAgICB9XG5cbiAgICAgIHN0YXRlbWVudC51cGxvYWRfZmlsZXMgPSB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXNcbiAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcsIHN0YXRlbWVudCwgZGV0YWlsKVxuICAgIH0sXG4gICAgc2hvd1BpY3R1cmUgKGl0ZW0pIHtcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGl0ZW0sXG4gICAgICAgIHVybHM6IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlc1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRlbGV0ZUltYWdlIChpdGVtKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcy5pbmRleE9mKGl0ZW0pXG4gICAgICB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0sXG4gICAgYXN5bmMgdXBsb2FkSW1hZ2UgKCkge1xuICAgICAgY29uc3QgY2hvc2VJbWFnZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDUsXG4gICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXVxuICAgICAgfSlcbiAgICAgIHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcyA9IFsuLi50aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMsIC4uLmNob3NlSW1hZ2VzLnRlbXBGaWxlUGF0aHNdXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=