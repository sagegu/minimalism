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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementFormComponent = function (_wepy$component) {
  _inherits(StatementFormComponent, _wepy$component);

  function StatementFormComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementFormComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementFormComponent.__proto__ || Object.getPrototypeOf(StatementFormComponent)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      statement: {
        type: Object,
        default: function _default() {
          return {
            id: 0,
            type: 'expend',
            category_id: 0,
            asset_id: 0,
            amount: '',
            description: '',
            date: '',
            address: '',
            time: '',
            category_name: '吃喝',
            asset_name: '请选择账户',
            upload_files: []
          };
        }
      },
      submiting: {
        type: Boolean,
        default: false
      },
      type: String
    }, _this.data = {
      nation: '',
      province: '',
      city: '',
      district: '',
      street: '',
      assets_labels: [],
      categories_labels: [],
      switchCheck: _session2.default.get('getLocationSwitch') || false
    }, _this.methods = {
      dateChange: function dateChange(_ref2) {
        var detail = _ref2.detail;

        this.statement.date = detail.value;
      },
      redirectChoseAsset: function redirectChoseAsset() {
        wx.navigateTo({ url: '/pages/statements/chose_asset?type=' + this.statement.type });
      },
      redirectChoseCategory: function redirectChoseCategory() {
        wx.navigateTo({ url: '/pages/statements/chose_category?type=' + this.statement.type });
      },
      handleAmountInput: function handleAmountInput(_ref3) {
        var detail = _ref3.detail;

        this.statement.amount = detail.value;
      },
      handleDescInput: function handleDescInput(_ref4) {
        var detail = _ref4.detail;

        this.statement.description = detail.value;
      },
      setAsset: function setAsset(asset) {
        this.statement.asset_id = asset.id;
        this.statement.asset_name = asset.name;
      },
      setCategory: function setCategory(category) {
        this.statement.category_id = category.id;
        this.statement.category_name = category.name;
      },
      chooseCategory: function chooseCategory(category) {
        //tip.toast(category)
        this.statement.category_name = category;
      },
      getLocation: function getLocation(e) {
        var locationSwitch = e.detail.value;
        _session2.default.set('getLocationSwitch', locationSwitch);
        if (locationSwitch) {
          this.setLocation();
        } else {
          // 关闭获取地理位置
          this.statement.address = '';
          this.$apply();
        }
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
                  if (!(statement.category_id == 0)) {
                    _context.next = 7;
                    break;
                  }

                  _tip2.default.error('未选择分类');
                  return _context.abrupt('return', false);

                case 7:
                  if (!(statement.asset_id == 0)) {
                    _context.next = 10;
                    break;
                  }

                  _tip2.default.error('未选择账户');
                  return _context.abrupt('return', false);

                case 10:

                  statement.upload_files = this.statement.upload_files;
                  this.$emit('submit', statement, detail);

                case 12:
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
      quickSetDate: function quickSetDate(between) {
        var today = new Date();
        var date = today;
        if (between == -1) {
          date = new Date(today.getTime() - 24 * 60 * 60 * 1000);
        } else if (between == -2) {
          date = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000);
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        this.statement.date = [year, month, day].join('-');
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

  _createClass(StatementFormComponent, [{
    key: 'onLoad',
    value: function onLoad() {
      this.statement.type = this.type;
      if (this.statement.id === 0) {
        this.initTodayDate();
        if (this.switchCheck) this.setLocation();
      }
      this.guessCategory();
      this.guessAsset();
    }
  }, {
    key: 'initTodayDate',
    value: function initTodayDate() {
      var myDate = new Date();
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;
      this.statement.date = [year, month, day].join('-');
      this.statement.time = _util2.default.getCurrentTime();
    }
  }, {
    key: 'guessCategory',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('statements/category_frequent', { type: this.statement.type });

              case 2:
                data = _context3.sent;

                this.categories_labels = data;
                this.$apply();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function guessCategory() {
        return _ref8.apply(this, arguments);
      }

      return guessCategory;
    }()
  }, {
    key: 'guessAsset',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('statements/asset_frequent', { type: this.statement.type });

              case 2:
                data = _context4.sent;

                this.assets_labels = data;
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function guessAsset() {
        return _ref9.apply(this, arguments);
      }

      return guessAsset;
    }()
  }, {
    key: 'setLocation',
    value: function setLocation() {
      var _this2 = this;

      this.qqmapSDK = new _qqmapWxJssdk2.default({
        key: _host.mapKey
      });
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function success(result) {
          _this2.qqmapSDK.reverseGeocoder({
            location: {
              latitude: result.latitude,
              longitude: result.longitude
            },
            success: function success(addressRes) {
              var address_component = addressRes.result.address_component;
              _this2.nation = address_component.nation;
              _this2.province = address_component.province;
              _this2.city = address_component.city;
              _this2.district = address_component.district;
              _this2.street = address_component.street;
              _this2.statement.address = addressRes.result.address;
              _this2.$apply();
            }
          });
        }
      });
    }
  }]);

  return StatementFormComponent;
}(_wepy2.default.component);

