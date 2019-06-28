'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _host = require('./../host.js');

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Get = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _base2.default.doRequest(_host2.default.url + '/' + url, 'GET', params, options);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function Get(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var Put = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _base2.default.doRequest(_host2.default.url + '/' + url, 'PUT', params, options);

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function Put(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var Post = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _base2.default.doRequest(_host2.default.url + '/' + url, 'Post', params, options);

          case 2:
            return _context3.abrupt('return', _context3.sent);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function Post(_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var Destroy = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _base2.default.doRequest(_host2.default.url + '/' + url, 'DELETE', params, options);

          case 2:
            return _context4.abrupt('return', _context4.sent);

          case 3:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function Destroy(_x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var Upload = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(filePath) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _base2.default.wxUpload(_host2.default.url + '/upload', filePath, params);

          case 2:
            return _context5.abrupt('return', _context5.sent);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function Upload(_x14) {
    return _ref5.apply(this, arguments);
  };
}();

var GetBasic = function GetBasic(url, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments[3];
  return _base2.default.doRequest(_host2.default.url + '/' + url, 'GET', params, options, callback);
};
var PostBasic = function PostBasic(url, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments[3];
  return _base2.default.doRequest(_host2.default.url + '/' + url, 'Post', params, options, callback);
};

var WX = function WX(url, params, callback) {
  wx.request({
    url: _host2.default.host + '/' + url,
    success: function success(data) {
      return callback(data);
    }
  });
};
exports.default = {
  Get: Get,
  Put: Put,
  Post: Post,
  Destroy: Destroy,
  PostBasic: PostBasic,
  GetBasic: GetBasic,
  WX: WX,
  Upload: Upload
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkdldCIsInVybCIsInBhcmFtcyIsIm9wdGlvbnMiLCJCYXNlIiwiZG9SZXF1ZXN0IiwiSG9zdCIsIlB1dCIsIlBvc3QiLCJEZXN0cm95IiwiVXBsb2FkIiwiZmlsZVBhdGgiLCJ3eFVwbG9hZCIsIkdldEJhc2ljIiwiY2FsbGJhY2siLCJQb3N0QmFzaWMiLCJXWCIsInd4IiwicmVxdWVzdCIsImhvc3QiLCJzdWNjZXNzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQTtBQUFBLHFFQUFNLGlCQUFPQyxHQUFQLEVBQVlDLE1BQVo7QUFBQSxRQUFvQkMsT0FBcEIsdUVBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ0MsZUFBS0MsU0FBTCxDQUFrQkMsZUFBS0wsR0FBdkIsU0FBOEJBLEdBQTlCLEVBQXFDLEtBQXJDLEVBQTRDQyxNQUE1QyxFQUFvREMsT0FBcEQsQ0FBM0M7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFDQSxJQUFNSTtBQUFBLHNFQUFNLGtCQUFPTixHQUFQLEVBQVlDLE1BQVo7QUFBQSxRQUFvQkMsT0FBcEIsdUVBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ0MsZUFBS0MsU0FBTCxDQUFrQkMsZUFBS0wsR0FBdkIsU0FBOEJBLEdBQTlCLEVBQXFDLEtBQXJDLEVBQTRDQyxNQUE1QyxFQUFvREMsT0FBcEQsQ0FBM0M7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFDQSxJQUFNSztBQUFBLHNFQUFPLGtCQUFPUCxHQUFQLEVBQVlDLE1BQVo7QUFBQSxRQUFvQkMsT0FBcEIsdUVBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ0MsZUFBS0MsU0FBTCxDQUFrQkMsZUFBS0wsR0FBdkIsU0FBOEJBLEdBQTlCLEVBQXFDLE1BQXJDLEVBQTZDQyxNQUE3QyxFQUFxREMsT0FBckQsQ0FBM0M7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFDQSxJQUFNTTtBQUFBLHNFQUFVLGtCQUFPUixHQUFQLEVBQVlDLE1BQVo7QUFBQSxRQUFvQkMsT0FBcEIsdUVBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUEyQ0MsZUFBS0MsU0FBTCxDQUFrQkMsZUFBS0wsR0FBdkIsU0FBOEJBLEdBQTlCLEVBQXFDLFFBQXJDLEVBQStDQyxNQUEvQyxFQUF1REMsT0FBdkQsQ0FBM0M7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47QUFDQSxJQUFNTztBQUFBLHNFQUFTLGtCQUFPQyxRQUFQO0FBQUEsUUFBaUJULE1BQWpCLHVFQUEwQixFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdUNFLGVBQUtRLFFBQUwsQ0FBaUJOLGVBQUtMLEdBQXRCLGNBQW9DVSxRQUFwQyxFQUE4Q1QsTUFBOUMsQ0FBdkM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBRUEsSUFBTVcsV0FBVyxTQUFYQSxRQUFXLENBQUNaLEdBQUQsRUFBTUMsTUFBTjtBQUFBLE1BQWNDLE9BQWQsdUVBQXdCLEVBQXhCO0FBQUEsTUFBNEJXLFFBQTVCO0FBQUEsU0FBeUNWLGVBQUtDLFNBQUwsQ0FBa0JDLGVBQUtMLEdBQXZCLFNBQThCQSxHQUE5QixFQUFxQyxLQUFyQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLE9BQXBELEVBQTZEVyxRQUE3RCxDQUF6QztBQUFBLENBQWpCO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNkLEdBQUQsRUFBTUMsTUFBTjtBQUFBLE1BQWNDLE9BQWQsdUVBQXdCLEVBQXhCO0FBQUEsTUFBNEJXLFFBQTVCO0FBQUEsU0FBeUNWLGVBQUtDLFNBQUwsQ0FBa0JDLGVBQUtMLEdBQXZCLFNBQThCQSxHQUE5QixFQUFxQyxNQUFyQyxFQUE2Q0MsTUFBN0MsRUFBcURDLE9BQXJELEVBQThEVyxRQUE5RCxDQUF6QztBQUFBLENBQWxCOztBQUVBLElBQU1FLEtBQUssU0FBTEEsRUFBSyxDQUFDZixHQUFELEVBQU1DLE1BQU4sRUFBY1ksUUFBZCxFQUEyQjtBQUNwQ0csS0FBR0MsT0FBSCxDQUFXO0FBQ1RqQixTQUFRSyxlQUFLYSxJQUFiLFNBQXFCbEIsR0FEWjtBQUVUbUIsYUFBUyxpQkFBQ0MsSUFBRDtBQUFBLGFBQVVQLFNBQVNPLElBQVQsQ0FBVjtBQUFBO0FBRkEsR0FBWDtBQUlELENBTEQ7a0JBTWU7QUFDYnJCLFVBRGE7QUFFYk8sVUFGYTtBQUdiQyxZQUhhO0FBSWJDLGtCQUphO0FBS2JNLHNCQUxhO0FBTWJGLG9CQU5hO0FBT2JHLFFBUGE7QUFRYk47QUFSYSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJ1xuaW1wb3J0IEhvc3QgZnJvbSAnQC91dGlscy9ob3N0J1xuY29uc3QgR2V0ID0gYXN5bmMgKHVybCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IGF3YWl0IEJhc2UuZG9SZXF1ZXN0KGAke0hvc3QudXJsfS8ke3VybH1gLCAnR0VUJywgcGFyYW1zLCBvcHRpb25zKVxuY29uc3QgUHV0ID0gYXN5bmMgKHVybCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IGF3YWl0IEJhc2UuZG9SZXF1ZXN0KGAke0hvc3QudXJsfS8ke3VybH1gLCAnUFVUJywgcGFyYW1zLCBvcHRpb25zKVxuY29uc3QgUG9zdCA9IGFzeW5jICh1cmwsIHBhcmFtcywgb3B0aW9ucyA9IHt9KSA9PiBhd2FpdCBCYXNlLmRvUmVxdWVzdChgJHtIb3N0LnVybH0vJHt1cmx9YCwgJ1Bvc3QnLCBwYXJhbXMsIG9wdGlvbnMpXG5jb25zdCBEZXN0cm95ID0gYXN5bmMgKHVybCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IGF3YWl0IEJhc2UuZG9SZXF1ZXN0KGAke0hvc3QudXJsfS8ke3VybH1gLCAnREVMRVRFJywgcGFyYW1zLCBvcHRpb25zKVxuY29uc3QgVXBsb2FkID0gYXN5bmMgKGZpbGVQYXRoLCBwYXJhbXMgPSB7fSkgPT4gYXdhaXQgQmFzZS53eFVwbG9hZChgJHtIb3N0LnVybH0vdXBsb2FkYCwgZmlsZVBhdGgsIHBhcmFtcylcblxuY29uc3QgR2V0QmFzaWMgPSAodXJsLCBwYXJhbXMsIG9wdGlvbnMgPSB7fSwgY2FsbGJhY2spID0+IEJhc2UuZG9SZXF1ZXN0KGAke0hvc3QudXJsfS8ke3VybH1gLCAnR0VUJywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaylcbmNvbnN0IFBvc3RCYXNpYyA9ICh1cmwsIHBhcmFtcywgb3B0aW9ucyA9IHt9LCBjYWxsYmFjaykgPT4gQmFzZS5kb1JlcXVlc3QoYCR7SG9zdC51cmx9LyR7dXJsfWAsICdQb3N0JywgcGFyYW1zLCBvcHRpb25zLCBjYWxsYmFjaylcblxuY29uc3QgV1ggPSAodXJsLCBwYXJhbXMsIGNhbGxiYWNrKSA9PiB7XG4gIHd4LnJlcXVlc3Qoe1xuICAgIHVybDogYCR7SG9zdC5ob3N0fS8ke3VybH1gLFxuICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiBjYWxsYmFjayhkYXRhKVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR2V0LFxuICBQdXQsXG4gIFBvc3QsXG4gIERlc3Ryb3ksXG4gIFBvc3RCYXNpYyxcbiAgR2V0QmFzaWMsXG4gIFdYLFxuICBVcGxvYWRcbn0iXX0=