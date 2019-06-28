'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_wepy$component) {
  _inherits(Filter, _wepy$component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [],
      filterType: '',
      timeName: '时间筛选',
      categoryName: '账单分类',
      assetName: '资产账户',
      allAsset: { id: '', name: '所有账户' },
      allCategory: { id: '', name: '所有分类' },
      filter: {},
      params: {}
    }, _this.methods = {
      showContent: function showContent(filterType) {
        if (this.filterType == filterType) {
          this.filterType = '';
        } else {
          this.filterType = filterType;
        }
      },
      paramsConcat: function paramsConcat(key, item) {
        var value = '';
        if (key == 'year') {
          this.timeName = item + '\u5E74';
          value = item;
        } else if (key == 'month') {
          this.timeName = item + '\u6708';
          value = item;
        } else if (key == 'category') {
          this.categoryName = item.name;
          value = item.id;
        } else if (key == 'asset') {
          this.assetName = item.name;
          value = item.id;
        }

        if (this.params[key] === value) {
          this.params[key] = '';
        } else {
          this.params[key] = value;
        }

        this.filterType = '';
        this.$emit('paramsFilter', this.params);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getFilters();
    }
  }, {
    key: 'getFilters',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('super_statements/filter');

              case 2:
                res = _context.sent;

                this.filter = res.filter;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFilters() {
        return _ref2.apply(this, arguments);
      }

      return getFilters;
    }()
  }]);

  return Filter;
}(_wepy2.default.component);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6WyJGaWx0ZXIiLCJkYXRhIiwibGlzdCIsImZpbHRlclR5cGUiLCJ0aW1lTmFtZSIsImNhdGVnb3J5TmFtZSIsImFzc2V0TmFtZSIsImFsbEFzc2V0IiwiaWQiLCJuYW1lIiwiYWxsQ2F0ZWdvcnkiLCJmaWx0ZXIiLCJwYXJhbXMiLCJtZXRob2RzIiwic2hvd0NvbnRlbnQiLCJwYXJhbXNDb25jYXQiLCJrZXkiLCJpdGVtIiwidmFsdWUiLCIkZW1pdCIsImdldEZpbHRlcnMiLCJ3eFJlcXVlc3QiLCJHZXQiLCJyZXMiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsZ0JBQVUsTUFITDtBQUlMQyxvQkFBYyxNQUpUO0FBS0xDLGlCQUFXLE1BTE47QUFNTEMsZ0JBQVUsRUFBRUMsSUFBSSxFQUFOLEVBQVVDLE1BQU0sTUFBaEIsRUFOTDtBQU9MQyxtQkFBYSxFQUFFRixJQUFJLEVBQU4sRUFBVUMsTUFBTSxNQUFoQixFQVBSO0FBUUxFLGNBQVEsRUFSSDtBQVNMQyxjQUFRO0FBVEgsSyxRQWdCUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLWCxVQURMLEVBQ2lCO0FBQ3ZCLFlBQUksS0FBS0EsVUFBTCxJQUFtQkEsVUFBdkIsRUFBbUM7QUFDakMsZUFBS0EsVUFBTCxHQUFrQixFQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7QUFDRixPQVBPO0FBUVJZLGtCQVJRLHdCQVFNQyxHQVJOLEVBUVdDLElBUlgsRUFRaUI7QUFDdkIsWUFBSUMsUUFBUSxFQUFaO0FBQ0EsWUFBSUYsT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLGVBQUtaLFFBQUwsR0FBbUJhLElBQW5CO0FBQ0FDLGtCQUFRRCxJQUFSO0FBQ0QsU0FIRCxNQUdPLElBQUlELE9BQU8sT0FBWCxFQUFvQjtBQUN6QixlQUFLWixRQUFMLEdBQW1CYSxJQUFuQjtBQUNBQyxrQkFBUUQsSUFBUjtBQUNELFNBSE0sTUFHQSxJQUFJRCxPQUFPLFVBQVgsRUFBdUI7QUFDNUIsZUFBS1gsWUFBTCxHQUFvQlksS0FBS1IsSUFBekI7QUFDQVMsa0JBQVFELEtBQUtULEVBQWI7QUFDRCxTQUhNLE1BR0EsSUFBSVEsT0FBTyxPQUFYLEVBQW9CO0FBQ3pCLGVBQUtWLFNBQUwsR0FBaUJXLEtBQUtSLElBQXRCO0FBQ0FTLGtCQUFRRCxLQUFLVCxFQUFiO0FBQ0Q7O0FBRUQsWUFBSSxLQUFLSSxNQUFMLENBQVlJLEdBQVosTUFBcUJFLEtBQXpCLEVBQWdDO0FBQzlCLGVBQUtOLE1BQUwsQ0FBWUksR0FBWixJQUFtQixFQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtKLE1BQUwsQ0FBWUksR0FBWixJQUFtQkUsS0FBbkI7QUFDRDs7QUFFRCxhQUFLZixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsYUFBS2dCLEtBQUwsQ0FBVyxjQUFYLEVBQTJCLEtBQUtQLE1BQWhDO0FBQ0Q7QUFoQ08sSzs7Ozs7NkJBSkE7QUFDUixXQUFLUSxVQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQXNDbUJDLG9CQUFVQyxHQUFWLENBQWMseUJBQWQsQzs7O0FBQVpDLG1COztBQUNOLHFCQUFLWixNQUFMLEdBQWNZLElBQUlaLE1BQWxCO0FBQ0EscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2RGdDQyxlQUFLQyxTOztrQkFBcEIxQixNIiwiZmlsZSI6ImZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgZmlsdGVyVHlwZTogJycsXG4gICAgICB0aW1lTmFtZTogJ+aXtumXtOetm+mAiScsXG4gICAgICBjYXRlZ29yeU5hbWU6ICfotKbljZXliIbnsbsnLFxuICAgICAgYXNzZXROYW1lOiAn6LWE5Lqn6LSm5oi3JyxcbiAgICAgIGFsbEFzc2V0OiB7IGlkOiAnJywgbmFtZTogJ+aJgOaciei0puaItycgfSxcbiAgICAgIGFsbENhdGVnb3J5OiB7IGlkOiAnJywgbmFtZTogJ+aJgOacieWIhuexuycgfSxcbiAgICAgIGZpbHRlcjoge30sXG4gICAgICBwYXJhbXM6IHt9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMuZ2V0RmlsdGVycygpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dDb250ZW50IChmaWx0ZXJUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclR5cGUgPT0gZmlsdGVyVHlwZSkge1xuICAgICAgICAgIHRoaXMuZmlsdGVyVHlwZSA9ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJUeXBlID0gZmlsdGVyVHlwZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGFyYW1zQ29uY2F0IChrZXksIGl0ZW0pIHtcbiAgICAgICAgbGV0IHZhbHVlID0gJydcbiAgICAgICAgaWYgKGtleSA9PSAneWVhcicpIHtcbiAgICAgICAgICB0aGlzLnRpbWVOYW1lID0gYCR7aXRlbX3lubRgXG4gICAgICAgICAgdmFsdWUgPSBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09ICdtb250aCcpIHtcbiAgICAgICAgICB0aGlzLnRpbWVOYW1lID0gYCR7aXRlbX3mnIhgXG4gICAgICAgICAgdmFsdWUgPSBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09ICdjYXRlZ29yeScpIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5TmFtZSA9IGl0ZW0ubmFtZVxuICAgICAgICAgIHZhbHVlID0gaXRlbS5pZFxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSAnYXNzZXQnKSB7XG4gICAgICAgICAgdGhpcy5hc3NldE5hbWUgPSBpdGVtLm5hbWVcbiAgICAgICAgICB2YWx1ZSA9IGl0ZW0uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1trZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMucGFyYW1zW2tleV0gPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFyYW1zW2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZpbHRlclR5cGUgPSAnJ1xuICAgICAgICB0aGlzLiRlbWl0KCdwYXJhbXNGaWx0ZXInLCB0aGlzLnBhcmFtcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRGaWx0ZXJzICgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ3N1cGVyX3N0YXRlbWVudHMvZmlsdGVyJylcbiAgICAgIHRoaXMuZmlsdGVyID0gcmVzLmZpbHRlclxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19