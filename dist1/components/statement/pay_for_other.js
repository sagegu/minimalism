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

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _qqmapWxJssdk = require('./../../utils/qqmap-wx-jssdk.js');

var _qqmapWxJssdk2 = _interopRequireDefault(_qqmapWxJssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementPayForOtherComponent = function (_wepy$component) {
  _inherits(StatementPayForOtherComponent, _wepy$component);

  function StatementPayForOtherComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementPayForOtherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementPayForOtherComponent.__proto__ || Object.getPrototypeOf(StatementPayForOtherComponent)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      statement: {
        type: Object,
        default: function _default() {
          var _ref2;

          return _ref2 = {
            id: 0,
            type: 'payforother',
            category_id: 0,
            asset_id: 0,
            amount: '',
            description: '',
            date: '',
            address: '',
            time: '',
            category_name: '请选择分类',
            asset_name: '请选择账户',
            upload_files: [],
            borrower: ""
          }, _defineProperty(_ref2, 'date', _util2.default.getCurrentDate()), _defineProperty(_ref2, 'time', _util2.default.getCurrentTime()), _ref2;
        }
      },
      submiting: {
        type: Boolean,
        default: false
      }
    }, _this.methods = {
      dateChange: function dateChange(_ref3) {
        var detail = _ref3.detail;

        this.statement.date = detail.value;
      },
      redirectChoseAsset: function redirectChoseAsset() {
        wx.navigateTo({ url: '/pages/statements/chose_asset?type=' + this.statement.type });
      },
      handleAmountInput: function handleAmountInput(_ref4) {
        var detail = _ref4.detail;

        this.statement.amount = detail.value;
      },
      handleDescInput: function handleDescInput(_ref5) {
        var detail = _ref5.detail;

        this.statement.description = detail.value;
      },
      handleBorrower: function handleBorrower(_ref6) {
        var detail = _ref6.detail;

        this.statement.borrower = detail.value;
      },
      setAsset: function setAsset(asset) {
        this.statement.asset_id = asset.id;
        this.statement.asset_name = asset.name;
      },
      formSubmit: function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref7) {
          var detail = _ref7.detail;
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
                  statement.upload_files = this.statement.upload_files;
                  console.log(statement);
                  return _context.abrupt('return', false);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function formSubmit(_x) {
          return _ref8.apply(this, arguments);
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
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
          return _ref9.apply(this, arguments);
        }

        return uploadImage;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return StatementPayForOtherComponent;
}(_wepy2.default.component);

exports.default = StatementPayForOtherComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheV9mb3Jfb3RoZXIuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50UGF5Rm9yT3RoZXJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlbWVudCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwiaWQiLCJjYXRlZ29yeV9pZCIsImFzc2V0X2lkIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiYWRkcmVzcyIsInRpbWUiLCJjYXRlZ29yeV9uYW1lIiwiYXNzZXRfbmFtZSIsInVwbG9hZF9maWxlcyIsImJvcnJvd2VyIiwiVXRpbCIsImdldEN1cnJlbnREYXRlIiwiZ2V0Q3VycmVudFRpbWUiLCJzdWJtaXRpbmciLCJCb29sZWFuIiwibWV0aG9kcyIsImRhdGVDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlZGlyZWN0Q2hvc2VBc3NldCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUFtb3VudElucHV0IiwiaGFuZGxlRGVzY0lucHV0IiwiaGFuZGxlQm9ycm93ZXIiLCJzZXRBc3NldCIsImFzc2V0IiwibmFtZSIsImZvcm1TdWJtaXQiLCJUaXAiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzaG93UGljdHVyZSIsIml0ZW0iLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidXBsb2FkSW1hZ2UiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImNob3NlSW1hZ2VzIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw2Qjs7Ozs7Ozs7Ozs7Ozs7b09BQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFDVEMsY0FBTUMsTUFE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ZDtBQUNBLGFBQUt6QyxTQUFMLENBQWVjLFlBQWYsQ0FBNEJrQyxNQUE1QixDQUFtQ0YsS0FBbkMsRUFBMEMsQ0FBMUM7QUFDRCxPQTdDTztBQThDRkcsaUJBOUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkErQ29CQyxlQUFLQyxXQUFMLENBQWlCO0FBQ3pDQywyQkFBTyxDQURrQztBQUV6Q0MsOEJBQVUsQ0FBQyxZQUFELENBRitCO0FBR3pDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWO0FBSDZCLG1CQUFqQixDQS9DcEI7O0FBQUE7QUErQ0FDLDZCQS9DQTs7QUFvRE4sdUJBQUt2RCxTQUFMLENBQWVjLFlBQWYsZ0NBQWtDLEtBQUtkLFNBQUwsQ0FBZWMsWUFBakQsc0JBQWtFeUMsWUFBWUMsYUFBOUU7QUFDQSx1QkFBS0MsTUFBTDs7QUFyRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBOUIrQ1AsZUFBS1EsUzs7a0JBQTNDNUQsNkIiLCJmaWxlIjoicGF5X2Zvcl9vdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG5pbXBvcnQgeyBtYXBLZXkgfSBmcm9tICdAL3V0aWxzL2hvc3QnXG5pbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG5pbXBvcnQgVGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuaW1wb3J0IFV0aWwgZnJvbSAnQC91dGlscy91dGlsLmpzJ1xuaW1wb3J0IFFRTWFwV1ggZnJvbSAnQC91dGlscy9xcW1hcC13eC1qc3Nkay5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50UGF5Rm9yT3RoZXJDb21wb25lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHN0YXRlbWVudDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdCAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgdHlwZTogJ3BheWZvcm90aGVyJyxcbiAgICAgICAgICBjYXRlZ29yeV9pZDogMCxcbiAgICAgICAgICBhc3NldF9pZDogMCxcbiAgICAgICAgICBhbW91bnQ6ICcnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgICBjYXRlZ29yeV9uYW1lOiAn6K+36YCJ5oup5YiG57G7JyxcbiAgICAgICAgICBhc3NldF9uYW1lOiAn6K+36YCJ5oup6LSm5oi3JyxcbiAgICAgICAgICB1cGxvYWRfZmlsZXM6IFtdLFxuICAgICAgICAgIGJvcnJvd2VyOiBcIlwiLFxuICAgICAgICAgIGRhdGU6IFV0aWwuZ2V0Q3VycmVudERhdGUoKSxcbiAgICAgICAgICB0aW1lOiBVdGlsLmdldEN1cnJlbnRUaW1lKCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBkYXRlQ2hhbmdlKHsgZGV0YWlsIH0pIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50LmRhdGUgPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHJlZGlyZWN0Q2hvc2VBc3NldCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXQ/dHlwZT0ke3RoaXMuc3RhdGVtZW50LnR5cGV9YCB9KVxuICAgIH0sXG4gICAgaGFuZGxlQW1vdW50SW5wdXQgKHsgZGV0YWlsIH0pIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50LmFtb3VudCA9IGRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgaGFuZGxlRGVzY0lucHV0ICh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5kZXNjcmlwdGlvbiA9IGRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgaGFuZGxlQm9ycm93ZXIoe2RldGFpbH0pIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50LmJvcnJvd2VyID0gZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBzZXRBc3NldCAoYXNzZXQpIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50LmFzc2V0X2lkID0gYXNzZXQuaWRcbiAgICAgIHRoaXMuc3RhdGVtZW50LmFzc2V0X25hbWUgPSBhc3NldC5uYW1lXG4gICAgfSxcbiAgICBhc3luYyBmb3JtU3VibWl0ICh7IGRldGFpbCB9KSB7XG4gICAgICBsZXQgc3RhdGVtZW50ID0gZGV0YWlsLnZhbHVlXG4gICAgICBpZiAoc3RhdGVtZW50LmFtb3VudCA9PSAwIHx8IHN0YXRlbWVudC5hbW91bnQgPT0gJycpIHtcbiAgICAgICAgVGlwLmVycm9yKCfph5Hpop3kuI3og73kuLrpm7YnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudC5hc3NldF9pZCA9PSAwKSB7XG4gICAgICAgIFRpcC5lcnJvcign5pyq6YCJ5oup6LSm5oi3JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBzdGF0ZW1lbnQudXBsb2FkX2ZpbGVzID0gdGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcsIHN0YXRlbWVudCwgZGV0YWlsKVxuICAgIH0sXG4gICAgc2hvd1BpY3R1cmUgKGl0ZW0pIHtcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGl0ZW0sXG4gICAgICAgIHVybHM6IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlc1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRlbGV0ZUltYWdlIChpdGVtKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcy5pbmRleE9mKGl0ZW0pXG4gICAgICB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0sXG4gICAgYXN5bmMgdXBsb2FkSW1hZ2UgKCkge1xuICAgICAgY29uc3QgY2hvc2VJbWFnZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDUsXG4gICAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXVxuICAgICAgfSlcbiAgICAgIHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcyA9IFsuLi50aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXMsIC4uLmNob3NlSW1hZ2VzLnRlbXBGaWxlUGF0aHNdXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=