'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _statement = require('./../types/statement.js');

var _data = require('./data.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _statement.GETLIST, function (state, result) {
  return _extends({}, state, {
    statements: result.payload
  });
}), _defineProperty(_handleActions, _statement.ADDSTATEMENT, function (state, res) {
  if (state.status === 405) {
    state.statements = [res.payload];
  } else {
    state.statements.unshift(res.payload);
  }
  return _extends({}, state);
}), _defineProperty(_handleActions, _statement.MODIFYSTATEMENT, function (state, res) {
  var statement = res.payload;
  for (var index = 0, length = state.statements.length; index < length; ++index) {
    if (state.statements[index]['id'] === statement.id) {
      state.statements[index] = statement;
      break;
    }
  }
  return _extends({}, state);
}), _defineProperty(_handleActions, _statement.DELSTATEMENT, function (state, res) {
  for (var index = 0, length = state.statements.length; index < length; index++) {
    if (state.statements[index].id === Number.parseInt(res.payload)) {
      state.statements.splice(index, 1);
      break;
    }
  }
  return _extends({}, state);
}), _handleActions), _data.StatementData);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJHRVRMSVNUIiwic3RhdGUiLCJyZXN1bHQiLCJzdGF0ZW1lbnRzIiwicGF5bG9hZCIsIkFERFNUQVRFTUVOVCIsInJlcyIsInN0YXR1cyIsInVuc2hpZnQiLCJNT0RJRllTVEFURU1FTlQiLCJzdGF0ZW1lbnQiLCJpbmRleCIsImxlbmd0aCIsImlkIiwiREVMU1RBVEVNRU5UIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJTdGF0ZW1lbnREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7a0JBRWUsdUZBQ1pBLGtCQURZLFlBQ0hDLEtBREcsRUFDSUMsTUFESixFQUNZO0FBQ3ZCLHNCQUNLRCxLQURMO0FBRUVFLGdCQUFZRCxPQUFPRTtBQUZyQjtBQUlELENBTlksbUNBT1pDLHVCQVBZLFlBT0VKLEtBUEYsRUFPU0ssR0FQVCxFQU9jO0FBQ3pCLE1BQUlMLE1BQU1NLE1BQU4sS0FBaUIsR0FBckIsRUFBMEI7QUFDeEJOLFVBQU1FLFVBQU4sR0FBbUIsQ0FBQ0csSUFBSUYsT0FBTCxDQUFuQjtBQUNELEdBRkQsTUFFTztBQUNMSCxVQUFNRSxVQUFOLENBQWlCSyxPQUFqQixDQUF5QkYsSUFBSUYsT0FBN0I7QUFDRDtBQUNELHNCQUNLSCxLQURMO0FBR0QsQ0FoQlksbUNBaUJaUSwwQkFqQlksWUFpQktSLEtBakJMLEVBaUJZSyxHQWpCWixFQWlCaUI7QUFDNUIsTUFBTUksWUFBWUosSUFBSUYsT0FBdEI7QUFDQSxPQUFJLElBQUlPLFFBQVEsQ0FBWixFQUFlQyxTQUFTWCxNQUFNRSxVQUFOLENBQWlCUyxNQUE3QyxFQUFxREQsUUFBUUMsTUFBN0QsRUFBcUUsRUFBRUQsS0FBdkUsRUFBOEU7QUFDNUUsUUFBSVYsTUFBTUUsVUFBTixDQUFpQlEsS0FBakIsRUFBd0IsSUFBeEIsTUFBa0NELFVBQVVHLEVBQWhELEVBQW9EO0FBQ2xEWixZQUFNRSxVQUFOLENBQWlCUSxLQUFqQixJQUEwQkQsU0FBMUI7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxzQkFDS1QsS0FETDtBQUdELENBNUJZLG1DQTZCWmEsdUJBN0JZLFlBNkJFYixLQTdCRixFQTZCU0ssR0E3QlQsRUE2QmM7QUFDekIsT0FBSSxJQUFJSyxRQUFRLENBQVosRUFBZUMsU0FBU1gsTUFBTUUsVUFBTixDQUFpQlMsTUFBN0MsRUFBcURELFFBQVFDLE1BQTdELEVBQXFFRCxPQUFyRSxFQUE4RTtBQUM1RSxRQUFJVixNQUFNRSxVQUFOLENBQWlCUSxLQUFqQixFQUF3QkUsRUFBeEIsS0FBK0JFLE9BQU9DLFFBQVAsQ0FBZ0JWLElBQUlGLE9BQXBCLENBQW5DLEVBQWlFO0FBQy9ESCxZQUFNRSxVQUFOLENBQWlCYyxNQUFqQixDQUF3Qk4sS0FBeEIsRUFBK0IsQ0FBL0I7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxzQkFDS1YsS0FETDtBQUdELENBdkNZLG9CQXlDWmlCLG1CQXpDWSxDIiwiZmlsZSI6InN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHsgR0VUTElTVCwgQUREU1RBVEVNRU5ULCBNT0RJRllTVEFURU1FTlQsIERFTFNUQVRFTUVOVCB9IGZyb20gJy4uL3R5cGVzL3N0YXRlbWVudCdcbmltcG9ydCB7IFN0YXRlbWVudERhdGEgfSBmcm9tICcuL2RhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbR0VUTElTVF0oc3RhdGUsIHJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXRlbWVudHM6IHJlc3VsdC5wYXlsb2FkXG4gICAgfVxuICB9LFxuICBbQUREU1RBVEVNRU5UXShzdGF0ZSwgcmVzKSB7XG4gICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gNDA1KSB7XG4gICAgICBzdGF0ZS5zdGF0ZW1lbnRzID0gW3Jlcy5wYXlsb2FkXVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5zdGF0ZW1lbnRzLnVuc2hpZnQocmVzLnBheWxvYWQpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZVxuICAgIH1cbiAgfSxcbiAgW01PRElGWVNUQVRFTUVOVF0oc3RhdGUsIHJlcykge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHJlcy5wYXlsb2FkXG4gICAgZm9yKGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IHN0YXRlLnN0YXRlbWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKHN0YXRlLnN0YXRlbWVudHNbaW5kZXhdWydpZCddID09PSBzdGF0ZW1lbnQuaWQpIHtcbiAgICAgICAgc3RhdGUuc3RhdGVtZW50c1tpbmRleF0gPSBzdGF0ZW1lbnRcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZVxuICAgIH1cbiAgfSxcbiAgW0RFTFNUQVRFTUVOVF0oc3RhdGUsIHJlcykge1xuICAgIGZvcihsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBzdGF0ZS5zdGF0ZW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChzdGF0ZS5zdGF0ZW1lbnRzW2luZGV4XS5pZCA9PT0gTnVtYmVyLnBhcnNlSW50KHJlcy5wYXlsb2FkKSkge1xuICAgICAgICBzdGF0ZS5zdGF0ZW1lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZVxuICAgIH1cbiAgfVxuXG59LCBTdGF0ZW1lbnREYXRhKSJdfQ==