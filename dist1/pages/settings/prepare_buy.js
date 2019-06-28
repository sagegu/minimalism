'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _prepare_buy_item = require('./../../components/prepare_buy_item.js');

var _prepare_buy_item2 = _interopRequireDefault(_prepare_buy_item);

var _prepare_order_item = require('./../../components/prepare_order_item.js');

var _prepare_order_item2 = _interopRequireDefault(_prepare_order_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prepareBuy = function (_wepy$page) {
  _inherits(prepareBuy, _wepy$page);

  function prepareBuy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, prepareBuy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = prepareBuy.__proto__ || Object.getPrototypeOf(prepareBuy)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预购清单'
    }, _this.data = {
      goods: [],
      good: {},
      showModal: false
    }, _this.methods = {
      submit: function submit(e) {
        var value = e.detail.value;
        if (_typeof(value.id) == undefined || value.id == '') {
          this.createGood(value);
        } else {
          this.updateGood(value.id, value);
        }
      },
      getGood: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wxRequest2.default.Get('pre_order/' + id);

                case 2:
                  result = _context.sent;

                  this.good = result;
                  this.showModal = true;
                  this.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getGood(_x) {
          return _ref2.apply(this, arguments);
        }

        return getGood;
      }(),
      showCreateModal: function showCreateModal() {
        this.good = {};
        this.showModal = true;
      },
      markBuy: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _wxRequest2.default.Put('pre_order/' + id + '/mark');

                case 2:
                  this.getGoods();

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function markBuy(_x2) {
          return _ref3.apply(this, arguments);
        }

        return markBuy;
      }(),
      del: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _wxRequest2.default.Destroy('pre_order/' + id);

                case 2:
                  this.getGoods();

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function del(_x3) {
          return _ref4.apply(this, arguments);
        }

        return del;
      }()
    }, _this.$repeat = { "goods": { "com": "orderItem", "props": "good" } }, _this.$props = { "orderItem": { "xmlns:v-bind": { "value": "", "for": "goods", "item": "item", "index": "index", "key": "index" }, "v-bind:good.once": { "value": "item", "type": "item", "for": "goods", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "goods", "item": "item", "index": "index", "key": "index" } }, "Item": { "v-bind:showModal.sync": "showModal", "v-bind:good.sync": "good" } }, _this.$events = { "orderItem": { "v-on:getGood": "getGood" }, "Item": { "v-on:submit": "submit", "v-on:del": "del", "v-on:markbuy": "markBuy" } }, _this.components = {
      Item: _prepare_buy_item2.default,
      orderItem: _prepare_order_item2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(prepareBuy, [{
    key: 'onShow',
    value: function onShow() {
      this.getGoods();
    }
  }, {
    key: 'getGoods',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('pre_order');

              case 2:
                result = _context4.sent;

                this.goods = result;
                this.$apply();

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getGoods() {
        return _ref5.apply(this, arguments);
      }

      return getGoods;
    }()
  }, {
    key: 'createGood',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Post('pre_order', params);

              case 2:
                result = _context5.sent;

                if (result.status != 200) {
                  _tip2.default.error(result.msg);
                } else {
                  this.showModal = false;
                  this.getGoods();
                }

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createGood(_x4) {
        return _ref6.apply(this, arguments);
      }

      return createGood;
    }()
  }, {
    key: 'updateGood',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, params) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _wxRequest2.default.Put('pre_order/' + id, params);

              case 2:
                result = _context6.sent;

                if (result.status != 200) {
                  _tip2.default.error(result.msg);
                } else {
                  this.showModal = false;
                  this.getGoods();
                }

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateGood(_x5, _x6) {
        return _ref7.apply(this, arguments);
      }

      return updateGood;
    }()
  }]);

  return prepareBuy;
}(_wepy2.default.page);

