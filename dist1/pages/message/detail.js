'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _htmlparse = require('./../../components/htmlparse.js');

var _htmlparse2 = _interopRequireDefault(_htmlparse);

var _wxRequest = require('./../../utils/wxRequest/index.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageDetail = function (_wepy$page) {
  _inherits(MessageDetail, _wepy$page);

  function MessageDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MessageDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessageDetail.__proto__ || Object.getPrototypeOf(MessageDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消息详情'
    }, _this.data = {
      parserName: 'article',
      parserType: 'md',
      title: '',
      time: '',
      content: '',
      msg_type: ''
    }, _this.$repeat = {}, _this.$props = { "htmlParser": { "xmlns:v-bind": "", "v-bind:parserName.once": "parserName", "v-bind:parserContent.sync": "content", "v-bind:parserType.once": "parserType" } }, _this.$events = {}, _this.components = {
      htmlParser: _htmlparse2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MessageDetail, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.getArticle(options.id);
    }
  }, {
    key: 'getArticle',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wxRequest2.default.Get('message/' + id);

              case 2:
                data = _context.sent;

                this.title = data.title;
                this.content = data.content;
                this.time = data.time;
                this.parserType = data.content_type;
                this.msg_type = data.msg_type;
                this.$apply();
                this.$invoke('htmlParser', 'htmlParserNotice');

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getArticle(_x) {
        return _ref2.apply(this, arguments);
      }

      return getArticle;
    }()
  }]);

  return MessageDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MessageDetail , 'pages/message/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwYXJzZXJOYW1lIiwicGFyc2VyVHlwZSIsInRpdGxlIiwidGltZSIsImNvbnRlbnQiLCJtc2dfdHlwZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImh0bWxQYXJzZXIiLCJvcHRpb25zIiwiZ2V0QXJ0aWNsZSIsImlkIiwid3hSZXF1ZXN0IiwiR2V0IiwiY29udGVudF90eXBlIiwiJGFwcGx5IiwiJGludm9rZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsa0JBQVksU0FEUDtBQUVMQyxrQkFBWSxJQUZQO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsZUFBUyxFQUxKO0FBTUxDLGdCQUFVO0FBTkwsSyxRQVNSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQXlELDZCQUE0QixTQUFyRixFQUErRiwwQkFBeUIsWUFBeEgsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxrQkFBWUE7QUFESixLOzs7OzsyQkFJSEMsTyxFQUFTO0FBQ2QsV0FBS0MsVUFBTCxDQUFnQkQsUUFBUUUsRUFBeEI7QUFDRDs7OzsyRkFFZ0JBLEU7Ozs7Ozs7dUJBQ0lDLG9CQUFVQyxHQUFWLGNBQXlCRixFQUF6QixDOzs7QUFBYmQsb0I7O0FBQ04scUJBQUtHLEtBQUwsR0FBYUgsS0FBS0csS0FBbEI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlTCxLQUFLSyxPQUFwQjtBQUNBLHFCQUFLRCxJQUFMLEdBQVlKLEtBQUtJLElBQWpCO0FBQ0EscUJBQUtGLFVBQUwsR0FBa0JGLEtBQUtpQixZQUF2QjtBQUNBLHFCQUFLWCxRQUFMLEdBQWdCTixLQUFLTSxRQUFyQjtBQUNBLHFCQUFLWSxNQUFMO0FBQ0EscUJBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLGtCQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpDdUNDLGVBQUtDLEk7O2tCQUEzQnhCLGEiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodG1sUGFyc2VyIGZyb20gJ0AvY29tcG9uZW50cy9odG1scGFyc2UnXG4gIGltcG9ydCB3eFJlcXVlc3QgZnJvbSAnQC91dGlscy93eFJlcXVlc3QnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtojmga/or6bmg4UnLFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBwYXJzZXJOYW1lOiAnYXJ0aWNsZScsXG4gICAgICBwYXJzZXJUeXBlOiAnbWQnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgdGltZTogJycsXG4gICAgICBjb250ZW50OiAnJyxcbiAgICAgIG1zZ190eXBlOiAnJ1xuICAgIH1cbiAgICBcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaHRtbFBhcnNlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGFyc2VyTmFtZS5vbmNlXCI6XCJwYXJzZXJOYW1lXCIsXCJ2LWJpbmQ6cGFyc2VyQ29udGVudC5zeW5jXCI6XCJjb250ZW50XCIsXCJ2LWJpbmQ6cGFyc2VyVHlwZS5vbmNlXCI6XCJwYXJzZXJUeXBlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGh0bWxQYXJzZXI6IGh0bWxQYXJzZXJcbiAgICB9XG5cbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgdGhpcy5nZXRBcnRpY2xlKG9wdGlvbnMuaWQpXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QXJ0aWNsZShpZCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHd4UmVxdWVzdC5HZXQoYG1lc3NhZ2UvJHtpZH1gKVxuICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGVcbiAgICAgIHRoaXMuY29udGVudCA9IGRhdGEuY29udGVudFxuICAgICAgdGhpcy50aW1lID0gZGF0YS50aW1lXG4gICAgICB0aGlzLnBhcnNlclR5cGUgPSBkYXRhLmNvbnRlbnRfdHlwZVxuICAgICAgdGhpcy5tc2dfdHlwZSA9IGRhdGEubXNnX3R5cGVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHRoaXMuJGludm9rZSgnaHRtbFBhcnNlcicsICdodG1sUGFyc2VyTm90aWNlJylcbiAgICB9XG4gICAgXG5cbiAgfVxuIl19