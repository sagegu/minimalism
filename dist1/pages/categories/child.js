'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _category_list = require('./../../components/category_list.js');

var _category_list2 = _interopRequireDefault(_category_list);

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

var CategoryChild = function (_wepy$page) {
  _inherits(CategoryChild, _wepy$page);

  function CategoryChild() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryChild.__proto__ || Object.getPrototypeOf(CategoryChild)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '子分类管理'
    }, _this.components = {
      List: _category_list2.default
    }, _this.data = {
      categories: [],
      parent_id: 0,
      header: {
        month: '0.00',
        year: '0.00',
        all: '0.00'
      },
      type: 'expend'
    }, _this.computed = {
      host: function host() {
        return _host2.default.host;
      },
      categoryText: function categoryText() {
        return this.type === 'expend' ? '支出' : '收入';
      }
    }, _this.methods = {
      redirect_url: function redirect_url(id) {
        wx.navigateTo({ url: '/pages/categories/category_statement?id=' + id + '&type=' + this.type });
      },
      del: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _tip2.default.confirm('删除后，该分类下的子分类及其所有账单也将一并删除！此操作无法撤回', {}, '警告');

                case 2:
                  _context.next = 4;
                  return _wxRequest2.default.Destroy('categories/' + this.parent_id);

                case 4:
                  res = _context.sent;

                  if (res.status == 200) {
                    _session2.default.clearByKey('category');
                    _wepy2.default.navigateBack({
                      delta: 1
                    });
                  } else {
                    _tip2.default.error(res.msg);
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
      edit: function edit() {
        wx.navigateTo({ url: '/pages/categories/category_form?id=' + this.parent_id + '&type=' + this.type });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryChild, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.parent_id = options.id;
      if (options.type != undefined) this.type = options.type;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getList();
    }
  }, {
    key: 'getList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('categories/category_childs', { parent_id: this.parent_id });

              case 2:
                data = _context2.sent;

                this.categories = data.categories;
                this.header = data.header;
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getList() {
        return _ref3.apply(this, arguments);
      }

      return getList;
    }()
  }]);

  return CategoryChild;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(CategoryChild , 'pages/categories/child'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5Q2hpbGQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIkxpc3QiLCJkYXRhIiwiY2F0ZWdvcmllcyIsInBhcmVudF9pZCIsImhlYWRlciIsIm1vbnRoIiwieWVhciIsImFsbCIsInR5cGUiLCJjb21wdXRlZCIsImhvc3QiLCJIb3N0IiwiY2F0ZWdvcnlUZXh0IiwibWV0aG9kcyIsInJlZGlyZWN0X3VybCIsImlkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZGVsIiwidGlwIiwiY29uZmlybSIsInd4UmVxdWVzdCIsIkRlc3Ryb3kiLCJyZXMiLCJzdGF0dXMiLCJTZXNzaW9uIiwiY2xlYXJCeUtleSIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImVycm9yIiwibXNnIiwiZWRpdCIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJnZXRMaXN0IiwiR2V0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhO0FBQ1hDLFlBQU1BO0FBREssSyxRQUliQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQyxpQkFBVyxDQUZOO0FBR0xDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLGNBQU0sTUFGQTtBQUdOQyxhQUFLO0FBSEMsT0FISDtBQVFMQyxZQUFNO0FBUkQsSyxRQW9CUEMsUSxHQUFXO0FBQ1RDLFVBRFMsa0JBQ0Q7QUFDTixlQUFPQyxlQUFLRCxJQUFaO0FBQ0QsT0FIUTtBQUlURSxrQkFKUywwQkFJTztBQUNkLGVBQU8sS0FBS0osSUFBTCxLQUFjLFFBQWQsR0FBeUIsSUFBekIsR0FBZ0MsSUFBdkM7QUFDRDtBQU5RLEssUUFTWEssTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNNQyxFQUROLEVBQ1U7QUFDaEJDLFdBQUdDLFVBQUgsQ0FBYyxFQUFFQyxrREFBZ0RILEVBQWhELGNBQTJELEtBQUtQLElBQWxFLEVBQWQ7QUFDRCxPQUhPO0FBSUZXLFNBSkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUtBQyxjQUFJQyxPQUFKLENBQVksa0NBQVosRUFBZ0QsRUFBaEQsRUFBb0QsSUFBcEQsQ0FMQTs7QUFBQTtBQUFBO0FBQUEseUJBTVlDLG9CQUFVQyxPQUFWLGlCQUFnQyxLQUFLcEIsU0FBckMsQ0FOWjs7QUFBQTtBQU1BcUIscUJBTkE7O0FBT04sc0JBQUlBLElBQUlDLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNyQkMsc0NBQVFDLFVBQVIsQ0FBbUIsVUFBbkI7QUFDQUMsbUNBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLDZCQUFPO0FBRFMscUJBQWxCO0FBR0QsbUJBTEQsTUFLTztBQUNMVixrQ0FBSVcsS0FBSixDQUFVUCxJQUFJUSxHQUFkO0FBQ0Q7O0FBZEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFnQlJDLFVBaEJRLGtCQWdCQTtBQUNOakIsV0FBR0MsVUFBSCxDQUFjLEVBQUVDLDZDQUEyQyxLQUFLZixTQUFoRCxjQUFrRSxLQUFLSyxJQUF6RSxFQUFkO0FBQ0Q7QUFsQk8sSzs7Ozs7MkJBbEJGMEIsTyxFQUFTO0FBQ2YsV0FBSy9CLFNBQUwsR0FBaUIrQixRQUFRbkIsRUFBekI7QUFDQSxVQUFJbUIsUUFBUTFCLElBQVIsSUFBZ0IyQixTQUFwQixFQUErQixLQUFLM0IsSUFBTCxHQUFZMEIsUUFBUTFCLElBQXBCO0FBQ2hDOzs7NkJBRVM7QUFDUixXQUFLNEIsT0FBTDtBQUNEOzs7Ozs7Ozs7Ozt1QkFpQ29CZCxvQkFBVWUsR0FBVixDQUFjLDRCQUFkLEVBQTZDLEVBQUVsQyxXQUFXLEtBQUtBLFNBQWxCLEVBQTdDLEM7OztBQUFiRixvQjs7QUFDTixxQkFBS0MsVUFBTCxHQUFrQkQsS0FBS0MsVUFBdkI7QUFDQSxxQkFBS0UsTUFBTCxHQUFjSCxLQUFLRyxNQUFuQjtBQUNBLHFCQUFLa0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9EdUNWLGVBQUtXLEk7O2tCQUEzQjNDLGEiLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IExpc3QgZnJvbSAnQC9jb21wb25lbnRzL2NhdGVnb3J5X2xpc3QnXG4gIGltcG9ydCBIb3N0IGZyb20gJ0AvdXRpbHMvaG9zdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUNoaWxkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5a2Q5YiG57G7566h55CGJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBMaXN0OiBMaXN0XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgcGFyZW50X2lkOiAwLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIG1vbnRoOiAnMC4wMCcsXG4gICAgICAgIHllYXI6ICcwLjAwJyxcbiAgICAgICAgYWxsOiAnMC4wMCdcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnZXhwZW5kJ1xuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy5wYXJlbnRfaWQgPSBvcHRpb25zLmlkXG4gICAgICBpZiAob3B0aW9ucy50eXBlICE9IHVuZGVmaW5lZCkgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBob3N0ICgpIHtcbiAgICAgICAgcmV0dXJuIEhvc3QuaG9zdFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5VGV4dCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdleHBlbmQnID8gJ+aUr+WHuicgOiAn5pS25YWlJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICByZWRpcmVjdF91cmwgKGlkKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeV9zdGF0ZW1lbnQ/aWQ9JHtpZH0mdHlwZT0ke3RoaXMudHlwZX1gIH0pXG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsICgpIHtcbiAgICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+WIoOmZpOWQju+8jOivpeWIhuexu+S4i+eahOWtkOWIhuexu+WPiuWFtuaJgOaciei0puWNleS5n+WwhuS4gOW5tuWIoOmZpO+8geatpOaTjeS9nOaXoOazleaSpOWbnicsIHt9LCAn6K2m5ZGKJylcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LkRlc3Ryb3koYGNhdGVnb3JpZXMvJHt0aGlzLnBhcmVudF9pZH1gKVxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICBTZXNzaW9uLmNsZWFyQnlLZXkoJ2NhdGVnb3J5JylcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlwLmVycm9yKHJlcy5tc2cpXHRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVkaXQgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnlfZm9ybT9pZD0ke3RoaXMucGFyZW50X2lkfSZ0eXBlPSR7dGhpcy50eXBlfWAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRMaXN0KCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoJ2NhdGVnb3JpZXMvY2F0ZWdvcnlfY2hpbGRzJywgIHsgcGFyZW50X2lkOiB0aGlzLnBhcmVudF9pZCB9KVxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICB0aGlzLmhlYWRlciA9IGRhdGEuaGVhZGVyXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=