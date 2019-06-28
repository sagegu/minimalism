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

var _qqmapWxJssdk = require('./../../utils/qqmap-wx-jssdk.js');

var _qqmapWxJssdk2 = _interopRequireDefault(_qqmapWxJssdk);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewStatement = function (_wepy$page) {
  _inherits(NewStatement, _wepy$page);

  function NewStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewStatement.__proto__ || Object.getPrototypeOf(NewStatement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '记一笔'
    }, _this.data = {
      method: 'POST',
      statement_id: 0,
      type: 'expend',
      amount: '',
      category_id: 0,
      category_name: '请选择分类',
      asset_id: 0,
      asset_name: '请选择账户',
      description: '',
      date: '',
      address: '',
      assets_label: [],
      categories_label: [],
      // 转账信息
      asset_log_id: 0,
      source: '请选择账户',
      target: '请选择账户',
      from: 0,
      to: 0,
      transferType: 0,
      switchCheck: _session2.default.get('getLocationSwitch') || false,
      qqmapSDK: null,
      nation: '',
      province: '',
      city: '',
      district: '',
      street: '',
      submiting: false
    }, _this.computed = {
      active: function active() {
        return this.type == 'expend';
      }
    }, _this.methods = {
      formSubmit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var statement, localDate, result, store;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  statement = e.detail.value;

                  statement.type = this.type;

                  if (!(statement.amount == 0 || statement.amount == '')) {
                    _context.next = 5;
                    break;
                  }

                  _tip2.default.error('金额不能为零');
                  return _context.abrupt('return', false);

                case 5:
                  if (!(statement.category_id == 0)) {
                    _context.next = 8;
                    break;
                  }

                  _tip2.default.error('未选择分类');
                  return _context.abrupt('return', false);

                case 8:
                  if (!(statement.asset_id == 0)) {
                    _context.next = 11;
                    break;
                  }

                  _tip2.default.error('未选择账户');
                  return _context.abrupt('return', false);

                case 11:
                  if (!(this.type == 'transfer')) {
                    _context.next = 24;
                    break;
                  }

                  if (!(this.from == 0 || this.to == 0)) {
                    _context.next = 17;
                    break;
                  }

                  _tip2.default.error('未选择转账分类');
                  return _context.abrupt('return', false);

                case 17:
                  if (!(this.from == this.to)) {
                    _context.next = 22;
                    break;
                  }

                  _tip2.default.error('不能转去同一类型');
                  return _context.abrupt('return', false);

                case 22:
                  statement.from = this.from;
                  statement.to = this.to;

                case 24:
                  localDate = new Date();

                  statement.time = [localDate.getHours(), localDate.getMinutes(), localDate.getSeconds()].join(':');
                  statement.asset_log_id = this.asset_log_id;
                  result = null;

                  this.submiting = true;

                  if (!(this.method == 'POST')) {
                    _context.next = 35;
                    break;
                  }

                  _context.next = 32;
                  return _wxRequest2.default.Post('statements', { statement: statement });

                case 32:
                  result = _context.sent;
                  _context.next = 38;
                  break;

                case 35:
                  _context.next = 37;
                  return _wxRequest2.default.Put('statements/' + this.statement_id, { statement: statement });

                case 37:
                  result = _context.sent;

                case 38:

                  if (result.status == 200) {
                    store = (0, _wepyRedux.getStore)();

                    store.dispatch(this.method == 'POST' ? (0, _actions.addStatement)(result.data) : (0, _actions.modifyStatement)(result.data));
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  } else {
                    _tip2.default.error(result.msg);
                  }
                  this.submiting = false;

                case 40:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function formSubmit(_x) {
          return _ref2.apply(this, arguments);
        }

        return formSubmit;
      }(),
      dateChange: function dateChange(e) {
        this.date = e.detail.value;
      },
      choseTab: function choseTab(type) {
        if (this.type != type) {
          this.category_id = 0;
          this.category_name = '请选择分类';
        }
        this.type = type;
        this.guessCategory();
        this.guessAsset();
      },
      tabAsset: function tabAsset(asset) {
        this.asset_id = asset.id;
        this.asset_name = asset.name;
      },
      tabCategory: function tabCategory(category) {
        this.category_id = category.id;
        this.category_name = category.name;
      },
      assetFrom: function assetFrom() {
        this.transferType = 1;
        wx.navigateTo({ url: "/pages/statements/chose_asset" });
      },
      assetTo: function assetTo() {
        this.transferType = 2;
        wx.navigateTo({ url: "/pages/statements/chose_asset" });
      },
      exchangeAsset: function exchangeAsset() {
        var tmp1 = this.source;
        this.source = this.target;
        this.target = tmp1;

        var tmp2 = this.from;
        this.from = this.to;
        this.to = tmp2;
      },
      redirectChoseAsset: function redirectChoseAsset() {
        wx.navigateTo({ url: "/pages/statements/chose_asset" });
      },
      redirectChoseCategory: function redirectChoseCategory() {
        wx.navigateTo({ url: '/pages/statements/chose_category?type=' + this.type });
      },
      getLocation: function getLocation(e) {
        var locationSwitch = e.detail.value;
        _session2.default.set('getLocationSwitch', locationSwitch);
        if (locationSwitch) {
          this.setLocation();
        } else {
          // 关闭获取地理位置
          this.address = '';
          this.$apply();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewStatement, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var myDate, year, month, day;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                myDate = new Date();
                year = myDate.getFullYear();
                month = myDate.getMonth() + 1;
                day = myDate.getDate();

                if (month < 10) month = '0' + month;
                if (day < 10) day = '0' + day;
                this.date = [year, month, day].join('-');

                if (options.id != undefined) {
                  this.getStatement(options.id);
                } else {
                  // 获取上次使用的分类和账户
                  this.getLastUsed();
                }

                if (this.switchCheck) {
                  // 初始化地理位置信息
                  this.setLocation();
                }

                if (options.type) {
                  this.type = options.type;
                  this.from = options.asset_id;
                  this.source = options.source;
                }

                this.guessCategory();
                this.guessAsset();

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'getStatement',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var statement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Get('statements/' + id);

              case 2:
                statement = _context3.sent;

                if (statement.status != undefined && statement.status != 200) {
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                  _tip2.default.error('无效的账单');
                }

                if (statement.type == 'transfer') {
                  this.from = statement.asset_id;
                  this.to = statement.target_asset_id;
                  this.source = statement.asset_name;
                  this.target = statement.target_asset_name;
                }

                this.method = 'PUT';
                this.statement_id = statement.id;
                this.type = statement.type;
                this.amount = statement.amount;
                this.category_id = statement.category_id;
                this.asset_id = statement.asset_id;
                this.description = statement.description;
                this.date = statement.date;
                this.category_name = statement.category_name;
                this.asset_name = statement.asset_name;
                this.$apply();

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getStatement(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getStatement;
    }()
  }, {
    key: 'getLastUsed',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('statements/frequent_used', { type: this.type });

              case 2:
                result = _context4.sent;

                this.category_id = result.category_id;
                this.asset_id = result.asset_id;
                this.category_name = result.category_name;
                this.asset_name = result.asset_name;
                this.$apply();

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getLastUsed() {
        return _ref5.apply(this, arguments);
      }

      return getLastUsed;
    }()
  }, {
    key: 'guessCategory',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Get('statements/category_frequent', { type: this.type });

              case 2:
                data = _context5.sent;

                this.categories_label = data;
                this.$apply();

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function guessCategory() {
        return _ref6.apply(this, arguments);
      }

      return guessCategory;
    }()
  }, {
    key: 'guessAsset',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wxRequest2.default.Get('statements/asset_frequent', { type: this.type });

              case 2:
                data = _context6.sent;

                this.assets_label = data;
                this.$apply();

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function guessAsset() {
        return _ref7.apply(this, arguments);
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
      try {
        console.log('start get location');
        wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function success(result) {
            console.log('location: ', result);
            _this2.qqmapSDK.reverseGeocoder({
              location: {
                latitude: result.latitude,
                longitude: result.longitude
              },
              success: function success(addressRes) {
                var address_component = addressRes.result.address_component;
                console.log(address_component);
                _this2.nation = address_component.nation;
                _this2.province = address_component.province;
                _this2.city = address_component.city;
                _this2.district = address_component.district;
                _this2.street = address_component.street;
                _this2.address = addressRes.result.address;
                _this2.$apply();
              }
            });
          }
        });
      } catch (e) {
        console.log('errorMsg', e);
        _session2.default.set('getLocationSwitch', false);
        this.switchCheck = false;
        this.$apply();
      }
    }
  }, {
    key: 'setCategory',
    value: function setCategory(category) {
      this.category_id = category.id;
      this.category_name = category.name;
    }
  }, {
    key: 'setAsset',
    value: function setAsset(asset) {
      if (this.type != 'transfer') {
        this.asset_id = asset.id;
        this.asset_name = asset.name;
      } else {
        if (this.transferType == 1) {
          this.source = asset.name;
          this.from = asset.id;
        } else {
          this.target = asset.name;
          this.to = asset.id;
        }
      }
    }
  }]);

  return NewStatement;
}(_wepy2.default.page);

