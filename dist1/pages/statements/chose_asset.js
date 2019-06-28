'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _category_item = require('./../../components/category_item.js');

var _category_item2 = _interopRequireDefault(_category_item);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var choseAsset = function (_wepy$page) {
  _inherits(choseAsset, _wepy$page);

  function choseAsset() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, choseAsset);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = choseAsset.__proto__ || Object.getPrototypeOf(choseAsset)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择资产'
    }, _this.data = {
      frequent: [],
      last: null,
      list: [],
      type: 'expend',
      asset_type: null,
      hide_frequent: false
    }, _this.components = {
      category: _category_item2.default
    }, _this.methods = {
      setAsset: function setAsset(asset) {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        switch (this.type) {
          case 'expend':
            prevPage.$Expend$setAsset(asset);
            break;
          case 'income':
            prevPage.$Income$setAsset(asset);
            break;
          case 'transfer':
            prevPage.$Transfer$setAsset(asset);
            break;
          case 'repayment':
            prevPage.$Repayment$setAsset(asset);
            break;
          case 'payforother':
            prevPage.$PayForOther$setAsset(asset);
            break;
        }
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }, _this.computed = {
      showLast: function showLast() {
        return this.last == null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(choseAsset, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.type = options.type;
      if (typeof options.asset_type !== 'undefined') {
        this.asset_type = options.asset_type;
      }
      if (Number.parseInt(options.hide_frequent) === 1) {
        this.hide_frequent = true;
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getAsset();
    }
  }, {
    key: 'getAsset',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var sessionKey, cacheData, url, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionKey = '@statement_form_asset_' + this.type + '_' + this.asset_type + '@';

                if (_session2.default.get(sessionKey)) {
                  cacheData = _session2.default.get(sessionKey);

                  this.frequent = cacheData.frequent;
                  this.last = cacheData.last;
                  this.list = cacheData.categories;
                  this.$apply();
                }

                url = !!this.asset_type ? 'statements/assets?type=' + this.asset_type : 'statements/assets';
                _context.next = 5;
                return _wxRequest2.default.Get(url);

              case 5:
                data = _context.sent;

                if (!(data === undefined)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return', false);

              case 8:
                this.frequent = data.frequent;
                this.last = data.last;
                this.list = data.categories;
                _session2.default.set(sessionKey, data);
                this.$apply();

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAsset() {
        return _ref2.apply(this, arguments);
      }

      return getAsset;
    }()
  }]);

  return choseAsset;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(choseAsset , 'pages/statements/chose_asset'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob3NlX2Fzc2V0LmpzIl0sIm5hbWVzIjpbImNob3NlQXNzZXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZyZXF1ZW50IiwibGFzdCIsImxpc3QiLCJ0eXBlIiwiYXNzZXRfdHlwZSIsImhpZGVfZnJlcXVlbnQiLCJjb21wb25lbnRzIiwiY2F0ZWdvcnkiLCJDYXRlZ29yeSIsIm1ldGhvZHMiLCJzZXRBc3NldCIsImFzc2V0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsIiRFeHBlbmQkc2V0QXNzZXQiLCIkSW5jb21lJHNldEFzc2V0IiwiJFRyYW5zZmVyJHNldEFzc2V0IiwiJFJlcGF5bWVudCRzZXRBc3NldCIsIiRQYXlGb3JPdGhlciRzZXRBc3NldCIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImNvbXB1dGVkIiwic2hvd0xhc3QiLCJvcHRpb25zIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJnZXRBc3NldCIsInNlc3Npb25LZXkiLCJTZXNzaW9uIiwiZ2V0IiwiY2FjaGVEYXRhIiwiY2F0ZWdvcmllcyIsIiRhcHBseSIsInVybCIsInd4UmVxdWVzdCIsIkdldCIsInVuZGVmaW5lZCIsInNldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsWUFBTSxJQUZEO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxZQUFNLFFBSkQ7QUFLTEMsa0JBQVksSUFMUDtBQU1MQyxxQkFBZTtBQU5WLEssUUFTUEMsVSxHQUFhO0FBQ2RDLGdCQUFVQztBQURJLEssUUFrQmJDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNFQyxLQURGLEVBQ1M7QUFDZixZQUFNQyxRQUFRQyxpQkFBZDtBQUNBLFlBQU1DLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFqQjtBQUNBLGdCQUFPLEtBQUtaLElBQVo7QUFDRSxlQUFLLFFBQUw7QUFDRVcscUJBQVNFLGdCQUFULENBQTBCTCxLQUExQjtBQUNBO0FBQ0YsZUFBSyxRQUFMO0FBQ0VHLHFCQUFTRyxnQkFBVCxDQUEwQk4sS0FBMUI7QUFDQTtBQUNGLGVBQUssVUFBTDtBQUNFRyxxQkFBU0ksa0JBQVQsQ0FBNEJQLEtBQTVCO0FBQ0E7QUFDRixlQUFLLFdBQUw7QUFDRUcscUJBQVNLLG1CQUFULENBQTZCUixLQUE3QjtBQUNBO0FBQ0YsZUFBSyxhQUFMO0FBQ0VHLHFCQUFTTSxxQkFBVCxDQUErQlQsS0FBL0I7QUFDQTtBQWZKO0FBaUJBVSx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsaUJBQU87QUFEUyxTQUFsQjtBQUdEO0FBeEJPLEssUUFpRFZDLFEsR0FBVztBQUNUQyxjQURTLHNCQUNHO0FBQ1YsZUFBTyxLQUFLeEIsSUFBTCxJQUFhLElBQXBCO0FBQ0Q7QUFIUSxLOzs7OzsyQkEvREh5QixPLEVBQVM7QUFDZixXQUFLdkIsSUFBTCxHQUFZdUIsUUFBUXZCLElBQXBCO0FBQ0EsVUFBSSxPQUFPdUIsUUFBUXRCLFVBQWYsS0FBOEIsV0FBbEMsRUFBK0M7QUFDN0MsYUFBS0EsVUFBTCxHQUFrQnNCLFFBQVF0QixVQUExQjtBQUNEO0FBQ0QsVUFBSXVCLE9BQU9DLFFBQVAsQ0FBZ0JGLFFBQVFyQixhQUF4QixNQUEyQyxDQUEvQyxFQUFrRDtBQUNoRCxhQUFLQSxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7QUFDRjs7OzZCQUVTO0FBQ1IsV0FBS3dCLFFBQUw7QUFDRDs7Ozs7Ozs7OztBQThCT0MsMEIsOEJBQXNDLEtBQUszQixJLFNBQVEsS0FBS0MsVTs7QUFDOUQsb0JBQUkyQixrQkFBUUMsR0FBUixDQUFZRixVQUFaLENBQUosRUFBNkI7QUFDckJHLDJCQURxQixHQUNURixrQkFBUUMsR0FBUixDQUFZRixVQUFaLENBRFM7O0FBRTNCLHVCQUFLOUIsUUFBTCxHQUFnQmlDLFVBQVVqQyxRQUExQjtBQUNBLHVCQUFLQyxJQUFMLEdBQVlnQyxVQUFVaEMsSUFBdEI7QUFDQSx1QkFBS0MsSUFBTCxHQUFZK0IsVUFBVUMsVUFBdEI7QUFDQSx1QkFBS0MsTUFBTDtBQUNEOztBQUVLQyxtQixHQUFNLENBQUMsQ0FBQyxLQUFLaEMsVUFBUCwrQkFBOEMsS0FBS0EsVUFBbkQsR0FBa0UsbUI7O3VCQUMzRGlDLG9CQUFVQyxHQUFWLENBQWNGLEdBQWQsQzs7O0FBQWJyQyxvQjs7c0JBQ0ZBLFNBQVN3QyxTOzs7OztpREFDSixLOzs7QUFFVCxxQkFBS3ZDLFFBQUwsR0FBZ0JELEtBQUtDLFFBQXJCO0FBQ0EscUJBQUtDLElBQUwsR0FBWUYsS0FBS0UsSUFBakI7QUFDQSxxQkFBS0MsSUFBTCxHQUFZSCxLQUFLbUMsVUFBakI7QUFDQUgsa0NBQVFTLEdBQVIsQ0FBWVYsVUFBWixFQUF3Qi9CLElBQXhCO0FBQ0EscUJBQUtvQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUVvQ2QsZUFBS29CLEk7O2tCQUF4QjdDLFUiLCJmaWxlIjoiY2hvc2VfYXNzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2F0ZWdvcnlfaXRlbSdcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjaG9zZUFzc2V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YCJ5oup6LWE5LqnJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBmcmVxdWVudDogW10sXG4gICAgICBsYXN0OiBudWxsLFxuICAgICAgbGlzdDogW10sXG4gICAgICB0eXBlOiAnZXhwZW5kJyxcbiAgICAgIGFzc2V0X3R5cGU6IG51bGwsXG4gICAgICBoaWRlX2ZyZXF1ZW50OiBmYWxzZVxuICAgIH1cbiAgICBcbiAgICBjb21wb25lbnRzID0ge1xuXHRcdFx0Y2F0ZWdvcnk6IENhdGVnb3J5XG4gICAgfTtcblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXNzZXRfdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5hc3NldF90eXBlID0gb3B0aW9ucy5hc3NldF90eXBlXG4gICAgICB9XG4gICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KG9wdGlvbnMuaGlkZV9mcmVxdWVudCkgPT09IDEpIHtcbiAgICAgICAgdGhpcy5oaWRlX2ZyZXF1ZW50ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXRBc3NldCgpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNldEFzc2V0IChhc3NldCkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgICAgIGNvbnN0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl1cbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2V4cGVuZCc6XG4gICAgICAgICAgICBwcmV2UGFnZS4kRXhwZW5kJHNldEFzc2V0KGFzc2V0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdpbmNvbWUnOlxuICAgICAgICAgICAgcHJldlBhZ2UuJEluY29tZSRzZXRBc3NldChhc3NldClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAndHJhbnNmZXInOlxuICAgICAgICAgICAgcHJldlBhZ2UuJFRyYW5zZmVyJHNldEFzc2V0KGFzc2V0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdyZXBheW1lbnQnOlxuICAgICAgICAgICAgcHJldlBhZ2UuJFJlcGF5bWVudCRzZXRBc3NldChhc3NldClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAncGF5Zm9yb3RoZXInOlxuICAgICAgICAgICAgcHJldlBhZ2UuJFBheUZvck90aGVyJHNldEFzc2V0KGFzc2V0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBc3NldCAoKSB7XG4gICAgICBjb25zdCBzZXNzaW9uS2V5ID0gYEBzdGF0ZW1lbnRfZm9ybV9hc3NldF8ke3RoaXMudHlwZX1fJHt0aGlzLmFzc2V0X3R5cGV9QGBcbiAgICAgIGlmIChTZXNzaW9uLmdldChzZXNzaW9uS2V5KSkge1xuICAgICAgICBjb25zdCBjYWNoZURhdGEgPSBTZXNzaW9uLmdldChzZXNzaW9uS2V5KVxuICAgICAgICB0aGlzLmZyZXF1ZW50ID0gY2FjaGVEYXRhLmZyZXF1ZW50XG4gICAgICAgIHRoaXMubGFzdCA9IGNhY2hlRGF0YS5sYXN0XG4gICAgICAgIHRoaXMubGlzdCA9IGNhY2hlRGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXJsID0gISF0aGlzLmFzc2V0X3R5cGUgPyBgc3RhdGVtZW50cy9hc3NldHM/dHlwZT0ke3RoaXMuYXNzZXRfdHlwZX1gIDogJ3N0YXRlbWVudHMvYXNzZXRzJ1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQodXJsKVxuICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMuZnJlcXVlbnQgPSBkYXRhLmZyZXF1ZW50XG4gICAgICB0aGlzLmxhc3QgPSBkYXRhLmxhc3RcbiAgICAgIHRoaXMubGlzdCA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgU2Vzc2lvbi5zZXQoc2Vzc2lvbktleSwgZGF0YSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHNob3dMYXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdCA9PSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=