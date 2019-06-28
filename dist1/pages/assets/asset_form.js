'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _host = require('./../../utils/host.js');

var _host2 = _interopRequireDefault(_host);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

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
      navigationBarTitleText: '资产设置'
    }, _this.data = {
      wallet: {
        id: 0,
        name: '',
        amount: 0,
        parent_id: 0,
        icon_path: '',
        remark: '',
        type: ''
      },
      mehotd: '',
      parents: [],
      parentIndex: 0,
      assetTypes: [{ name: '存款账户', key: 'deposit' }, { name: '负债账户', key: 'debt' }],
      typeIndex: 0,
      isParentLevel: false
    }, _this.methods = {
      bindKeyName: function bindKeyName(e) {
        this.wallet.name = e.detail.value;
      },
      bindKeyAmount: function bindKeyAmount(e) {
        this.wallet.amount = e.detail.value;
      },
      bindKeyRemark: function bindKeyRemark(e) {
        this.wallet.remark = e.detail.value;
      },
      choseIcon: function choseIcon(file_path) {
        this.wallet.icon_path = file_path;
      },
      changeType: function changeType(e) {
        var value = e.detail.value;
        this.parentIndex = value;
        this.wallet.parent_id = this.parents[value]['id'];
      },
      changeSwitch: function changeSwitch(e) {
        this.isParentLevel = e.detail.value;
        if (this.isParentLevel) {
          this.wallet.parent_id = 0;
        } else {
          if (this.parents.length > 0) this.wallet.parent_id = this.parents[this.parentIndex]['id'];
        }
      },
      changeAssetType: function changeAssetType(e) {
        var value = e.detail.value;
        this.typeIndex = value;
        this.wallet.type = this.assetTypes[value]['key'];
      },
      del: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _tip2.default.confirm('删除后，所属该分类的账单也将一并删除！', {}, '警告');

                case 2:
                  _context.next = 4;
                  return _wxRequest2.default.Destroy('assets/' + this.wallet.id);

                case 4:
                  data = _context.sent;

                  if (data.status == 200) {
                    _session2.default.clearByKey('asset');
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  } else {
                    _tip2.default.error(data.msg);
                  }

                case 6:
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
      submit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var method, cId, res;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  method = 'POST';
                  cId = null;

                  if (this.wallet.id != 0) {
                    method = 'PUT';
                    cId = this.wallet.id;
                  }

                  if (!(this.wallet.name == '')) {
                    _context2.next = 6;
                    break;
                  }

                  _tip2.default.error('请填写账户名称');
                  return _context2.abrupt('return', false);

                case 6:

                  if (this.wallet.amount == '') {
                    this.wallet.amount = 0;
                  }

                  res = null;

                  if (!(method == 'POST')) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 11;
                  return _wxRequest2.default.Post('assets', { wallet: this.wallet });

                case 11:
                  res = _context2.sent;
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.next = 16;
                  return _wxRequest2.default.Put('assets/' + cId, { wallet: this.wallet });

                case 16:
                  res = _context2.sent;

                case 17:
                  if (res.status == 200) {
                    _session2.default.clearByKey('asset');
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  } else {
                    _tip2.default.error(res.msg);
                  }

                case 18:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function submit() {
          return _ref3.apply(this, arguments);
        }

        return submit;
      }()
    }, _this.computed = {
      host: function host() {
        return _host2.default.host;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AssetList, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.wallet.type = this.assetTypes[this.typeIndex]['key'];

      this.getParent();
      if (options.id != undefined) {
        this.getWallet(options.id);
      }
    }
  }, {
    key: 'getWallet',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('assets/' + id);

              case 2:
                data = _context3.sent;

                this.wallet = data;
                if (this.wallet.type == 'debt') this.typeIndex = 1;
                if (this.wallet.parent_id != 0) {
                  this.updateCurrentIndex();
                } else {
                  this.isParentLevel = true;
                }
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getWallet(_x) {
        return _ref4.apply(this, arguments);
      }

      return getWallet;
    }()
  }, {
    key: 'getParent',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('assets/parent');

              case 2:
                data = _context4.sent;

                this.parents = data;
                if (this.parents.length > 0 && !this.isParentLevel && this.wallet.id == 0) {
                  this.wallet.parent_id = this.parents[0]['id'];
                }
                this.$apply();

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getParent() {
        return _ref5.apply(this, arguments);
      }

      return getParent;
    }()
  }, {
    key: 'updateCurrentIndex',
    value: function updateCurrentIndex() {
      for (var index in this.parents) {
        if (this.parents[index]['id'] == this.wallet.parent_id) {
          this.parentIndex = index;
          return false;
        }
      }
    }
  }, {
    key: 'setIcon',
    value: function setIcon(e) {
      this.wallet.icon_path = e.icon;
      this.$apply();
    }
  }]);

  return AssetList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(AssetList , 'pages/assets/asset_form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0X2Zvcm0uanMiXSwibmFtZXMiOlsiQXNzZXRMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ3YWxsZXQiLCJpZCIsIm5hbWUiLCJhbW91bnQiLCJwYXJlbnRfaWQiLCJpY29uX3BhdGgiLCJyZW1hcmsiLCJ0eXBlIiwibWVob3RkIiwicGFyZW50cyIsInBhcmVudEluZGV4IiwiYXNzZXRUeXBlcyIsImtleSIsInR5cGVJbmRleCIsImlzUGFyZW50TGV2ZWwiLCJtZXRob2RzIiwiYmluZEtleU5hbWUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kS2V5QW1vdW50IiwiYmluZEtleVJlbWFyayIsImNob3NlSWNvbiIsImZpbGVfcGF0aCIsImNoYW5nZVR5cGUiLCJjaGFuZ2VTd2l0Y2giLCJsZW5ndGgiLCJjaGFuZ2VBc3NldFR5cGUiLCJkZWwiLCJ0aXAiLCJjb25maXJtIiwid3hSZXF1ZXN0IiwiRGVzdHJveSIsInN0YXR1cyIsIlNlc3Npb24iLCJjbGVhckJ5S2V5Iiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZXJyb3IiLCJtc2ciLCJzdWJtaXQiLCJtZXRob2QiLCJjSWQiLCJyZXMiLCJQb3N0IiwiUHV0IiwiY29tcHV0ZWQiLCJob3N0IiwiSG9zdCIsIm9wdGlvbnMiLCJnZXRQYXJlbnQiLCJ1bmRlZmluZWQiLCJnZXRXYWxsZXQiLCJHZXQiLCJ1cGRhdGVDdXJyZW50SW5kZXgiLCIkYXBwbHkiLCJpbmRleCIsImljb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFDTkMsWUFBSSxDQURFO0FBRU5DLGNBQU0sRUFGQTtBQUdOQyxnQkFBUSxD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TCxDQUFhLENBQWIsRUFBZ0IsSUFBaEIsQ0FBeEI7QUFDRDtBQUNELHFCQUFLK0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQUdvQjtBQUNwQixXQUFLLElBQUlDLEtBQVQsSUFBa0IsS0FBS2hELE9BQXZCLEVBQWdDO0FBQzlCLFlBQUksS0FBS0EsT0FBTCxDQUFhZ0QsS0FBYixFQUFvQixJQUFwQixLQUE2QixLQUFLekQsTUFBTCxDQUFZSSxTQUE3QyxFQUF3RDtBQUN0RCxlQUFLTSxXQUFMLEdBQW1CK0MsS0FBbkI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7NEJBRVF4QyxDLEVBQUc7QUFDVixXQUFLakIsTUFBTCxDQUFZSyxTQUFaLEdBQXdCWSxFQUFFeUMsSUFBMUI7QUFDQSxXQUFLRixNQUFMO0FBQ0Q7Ozs7RUF2Sm9DcEIsZUFBS3VCLEk7O2tCQUF2Qi9ELFMiLCJmaWxlIjoiYXNzZXRfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgSG9zdCBmcm9tICdAL3V0aWxzL2hvc3QnXG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIGltcG9ydCBTZXNzaW9uIGZyb20gJ0AvdXRpbHMvc2Vzc2lvbidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LWE5Lqn6K6+572uJ1xuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgd2FsbGV0OiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICBwYXJlbnRfaWQ6IDAsXG4gICAgICAgIGljb25fcGF0aDogJycsXG4gICAgICAgIHJlbWFyazogJycsXG4gICAgICAgIHR5cGU6ICcnXG4gICAgICB9LFxuICAgICAgbWVob3RkOiAnJyxcbiAgICAgIHBhcmVudHM6IFtdLFxuICAgICAgcGFyZW50SW5kZXg6IDAsXG4gICAgICBhc3NldFR5cGVzOiBbXG4gICAgICAgIHsgbmFtZTogJ+WtmOasvui0puaItycsIGtleTogJ2RlcG9zaXQnIH0sXG4gICAgICAgIHsgbmFtZTogJ+i0n+WAuui0puaItycsIGtleTogJ2RlYnQnIH1cbiAgICAgIF0sXG4gICAgICB0eXBlSW5kZXg6IDAsXG4gICAgICBpc1BhcmVudExldmVsOiBmYWxzZVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kS2V5TmFtZSAoZSkge1xuICAgICAgICB0aGlzLndhbGxldC5uYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBiaW5kS2V5QW1vdW50IChlKSB7XG4gICAgICAgIHRoaXMud2FsbGV0LmFtb3VudCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgYmluZEtleVJlbWFyayAoZSkge1xuICAgICAgICB0aGlzLndhbGxldC5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIGNob3NlSWNvbiAoZmlsZV9wYXRoKSB7XG4gICAgICAgIHRoaXMud2FsbGV0Lmljb25fcGF0aCA9IGZpbGVfcGF0aFxuICAgICAgfSxcbiAgICAgIGNoYW5nZVR5cGUoZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLnBhcmVudEluZGV4ID0gdmFsdWVcbiAgICAgICAgdGhpcy53YWxsZXQucGFyZW50X2lkID0gdGhpcy5wYXJlbnRzW3ZhbHVlXVsnaWQnXVxuICAgICAgfSxcbiAgICAgIGNoYW5nZVN3aXRjaCAoZSkge1xuICAgICAgICB0aGlzLmlzUGFyZW50TGV2ZWwgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBpZiAodGhpcy5pc1BhcmVudExldmVsKSB7XG4gICAgICAgICAgdGhpcy53YWxsZXQucGFyZW50X2lkID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnBhcmVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMud2FsbGV0LnBhcmVudF9pZCA9IHRoaXMucGFyZW50c1t0aGlzLnBhcmVudEluZGV4XVsnaWQnXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhbmdlQXNzZXRUeXBlIChlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMudHlwZUluZGV4ID0gdmFsdWVcbiAgICAgICAgdGhpcy53YWxsZXQudHlwZSA9IHRoaXMuYXNzZXRUeXBlc1t2YWx1ZV1bJ2tleSddXG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsICgpIHtcbiAgICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+WIoOmZpOWQju+8jOaJgOWxnuivpeWIhuexu+eahOi0puWNleS5n+WwhuS4gOW5tuWIoOmZpO+8gScsIHt9LCAn6K2m5ZGKJylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5EZXN0cm95KGBhc3NldHMvJHt0aGlzLndhbGxldC5pZH1gKVxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgU2Vzc2lvbi5jbGVhckJ5S2V5KCdhc3NldCcpXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpcC5lcnJvcihkYXRhLm1zZylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHN1Ym1pdCAoKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSAnUE9TVCdcbiAgICAgICAgbGV0IGNJZCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMud2FsbGV0LmlkICE9IDApIHtcbiAgICAgICAgICBtZXRob2QgPSAnUFVUJ1xuICAgICAgICAgIGNJZCA9IHRoaXMud2FsbGV0LmlkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy53YWxsZXQubmFtZSA9PSAnJykge1xuICAgICAgICAgIHRpcC5lcnJvcign6K+35aGr5YaZ6LSm5oi35ZCN56ewJylcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLndhbGxldC5hbW91bnQgPT0gJycpIHtcbiAgICAgICAgICB0aGlzLndhbGxldC5hbW91bnQgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzID0gbnVsbFxuICAgICAgICBpZihtZXRob2QgPT0gJ1BPU1QnICkge1xuICAgICAgICAgIHJlcyA9IGF3YWl0IHd4UmVxdWVzdC5Qb3N0KCdhc3NldHMnLCB7d2FsbGV0OiB0aGlzLndhbGxldH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LlB1dChgYXNzZXRzLyR7Y0lkfWAsIHt3YWxsZXQ6IHRoaXMud2FsbGV0fSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICBTZXNzaW9uLmNsZWFyQnlLZXkoJ2Fzc2V0JylcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlwLmVycm9yKHJlcy5tc2cpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGhvc3QgKCkge1xuICAgICAgICByZXR1cm4gSG9zdC5ob3N0O1xuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy53YWxsZXQudHlwZSA9IHRoaXMuYXNzZXRUeXBlc1t0aGlzLnR5cGVJbmRleF1bJ2tleSddXG5cbiAgICAgIHRoaXMuZ2V0UGFyZW50KClcbiAgICAgIGlmIChvcHRpb25zLmlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmdldFdhbGxldChvcHRpb25zLmlkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFdhbGxldCAoaWQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KGBhc3NldHMvJHtpZH1gKVxuICAgICAgdGhpcy53YWxsZXQgPSBkYXRhXG4gICAgICBpZiAodGhpcy53YWxsZXQudHlwZSA9PSAnZGVidCcpIHRoaXMudHlwZUluZGV4ID0gMVxuICAgICAgaWYgKHRoaXMud2FsbGV0LnBhcmVudF9pZCAhPSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudEluZGV4KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNQYXJlbnRMZXZlbCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJlbnQoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnYXNzZXRzL3BhcmVudCcpXG4gICAgICB0aGlzLnBhcmVudHMgPSBkYXRhXG4gICAgICBpZiAodGhpcy5wYXJlbnRzLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXNQYXJlbnRMZXZlbCAmJiB0aGlzLndhbGxldC5pZCA9PSAwKSB7XG4gICAgICAgIHRoaXMud2FsbGV0LnBhcmVudF9pZCA9IHRoaXMucGFyZW50c1swXVsnaWQnXVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRJbmRleCAoKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLnBhcmVudHMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50c1tpbmRleF1bJ2lkJ10gPT0gdGhpcy53YWxsZXQucGFyZW50X2lkKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnRJbmRleCA9IGluZGV4XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJY29uIChlKSB7XG4gICAgICB0aGlzLndhbGxldC5pY29uX3BhdGggPSBlLmljb25cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==