exports.default = NewStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJOZXdTdGF0ZW1lbnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1ldGhvZCIsInN0YXRlbWVudF9pZCIsInR5cGUiLCJhbW91bnQiLCJjYXRlZ29yeV9pZCIsImNhdGVnb3J5X25hbWUiLCJhc3NldF9pZCIsImFzc2V0X25hbWUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJhZGRyZXNzIiwiYXNzZXRzX2xhYmVsIiwiY2F0ZWdvcmllc19sYWJlbCIsImFzc2V0X2xvZ19pZCIsInNvdXJjZSIsInRhcmdldCIsImZyb20iLCJ0byIsInRyYW5zZmVyVHlwZSIsInN3aXRjaENoZWNrIiwiU2Vzc2lvbiIsImdldCIsInFxbWFwU0RLIiwibmF0aW9uIiwicHJvdmluY2UiLCJjaXR5IiwiZGlzdHJpY3QiLCJzdHJlZXQiLCJzdWJtaXRpbmciLCJjb21wdXRlZCIsImFjdGl2ZSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInN0YXRlbWVudCIsImRldGFpbCIsInZhbHVlIiwidGlwIiwiZXJyb3IiLCJsb2NhbERhdGUiLCJEYXRlIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJqb2luIiwicmVzdWx0Iiwid3hSZXF1ZXN0IiwiUG9zdCIsIlB1dCIsInN0YXR1cyIsInN0b3JlIiwiZGlzcGF0Y2giLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJtc2ciLCJkYXRlQ2hhbmdlIiwiY2hvc2VUYWIiLCJndWVzc0NhdGVnb3J5IiwiZ3Vlc3NBc3NldCIsInRhYkFzc2V0IiwiYXNzZXQiLCJpZCIsIm5hbWUiLCJ0YWJDYXRlZ29yeSIsImNhdGVnb3J5IiwiYXNzZXRGcm9tIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYXNzZXRUbyIsImV4Y2hhbmdlQXNzZXQiLCJ0bXAxIiwidG1wMiIsInJlZGlyZWN0Q2hvc2VBc3NldCIsInJlZGlyZWN0Q2hvc2VDYXRlZ29yeSIsImdldExvY2F0aW9uIiwibG9jYXRpb25Td2l0Y2giLCJzZXQiLCJzZXRMb2NhdGlvbiIsIiRhcHBseSIsIm9wdGlvbnMiLCJteURhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInVuZGVmaW5lZCIsImdldFN0YXRlbWVudCIsImdldExhc3RVc2VkIiwiR2V0IiwidGFyZ2V0X2Fzc2V0X2lkIiwidGFyZ2V0X2Fzc2V0X25hbWUiLCJRUU1hcFdYIiwia2V5IiwibWFwS2V5IiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJyZXZlcnNlR2VvY29kZXIiLCJsb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiYWRkcmVzc1JlcyIsImFkZHJlc3NfY29tcG9uZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0M7Ozs7QUFDQzs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVhDLEksR0FBTztBQUNIQyxjQUFRLE1BREw7QUFFSEMsb0JBQWMsQ0FGWDtBQUdIQyxZQUFNLFFBSEg7QUFJSEMsY0FBUSxFQUpMO0FBS0hDLG1CQUFhLENBTFY7QUFNSEMscUJBQWUsT0FOWjtBQU9IQyxnQkFBVSxDQVBQO0FBUUhDLGtCQUFZLE9BUlQ7QUFTSEMsbUJBQWEsRUFUVjtBQVVIQyxZQUFNLEVBVkg7QUFXSEMsZUFBUyxFQVhOO0FBWUhDLG9CQUFjLEVBWlg7QUFhSEMsd0JBQWtCLEVBYmY7QUFjSDtBQUNBQyxvQkFBYyxDQWZYO0FBZ0JIQyxjQUFRLE9BaEJMO0FBaUJIQyxjQUFRLE9BakJMO0FBa0JIQyxZQUFNLENBbEJIO0FBbUJIQyxVQUFJLENBbkJEO0FBb0JIQyxvQkFBYyxDQXBCWDtBQXFCSEMsbUJBQWFDLGtCQUFRQyxHQUFSLENBQVksbUJB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QUFRQyxHQUFSLENBQVksVUFBWixFQUF3Qm5FLENBQXhCO0FBQ0FiLDBCQUFRMkQsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQWpDO0FBQ0EsYUFBSzVELFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLOEQsTUFBTDtBQUNEO0FBQ0Y7OztnQ0FFWWYsUSxFQUFVO0FBQ3JCLFdBQUs5RCxXQUFMLEdBQW1COEQsU0FBU0gsRUFBNUI7QUFDQSxXQUFLMUQsYUFBTCxHQUFxQjZELFNBQVNGLElBQTlCO0FBQ0Q7Ozs2QkFFU0YsSyxFQUFPO0FBQ2YsVUFBSSxLQUFLNUQsSUFBTCxJQUFhLFVBQWpCLEVBQTZCO0FBQzNCLGFBQUtJLFFBQUwsR0FBZ0J3RCxNQUFNQyxFQUF0QjtBQUNBLGFBQUt4RCxVQUFMLEdBQWtCdUQsTUFBTUUsSUFBeEI7QUFDRCxPQUhELE1BR087QUFDTCxZQUFJLEtBQUs5QyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGVBQUtKLE1BQUwsR0FBY2dELE1BQU1FLElBQXBCO0FBQ0EsZUFBS2hELElBQUwsR0FBWThDLE1BQU1DLEVBQWxCO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZUFBS2hELE1BQUwsR0FBYytDLE1BQU1FLElBQXBCO0FBQ0EsZUFBSy9DLEVBQUwsR0FBVTZDLE1BQU1DLEVBQWhCO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBaFN1Q1YsZUFBS3VELEk7O2tCQUExQmhILFkiLCJmaWxlIjoic3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCB7IG1hcEtleSB9IGZyb20gJ0AvdXRpbHMvaG9zdCdcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuICBpbXBvcnQgUVFNYXBXWCBmcm9tICdAL3V0aWxzL3FxbWFwLXd4LWpzc2RrLmpzJ1xuICBpbXBvcnQgeyBnZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IGFkZFN0YXRlbWVudCwgbW9kaWZ5U3RhdGVtZW50IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdTdGF0ZW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDkuIDnrJQnXG4gICAgfVxuXG5cdFx0ZGF0YSA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3RhdGVtZW50X2lkOiAwLFxuICAgICAgdHlwZTogJ2V4cGVuZCcsXG4gICAgICBhbW91bnQ6ICcnLFxuICAgICAgY2F0ZWdvcnlfaWQ6IDAsXG4gICAgICBjYXRlZ29yeV9uYW1lOiAn6K+36YCJ5oup5YiG57G7JyxcbiAgICAgIGFzc2V0X2lkOiAwLFxuICAgICAgYXNzZXRfbmFtZTogJ+ivt+mAieaLqei0puaItycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkYXRlOiAnJyxcbiAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgYXNzZXRzX2xhYmVsOiBbXSxcbiAgICAgIGNhdGVnb3JpZXNfbGFiZWw6IFtdLFxuICAgICAgLy8g6L2s6LSm5L+h5oGvXG4gICAgICBhc3NldF9sb2dfaWQ6IDAsXG4gICAgICBzb3VyY2U6ICfor7fpgInmi6notKbmiLcnLFxuICAgICAgdGFyZ2V0OiAn6K+36YCJ5oup6LSm5oi3JyxcbiAgICAgIGZyb206IDAsXG4gICAgICB0bzogMCxcbiAgICAgIHRyYW5zZmVyVHlwZTogMCxcbiAgICAgIHN3aXRjaENoZWNrOiBTZXNzaW9uLmdldCgnZ2V0TG9jYXRpb25Td2l0Y2gnKSB8fCBmYWxzZSxcbiAgICAgIHFxbWFwU0RLOiBudWxsLFxuICAgICAgbmF0aW9uOiAnJyxcbiAgICAgIHByb3ZpbmNlOiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgZGlzdHJpY3Q6ICcnLFxuICAgICAgc3RyZWV0OiAnJyxcbiAgICAgIHN1Ym1pdGluZzogZmFsc2VcbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKVxuICAgICAgbGV0IHllYXIgPSBteURhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgbGV0IG1vbnRoID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICBsZXQgZGF5ID0gbXlEYXRlLmdldERhdGUoKVxuICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWBcbiAgICAgIGlmIChkYXkgPCAxMCkgZGF5ID0gYDAke2RheX1gXG4gICAgICB0aGlzLmRhdGUgPSBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpXG5cbiAgICAgIGlmIChvcHRpb25zLmlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmdldFN0YXRlbWVudChvcHRpb25zLmlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6I635Y+W5LiK5qyh5L2/55So55qE5YiG57G75ZKM6LSm5oi3XG4gICAgICAgIHRoaXMuZ2V0TGFzdFVzZWQoKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zd2l0Y2hDaGVjaykge1xuICAgICAgICAvLyDliJ3lp4vljJblnLDnkIbkvY3nva7kv6Hmga9cbiAgICAgICAgdGhpcy5zZXRMb2NhdGlvbigpXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgICAgIHRoaXMuZnJvbSA9IG9wdGlvbnMuYXNzZXRfaWRcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmd1ZXNzQ2F0ZWdvcnkoKVxuICAgICAgdGhpcy5ndWVzc0Fzc2V0KClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGFjdGl2ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT0gJ2V4cGVuZCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgZm9ybVN1Ym1pdCAoZSkge1xuICAgICAgICBsZXQgc3RhdGVtZW50ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgc3RhdGVtZW50LnR5cGUgPSB0aGlzLnR5cGVcbiAgICAgICAgaWYgKHN0YXRlbWVudC5hbW91bnQgPT0gMCB8fCBzdGF0ZW1lbnQuYW1vdW50ID09ICcnKSB7XG4gICAgICAgICAgdGlwLmVycm9yKCfph5Hpop3kuI3og73kuLrpm7YnKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudC5jYXRlZ29yeV9pZCA9PSAwKSB7XG4gICAgICAgICAgdGlwLmVycm9yKCfmnKrpgInmi6nliIbnsbsnKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudC5hc3NldF9pZCA9PSAwKSB7XG4gICAgICAgICAgdGlwLmVycm9yKCfmnKrpgInmi6notKbmiLcnKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAndHJhbnNmZXInKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZnJvbSA9PSAwIHx8IHRoaXMudG8gPT0gMCkge1xuICAgICAgICAgICAgdGlwLmVycm9yKCfmnKrpgInmi6novazotKbliIbnsbsnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZyb20gPT0gdGhpcy50bykge1xuICAgICAgICAgICAgdGlwLmVycm9yKCfkuI3og73ovazljrvlkIzkuIDnsbvlnosnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50LmZyb20gPSB0aGlzLmZyb21cbiAgICAgICAgICAgIHN0YXRlbWVudC50byA9IHRoaXMudG9cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBzdGF0ZW1lbnQudGltZSA9IFtsb2NhbERhdGUuZ2V0SG91cnMoKSwgbG9jYWxEYXRlLmdldE1pbnV0ZXMoKSwgbG9jYWxEYXRlLmdldFNlY29uZHMoKV0uam9pbignOicpXG4gICAgICAgIHN0YXRlbWVudC5hc3NldF9sb2dfaWQgPSB0aGlzLmFzc2V0X2xvZ19pZFxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbFxuICAgICAgICB0aGlzLnN1Ym1pdGluZyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMubWV0aG9kID09ICdQT1NUJykge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHd4UmVxdWVzdC5Qb3N0KGBzdGF0ZW1lbnRzYCwge3N0YXRlbWVudDogc3RhdGVtZW50fSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB3eFJlcXVlc3QuUHV0KGBzdGF0ZW1lbnRzLyR7dGhpcy5zdGF0ZW1lbnRfaWR9YCwge3N0YXRlbWVudDogc3RhdGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2godGhpcy5tZXRob2QgPT0gJ1BPU1QnID8gYWRkU3RhdGVtZW50KHJlc3VsdC5kYXRhKSA6IG1vZGlmeVN0YXRlbWVudChyZXN1bHQuZGF0YSkpXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpcC5lcnJvcihyZXN1bHQubXNnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VibWl0aW5nID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBkYXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBjaG9zZVRhYiAodHlwZSkge1xuICAgICAgICBpZiAodGhpcy50eXBlICE9IHR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5X2lkID0gMFxuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlfbmFtZSA9ICfor7fpgInmi6nliIbnsbsnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxuICAgICAgICB0aGlzLmd1ZXNzQ2F0ZWdvcnkoKVxuICAgICAgICB0aGlzLmd1ZXNzQXNzZXQoKVxuICAgICAgfSxcbiAgICAgIHRhYkFzc2V0IChhc3NldCkge1xuICAgICAgICB0aGlzLmFzc2V0X2lkID0gYXNzZXQuaWRcbiAgICAgICAgdGhpcy5hc3NldF9uYW1lID0gYXNzZXQubmFtZVxuICAgICAgfSxcbiAgICAgIHRhYkNhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5X2lkID0gY2F0ZWdvcnkuaWRcbiAgICAgICAgdGhpcy5jYXRlZ29yeV9uYW1lID0gY2F0ZWdvcnkubmFtZVxuICAgICAgfSxcbiAgICAgIGFzc2V0RnJvbSAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNmZXJUeXBlID0gMVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBcIi9wYWdlcy9zdGF0ZW1lbnRzL2Nob3NlX2Fzc2V0XCIgfSlcbiAgICAgIH0sXG4gICAgICBhc3NldFRvICgpIHtcbiAgICAgICAgdGhpcy50cmFuc2ZlclR5cGUgPSAyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXRcIiB9KVxuICAgICAgfSxcbiAgICAgIGV4Y2hhbmdlQXNzZXQgKCkge1xuICAgICAgICBsZXQgdG1wMSA9IHRoaXMuc291cmNlXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy50YXJnZXRcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0bXAxXG5cbiAgICAgICAgbGV0IHRtcDIgPSB0aGlzLmZyb21cbiAgICAgICAgdGhpcy5mcm9tID0gdGhpcy50b1xuICAgICAgICB0aGlzLnRvID0gdG1wMlxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0Q2hvc2VBc3NldCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IFwiL3BhZ2VzL3N0YXRlbWVudHMvY2hvc2VfYXNzZXRcIiB9KVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0Q2hvc2VDYXRlZ29yeSAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvc3RhdGVtZW50cy9jaG9zZV9jYXRlZ29yeT90eXBlPSR7dGhpcy50eXBlfWAgfSlcbiAgICAgIH0sXG4gICAgICBnZXRMb2NhdGlvbiAoZSkge1xuICAgICAgICBsZXQgbG9jYXRpb25Td2l0Y2ggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBTZXNzaW9uLnNldCgnZ2V0TG9jYXRpb25Td2l0Y2gnLCBsb2NhdGlvblN3aXRjaClcbiAgICAgICAgaWYobG9jYXRpb25Td2l0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldExvY2F0aW9uKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDlhbPpl63ojrflj5blnLDnkIbkvY3nva5cbiAgICAgICAgICB0aGlzLmFkZHJlc3MgPSAnJ1xuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFN0YXRlbWVudCAoaWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoYHN0YXRlbWVudHMvJHtpZH1gKVxuICAgICAgaWYgKHN0YXRlbWVudC5zdGF0dXMgIT0gdW5kZWZpbmVkICYmIHN0YXRlbWVudC5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KVxuICAgICAgICB0aXAuZXJyb3IoJ+aXoOaViOeahOi0puWNlScpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChzdGF0ZW1lbnQudHlwZSA9PSAndHJhbnNmZXInKSB7XG4gICAgICAgIHRoaXMuZnJvbSA9IHN0YXRlbWVudC5hc3NldF9pZFxuICAgICAgICB0aGlzLnRvID0gc3RhdGVtZW50LnRhcmdldF9hc3NldF9pZFxuICAgICAgICB0aGlzLnNvdXJjZSA9IHN0YXRlbWVudC5hc3NldF9uYW1lXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gc3RhdGVtZW50LnRhcmdldF9hc3NldF9uYW1lXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWV0aG9kID0gJ1BVVCdcbiAgICAgIHRoaXMuc3RhdGVtZW50X2lkID0gc3RhdGVtZW50LmlkXG4gICAgICB0aGlzLnR5cGUgPSBzdGF0ZW1lbnQudHlwZVxuICAgICAgdGhpcy5hbW91bnQgPSBzdGF0ZW1lbnQuYW1vdW50XG4gICAgICB0aGlzLmNhdGVnb3J5X2lkID0gc3RhdGVtZW50LmNhdGVnb3J5X2lkXG4gICAgICB0aGlzLmFzc2V0X2lkID0gc3RhdGVtZW50LmFzc2V0X2lkXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gc3RhdGVtZW50LmRlc2NyaXB0aW9uXG4gICAgICB0aGlzLmRhdGUgPSBzdGF0ZW1lbnQuZGF0ZVxuICAgICAgdGhpcy5jYXRlZ29yeV9uYW1lID0gc3RhdGVtZW50LmNhdGVnb3J5X25hbWVcbiAgICAgIHRoaXMuYXNzZXRfbmFtZSA9IHN0YXRlbWVudC5hc3NldF9uYW1lXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TGFzdFVzZWQoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdzdGF0ZW1lbnRzL2ZyZXF1ZW50X3VzZWQnLCB7IHR5cGU6IHRoaXMudHlwZSB9KVxuICAgICAgdGhpcy5jYXRlZ29yeV9pZCA9IHJlc3VsdC5jYXRlZ29yeV9pZFxuICAgICAgdGhpcy5hc3NldF9pZCA9IHJlc3VsdC5hc3NldF9pZFxuICAgICAgdGhpcy5jYXRlZ29yeV9uYW1lID0gcmVzdWx0LmNhdGVnb3J5X25hbWVcbiAgICAgIHRoaXMuYXNzZXRfbmFtZSA9IHJlc3VsdC5hc3NldF9uYW1lXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZ3Vlc3NDYXRlZ29yeSAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3RhdGVtZW50cy9jYXRlZ29yeV9mcmVxdWVudCcsIHsgdHlwZTogdGhpcy50eXBlIH0pXG4gICAgICB0aGlzLmNhdGVnb3JpZXNfbGFiZWwgPSBkYXRhXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZ3Vlc3NBc3NldCAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnc3RhdGVtZW50cy9hc3NldF9mcmVxdWVudCcsIHsgdHlwZTogdGhpcy50eXBlIH0pXG4gICAgICB0aGlzLmFzc2V0c19sYWJlbCA9IGRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBzZXRMb2NhdGlvbiAoKSB7XG4gICAgICB0aGlzLnFxbWFwU0RLID0gbmV3IFFRTWFwV1goe1xuICAgICAgICBrZXk6IG1hcEtleVxuICAgICAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgZ2V0IGxvY2F0aW9uJylcbiAgICAgICAgd3guZ2V0TG9jYXRpb24oe1xuICAgICAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXG4gICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uOiAnLCByZXN1bHQpXG4gICAgICAgICAgICB0aGlzLnFxbWFwU0RLLnJldmVyc2VHZW9jb2Rlcih7XG4gICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC5sb25naXR1ZGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczogKGFkZHJlc3NSZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc19jb21wb25lbnQgPSBhZGRyZXNzUmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3NfY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIHRoaXMubmF0aW9uID0gYWRkcmVzc19jb21wb25lbnQubmF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aW5jZSA9IGFkZHJlc3NfY29tcG9uZW50LnByb3ZpbmNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5ID0gYWRkcmVzc19jb21wb25lbnQuY2l0eVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3QgPSBhZGRyZXNzX2NvbXBvbmVudC5kaXN0cmljdFxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWV0ID0gYWRkcmVzc19jb21wb25lbnQuc3RyZWV0XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzc1Jlcy5yZXN1bHQuYWRkcmVzc1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvck1zZycsIGUpXG4gICAgICAgIFNlc3Npb24uc2V0KCdnZXRMb2NhdGlvblN3aXRjaCcsIGZhbHNlKVxuICAgICAgICB0aGlzLnN3aXRjaENoZWNrID0gZmFsc2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENhdGVnb3J5IChjYXRlZ29yeSkge1xuICAgICAgdGhpcy5jYXRlZ29yeV9pZCA9IGNhdGVnb3J5LmlkXG4gICAgICB0aGlzLmNhdGVnb3J5X25hbWUgPSBjYXRlZ29yeS5uYW1lXG4gICAgfVxuXG4gICAgc2V0QXNzZXQgKGFzc2V0KSB7XG4gICAgICBpZiAodGhpcy50eXBlICE9ICd0cmFuc2ZlcicpIHtcbiAgICAgICAgdGhpcy5hc3NldF9pZCA9IGFzc2V0LmlkXG4gICAgICAgIHRoaXMuYXNzZXRfbmFtZSA9IGFzc2V0Lm5hbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZmVyVHlwZSA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBhc3NldC5uYW1lXG4gICAgICAgICAgdGhpcy5mcm9tID0gYXNzZXQuaWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRhcmdldCA9IGFzc2V0Lm5hbWVcbiAgICAgICAgICB0aGlzLnRvID0gYXNzZXQuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4iXX0=