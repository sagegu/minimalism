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

var CategoryForm = function (_wepy$page) {
  _inherits(CategoryForm, _wepy$page);

  function CategoryForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryForm.__proto__ || Object.getPrototypeOf(CategoryForm)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      category: {
        id: 0,
        name: '',
        icon_path: '',
        type: '',
        parent_id: 0
      },
      parentCategories: [],
      curIndex: 0,
      isParentLevel: false,
      submiting: false,
      isEditMold: false
    }, _this.computed = {
      host: function host() {
        return _host2.default.host;
      },
      parentName: function parentName() {
        if (typeof this.category.parent_name !== 'undefined') {
          return this.category.parent_name;
        } else {
          if (this.parentCategories.length === 0) return;
          return this.parentCategories[this.curIndex]['name'];
        }
      }
    }, _this.methods = {
      changeSwitch: function changeSwitch(e) {
        this.isParentLevel = e.detail.value;
        if (this.isParentLevel) {
          this.category.parent_id = 0;
        } else {
          if (this.parentCategories.length > 0) {
            this.category.parent_id = this.parentCategories[this.curIndex]['id'];
          }
        }
      },
      changeCategory: function changeCategory(e) {
        var idx = e.detail.value;
        this.curIndex = idx;
        this.category.parent_id = this.parentCategories[idx]['id'];
      },
      bindKeyName: function bindKeyName(e) {
        this.category.name = e.detail.value;
      },
      redirect_url: function redirect_url() {
        wx.navigateTo({ url: '/pages/forms/icons_chose?url=categories' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryForm, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.category.type = options.type;
      this.getParentCategories();
      if (typeof options.id !== 'undefined') {
        this.isEditMold = true;
        this.category.id = options.id;
        this.getCategory();
      }
      if (typeof options.parent_id !== 'undefined') {
        if (options.parent_id === 0) {
          this.isParentLevel = true;
        } else {
          this.isParentLevel = false;
          this.category.parent_id = options.parent_id;
        }
      }
    }
  }, {
    key: 'formSubmit',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var detail = _ref2.detail;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(detail.value.name == '')) {
                  _context.next = 3;
                  break;
                }

                _tip2.default.error('请填写分类名称');
                return _context.abrupt('return', false);

              case 3:

                if (this.isEditMold) {
                  this.updateCategory(detail.value);
                } else {
                  this.createCategory(detail.value);
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function formSubmit(_x) {
        return _ref3.apply(this, arguments);
      }

      return formSubmit;
    }()
  }, {
    key: 'createCategory',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(category) {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Post('categories', { category: category });

              case 2:
                res = _context2.sent;

                if (res.status == 200) {
                  _session2.default.clearByKey('category');
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                } else {
                  _tip2.default.error(res.msg);
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createCategory(_x2) {
        return _ref4.apply(this, arguments);
      }

      return createCategory;
    }()
  }, {
    key: 'updateCategory',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(category) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wxRequest2.default.Put('categories/' + this.category.id, { category: category });

              case 2:
                res = _context3.sent;

                if (res.status == 200) {
                  _session2.default.clearByKey('category');
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                } else {
                  _tip2.default.error(res.msg);
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateCategory(_x3) {
        return _ref5.apply(this, arguments);
      }

      return updateCategory;
    }()
  }, {
    key: 'getCategory',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wxRequest2.default.Get('categories/' + this.category.id, { type: this.category.type });

              case 2:
                data = _context4.sent;

                this.category = data;
                if (this.category.parent_id != 0) {
                  this.updateCurrentIndex();
                } else {
                  this.isParentLevel = true;
                }
                this.$apply();

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCategory() {
        return _ref6.apply(this, arguments);
      }

      return getCategory;
    }()
  }, {
    key: 'getParentCategories',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wxRequest2.default.Get('categories/parent', { type: this.category.type });

              case 2:
                data = _context5.sent;

                this.parentCategories = data;

                if (this.parentCategories.length > 0 && !this.isParentLevel && this.category.id === 0) {
                  this.category.parent_id = this.parentCategories[0]['id'];
                }
                this.$apply();

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getParentCategories() {
        return _ref7.apply(this, arguments);
      }

      return getParentCategories;
    }()
  }, {
    key: 'setIcon',
    value: function setIcon(e) {
      this.category.icon_path = e.icon;
      this.$apply();
    }
  }, {
    key: 'updateCurrentIndex',
    value: function updateCurrentIndex() {
      for (var index in this.parentCategories) {
        if (this.parentCategories[index]['id'] == this.category.parent_id) {
          this.curIndex = index;
          return false;
        }
      }
    }
  }]);

  return CategoryForm;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(CategoryForm , 'pages/categories/category_form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5X2Zvcm0uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnlGb3JtIiwiZGF0YSIsImNhdGVnb3J5IiwiaWQiLCJuYW1lIiwiaWNvbl9wYXRoIiwidHlwZSIsInBhcmVudF9pZCIsInBhcmVudENhdGVnb3JpZXMiLCJjdXJJbmRleCIsImlzUGFyZW50TGV2ZWwiLCJzdWJtaXRpbmciLCJpc0VkaXRNb2xkIiwiY29tcHV0ZWQiLCJob3N0IiwiSG9zdCIsInBhcmVudE5hbWUiLCJwYXJlbnRfbmFtZSIsImxlbmd0aCIsIm1ldGhvZHMiLCJjaGFuZ2VTd2l0Y2giLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaGFuZ2VDYXRlZ29yeSIsImlkeCIsImJpbmRLZXlOYW1lIiwicmVkaXJlY3RfdXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib3B0aW9ucyIsImdldFBhcmVudENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yeSIsInRpcCIsImVycm9yIiwidXBkYXRlQ2F0ZWdvcnkiLCJjcmVhdGVDYXRlZ29yeSIsInd4UmVxdWVzdCIsIlBvc3QiLCJyZXMiLCJzdGF0dXMiLCJTZXNzaW9uIiwiY2xlYXJCeUtleSIsIndlcHkiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1zZyIsIlB1dCIsIkdldCIsInVwZGF0ZUN1cnJlbnRJbmRleCIsIiRhcHBseSIsImljb24iLCJpbmRleCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxZQUFJLENBREk7QUFFUkMsY0FBTSxFQUZFO0FBR1JDLG1CQUFXLEVBSEg7QUFJUkMsY0FBTSxFQUpFO0FBS1JDLG1CQUFXO0FBTEgsT0FETDtBQVFMQyx3QkFBa0IsRUFSYjtBQVNMQyxnQkFBVSxDQVRMO0FBVUxDLHFCQUFlLEtBVlY7QUFXTEMs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QUFjSSxJQUFyQixFQUFuQyxDOzs7QUFBYkwsb0I7O0FBQ04scUJBQUtPLGdCQUFMLEdBQXdCUCxJQUF4Qjs7QUFFQSxvQkFBSSxLQUFLTyxnQkFBTCxDQUFzQlUsTUFBdEIsR0FBK0IsQ0FBL0IsSUFBb0MsQ0FBQyxLQUFLUixhQUExQyxJQUEyRCxLQUFLUixRQUFMLENBQWNDLEVBQWQsS0FBcUIsQ0FBcEYsRUFBdUY7QUFDckYsdUJBQUtELFFBQUwsQ0FBY0ssU0FBZCxHQUEwQixLQUFLQyxnQkFBTCxDQUFzQixDQUF0QixFQUF5QixJQUF6QixDQUExQjtBQUNEO0FBQ0QscUJBQUsyQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBR085QixDLEVBQUc7QUFDVixXQUFLbkIsUUFBTCxDQUFjRyxTQUFkLEdBQTBCZ0IsRUFBRStCLElBQTVCO0FBQ0EsV0FBS0QsTUFBTDtBQUNEOzs7eUNBRXFCO0FBQ3BCLFdBQUssSUFBSUUsS0FBVCxJQUFrQixLQUFLN0MsZ0JBQXZCLEVBQXlDO0FBQ3ZDLFlBQUksS0FBS0EsZ0JBQUwsQ0FBc0I2QyxLQUF0QixFQUE2QixJQUE3QixLQUFzQyxLQUFLbkQsUUFBTCxDQUFjSyxTQUF4RCxFQUFtRTtBQUNqRSxlQUFLRSxRQUFMLEdBQWdCNEMsS0FBaEI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBL0l1Q1QsZUFBS1UsSTs7a0JBQTFCdEQsWSIsImZpbGUiOiJjYXRlZ29yeV9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCBIb3N0IGZyb20gJ0AvdXRpbHMvaG9zdCdcbiAgaW1wb3J0IHRpcCBmcm9tICdAL3V0aWxzL3RpcCdcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUZvcm0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBjYXRlZ29yeToge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGljb25fcGF0aDogJycsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBwYXJlbnRfaWQ6IDBcbiAgICAgIH0sXG4gICAgICBwYXJlbnRDYXRlZ29yaWVzOiBbXSxcbiAgICAgIGN1ckluZGV4OiAwLFxuICAgICAgaXNQYXJlbnRMZXZlbDogZmFsc2UsXG4gICAgICBzdWJtaXRpbmc6IGZhbHNlLFxuICAgICAgaXNFZGl0TW9sZDogZmFsc2VcbiAgICB9XG5cbiAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnkudHlwZSA9IG9wdGlvbnMudHlwZVxuICAgICAgdGhpcy5nZXRQYXJlbnRDYXRlZ29yaWVzKClcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5pc0VkaXRNb2xkID0gdHJ1ZVxuICAgICAgICB0aGlzLmNhdGVnb3J5LmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLmdldENhdGVnb3J5KClcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wYXJlbnRfaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnBhcmVudF9pZCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuaXNQYXJlbnRMZXZlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzUGFyZW50TGV2ZWwgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkID0gb3B0aW9ucy5wYXJlbnRfaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBob3N0ICgpIHtcbiAgICAgICAgcmV0dXJuIEhvc3QuaG9zdDtcbiAgICAgIH0sXG4gICAgICBwYXJlbnROYW1lICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhdGVnb3J5LnBhcmVudF9uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5LnBhcmVudF9uYW1lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucGFyZW50Q2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiA7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q2F0ZWdvcmllc1t0aGlzLmN1ckluZGV4XVsnbmFtZSddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlU3dpdGNoIChlKSB7XG4gICAgICAgIHRoaXMuaXNQYXJlbnRMZXZlbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh0aGlzLmlzUGFyZW50TGV2ZWwpIHtcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5LnBhcmVudF9pZCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wYXJlbnRDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkID0gdGhpcy5wYXJlbnRDYXRlZ29yaWVzW3RoaXMuY3VySW5kZXhdWydpZCddXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhbmdlQ2F0ZWdvcnkoZSkge1xuICAgICAgICBjb25zdCBpZHggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLmN1ckluZGV4ID0gaWR4XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkID0gdGhpcy5wYXJlbnRDYXRlZ29yaWVzW2lkeF1bJ2lkJ11cbiAgICAgIH0sXG4gICAgICBiaW5kS2V5TmFtZSAoZSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5Lm5hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0X3VybCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IGAvcGFnZXMvZm9ybXMvaWNvbnNfY2hvc2U/dXJsPWNhdGVnb3JpZXNgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZm9ybVN1Ym1pdCAoeyBkZXRhaWwgfSkge1xuICAgICAgaWYgKGRldGFpbC52YWx1ZS5uYW1lID09ICcnKSB7XG4gICAgICAgIHRpcC5lcnJvcign6K+35aGr5YaZ5YiG57G75ZCN56ewJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzRWRpdE1vbGQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYXRlZ29yeShkZXRhaWwudmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5KGRldGFpbC52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVDYXRlZ29yeSAoY2F0ZWdvcnkpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHd4UmVxdWVzdC5Qb3N0KGBjYXRlZ29yaWVzYCwge2NhdGVnb3J5OiBjYXRlZ29yeX0pXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgU2Vzc2lvbi5jbGVhckJ5S2V5KCdjYXRlZ29yeScpXG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwLmVycm9yKHJlcy5tc2cpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3eFJlcXVlc3QuUHV0KGBjYXRlZ29yaWVzLyR7dGhpcy5jYXRlZ29yeS5pZH1gLCB7Y2F0ZWdvcnk6IGNhdGVnb3J5fSlcbiAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBTZXNzaW9uLmNsZWFyQnlLZXkoJ2NhdGVnb3J5JylcbiAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXAuZXJyb3IocmVzLm1zZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDYXRlZ29yeSgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KGBjYXRlZ29yaWVzLyR7dGhpcy5jYXRlZ29yeS5pZH1gLHsgdHlwZTogdGhpcy5jYXRlZ29yeS50eXBlIH0pXG4gICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YVxuICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkucGFyZW50X2lkICE9IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50SW5kZXgoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1BhcmVudExldmVsID0gdHJ1ZVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmVudENhdGVnb3JpZXMoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgd3hSZXF1ZXN0LkdldCgnY2F0ZWdvcmllcy9wYXJlbnQnLCB7dHlwZTogdGhpcy5jYXRlZ29yeS50eXBlfSlcbiAgICAgIHRoaXMucGFyZW50Q2F0ZWdvcmllcyA9IGRhdGFcblxuICAgICAgaWYgKHRoaXMucGFyZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwICYmICF0aGlzLmlzUGFyZW50TGV2ZWwgJiYgdGhpcy5jYXRlZ29yeS5pZCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5LnBhcmVudF9pZCA9IHRoaXMucGFyZW50Q2F0ZWdvcmllc1swXVsnaWQnXVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIHNldEljb24gKGUpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnkuaWNvbl9wYXRoID0gZS5pY29uXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudEluZGV4ICgpIHtcbiAgICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMucGFyZW50Q2F0ZWdvcmllcykge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRDYXRlZ29yaWVzW2luZGV4XVsnaWQnXSA9PSB0aGlzLmNhdGVnb3J5LnBhcmVudF9pZCkge1xuICAgICAgICAgIHRoaXMuY3VySW5kZXggPSBpbmRleFxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=