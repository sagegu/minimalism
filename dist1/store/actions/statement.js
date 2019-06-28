'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delStatement = exports.modifyStatement = exports.addStatement = exports.asyncList = undefined;

var _statement = require('./../types/statement.js');

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var asyncList = exports.asyncList = (0, _reduxActions.createAction)(_statement.GETLIST, function () {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _wxRequest2.default.Get('index');

            case 2:
              result = _context.sent;

              resolve(result);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
});

var addStatement = exports.addStatement = (0, _reduxActions.createAction)(_statement.ADDSTATEMENT, function (object) {
  return object;
});

var modifyStatement = exports.modifyStatement = (0, _reduxActions.createAction)(_statement.MODIFYSTATEMENT, function (object) {
  return object;
});

var delStatement = exports.delStatement = (0, _reduxActions.createAction)(_statement.DELSTATEMENT, function (id) {
  return id;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJhc3luY0xpc3QiLCJHRVRMSVNUIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eFJlcXVlc3QiLCJHZXQiLCJyZXN1bHQiLCJhZGRTdGF0ZW1lbnQiLCJBRERTVEFURU1FTlQiLCJvYmplY3QiLCJtb2RpZnlTdGF0ZW1lbnQiLCJNT0RJRllTVEFURU1FTlQiLCJkZWxTdGF0ZW1lbnQiLCJERUxTVEFURU1FTlQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLGdDQUFZLGdDQUFhQyxrQkFBYixFQUFzQixZQUFNO0FBQ25ELFNBQU8sSUFBSUMsT0FBSjtBQUFBLHVFQUFZLGlCQUFPQyxPQUFQLEVBQWVDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSUMsb0JBQVVDLEdBQVYsQ0FBYyxPQUFkLENBREo7O0FBQUE7QUFDWEMsb0JBRFc7O0FBRWpCSixzQkFBUUksTUFBUjs7QUFGaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSUQsQ0FMd0IsQ0FBbEI7O0FBT0EsSUFBTUMsc0NBQWUsZ0NBQWFDLHVCQUFiLEVBQTJCLFVBQUNDLE1BQUQsRUFBWTtBQUNqRSxTQUFPQSxNQUFQO0FBQ0QsQ0FGMkIsQ0FBckI7O0FBSUEsSUFBTUMsNENBQWtCLGdDQUFhQywwQkFBYixFQUE4QixVQUFDRixNQUFELEVBQVk7QUFDdkUsU0FBT0EsTUFBUDtBQUNELENBRjhCLENBQXhCOztBQUlBLElBQU1HLHNDQUFlLGdDQUFhQyx1QkFBYixFQUEyQixVQUFDQyxFQUFELEVBQVE7QUFDN0QsU0FBT0EsRUFBUDtBQUNELENBRjJCLENBQXJCIiwiZmlsZSI6InN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdFVExJU1QsIEFERFNUQVRFTUVOVCwgTU9ESUZZU1RBVEVNRU5ULCBERUxTVEFURU1FTlQgfSBmcm9tICcuLi90eXBlcy9zdGF0ZW1lbnQnXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHd4UmVxdWVzdCBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCdcblxuZXhwb3J0IGNvbnN0IGFzeW5jTGlzdCA9IGNyZWF0ZUFjdGlvbihHRVRMSVNULCAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3eFJlcXVlc3QuR2V0KCdpbmRleCcpXG4gICAgcmVzb2x2ZShyZXN1bHQpXG4gIH0pXG59KVxuXG5leHBvcnQgY29uc3QgYWRkU3RhdGVtZW50ID0gY3JlYXRlQWN0aW9uKEFERFNUQVRFTUVOVCwgKG9iamVjdCkgPT4ge1xuICByZXR1cm4gb2JqZWN0XG59KVxuXG5leHBvcnQgY29uc3QgbW9kaWZ5U3RhdGVtZW50ID0gY3JlYXRlQWN0aW9uKE1PRElGWVNUQVRFTUVOVCwgKG9iamVjdCkgPT4ge1xuICByZXR1cm4gb2JqZWN0XG59KVxuXG5leHBvcnQgY29uc3QgZGVsU3RhdGVtZW50ID0gY3JlYXRlQWN0aW9uKERFTFNUQVRFTUVOVCwgKGlkKSA9PiB7XG4gIHJldHVybiBpZFxufSlcblxuIl19