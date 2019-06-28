'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _host = require('./../host.js');

var _host2 = _interopRequireDefault(_host);

var _session = require('./../session.js');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 登录重试次数
var retryCount = 0;

// 登录凭证键值
var loginKey = _session2.default.key.login;
var getAuthPromise = null;

// 获取 openid
var getOpenId = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(_session2.default.get(loginKey) !== null)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt('return', _session2.default.get(loginKey));

          case 2:
            if (!getAuthPromise) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', getAuthPromise);

          case 4:
            return _context2.abrupt('return', getAuthPromise = new Promise(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                var wxLogin, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _wepy2.default.login();

                      case 2:
                        wxLogin = _context.sent;
                        _context.next = 5;
                        return _wepy2.default.request({
                          url: _host2.default.check_openid,
                          method: 'POST',
                          header: { 'X-WX-Code': wxLogin.code, 'X-WX-APP-ID': _host2.default.appid }
                        });

                      case 5:
                        res = _context.sent;

                        resolve(res.data.session);

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getOpenId() {
    return _ref.apply(this, arguments);
  };
}();

var doRequest = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, method, params) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var callback = arguments[4];

    var cacheKey, cache, pageRoutes, pages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p, thirdSession;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            cacheKey = '';
            // 是否可以命中缓存

            if (!options.cacheKey) {
              _context3.next = 6;
              break;
            }

            cacheKey = _session2.default.key[options.cacheKey[0]][options.cacheKey[1]];
            cache = getByCache(cacheKey);

            if (!cache) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt('return', cache);

          case 6:
            pageRoutes = [];
            pages = getCurrentPages();

            if (!(pages.length > 0)) {
              _context3.next = 28;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context3.prev = 12;

            for (_iterator = pages[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              p = _step.value;

              pageRoutes.push(p.route);
            }
            _context3.next = 20;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3['catch'](12);
            _didIteratorError = true;
            _iteratorError = _context3.t0;

          case 20:
            _context3.prev = 20;
            _context3.prev = 21;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 23:
            _context3.prev = 23;

            if (!_didIteratorError) {
              _context3.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context3.finish(23);

          case 27:
            return _context3.finish(20);

          case 28:
            _context3.next = 30;
            return getOpenId();

          case 30:
            thirdSession = _context3.sent;
            return _context3.abrupt('return', _wepy2.default.request({
              url: url,
              method: method,
              data: params,
              header: {
                'Content-Type': 'application/json',
                'X-WX-Skey': thirdSession,
                'X-WX-APP-ID': _host2.default.appid,
                'X-WX-PAGES': pageRoutes.join(',')
              }
            }).then(function (response) {
              var statusCode = response.statusCode;
              if (statusCode !== 200) {
                if (url === _host2.default.url + '/error_upload') {
                  return false;
                }
                var message = null;
                if (statusCode != 500 && statusCode != 404) {
                  message = e.errMsg;
                }
                _session2.default.pushError({ url: url, method: method, params: params, err: message, statusCode: statusCode, time: new Date().toLocaleString() });
                wx.showToast({
                  title: '网络请求超时..',
                  icon: 'none',
                  duration: 3000
                });
              } else {
                var result = response.data;
                // key 过期尝试重连
                if (result.status === 301 && retryCount <= 3) {
                  _session2.default.clear(loginKey);
                  retryCount += 1;
                  return doRequest(url, method, params);
                }

                _session2.default.set(loginKey, thirdSession);
                if (cacheKey != '') setByCache(cacheKey, result);

                if (typeof callback !== 'undefined') {
                  callback(result);
                }

                return result;
              }
            }, function (err) {
              _session2.default.pushError({ url: url, method: method, params: params, err: err.message, time: new Date().toLocaleString() });
              wx.showToast({
                title: '请求不可达',
                icon: 'none',
                duration: 3000
              });
            }));

          case 32:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[12, 16, 20, 28], [21,, 23, 27]]);
  }));

  return function doRequest(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var wxUpload = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url, filePath) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = _wepy2.default;
            _context4.t1 = url;
            _context4.next = 4;
            return getOpenId();

          case 4:
            _context4.t2 = _context4.sent;
            _context4.t3 = _host2.default.appid;
            _context4.t4 = {
              'Content-Type': 'application/json',
              'X-WX-Skey': _context4.t2,
              'X-WX-APP-ID': _context4.t3
            };
            _context4.t5 = filePath;
            _context4.t6 = params;
            _context4.t7 = {
              url: _context4.t1,
              header: _context4.t4,
              filePath: _context4.t5,
              formData: _context4.t6,
              name: 'file'
            };
            _context4.next = 12;
            return _context4.t0.uploadFile.call(_context4.t0, _context4.t7);

          case 12:
            return _context4.abrupt('return', _context4.sent);

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function wxUpload(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

// 获取缓存,默认缓存时长 1 天
var getByCache = function getByCache(cacheKey) {
  var cacheValue = _session2.default.get(cacheKey);
  var onday = 86400;
  // console.log((new Date().getTime() - Number.parseInt(cacheValue.createTime))/1000)
  if (cacheValue === null) {
    return false;
  } else if ((new Date().getTime() - Number.parseInt(cacheValue.createTime)) / 1000 > onday) {
    return false;
  }
  return cacheValue.value;
};

// 设置缓存
var setByCache = function setByCache(cacheKey, cacheVal) {
  if (typeof cacheKey !== 'undefined') {
    if (Array.isArray(cacheVal) && cacheVal.length == 0) return false;
    var localTime = new Date().getTime();
    _session2.default.set(cacheKey, {
      createTime: localTime,
      value: cacheVal
    });
  }
};

exports.default = {
  doRequest: doRequest,
  wxUpload: wxUpload
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsicmV0cnlDb3VudCIsImxvZ2luS2V5IiwiU2Vzc2lvbiIsImtleSIsImxvZ2luIiwiZ2V0QXV0aFByb21pc2UiLCJnZXRPcGVuSWQiLCJnZXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJ3eExvZ2luIiwicmVxdWVzdCIsInVybCIsIkhvc3QiLCJjaGVja19vcGVuaWQiLCJtZXRob2QiLCJoZWFkZXIiLCJjb2RlIiwiYXBwaWQiLCJyZXMiLCJkYXRhIiwic2Vzc2lvbiIsImRvUmVxdWVzdCIsInBhcmFtcyIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImNhY2hlS2V5IiwiY2FjaGUiLCJnZXRCeUNhY2hlIiwicGFnZVJvdXRlcyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwicCIsInB1c2giLCJyb3V0ZSIsInRoaXJkU2Vzc2lvbiIsImpvaW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsImUiLCJlcnJNc2ciLCJwdXNoRXJyb3IiLCJlcnIiLCJ0aW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInJlc3VsdCIsInN0YXR1cyIsImNsZWFyIiwic2V0Iiwic2V0QnlDYWNoZSIsInd4VXBsb2FkIiwiZmlsZVBhdGgiLCJmb3JtRGF0YSIsIm5hbWUiLCJ1cGxvYWRGaWxlIiwiY2FjaGVWYWx1ZSIsIm9uZGF5IiwiZ2V0VGltZSIsIk51bWJlciIsInBhcnNlSW50IiwiY3JlYXRlVGltZSIsInZhbHVlIiwiY2FjaGVWYWwiLCJBcnJheSIsImlzQXJyYXkiLCJsb2NhbFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQUlBLGFBQWEsQ0FBakI7O0FBRUE7QUFDQSxJQUFNQyxXQUFXQyxrQkFBUUMsR0FBUixDQUFZ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QUFDdkIsV0FBTyxLQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQyxJQUFJakIsSUFBSixHQUFXbUIsT0FBWCxLQUF1QkMsT0FBT0MsUUFBUCxDQUFnQkosV0FBV0ssVUFBM0IsQ0FBeEIsSUFBZ0UsSUFBaEUsR0FBdUVKLEtBQTNFLEVBQWtGO0FBQ3ZGLFdBQU8sS0FBUDtBQUNEO0FBQ0QsU0FBT0QsV0FBV00sS0FBbEI7QUFDRCxDQVZEOztBQVlBO0FBQ0EsSUFBTVosYUFBYSxTQUFiQSxVQUFhLENBQUNoQyxRQUFELEVBQVc2QyxRQUFYLEVBQXdCO0FBQ3pDLE1BQUcsT0FBTzdDLFFBQVAsS0FBb0IsV0FBdkIsRUFBb0M7QUFDbEMsUUFBSThDLE1BQU1DLE9BQU4sQ0FBY0YsUUFBZCxLQUEyQkEsU0FBU3ZDLE1BQVQsSUFBbUIsQ0FBbEQsRUFBcUQsT0FBTyxLQUFQO0FBQ3JELFFBQUkwQyxZQUFZLElBQUkzQixJQUFKLEdBQVdtQixPQUFYLEVBQWhCO0FBQ0FsRSxzQkFBUXlELEdBQVIsQ0FBWS9CLFFBQVosRUFBc0I7QUFDcEIyQyxrQkFBWUssU0FEUTtBQUVwQkosYUFBT0M7QUFGYSxLQUF0QjtBQUlEO0FBQ0YsQ0FURDs7a0JBV2U7QUFDYmpELHNCQURhO0FBRWJxQztBQUZhLEMiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgSG9zdCBmcm9tICdAL3V0aWxzL2hvc3QnXG5pbXBvcnQgU2Vzc2lvbiBmcm9tICdAL3V0aWxzL3Nlc3Npb24nXG5cbi8vIOeZu+W9lemHjeivleasoeaVsFxubGV0IHJldHJ5Q291bnQgPSAwXG5cbi8vIOeZu+W9leWHreivgemUruWAvFxuY29uc3QgbG9naW5LZXkgPSBTZXNzaW9uLmtleS5sb2dpblxubGV0IGdldEF1dGhQcm9taXNlID0gbnVsbFxuXG4vLyDojrflj5Ygb3BlbmlkXG5jb25zdCBnZXRPcGVuSWQgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChTZXNzaW9uLmdldChsb2dpbktleSkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gU2Vzc2lvbi5nZXQobG9naW5LZXkpXG4gIH1cblxuICAvLyDpmLLmraLlubblj5Hor7fmsYIgb3BlbmlkXG4gIGlmIChnZXRBdXRoUHJvbWlzZSkge1xuICAgIHJldHVybiBnZXRBdXRoUHJvbWlzZVxuICB9XG5cbiAgcmV0dXJuIGdldEF1dGhQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHd4TG9naW4gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBIb3N0LmNoZWNrX29wZW5pZCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB7ICdYLVdYLUNvZGUnOiB3eExvZ2luLmNvZGUsICdYLVdYLUFQUC1JRCc6IEhvc3QuYXBwaWQgfVxuICAgIH0pXG4gICAgcmVzb2x2ZShyZXMuZGF0YS5zZXNzaW9uKVxuICB9KVxufVxuXG5jb25zdCBkb1JlcXVlc3QgPSBhc3luYyAodXJsLCBtZXRob2QsIHBhcmFtcywgb3B0aW9ucyA9IHt9LCBjYWxsYmFjaykgPT4ge1xuICBsZXQgY2FjaGVLZXkgPSAnJ1xuICAvLyDmmK/lkKblj6/ku6Xlkb3kuK3nvJPlrZhcbiAgaWYgKG9wdGlvbnMuY2FjaGVLZXkpIHtcbiAgICBjYWNoZUtleSA9IFNlc3Npb24ua2V5W29wdGlvbnMuY2FjaGVLZXlbMF1dW29wdGlvbnMuY2FjaGVLZXlbMV1dXG4gICAgY29uc3QgY2FjaGUgPSBnZXRCeUNhY2hlKGNhY2hlS2V5KVxuICAgIGlmIChjYWNoZSkgcmV0dXJuIGNhY2hlXG4gIH1cblxuICBsZXQgcGFnZVJvdXRlcyA9IFtdXG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKClcbiAgaWYgKHBhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBmb3IobGV0IHAgb2YgcGFnZXMpIHtcbiAgICAgIHBhZ2VSb3V0ZXMucHVzaChwLnJvdXRlKVxuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgdGhpcmRTZXNzaW9uID0gYXdhaXQgZ2V0T3BlbklkKClcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiBtZXRob2QsXG4gICAgZGF0YTogcGFyYW1zLFxuICAgIGhlYWRlcjoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdYLVdYLVNrZXknOiB0aGlyZFNlc3Npb24sXG4gICAgICAnWC1XWC1BUFAtSUQnOiBIb3N0LmFwcGlkLFxuICAgICAgJ1gtV1gtUEFHRVMnOiBwYWdlUm91dGVzLmpvaW4oJywnKVxuICAgIH0sXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1c0NvZGVcbiAgICBpZiAoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICBpZiAodXJsID09PSBgJHtIb3N0LnVybH0vZXJyb3JfdXBsb2FkYCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbFxuICAgICAgaWYgKHN0YXR1c0NvZGUgIT0gNTAwICYmIHN0YXR1c0NvZGUgIT0gNDA0KSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlLmVyck1zZ1xuICAgICAgfVxuICAgICAgU2Vzc2lvbi5wdXNoRXJyb3IoeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zLCBlcnI6IG1lc3NhZ2UsIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUsIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX0pXG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+e9kee7nOivt+axgui2heaXti4uJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuZGF0YVxuICAgICAgLy8ga2V5IOi/h+acn+WwneivlemHjei/nlxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDMwMSAmJiByZXRyeUNvdW50IDw9IDMpIHtcbiAgICAgICAgU2Vzc2lvbi5jbGVhcihsb2dpbktleSlcbiAgICAgICAgcmV0cnlDb3VudCArPSAxXG4gICAgICAgIHJldHVybiBkb1JlcXVlc3QodXJsLCBtZXRob2QsIHBhcmFtcylcbiAgICAgIH1cblxuICAgICAgU2Vzc2lvbi5zZXQobG9naW5LZXksIHRoaXJkU2Vzc2lvbilcbiAgICAgIGlmKGNhY2hlS2V5ICE9ICcnKSBzZXRCeUNhY2hlKGNhY2hlS2V5LCByZXN1bHQpXG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfSwgKGVycikgPT4ge1xuICAgIFNlc3Npb24ucHVzaEVycm9yKHsgdXJsOiB1cmwsIG1ldGhvZDogbWV0aG9kLCBwYXJhbXM6IHBhcmFtcywgZXJyOiBlcnIubWVzc2FnZSwgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfSlcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfor7fmsYLkuI3lj6/ovr4nLFxuICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgZHVyYXRpb246IDMwMDBcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCB3eFVwbG9hZCA9IGFzeW5jICh1cmwsIGZpbGVQYXRoLCBwYXJhbXMgPSB7fSkgPT4ge1xuICByZXR1cm4gYXdhaXQgd2VweS51cGxvYWRGaWxlKHtcbiAgICB1cmw6IHVybCxcbiAgICBoZWFkZXI6IHsgXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ1gtV1gtU2tleSc6IGF3YWl0IGdldE9wZW5JZCgpLFxuICAgICAgJ1gtV1gtQVBQLUlEJzogSG9zdC5hcHBpZFxuICAgIH0sXG4gICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgIGZvcm1EYXRhOiBwYXJhbXMsXG4gICAgbmFtZTogJ2ZpbGUnXG4gIH0pXG59XG5cbi8vIOiOt+WPlue8k+WtmCzpu5jorqTnvJPlrZjml7bplb8gMSDlpKlcbmNvbnN0IGdldEJ5Q2FjaGUgPSAoY2FjaGVLZXkpID0+IHtcbiAgY29uc3QgY2FjaGVWYWx1ZSA9IFNlc3Npb24uZ2V0KGNhY2hlS2V5KVxuICBjb25zdCBvbmRheSA9IDg2NDAwXG4gIC8vIGNvbnNvbGUubG9nKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIE51bWJlci5wYXJzZUludChjYWNoZVZhbHVlLmNyZWF0ZVRpbWUpKS8xMDAwKVxuICBpZiAoY2FjaGVWYWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIE51bWJlci5wYXJzZUludChjYWNoZVZhbHVlLmNyZWF0ZVRpbWUpKS8xMDAwID4gb25kYXkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gY2FjaGVWYWx1ZS52YWx1ZVxufVxuXG4vLyDorr7nva7nvJPlrZhcbmNvbnN0IHNldEJ5Q2FjaGUgPSAoY2FjaGVLZXksIGNhY2hlVmFsKSA9PiB7XG4gIGlmKHR5cGVvZiBjYWNoZUtleSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYWNoZVZhbCkgJiYgY2FjaGVWYWwubGVuZ3RoID09IDApIHJldHVybiBmYWxzZVxuICAgIGxldCBsb2NhbFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIFNlc3Npb24uc2V0KGNhY2hlS2V5LCB7XG4gICAgICBjcmVhdGVUaW1lOiBsb2NhbFRpbWUsXG4gICAgICB2YWx1ZTogY2FjaGVWYWxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZG9SZXF1ZXN0LFxuICB3eFVwbG9hZFxufVxuXG5cblxuIl19