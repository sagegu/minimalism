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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryList = function (_wepy$page) {
  _inherits(CategoryList, _wepy$page);

  function CategoryList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '分类管理'
    }, _this.components = {
      List: _category_list2.default
    }, _this.data = {
      categories: [],
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
        wx.navigateTo({ url: '/pages/categories/child?id=' + id + '&type=' + this.type });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryList, [{
    key: 'onLoad',
    value: function onLoad(options) {
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('categories/category_list', { type: this.type });

              case 2:
                data = _context.sent;

                this.categories = data.categories;
                this.header = data.header;
                this.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _ref2.apply(this, arguments);
      }

      return getList;
    }()
  }]);

  return CategoryList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(CategoryList , 'pages/categories/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJMaXN0IiwiZGF0YSIsImNhdGVnb3JpZXMiLCJoZWFkZXIiLCJtb250aCIsInllYXIiLCJhbGwiLCJ0eXBlIiwiY29tcHV0ZWQiLCJob3N0IiwiSG9zdCIsImNhdGVnb3J5VGV4dCIsIm1ldGhvZHMiLCJyZWRpcmVjdF91cmwiLCJpZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJnZXRMaXN0Iiwid3hSZXF1ZXN0IiwiR2V0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhO0FBQ1hDLFlBQU1BO0FBREssSyxRQUliQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyxjQUFNLE1BRkE7QUFHTkMsYUFBSztBQUhDLE9BRkg7QUFPTEMsWUFBTTtBQVBELEssUUFrQlBDLFEsR0FBVztBQUNUQyxVQURTLGtCQUNEO0FBQ04sZUFBT0MsZUFBS0QsSUFBWjtBQUNELE9BSFE7QUFJVEUsa0JBSlMsMEJBSU87QUFDZCxlQUFPLEtBQUtKLElBQUwsS0FBYyxRQUFkLEdBQXlCLElBQXpCLEdBQWdDLElBQXZDO0FBQ0Q7QUFOUSxLLFFBU1hLLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsRUFETixFQUNVO0FBQ2hCQyxXQUFHQyxVQUFILENBQWMsRUFBRUMscUNBQW1DSCxFQUFuQyxjQUE4QyxLQUFLUCxJQUFyRCxFQUFkO0FBQ0Q7QUFITyxLOzs7OzsyQkFqQkZXLE8sRUFBUztBQUNmLFVBQUdBLFFBQVFYLElBQVIsSUFBZ0JZLFNBQW5CLEVBQThCLEtBQUtaLElBQUwsR0FBWVcsUUFBUVgsSUFBcEI7QUFDL0I7Ozs2QkFFUztBQUNSLFdBQUthLE9BQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBa0JvQkMsb0JBQVVDLEdBQVYsQ0FBYywwQkFBZCxFQUEyQyxFQUFFZixNQUFNLEtBQUtBLElBQWIsRUFBM0MsQzs7O0FBQWJOLG9COztBQUNOLHFCQUFLQyxVQUFMLEdBQWtCRCxLQUFLQyxVQUF2QjtBQUNBLHFCQUFLQyxNQUFMLEdBQWNGLEtBQUtFLE1BQW5CO0FBQ0EscUJBQUtvQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUNzQ0MsZUFBS0MsSTs7a0JBQTFCN0IsWSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCBMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9jYXRlZ29yeV9saXN0J1xuICBpbXBvcnQgSG9zdCBmcm9tICdAL3V0aWxzL2hvc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexu+euoeeQhidcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgTGlzdDogTGlzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBtb250aDogJzAuMDAnLFxuICAgICAgICB5ZWFyOiAnMC4wMCcsXG4gICAgICAgIGFsbDogJzAuMDAnXG4gICAgICB9LFxuICAgICAgdHlwZTogJ2V4cGVuZCdcbiAgICB9XG5cbiAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgIGlmKG9wdGlvbnMudHlwZSAhPSB1bmRlZmluZWQpIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgIH1cbiAgICBcbiAgICBvblNob3cgKCkge1xuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGhvc3QgKCkge1xuICAgICAgICByZXR1cm4gSG9zdC5ob3N0XG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnlUZXh0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2V4cGVuZCcgPyAn5pSv5Ye6JyA6ICfmlLblhaUnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHJlZGlyZWN0X3VybCAoaWQpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9jYXRlZ29yaWVzL2NoaWxkP2lkPSR7aWR9JnR5cGU9JHt0aGlzLnR5cGV9YCB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldExpc3QoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnY2F0ZWdvcmllcy9jYXRlZ29yeV9saXN0JywgIHsgdHlwZTogdGhpcy50eXBlIH0pXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBkYXRhLmNhdGVnb3JpZXNcbiAgICAgIHRoaXMuaGVhZGVyID0gZGF0YS5oZWFkZXJcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==