exports.default = prepareBuy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXBhcmVfYnV5LmpzIl0sIm5hbWVzIjpbInByZXBhcmVCdXkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImdvb2RzIiwiZ29vZCIsInNob3dNb2RhbCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJlIiwidmFsdWUiLCJkZXRhaWwiLCJpZCIsInVuZGVmaW5lZCIsImNyZWF0ZUdvb2QiLCJ1cGRhdGVHb29kIiwiZ2V0R29vZCIsInd4UmVxdWVzdCIsIkdldCIsInJlc3VsdCIsIiRhcHBseSIsInNob3dDcmVhdGVNb2RhbCIsIm1hcmtCdXkiLCJQdXQiLCJnZXRHb29kcyIsImRlbCIsIkRlc3Ryb3kiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJJdGVtIiwib3JkZXJJdGVtIiwicGFyYW1zIiwiUG9zdCIsInN0YXR1cyIsInRpcCIsImVycm9yIiwibXNnIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGlCQUFXO0FBSE4sSyxRQU1QQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFlBQUcsUUFBT0EsTUFBTUUsRUFBYixLQUFtQkMsU0FBbkIsSUFBZ0NILE1BQU1FLEVBQU4sSUFBWSxFQUEvQyxFQUFtRDtBQUNqRCxlQUFLRSxVQUFMLENBQWdCSixLQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtLLFVBQUwsQ0FBZ0JMLE1BQU1FLEVBQXRCLEVBQTBCRixLQUExQjtBQUNEO0FBQ0YsT0FS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Q3FCLE1BQWpDLEM7OztBQUFmZCxzQjs7QUFDTixvQkFBR0EsT0FBT2dCLE1BQVAsSUFBaUIsR0FBcEIsRUFBeUI7QUFDdkJDLGdDQUFJQyxLQUFKLENBQVVsQixPQUFPbUIsR0FBakI7QUFDRCxpQkFGRCxNQUVPO0FBQ0wsdUJBQUtoQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsdUJBQUtrQixRQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzRW1DZSxlQUFLQyxJOztrQkFBeEJ4QyxVIiwiZmlsZSI6InByZXBhcmVfYnV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIGltcG9ydCBJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9wcmVwYXJlX2J1eV9pdGVtJ1xuICBpbXBvcnQgb3JkZXJJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9wcmVwYXJlX29yZGVyX2l0ZW0nXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHByZXBhcmVCdXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooTotK3muIXljZUnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGdvb2RzOiBbXSxcbiAgICAgIGdvb2Q6IHt9LFxuICAgICAgc2hvd01vZGFsOiBmYWxzZVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzdWJtaXQgKGUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlLmlkID09IHVuZGVmaW5lZCB8fCB2YWx1ZS5pZCA9PSAnJykge1xuICAgICAgICAgIHRoaXMuY3JlYXRlR29vZCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUdvb2QodmFsdWUuaWQsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0R29vZCAoaWQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd3hSZXF1ZXN0LkdldChgcHJlX29yZGVyLyR7aWR9YClcbiAgICAgICAgdGhpcy5nb29kID0gcmVzdWx0XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc2hvd0NyZWF0ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLmdvb2QgPSB7fVxuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBtYXJrQnV5IChpZCkge1xuICAgICAgICBhd2FpdCB3eFJlcXVlc3QuUHV0KGBwcmVfb3JkZXIvJHtpZH0vbWFya2ApXG4gICAgICAgIHRoaXMuZ2V0R29vZHMoKVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGRlbCAoaWQpIHtcbiAgICAgICAgYXdhaXQgd3hSZXF1ZXN0LkRlc3Ryb3koYHByZV9vcmRlci8ke2lkfWApXG4gICAgICAgIHRoaXMuZ2V0R29vZHMoKVxuICAgICAgfVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHtcImdvb2RzXCI6e1wiY29tXCI6XCJvcmRlckl0ZW1cIixcInByb3BzXCI6XCJnb29kXCJ9fTtcclxuJHByb3BzID0ge1wib3JkZXJJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJnb29kc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmdvb2Qub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImdvb2RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJnb29kc1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcIkl0ZW1cIjp7XCJ2LWJpbmQ6c2hvd01vZGFsLnN5bmNcIjpcInNob3dNb2RhbFwiLFwidi1iaW5kOmdvb2Quc3luY1wiOlwiZ29vZFwifX07XHJcbiRldmVudHMgPSB7XCJvcmRlckl0ZW1cIjp7XCJ2LW9uOmdldEdvb2RcIjpcImdldEdvb2RcIn0sXCJJdGVtXCI6e1widi1vbjpzdWJtaXRcIjpcInN1Ym1pdFwiLFwidi1vbjpkZWxcIjpcImRlbFwiLFwidi1vbjptYXJrYnV5XCI6XCJtYXJrQnV5XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBJdGVtLFxuICAgICAgb3JkZXJJdGVtXG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuZ2V0R29vZHMoKVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBnZXRHb29kcygpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3ByZV9vcmRlcicpXG4gICAgICB0aGlzLmdvb2RzID0gcmVzdWx0XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlR29vZCAocGFyYW1zKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3eFJlcXVlc3QuUG9zdCgncHJlX29yZGVyJywgcGFyYW1zKVxuICAgICAgaWYocmVzdWx0LnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgdGlwLmVycm9yKHJlc3VsdC5tc2cpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgIHRoaXMuZ2V0R29vZHMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUdvb2QgKGlkLCBwYXJhbXMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHd4UmVxdWVzdC5QdXQoYHByZV9vcmRlci8ke2lkfWAsIHBhcmFtcylcbiAgICAgIGlmKHJlc3VsdC5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgIHRpcC5lcnJvcihyZXN1bHQubXNnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB0aGlzLmdldEdvb2RzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==