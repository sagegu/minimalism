"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */

  _createClass(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: "confirm",
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title) {
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 1000
        });
      }, 1000);
    }

    /**
     * 警告框
     */

  }, {
    key: "alert",
    value: function alert(title) {
      wx.showToast({
        title: title,
        icon: "/public/images/error.png",
        mask: true,
        duration: 1500
      });
    }

    /**
     * 错误框
     */

  }, {
    key: "error",
    value: function error(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

      wx.showToast({
        title: title,
        icon: 'none',
        mask: false,
        duration: duration
      });
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast("分享成功");
        }
      };
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsInVybCIsImRlc2MiLCJwYXRoIiwidG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0lBR3FCQSxJO0FBQ25CLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNEO0FBQ0Q7Ozs7Ozs0QkFJZUMsSyxFQUF1QjtBQUFBLFVBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNwQ0MsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU0sU0FGSztBQUdYQyxnQkFBTSxJQUhLO0FBSVhMLG9CQUFVQTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDtBQVFBLFVBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNoQixlQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENQLHFCQUFXLFlBQU07QUFDZk07QUFDRCxXQUZELEVBRUdQLFFBRkg7QUFHRCxTQUpNLENBQVA7QUFLRDtBQUNGOztBQUVEOzs7Ozs7NEJBR2VTLEksRUFBa0M7QUFBQSxVQUE1QkMsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZFgsS0FBYyx1RUFBTixJQUFNOztBQUMvQyxhQUFPLElBQUlPLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENOLFdBQUdTLFNBQUgsQ0FBYTtBQUNYWixpQkFBT0EsS0FESTtBQUVYYSxtQkFBU0gsSUFGRTtBQUdYSSxzQkFBWSxJQUhEO0FBSVhDLG1CQUFTLHNCQUFPO0FBQ2QsZ0JBQUlDLElBQUlDLE9BQVIsRUFBaUI7QUFDZlQsc0JBQVFHLE9BQVI7QUFDRCxhQUZELE1BRU8sSUFBSUssSUFBSUUsTUFBUixFQUFnQjtBQUNyQlQscUJBQU9FLE9BQVA7QUFDRDtBQUNGLFdBVlU7QUFXWFEsZ0JBQU0sbUJBQU87QUFDWFYsbUJBQU9FLE9BQVA7QUFDRDtBQWJVLFNBQWI7QUFlRCxPQWhCTSxDQUFQO0FBaUJEOzs7MEJBRVlYLEssRUFBeUI7QUFBQSxVQUFsQkssSUFBa0IsdUVBQVgsU0FBVzs7QUFDcENILGlCQUFXLFlBQU07QUFDZkMsV0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGlCQUFPQSxLQURJO0FBRVhLLGdCQUFNQSxJQUZLO0FBR1hDLGdCQUFNLElBSEs7QUFJWEwsb0JBQVU7QUFKQyxTQUFiO0FBTUQsT0FQRCxFQU9HLElBUEg7QUFRRDs7QUFFRDs7Ozs7OzBCQUdhRCxLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhLLGNBQU0sMEJBRks7QUFHWEMsY0FBTSxJQUhLO0FBSVhMLGtCQUFVO0FBSkMsT0FBYjtBQU1EOztBQUVEOzs7Ozs7MEJBSWFELEssRUFBd0I7QUFBQSxVQUFqQkMsUUFBaUIsdUVBQU4sSUFBTTs7QUFDbkNFLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhLLGNBQU0sTUFGSztBQUdYQyxjQUFNLEtBSEs7QUFJWEwsa0JBQVVBO0FBSkMsT0FBYjtBQU1EOztBQUVEOzs7Ozs7OEJBRzhCO0FBQUEsVUFBZkQsS0FBZSx1RUFBUCxLQUFPOztBQUM1QixVQUFJRixLQUFLQyxTQUFULEVBQW9CO0FBQ2xCO0FBQ0Q7QUFDREQsV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBSSxTQUFHaUIsV0FBSCxDQUFlO0FBQ2JwQixlQUFPQSxLQURNO0FBRWJNLGNBQU07QUFGTyxPQUFmO0FBSUQ7O0FBRUQ7Ozs7Ozs2QkFHZ0I7QUFDZCxVQUFJUixLQUFLQyxTQUFULEVBQW9CO0FBQ2xCRCxhQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0FJLFdBQUdrQixXQUFIO0FBQ0Q7QUFDRjs7OzBCQUVZckIsSyxFQUFPc0IsRyxFQUFLQyxJLEVBQU07QUFDN0IsYUFBTztBQUNMdkIsZUFBT0EsS0FERjtBQUVMd0IsY0FBTUYsR0FGRDtBQUdMQyxjQUFNQSxJQUhEO0FBSUxSLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJsQixlQUFLMkIsS0FBTCxDQUFXLE1BQVg7QUFDRDtBQU5JLE9BQVA7QUFRRDs7Ozs7O0FBR0g7Ozs7O2tCQXpIcUIzQixJO0FBNEhyQkEsS0FBS0MsU0FBTCxHQUFpQixLQUFqQiIsImZpbGUiOiJ0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaPkOekuuS4juWKoOi9veW3peWFt+exu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuICAvKipcbiAgICog5by55Ye65o+Q56S65qGGXG4gICAqL1xuXG4gIHN0YXRpYyBzdWNjZXNzKHRpdGxlLCBkdXJhdGlvbiA9IDUwMCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0odGV4dCwgcGF5bG9hZCA9IHt9LCB0aXRsZSA9IFwi5o+Q56S6XCIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0b2FzdCh0aXRsZSwgaWNvbiA9IFwic3VjY2Vzc1wiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGljb246IGljb24sXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorablkYrmoYZcbiAgICovXG4gIHN0YXRpYyBhbGVydCh0aXRsZSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpY29uOiBcIi9wdWJsaWMvaW1hZ2VzL2Vycm9yLnBuZ1wiLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog6ZSZ6K+v5qGGXG4gICAqL1xuXG4gIHN0YXRpYyBlcnJvcih0aXRsZSwgZHVyYXRpb24gPSAxNTAwKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGljb246ICdub25lJyxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyh0aXRsZSA9IFwi5Yqg6L295LitXCIpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgVGlwcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqDovb3lrozmr5VcbiAgICovXG4gIHN0YXRpYyBsb2FkZWQoKSB7XG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XG4gICAgICBUaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2hhcmUodGl0bGUsIHVybCwgZGVzYykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIFRpcHMudG9hc3QoXCLliIbkuqvmiJDlip9cIik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIOmdmeaAgeWPmOmHj++8jOaYr+WQpuWKoOi9veS4rVxuICovXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuIl19