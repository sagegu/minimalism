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

var _pay_for_other = require('./../../components/statement/pay_for_other.js');

var _pay_for_other2 = _interopRequireDefault(_pay_for_other);

var _wepyRedux = require('./../../npm/wepy-redux/lib/index.js');

var _actions = require('./../../store/actions/index.js');

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

var _session = require('./../../utils/session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatementCreate = function (_wepy$page) {
  _inherits(StatementCreate, _wepy$page);

  function StatementCreate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatementCreate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatementCreate.__proto__ || Object.getPrototypeOf(StatementCreate)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '记一笔',
      "usingComponents": {
        "i-tabs": "../../public/iview/tabs/index",
        "i-tab": "../../public/iview/tab/index"
      }
    }, _this.data = {
      current: 'expend',
      expend: 'expend',
      income: 'income',
      submiting: false,
      transferData: {
        id: 0,
        type: 'transfer',
        amount: '',
        description: '',
        address: '',
        source: '请选择账户',
        target: '请选择账户',
        from: 0,
        to: 0,
        date: _util2.default.getCurrentDate(),
        time: _util2.default.getCurrentTime(),
        upload_files: []
      },
      repayData: {
        id: 0,
        type: 'repayment',
        amount: '',
        description: '',
        address: '',
        source: '选择还款账户',
        target: '选择负债账户',
        from: 0,
        to: 0,
        date: _util2.default.getCurrentDate(),
        time: _util2.default.getCurrentTime(),
        upload_files: []
      }
    }, _this.$repeat = {}, _this.$props = { "Expend": { "xmlns:v-bind": "", "v-bind:submiting.sync": "submiting", "v-bind:type.once": "expend", "xmlns:v-on": "", "xmlns:wx": "" }, "Income": { "v-bind:submiting.sync": "submiting", "v-bind:type.once": "income" }, "Transfer": { "v-bind:submiting.sync": "submiting", "v-bind:statement.sync": "transferData" }, "Repayment": { "v-bind:submiting.sync": "submiting", "v-bind:statement.sync": "repayData" }, "PayForOther": {} }, _this.$events = { "Expend": { "v-on:submit": "submit" }, "Income": { "v-on:submit": "submit" }, "Transfer": { "v-on:submit": "submit" }, "Repayment": { "v-on:submit": "submit" } }, _this.components = {
      'Expend': _form2.default,
      'Income': _form2.default,
      Transfer: _transfer2.default,
      Repayment: _repayment2.default,
      PayForOther: _pay_for_other2.default
    }, _this.methods = {
      handleChange: function handleChange(_ref2) {
        var detail = _ref2.detail;

        this.current = detail.key;
      },
      submit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(statement, detail) {
          var params, result, store, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.submiting = true;
                  params = { statement: statement, formId: detail.formId };
                  _context.next = 4;
                  return _wxRequest2.default.Post('statements', params);

                case 4:
                  result = _context.sent;

                  if (!(result === undefined)) {
                    _context.next = 12;
                    break;
                  }

                  this.submiting = false;
                  _context.next = 9;
                  return _tip2.default.confirm('由于网络原因，无法同步账单到服务器，现已临时保存在本地，下次网络正常后系统将自动同步到服务端', {}, '保存失败');

                case 9:
                  _session2.default.pushFailStatement(params);
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                  return _context.abrupt('return', false);

                case 12:
                  _context.prev = 12;

                  if (!(result.status === 200)) {
                    _context.next = 45;
                    break;
                  }

                  store = (0, _wepyRedux.getStore)();

                  store.dispatch((0, _actions.addStatement)(result.data));
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 19;
                  _iterator = statement.upload_files[Symbol.iterator]();

                case 21:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 28;
                    break;
                  }

                  file = _step.value;
                  _context.next = 25;
                  return _wxRequest2.default.Upload(file, {
                    type: 'statement_upload',
                    statement_id: result.data.id
                  });

                case 25:
                  _iteratorNormalCompletion = true;
                  _context.next = 21;
                  break;

                case 28:
                  _context.next = 34;
                  break;

                case 30:
                  _context.prev = 30;
                  _context.t0 = _context['catch'](19);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 34:
                  _context.prev = 34;
                  _context.prev = 35;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 37:
                  _context.prev = 37;

                  if (!_didIteratorError) {
                    _context.next = 40;
                    break;
                  }

                  throw _iteratorError;

                case 40:
                  return _context.finish(37);

                case 41:
                  return _context.finish(34);

                case 42:
                  _wepy2.default.navigateBack({
                    delta: 1
                  });
                  _context.next = 46;
                  break;

                case 45:
                  _tip2.default.error(result.msg);

                case 46:
                  _context.next = 51;
                  break;

                case 48:
                  _context.prev = 48;
                  _context.t1 = _context['catch'](12);

                  console.log(_context.t1);

                case 51:
                  this.submiting = false;

                case 52:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[12, 48], [19, 30, 34, 42], [35,, 37, 41]]);
        }));

        function submit(_x, _x2) {
          return _ref3.apply(this, arguments);
        }

        return submit;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatementCreate, [{
    key: 'onLoad',
    value: function onLoad(params) {
      // 直接显示转账的界面
      if (typeof params.type !== 'undefined' && params.type === 'transfer') {
        this.current = params.type;
        this.transferData.source = params.source;
        this.transferData.from = params.asset_id;
      }
    }
  }]);

  return StatementCreate;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(StatementCreate , 'pages/statements/create'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRDcmVhdGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImN1cnJlbnQiLCJleHBlbmQiLCJpbmNvbWUiLCJzdWJtaXRpbmciLCJ0cmFuc2ZlckRhdGEiLCJpZCIsInR5cGUiLCJhbW91bnQiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJzb3VyY2UiLCJ0YXJnZXQiLCJmcm9tIiwidG8iLCJkYXRlIiwiVXRpbCIsImdldEN1cnJlbnREYXRlIiwidGltZSIsImdldEN1cnJlbnRUaW1lIiwidXBsb2FkX2ZpbGVzIiwicmVwYXlEYXRhIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3RhdGVtZW50Rm9ybSIsIlRyYW5zZmVyIiwiUmVwYXltZW50IiwiUGF5Rm9yT3RoZXIiLCJtZXRob2RzIiwiaGFuZGxlQ2hhbmdlIiwiZGV0YWlsIiwia2V5Iiwic3VibWl0Iiwic3RhdGVtZW50IiwicGFyYW1zIiwiZm9ybUlkIiwid3hSZXF1ZXN0IiwiUG9zdCIsInJlc3VsdCIsInVuZGVmaW5lZCIsInRpcCIsImNvbmZpcm0iLCJTZXNzaW9uIiwicHVzaEZhaWxTdGF0ZW1lbnQiLCJ3ZXB5IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzdGF0dXMiLCJzdG9yZSIsImRpc3BhdGNoIiwiZmlsZSIsIlVwbG9hZCIsInN0YXRlbWVudF9pZCIsImVycm9yIiwibXNnIiwiY29uc29sZSIsImxvZyIsImFzc2V0X2lkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVAseUJBQW1CO0FB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QUwsQ0FBa0JRLElBQWxCLEdBQXlCdUIsT0FBT3VCLFFBQWhDO0FBQ0Q7QUFDRjs7OztFQTlEMENiLGVBQUtjLEk7O2tCQUE3Qi9ELGUiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGltcG9ydCBTdGF0ZW1lbnRGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9zdGF0ZW1lbnQvZm9ybSdcbiAgaW1wb3J0IFRyYW5zZmVyIGZyb20gJ0AvY29tcG9uZW50cy9zdGF0ZW1lbnQvdHJhbnNmZXInXG4gIGltcG9ydCBSZXBheW1lbnQgZnJvbSAnQC9jb21wb25lbnRzL3N0YXRlbWVudC9yZXBheW1lbnQnXG4gIGltcG9ydCBQYXlGb3JPdGhlciBmcm9tICdAL2NvbXBvbmVudHMvc3RhdGVtZW50L3BheV9mb3Jfb3RoZXInXG4gIGltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IHsgYWRkU3RhdGVtZW50LCBtb2RpZnlTdGF0ZW1lbnQgfSBmcm9tICdAL3N0b3JlL2FjdGlvbnMnXG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG4gIGltcG9ydCBVdGlsIGZyb20gJ0AvdXRpbHMvdXRpbC5qcydcbiAgaW1wb3J0IFNlc3Npb24gZnJvbSAnQC91dGlscy9zZXNzaW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudENyZWF0ZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iusOS4gOeslCcsXG4gICAgICBcInVzaW5nQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiaS10YWJzXCI6IFwiLi4vLi4vcHVibGljL2l2aWV3L3RhYnMvaW5kZXhcIixcbiAgICAgICAgXCJpLXRhYlwiOiBcIi4uLy4uL3B1YmxpYy9pdmlldy90YWIvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBjdXJyZW50OiAnZXhwZW5kJyxcbiAgICAgIGV4cGVuZDogJ2V4cGVuZCcsXG4gICAgICBpbmNvbWU6ICdpbmNvbWUnLFxuICAgICAgc3VibWl0aW5nOiBmYWxzZSxcbiAgICAgIHRyYW5zZmVyRGF0YToge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgdHlwZTogJ3RyYW5zZmVyJyxcbiAgICAgICAgYW1vdW50OiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgc291cmNlOiAn6K+36YCJ5oup6LSm5oi3JyxcbiAgICAgICAgdGFyZ2V0OiAn6K+36YCJ5oup6LSm5oi3JyxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG86IDAsXG4gICAgICAgIGRhdGU6IFV0aWwuZ2V0Q3VycmVudERhdGUoKSxcbiAgICAgICAgdGltZTogVXRpbC5nZXRDdXJyZW50VGltZSgpLFxuICAgICAgICB1cGxvYWRfZmlsZXM6IFtdXG4gICAgICB9LFxuICAgICAgcmVwYXlEYXRhOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0eXBlOiAncmVwYXltZW50JyxcbiAgICAgICAgYW1vdW50OiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgc291cmNlOiAn6YCJ5oup6L+Y5qy+6LSm5oi3JyxcbiAgICAgICAgdGFyZ2V0OiAn6YCJ5oup6LSf5YC66LSm5oi3JyxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG86IDAsXG4gICAgICAgIGRhdGU6IFV0aWwuZ2V0Q3VycmVudERhdGUoKSxcbiAgICAgICAgdGltZTogVXRpbC5nZXRDdXJyZW50VGltZSgpLFxuICAgICAgICB1cGxvYWRfZmlsZXM6IFtdXG4gICAgICB9XG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkV4cGVuZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3VibWl0aW5nLnN5bmNcIjpcInN1Ym1pdGluZ1wiLFwidi1iaW5kOnR5cGUub25jZVwiOlwiZXhwZW5kXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnd4XCI6XCJcIn0sXCJJbmNvbWVcIjp7XCJ2LWJpbmQ6c3VibWl0aW5nLnN5bmNcIjpcInN1Ym1pdGluZ1wiLFwidi1iaW5kOnR5cGUub25jZVwiOlwiaW5jb21lXCJ9LFwiVHJhbnNmZXJcIjp7XCJ2LWJpbmQ6c3VibWl0aW5nLnN5bmNcIjpcInN1Ym1pdGluZ1wiLFwidi1iaW5kOnN0YXRlbWVudC5zeW5jXCI6XCJ0cmFuc2ZlckRhdGFcIn0sXCJSZXBheW1lbnRcIjp7XCJ2LWJpbmQ6c3VibWl0aW5nLnN5bmNcIjpcInN1Ym1pdGluZ1wiLFwidi1iaW5kOnN0YXRlbWVudC5zeW5jXCI6XCJyZXBheURhdGFcIn0sXCJQYXlGb3JPdGhlclwiOnt9fTtcclxuJGV2ZW50cyA9IHtcIkV4cGVuZFwiOntcInYtb246c3VibWl0XCI6XCJzdWJtaXRcIn0sXCJJbmNvbWVcIjp7XCJ2LW9uOnN1Ym1pdFwiOlwic3VibWl0XCJ9LFwiVHJhbnNmZXJcIjp7XCJ2LW9uOnN1Ym1pdFwiOlwic3VibWl0XCJ9LFwiUmVwYXltZW50XCI6e1widi1vbjpzdWJtaXRcIjpcInN1Ym1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgJ0V4cGVuZCc6IFN0YXRlbWVudEZvcm0sXG4gICAgICAnSW5jb21lJzogU3RhdGVtZW50Rm9ybSxcbiAgICAgIFRyYW5zZmVyLFxuICAgICAgUmVwYXltZW50LFxuICAgICAgUGF5Rm9yT3RoZXJcbiAgICB9XG5cbiAgICBvbkxvYWQocGFyYW1zKSB7XG4gICAgICAvLyDnm7TmjqXmmL7npLrovazotKbnmoTnlYzpnaJcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnR5cGUgIT09ICd1bmRlZmluZWQnICYmIHBhcmFtcy50eXBlID09PSAndHJhbnNmZXInKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHBhcmFtcy50eXBlXG4gICAgICAgIHRoaXMudHJhbnNmZXJEYXRhLnNvdXJjZSA9IHBhcmFtcy5zb3VyY2VcbiAgICAgICAgdGhpcy50cmFuc2ZlckRhdGEuZnJvbSA9IHBhcmFtcy5hc3NldF9pZFxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVDaGFuZ2UgKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGV0YWlsLmtleVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHN1Ym1pdCAoc3RhdGVtZW50LCBkZXRhaWwpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRpbmcgPSB0cnVlXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtzdGF0ZW1lbnQ6IHN0YXRlbWVudCwgZm9ybUlkOiBkZXRhaWwuZm9ybUlkfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3eFJlcXVlc3QuUG9zdChgc3RhdGVtZW50c2AsIHBhcmFtcylcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRpbmcgPSBmYWxzZVxuICAgICAgICAgIGF3YWl0IHRpcC5jb25maXJtKCfnlLHkuo7nvZHnu5zljp/lm6DvvIzml6Dms5XlkIzmraXotKbljZXliLDmnI3liqHlmajvvIznjrDlt7LkuLTml7bkv53lrZjlnKjmnKzlnLDvvIzkuIvmrKHnvZHnu5zmraPluLjlkI7ns7vnu5/lsIboh6rliqjlkIzmraXliLDmnI3liqHnq68nLCB7fSwgJ+S/neWtmOWksei0pScpXG4gICAgICAgICAgU2Vzc2lvbi5wdXNoRmFpbFN0YXRlbWVudChwYXJhbXMpXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKClcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZFN0YXRlbWVudChyZXN1bHQuZGF0YSkpXG4gICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHN0YXRlbWVudC51cGxvYWRfZmlsZXMpIHtcbiAgICAgICAgICAgICAgYXdhaXQgd3hSZXF1ZXN0LlVwbG9hZChmaWxlLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0YXRlbWVudF91cGxvYWQnLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudF9pZDogcmVzdWx0LmRhdGEuaWRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpcC5lcnJvcihyZXN1bHQubXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJtaXRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19