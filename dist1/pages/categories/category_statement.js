'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _statement = require('./../../components/index/statement.js');

var _statement2 = _interopRequireDefault(_statement);

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

var CategoryStatement = function (_wepy$page) {
  _inherits(CategoryStatement, _wepy$page);

  function CategoryStatement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryStatement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryStatement.__proto__ || Object.getPrototypeOf(CategoryStatement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '账单列表'
    }, _this.$repeat = { "item": { "com": "statement", "props": "statement.sync" } }, _this.$props = { "statement": { "xmlns:v-bind": { "value": "", "for": "item.childs", "item": "st", "index": "index", "key": "index" }, "v-bind:statement.sync": { "value": "st", "type": "item", "for": "item.childs", "item": "st", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      statement: _statement2.default
    }, _this.data = {
      statements: [],
      category_id: 0,
      type: 'expend'
    }, _this.methods = {
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
                  return _wxRequest2.default.Destroy('categories/' + this.category_id);

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
        wx.navigateTo({ url: '/pages/categories/category_form?id=' + this.category_id + '&type=' + this.type });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryStatement, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.category_id = options.id;
      this.getStatements();
    }
  }, {
    key: 'getStatements',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('categories/category_statements', { category_id: this.category_id });

              case 2:
                data = _context2.sent;

                this.statements = data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStatements() {
        return _ref3.apply(this, arguments);
      }

      return getStatements;
    }()
  }]);

  return CategoryStatement;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(CategoryStatement , 'pages/categories/category_statement'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5X3N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeVN0YXRlbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzdGF0ZW1lbnQiLCJJbmRleFN0YXRlbWVudCIsImRhdGEiLCJzdGF0ZW1lbnRzIiwiY2F0ZWdvcnlfaWQiLCJ0eXBlIiwibWV0aG9kcyIsImRlbCIsInRpcCIsImNvbmZpcm0iLCJ3eFJlcXVlc3QiLCJEZXN0cm95IiwicmVzIiwic3RhdHVzIiwiU2Vzc2lvbiIsImNsZWFyQnlLZXkiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJlcnJvciIsIm1zZyIsImVkaXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb25zIiwiaWQiLCJnZXRTdGF0ZW1lbnRzIiwiR2V0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxnQkFBM0IsRUFBUixFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sYUFBbEIsRUFBZ0MsUUFBTyxJQUF2QyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sT0FBbEUsRUFBaEIsRUFBMkYseUJBQXdCLEVBQUMsU0FBUSxJQUFULEVBQWMsUUFBTyxNQUFyQixFQUE0QixPQUFNLGFBQWxDLEVBQWdELFFBQU8sSUFBdkQsRUFBNEQsU0FBUSxPQUFwRSxFQUE0RSxPQUFNLE9BQWxGLEVBQW5ILEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUJBQVdDO0FBREgsSyxRQUlWQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQyxtQkFBYSxDQUZSO0FBR0xDLFlBQU07QUFIRCxLLFFBV1BDLE8sR0FBVTtBQUNGQyxTQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFQUMsY0FBSUMsT0FBSixDQUFZLGtDQUFaLEVBQWdELEVBQWhELEVBQW9ELElBQXBELENBRkE7O0FBQUE7QUFBQTtBQUFBLHlCQUdZQyxvQkFBVUMsT0FBVixpQkFBZ0MsS0FBS1AsV0FBckMsQ0FIWjs7QUFBQTtBQUdBUSxxQkFIQTs7QUFJTixzQkFBSUEsSUFBSUMsTUFBSixJQUFjLEdBQWxCLEVBQXVCO0FBQ3JCQyxzQ0FBUUMsVUFBUixDQUFtQixVQUFuQjtBQUNBQyxtQ0FBS0MsWUFBTCxDQUFrQjtBQUNoQkMsNkJBQU87QUFEUyxxQkFBbEI7QUFHRCxtQkFMRCxNQUtPO0FBQ0xWLGtDQUFJVyxLQUFKLENBQVVQLElBQUlRLEdBQWQ7QUFDRDs7QUFYSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWFSQyxVQWJRLGtCQWFBO0FBQ05DLFdBQUdDLFVBQUgsQ0FBYyxFQUFFQyw2Q0FBMkMsS0FBS3BCLFdBQWhELGNBQW9FLEtBQUtDLElBQTNFLEVBQWQ7QUFDRDtBQWZPLEs7Ozs7OzJCQUxGb0IsTyxFQUFTO0FBQ2YsV0FBS3JCLFdBQUwsR0FBbUJxQixRQUFRQyxFQUEzQjtBQUNBLFdBQUtDLGFBQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBcUJvQmpCLG9CQUFVa0IsR0FBVixDQUFjLGdDQUFkLEVBQWdELEVBQUV4QixhQUFhLEtBQUtBLFdBQXBCLEVBQWhELEM7OztBQUFiRixvQjs7QUFDTixxQkFBS0MsVUFBTCxHQUFrQkQsSUFBbEI7QUFDQSxxQkFBSzJCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1QzJDYixlQUFLYyxJOztrQkFBL0JyQyxpQiIsImZpbGUiOiJjYXRlZ29yeV9zdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcbiAgaW1wb3J0IEluZGV4U3RhdGVtZW50IGZyb20gJ0AvY29tcG9uZW50cy9pbmRleC9zdGF0ZW1lbnQnXG4gIGltcG9ydCBIb3N0IGZyb20gJ0AvdXRpbHMvaG9zdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeVN0YXRlbWVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0puWNleWIl+ihqCdcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7XCJpdGVtXCI6e1wiY29tXCI6XCJzdGF0ZW1lbnRcIixcInByb3BzXCI6XCJzdGF0ZW1lbnQuc3luY1wifX07XHJcbiRwcm9wcyA9IHtcInN0YXRlbWVudFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiaXRlbS5jaGlsZHNcIixcIml0ZW1cIjpcInN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjp7XCJ2YWx1ZVwiOlwic3RcIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiaXRlbS5jaGlsZHNcIixcIml0ZW1cIjpcInN0XCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHN0YXRlbWVudDogSW5kZXhTdGF0ZW1lbnRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc3RhdGVtZW50czogW10sXG4gICAgICBjYXRlZ29yeV9pZDogMCxcbiAgICAgIHR5cGU6ICdleHBlbmQnXG4gICAgfVxuXG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICB0aGlzLmNhdGVnb3J5X2lkID0gb3B0aW9ucy5pZFxuICAgICAgdGhpcy5nZXRTdGF0ZW1lbnRzKClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgZGVsICgpIHtcbiAgICAgICAgYXdhaXQgdGlwLmNvbmZpcm0oJ+WIoOmZpOWQju+8jOivpeWIhuexu+S4i+eahOWtkOWIhuexu+WPiuWFtuaJgOaciei0puWNleS5n+WwhuS4gOW5tuWIoOmZpO+8geatpOaTjeS9nOaXoOazleaSpOWbnicsIHt9LCAn6K2m5ZGKJylcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgd3hSZXF1ZXN0LkRlc3Ryb3koYGNhdGVnb3JpZXMvJHt0aGlzLmNhdGVnb3J5X2lkfWApXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIFNlc3Npb24uY2xlYXJCeUtleSgnY2F0ZWdvcnknKVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXAuZXJyb3IocmVzLm1zZylcdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZWRpdCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeV9mb3JtP2lkPSR7dGhpcy5jYXRlZ29yeV9pZH0mdHlwZT0ke3RoaXMudHlwZX1gIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U3RhdGVtZW50cyAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnY2F0ZWdvcmllcy9jYXRlZ29yeV9zdGF0ZW1lbnRzJywgeyBjYXRlZ29yeV9pZDogdGhpcy5jYXRlZ29yeV9pZCB9KVxuICAgICAgdGhpcy5zdGF0ZW1lbnRzID0gZGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19