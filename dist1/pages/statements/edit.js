'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _form = require('./../../components/statement/form.js');

var _form2 = _interopRequireDefault(_form);

var _transfer = require('./../../components/statement/transfer.js');

var _transfer2 = _interopRequireDefault(_transfer);

var _repayment = require('./../../components/statement/repayment.js');

var _repayment2 = _interopRequireDefault(_repayment);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../store/actions/index.js');

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementEdit = function (_wepy$page) {
  _inherits(StatementEdit, _wepy$page);

  function StatementEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementEdit.__proto__ || Object.getPrototypeOf(StatementEdit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑账单',
      "usingComponents": {
        "i-tabs": "../../public/iview/tabs/index",
        "i-tab": "../../public/iview/tab/index"
      }
    }, _this.data = {
      current: 'expend',
      statement: {},
      expend: 'expend',
      income: 'income',
      statement_avatar: []
    }, _this.methods = {
      handleChange: function handleChange(_ref2) {
        var detail = _ref2.detail;

        this.current = detail.key;
      },
      submit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(statement) {
          var statement_paths, del_obj, del_ids, result, store, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 查找需要删除的图片
                  statement_paths = this.statement_avatar.map(function (f) {
                    return f.path;
                  });
                  del_obj = this.statement_avatar.filter(function (f) {
                    return statement.upload_files.indexOf(f.path) === -1;
                  });
                  del_ids = del_obj.map(function (f) {
                    return f.id;
                  });

                  statement.del_avatar_ids = del_ids;

                  _context.next = 6;
                  return _wxRequest2.default.Put('statements/' + this.statement.id, { statement: statement });

                case 6:
                  result = _context.sent;

                  if (!(result.status == 200)) {
                    _context.next = 40;
                    break;
                  }

                  store = (0, _wepyRedux.getStore)();

                  store.dispatch((0, _actions.modifyStatement)(result.data));
                  // 更新上传图片
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 13;
                  _iterator = statement.upload_files[Symbol.iterator]();

                case 15:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 23;
                    break;
                  }

                  file = _step.value;

                  if (!(statement_paths.indexOf(file) === -1)) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 20;
                  return _wxRequest2.default.Upload(file, {
                    type: 'statement_upload',
                    statement_id: result.data.id
                  });

                case 20:
                  _iteratorNormalCompletion = true;
                  _context.next = 15;
                  break;

                case 23:
                  _context.next = 29;
                  break;

                case 25:
                  _context.prev = 25;
                  _context.t0 = _context['catch'](13);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 29:
                  _context.prev = 29;
                  _context.prev = 30;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 32:
                  _context.prev = 32;

                  if (!_didIteratorError) {
                    _context.next = 35;
                    break;
                  }

                  throw _iteratorError;

                case 35:
                  return _context.finish(32);

                case 36:
                  return _context.finish(29);

                case 37:
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                  _context.next = 41;
                  break;

                case 40:
                  _tip2.default.error(result.msg);

                case 41:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[13, 25, 29, 37], [30,, 32, 36]]);
        }));

        function submit(_x) {
          return _ref3.apply(this, arguments);
        }

        return submit;
      }()
    }, _this.$repeat = {}, _this.$props = { "Expend": { "xmlns:v-bind": "", "v-bind:statement.sync": "statement", "xmlns:v-on": "", "v-bind:type.once": "expend", "xmlns:wx": "" }, "Income": { "v-bind:statement.sync": "statement", "v-bind:type.once": "income" }, "Transfer": { "v-bind:statement.sync": "statement" }, "Repayment": { "v-bind:statement.sync": "statement" } }, _this.$events = { "Expend": { "v-on:submit": "submit" }, "Income": { "v-on:submit": "submit" }, "Transfer": { "v-on:submit": "submit" }, "Repayment": { "v-on:submit": "submit" } }, _this.components = {
      'Expend': _form2.default,
      'Income': _form2.default,
      Transfer: _transfer2.default,
      Repayment: _repayment2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatementEdit, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.getStatement(options.id);
    }
  }, {
    key: 'getStatement',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var statement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wxRequest2.default.Get('statements/' + id);

              case 2:
                statement = _context2.sent;

                if (statement.status != undefined && statement.status != 200) {
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                  _tip2.default.error('无效的账单');
                }
                this.current = statement.type;
                this.statement = statement;
                this.statement_avatar = statement.upload_files;
                this.statement.upload_files = statement.upload_files.map(function (f) {
                  return f.path;
                });
                this.$apply();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStatement(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getStatement;
    }()
  }]);

  return StatementEdit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatementEdit , 'pages/statements/edit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50RWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY3VycmVudCIsInN0YXRlbWVudCIsImV4cGVuZCIsImluY29tZSIsInN0YXRlbWVudF9hdmF0YXIiLCJtZXRob2RzIiwiaGFuZGxlQ2hhbmdlIiwiZGV0YWlsIiwia2V5Iiwic3VibWl0Iiwic3RhdGVtZW50X3BhdGhzIiwibWFwIiwiZiIsInBhdGgiLCJkZWxfb2JqIiwiZmlsdGVyIiwidXBsb2FkX2ZpbGVzIiwiaW5kZXhPZiIsImRlbF9pZHMiLCJpZCIsImRlbF9hdmF0YXJfaWRzIiwid3hSZXF1ZXN0IiwiUHV0IiwicmVzdWx0Iiwic3RhdHVzIiwic3RvcmUiLCJkaXNwYXRjaCIsImZpbGUiLCJVcGxvYWQiLCJ0eXBlIiwic3RhdGVtZW50X2lkIiwid2VweSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidGlwIiwiZXJyb3IiLCJtc2ciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGF0ZW1lbnRGb3JtIiwiVHJhbnNmZXIiLCJSZXBheW1lbnQiLCJvcHRpb25zIiwiZ2V0U3RhdGVtZW50IiwiR2V0IiwidW5kZWZpbmVkIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVAseUJBQW1CO0FBQ2pCLGtCQUFVLCtCQURPO0FBRWpCLGlCQUFTO0FBRlE7QUFGWixLLFFBUVRDLEksR0FBTztBQUNMQyxlQUFTLFFBREo7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxjQUFRLFFBSEg7QUFJTEMsY0FBUSxRQUpIO0FBS0xDLHdCQUFrQjtBQUxi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Q1RDLFUsR0FBYTtBQUNSLGdCQUFVQyxjQURGO0FBRVIsZ0JBQVVBLGNBRkY7QUFHUkMsa0NBSFE7QUFJUkM7QUFKUSxLOzs7OzsyQkF2REZDLE8sRUFBUztBQUNmLFdBQUtDLFlBQUwsQ0FBa0JELFFBQVF6QixFQUExQjtBQUNEOzs7OzRGQW1DbUJBLEU7Ozs7Ozs7dUJBQ01FLG9CQUFVeUIsR0FBVixpQkFBNEIzQixFQUE1QixDOzs7QUFBbEJsQix5Qjs7QUFDTixvQkFBSUEsVUFBVXVCLE1BQVYsSUFBb0J1QixTQUFwQixJQUFpQzlDLFVBQVV1QixNQUFWLElBQW9CLEdBQXpELEVBQThEO0FBQzVETyxpQ0FBS0MsWUFBTCxDQUFrQjtBQUNoQkMsMkJBQU87QUFEUyxtQkFBbEI7QUFHQUMsZ0NBQUlDLEtBQUosQ0FBVSxPQUFWO0FBQ0Q7QUFDRCxxQkFBS25DLE9BQUwsR0FBZUMsVUFBVTRCLElBQXpCO0FBQ0EscUJBQUs1QixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLHFCQUFLRyxnQkFBTCxHQUF3QkgsVUFBVWUsWUFBbEM7QUFDQSxxQkFBS2YsU0FBTCxDQUFlZSxZQUFmLEdBQThCZixVQUFVZSxZQUFWLENBQXVCTCxHQUF2QixDQUEyQixVQUFDQyxDQUFEO0FBQUEseUJBQU9BLEVBQUVDLElBQVQ7QUFBQSxpQkFBM0IsQ0FBOUI7QUFDQSxxQkFBS21DLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsRXVDakIsZUFBS2tCLEk7O2tCQUEzQnJELGEiLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgd3hSZXF1ZXN0IGZyb20gJ0AvdXRpbHMvd3hSZXF1ZXN0J1xuICBpbXBvcnQgU3RhdGVtZW50Rm9ybSBmcm9tICdAL2NvbXBvbmVudHMvc3RhdGVtZW50L2Zvcm0nXG4gIGltcG9ydCBUcmFuc2ZlciBmcm9tICdAL2NvbXBvbmVudHMvc3RhdGVtZW50L3RyYW5zZmVyJ1xuICBpbXBvcnQgUmVwYXltZW50IGZyb20gJ0AvY29tcG9uZW50cy9zdGF0ZW1lbnQvcmVwYXltZW50J1xuICBpbXBvcnQgeyBnZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCB7IGFkZFN0YXRlbWVudCwgbW9kaWZ5U3RhdGVtZW50IH0gZnJvbSAnQC9zdG9yZS9hY3Rpb25zJ1xuICBpbXBvcnQgdGlwIGZyb20gJ0AvdXRpbHMvdGlwJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudEVkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHotKbljZUnLFxuICAgICAgXCJ1c2luZ0NvbXBvbmVudHNcIjoge1xuICAgICAgICBcImktdGFic1wiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy90YWJzL2luZGV4XCIsXG4gICAgICAgIFwiaS10YWJcIjogXCIuLi8uLi9wdWJsaWMvaXZpZXcvdGFiL2luZGV4XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY3VycmVudDogJ2V4cGVuZCcsXG4gICAgICBzdGF0ZW1lbnQ6IHt9LFxuICAgICAgZXhwZW5kOiAnZXhwZW5kJyxcbiAgICAgIGluY29tZTogJ2luY29tZScsXG4gICAgICBzdGF0ZW1lbnRfYXZhdGFyOiBbXVxuICAgIH1cblxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgdGhpcy5nZXRTdGF0ZW1lbnQob3B0aW9ucy5pZClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlQ2hhbmdlICh7IGRldGFpbCB9KSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGRldGFpbC5rZXlcbiAgICAgIH0sXG4gICAgICBhc3luYyBzdWJtaXQgKHN0YXRlbWVudCkge1xuICAgICAgICAvLyDmn6Xmib7pnIDopoHliKDpmaTnmoTlm77niYdcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50X3BhdGhzID0gdGhpcy5zdGF0ZW1lbnRfYXZhdGFyLm1hcCgoZikgPT4gZi5wYXRoIClcbiAgICAgICAgY29uc3QgZGVsX29iaiA9IHRoaXMuc3RhdGVtZW50X2F2YXRhci5maWx0ZXIoKGYpID0+IHN0YXRlbWVudC51cGxvYWRfZmlsZXMuaW5kZXhPZihmLnBhdGgpID09PSAtMSlcbiAgICAgICAgY29uc3QgZGVsX2lkcyA9IGRlbF9vYmoubWFwKChmKSA9PiBmLmlkKVxuICAgICAgICBzdGF0ZW1lbnQuZGVsX2F2YXRhcl9pZHMgPSBkZWxfaWRzXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd3hSZXF1ZXN0LlB1dChgc3RhdGVtZW50cy8ke3RoaXMuc3RhdGVtZW50LmlkfWAsIHtzdGF0ZW1lbnQ6IHN0YXRlbWVudH0pXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKG1vZGlmeVN0YXRlbWVudChyZXN1bHQuZGF0YSkpXG4gICAgICAgICAgLy8g5pu05paw5LiK5Lyg5Zu+54mHXG4gICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBzdGF0ZW1lbnQudXBsb2FkX2ZpbGVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50X3BhdGhzLmluZGV4T2YoZmlsZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHd4UmVxdWVzdC5VcGxvYWQoZmlsZSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdGF0ZW1lbnRfdXBsb2FkJyxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRfaWQ6IHJlc3VsdC5kYXRhLmlkXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXAuZXJyb3IocmVzdWx0Lm1zZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFN0YXRlbWVudCAoaWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoYHN0YXRlbWVudHMvJHtpZH1gKVxuICAgICAgaWYgKHN0YXRlbWVudC5zdGF0dXMgIT0gdW5kZWZpbmVkICYmIHN0YXRlbWVudC5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KVxuICAgICAgICB0aXAuZXJyb3IoJ+aXoOaViOeahOi0puWNlScpXG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnQgPSBzdGF0ZW1lbnQudHlwZVxuICAgICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnRcbiAgICAgIHRoaXMuc3RhdGVtZW50X2F2YXRhciA9IHN0YXRlbWVudC51cGxvYWRfZmlsZXNcbiAgICAgIHRoaXMuc3RhdGVtZW50LnVwbG9hZF9maWxlcyA9IHN0YXRlbWVudC51cGxvYWRfZmlsZXMubWFwKChmKSA9PiBmLnBhdGgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkV4cGVuZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjpcInN0YXRlbWVudFwiLFwieG1sbnM6di1vblwiOlwiXCIsXCJ2LWJpbmQ6dHlwZS5vbmNlXCI6XCJleHBlbmRcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJJbmNvbWVcIjp7XCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjpcInN0YXRlbWVudFwiLFwidi1iaW5kOnR5cGUub25jZVwiOlwiaW5jb21lXCJ9LFwiVHJhbnNmZXJcIjp7XCJ2LWJpbmQ6c3RhdGVtZW50LnN5bmNcIjpcInN0YXRlbWVudFwifSxcIlJlcGF5bWVudFwiOntcInYtYmluZDpzdGF0ZW1lbnQuc3luY1wiOlwic3RhdGVtZW50XCJ9fTtcclxuJGV2ZW50cyA9IHtcIkV4cGVuZFwiOntcInYtb246c3VibWl0XCI6XCJzdWJtaXRcIn0sXCJJbmNvbWVcIjp7XCJ2LW9uOnN1Ym1pdFwiOlwic3VibWl0XCJ9LFwiVHJhbnNmZXJcIjp7XCJ2LW9uOnN1Ym1pdFwiOlwic3VibWl0XCJ9LFwiUmVwYXltZW50XCI6e1widi1vbjpzdWJtaXRcIjpcInN1Ym1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgJ0V4cGVuZCc6IFN0YXRlbWVudEZvcm0sXG4gICAgICAnSW5jb21lJzogU3RhdGVtZW50Rm9ybSxcbiAgICAgIFRyYW5zZmVyLFxuICAgICAgUmVwYXltZW50XG4gICAgfVxuXG4gIH1cbiJdfQ==