exports.default = StatementFormComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiU3RhdGVtZW50Rm9ybUNvbXBvbmVudCIsInByb3BzIiwic3RhdGVtZW50IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJpZCIsImNhdGVnb3J5X2lkIiwiYXNzZXRfaWQiLCJhbW91bnQiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJhZGRyZXNzIiwidGltZSIsImNhdGVnb3J5X25hbWUiLCJhc3NldF9uYW1lIiwidXBsb2FkX2ZpbGVzIiwic3VibWl0aW5nIiwiQm9vbGVhbiIsIlN0cmluZyIsImRhdGEiLCJuYXRpb24iLCJwcm92aW5jZSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldCIsImFzc2V0c19sYWJlbHMiLCJjYXRlZ29yaWVzX2xhYmVscyIsInN3aXRjaENoZWNrIiwiU2Vzc2lvbiIsImdldCIsIm1ldGhvZHMiLCJkYXRlQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJyZWRpcmVjdENob3NlQXNzZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZWRpcmVjdENob3NlQ2F0ZWdvcnkiLCJoYW5kbGVBbW91bnRJbnB1dCIsImhhbmRsZURlc2NJbnB1dCIsInNldEFzc2V0IiwiYXNzZXQiLCJuYW1lIiwic2V0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImNob29zZUNhdGVnb3J5IiwiZ2V0TG9jYXRpb24iLCJlIiwibG9jYXRpb25Td2l0Y2giLCJzZXQiLCJzZXRMb2NhdGlvbiIsIiRhcHBseSIsImZvcm1TdWJtaXQiLCJ0aXAiLCJlcnJvciIsIiRlbWl0Iiwic2hvd1BpY3R1cmUiLCJpdGVtIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJxdWlja1NldERhdGUiLCJiZXR3ZWVuIiwidG9kYXkiLCJEYXRlIiwiZ2V0VGltZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiam9pbiIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwidXBsb2FkSW1hZ2UiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImNob3NlSW1hZ2VzIiwidGVtcEZpbGVQYXRocyIsImluaXRUb2RheURhdGUiLCJndWVzc0NhdGVnb3J5IiwiZ3Vlc3NBc3NldCIsIm15RGF0ZSIsIlV0aWwiLCJnZXRDdXJyZW50VGltZSIsInd4UmVxdWVzdCIsIkdldCIsInFxbWFwU0RLIiwiUVFNYXBXWCIsImtleSIsIm1hcEtleSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyZXZlcnNlR2VvY29kZXIiLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiYWRkcmVzc1JlcyIsImFkZHJlc3NfY29tcG9uZW50IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OztzTkFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFNQyxNQURHO0FBRVRDLGVBRlMsc0JBRUU7QUFDVCxpQkFBTztBQUNMQyxnQkFBSSxDQURDO0FBRUxILGtCQUFNLFFBRkQ7QUFHTEkseUJBQWEsQ0FIUjtBQUlMQyxzQkFBVSxDQUpMO0FBS0xDLG9CQUFRLEVBTEg7QUFNTEMseUJBQWEsRUFOUjtBQU9MQyxrQkFBTSxFQVBEO0FBUUxDLHFCQUFTLEVBUko7QUFTTEMsa0JBQU0sRUFURDtBQVVMQywyQkFBZSxJQVZWO0FBV0xDLHdCQUFZLE9BWFA7QUFZTEMsMEJBQWM7QUFaVCxXQUFQO0FBY0Q7QUFqQlEsT0FETDtBQW9CTkMsaUJBQVc7QUFDVGQsY0FBTWUsT0FERztBQUVUYixpQkFBUztBQUZBLE9BcEJMO0FBd0JORixZQUFNZ0I7QUF4QkEsSyxRQTJCUkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLFlBQU0sRUFIRDtB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QkQsV0FBV0wsTUFBWCxDQUFrQk0saUJBQTVDO0FBQ0EscUJBQUtyRixNQUFMLEdBQWNxRixrQkFBa0JyRixNQUFoQztBQUNBLHFCQUFLQyxRQUFMLEdBQWdCb0Ysa0JBQWtCcEYsUUFBbEM7QUFDQSxxQkFBS0MsSUFBTCxHQUFZbUYsa0JBQWtCbkYsSUFBOUI7QUFDQSxxQkFBS0MsUUFBTCxHQUFnQmtGLGtCQUFrQmxGLFFBQWxDO0FBQ0EscUJBQUtDLE1BQUwsR0FBY2lGLGtCQUFrQmpGLE1BQWhDO0FBQ0EscUJBQUt2QixTQUFMLENBQWVVLE9BQWYsR0FBeUI2RixXQUFXTCxNQUFYLENBQWtCeEYsT0FBM0M7QUFDQSxxQkFBS3lDLE1BQUw7QUFDRDtBQWQyQixXQUE5QjtBQWdCRDtBQW5CWSxPQUFmO0FBcUJEOzs7O0VBakdpRDJCLGVBQUsyQixTOztrQkFBcEMzRyxzQiIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbmltcG9ydCB7IG1hcEtleSB9IGZyb20gJ0AvdXRpbHMvaG9zdCdcbmltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgVXRpbCBmcm9tICdAL3V0aWxzL3V0aWwuanMnXG5pbXBvcnQgUVFNYXBXWCBmcm9tICdAL3V0aWxzL3FxbWFwLXd4LWpzc2RrLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnRGb3JtQ29tcG9uZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBzdGF0ZW1lbnQ6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIHR5cGU6ICdleHBlbmQnLFxuICAgICAgICAgIGNhdGVnb3J5X2lkOiAwLFxuICAgICAgICAgIGFzc2V0X2lkOiAwLFxuICAgICAgICAgIGFtb3VudDogJycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIGRhdGU6ICcnLFxuICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICAgIGNhdGVnb3J5X25hbWU6ICflkIPllp0nLFxuICAgICAgICAgIGFzc2V0X25hbWU6ICfor7fpgInmi6notKbmiLcnLFxuICAgICAgICAgIHVwbG9hZF9maWxlczogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHR5cGU6IFN0cmluZ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYXRpb246ICcnLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICBkaXN0cmljdDogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBhc3NldHNfbGFiZWxzOiBbXSxcbiAgICBjYXRlZ29yaWVzX2xhYmVsczogW10sXG4gICAgc3dpdGNoQ2hlY2s6IFNlc3Npb24uZ2V0KCdnZXRMb2NhdGlvblN3aXRjaCcpIHx8IGZhbHNlXG4gIH1cblxuICBvbkxvYWQgKCkge1xuICAgIHRoaXMuc3RhdGVtZW50LnR5cGUgPSB0aGlzLnR5cGVcbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQuaWQgPT09IDApIHtcbiAgICAgIHRoaXMuaW5pdFRvZGF5RGF0ZSgpXG4gICAgICBpZiAodGhpcy5zd2l0Y2hDaGVjaykgdGhpcy5zZXRMb2NhdGlvbigpXG4gICAgfVxuICAgIHRoaXMuZ3Vlc3NDYXRlZ29yeSgpXG4gICAgdGhpcy5ndWVzc0Fzc2V0KClcbiAgfVxuXG4gIGluaXRUb2RheURhdGUgKCkge1xuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgeWVhciA9IG15RGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgbGV0IG1vbnRoID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IG15RGF0ZS5nZXREYXRlKClcbiAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YFxuICAgIGlmIChkYXkgPCAxMCkgZGF5ID0gYDAke2RheX1gXG4gICAgdGhpcy5zdGF0ZW1lbnQuZGF0ZSA9IFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJylcbiAgICB0aGlzLnN0YXRlbWVudC50aW1lID0gVXRpbC5nZXRDdXJyZW50VGltZSgpXG4gIH1cblxuICBhc3luYyBndWVzc0NhdGVnb3J5ICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3RhdGVtZW50cy9jYXRlZ29yeV9mcmVxdWVudCcsIHsgdHlwZTogdGhpcy5zdGF0ZW1lbnQudHlwZSB9KVxuICAgIHRoaXMuY2F0ZWdvcmllc19sYWJlbHMgPSBkYXRhXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgYXN5bmMgZ3Vlc3NBc3NldCAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N0YXRlbWVudHMvYXNzZXRfZnJlcXVlbnQnLCB7IHR5cGU6IHRoaXMuc3RhdGVtZW50LnR5cGUgfSlcbiAgICB0aGlzLmFzc2V0c19sYWJlbHMgPSBkYXRhXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgc2V0TG9jYXRpb24gKCkge1xuICAgIHRoaXMucXFtYXBTREsgPSBuZXcgUVFNYXBXWCh7XG4gICAgICBrZXk6IG1hcEtleVxuICAgIH0pO1xuICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMucXFtYXBTREsucmV2ZXJzZUdlb2NvZGVyKHtcbiAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogKGFkZHJlc3NSZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NfY29tcG9uZW50ID0gYWRkcmVzc1Jlcy5yZXN1bHQuYWRkcmVzc19jb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMubmF0aW9uID0gYWRkcmVzc19jb21wb25lbnQubmF0aW9uXG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlID0gYWRkcmVzc19jb21wb25lbnQucHJvdmluY2VcbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IGFkZHJlc3NfY29tcG9uZW50LmNpdHlcbiAgICAgICAgICAgIHRoaXMuZGlzdHJpY3QgPSBhZGRyZXNzX2NvbXBvbmVudC5kaXN0cmljdFxuICAgICAgICAgICAgdGhpcy5zdHJlZXQgPSBhZGRyZXNzX2NvbXBvbmVudC5zdHJlZXRcbiAgICAgICAgICAgIHRoaXMuc3RhdGVtZW50LmFkZHJlc3MgPSBhZGRyZXNzUmVzLnJlc3VsdC5hZGRyZXNzXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGRhdGVDaGFuZ2UoeyBkZXRhaWwgfSkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuZGF0ZSA9IGRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcmVkaXJlY3RDaG9zZUFzc2V0ICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvc3RhdGVtZW50cy9jaG9zZV9hc3NldD90eXBlPSR7dGhpcy5zdGF0ZW1lbnQudHlwZX1gIH0pXG4gICAgfSxcbiAgICByZWRpcmVjdENob3NlQ2F0ZWdvcnkgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9zdGF0ZW1lbnRzL2Nob3NlX2NhdGVnb3J5P3R5cGU9JHt0aGlzLnN0YXRlbWVudC50eXBlfWAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUFtb3VudElucHV0ICh7IGRldGFpbCB9KSB7XG4gICAgICB0aGlzLnN0YXRlbWVudC5hbW91bnQgPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGhhbmRsZURlc2NJbnB1dCAoeyBkZXRhaWwgfSkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuZGVzY3JpcHRpb24gPSBkZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHNldEFzc2V0IChhc3NldCkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuYXNzZXRfaWQgPSBhc3NldC5pZFxuICAgICAgdGhpcy5zdGF0ZW1lbnQuYXNzZXRfbmFtZSA9IGFzc2V0Lm5hbWVcbiAgICB9LFxuICAgIHNldENhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnQuY2F0ZWdvcnlfaWQgPSBjYXRlZ29yeS5pZFxuICAgICAgdGhpcy5zdGF0ZW1lbnQuY2F0ZWdvcnlfbmFtZSA9IGNhdGVnb3J5Lm5hbWVcbiAgICB9LFxuICAgIGNob29zZUNhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgICAgIC8vdGlwLnRvYXN0KGNhdGVnb3J5KVxuICAgICAgIHRoaXMuc3RhdGVtZW50LmNhdGVnb3J5X25hbWUgPSBjYXRlZ29yeVxuICAgIH0sXG4gICAgZ2V0TG9jYXRpb24gKGUpIHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uU3dpdGNoID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIFNlc3Npb24uc2V0KCdnZXRMb2NhdGlvblN3aXRjaCcsIGxvY2F0aW9uU3dpdGNoKVxuICAgICAgaWYgKGxvY2F0aW9uU3dpdGNoKSB7XG4gICAgICAgIHRoaXMuc2V0TG9jYXRpb24oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5YWz6Zet6I635Y+W5Zyw55CG5L2N572uXG4gICAgICAgIHRoaXMuc3RhdGVtZW50LmFkZHJlc3MgPSAnJ1xuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBmb3JtU3VibWl0ICh7IGRldGFpbCB9KSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBkZXRhaWwudmFsdWVcbiAgICAgIGlmIChzdGF0ZW1lbnQuYW1vdW50ID09IDAgfHwgc3RhdGVtZW50LmFtb3VudCA9PSAnJykge1xuICAgICAgICB0aXAuZXJyb3IoJ+mHkemineS4jeiDveS4uumbticpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50LmNhdGVnb3J5X2lkID09IDApIHtcbiAgICAgICAgdGlwLmVycm9yKCfmnKrpgInmi6nliIbnsbsnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudC5hc3NldF9pZCA9PSAwKSB7XG4gICAgICAgIHRpcC5lcnJvcign5pyq6YCJ5oup6LSm5oi3JylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHN0YXRlbWVudC51cGxvYWRfZmlsZXMgPSB0aGlzLnN0YXRlbWVudC51cGxvYWRfZmlsZXNcbiAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcsIHN0YXRlbWVudCwgZGV0YWlsKVxuICAgIH0sXG4gICAgc2hvd1BpY3R1cmUgKGl0ZW0pIHtcbiAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGl0ZW0sXG4gICAgICAgIHVybHM6IHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlc1xuICAgICAgfSlcbiAgICB9LFxuICAgIHF1aWNrU2V0RGF0ZSAoYmV0d2Vlbikge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgICBsZXQgZGF0ZSA9IHRvZGF5XG4gICAgICBpZiAoYmV0d2VlbiA9PSAtMSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpIC0gMjQqNjAqNjAqMTAwMClcbiAgICAgIH0gZWxzZSBpZiAoYmV0d2VlbiA9PSAtMikge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpIC0gMioyNCo2MCo2MCoxMDAwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gJzAnICsgbW9udGhcbiAgICAgIGlmIChkYXkgPCAxMCkgZGF5ID0gJzAnICsgZGF5XG4gICAgICB0aGlzLnN0YXRlbWVudC5kYXRlID0gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKVxuICAgIH0sXG4gICAgZGVsZXRlSW1hZ2UgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzLmluZGV4T2YoaXRlbSlcbiAgICAgIHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfSxcbiAgICBhc3luYyB1cGxvYWRJbWFnZSAoKSB7XG4gICAgICBjb25zdCBjaG9zZUltYWdlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogNSxcbiAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddXG4gICAgICB9KVxuICAgICAgdGhpcy5zdGF0ZW1lbnQudXBsb2FkX2ZpbGVzID0gWy4uLnRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcywgLi4uY2hvc2VJbWFnZXMudGVtcEZpbGVQYXRoc11cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==