'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrepareBuyItem = function (_wepy$component) {
  _inherits(PrepareBuyItem, _wepy$component);

  function PrepareBuyItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrepareBuyItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrepareBuyItem.__proto__ || Object.getPrototypeOf(PrepareBuyItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      showModal: {
        type: Boolean,
        default: true,
        twoWay: true
      },
      good: {
        type: Object,
        default: {}
      },
      showDelteBtn: {
        type: Boolean,
        default: true
      }
    }, _this.methods = {
      hideForm: function hideForm() {
        this.showModal = false;
      },
      captchEvent: function captchEvent() {
        // return false
      },
      formSubmit: function formSubmit(e) {
        this.$emit('submit', e);
      },
      alreadyBuy: function alreadyBuy() {
        this.showModal = false;
        this.$emit('markbuy', this.good.id);
      },
      deleteItem: function deleteItem() {
        this.showModal = false;
        this.$emit('del', this.good.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PrepareBuyItem;
}(_wepy2.default.component);

exports.default = PrepareBuyItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXBhcmVfYnV5X2l0ZW0uanMiXSwibmFtZXMiOlsiUHJlcGFyZUJ1eUl0ZW0iLCJwcm9wcyIsInNob3dNb2RhbCIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImdvb2QiLCJPYmplY3QiLCJzaG93RGVsdGVCdG4iLCJtZXRob2RzIiwiaGlkZUZvcm0iLCJjYXB0Y2hFdmVudCIsImZvcm1TdWJtaXQiLCJlIiwiJGVtaXQiLCJhbHJlYWR5QnV5IiwiaWQiLCJkZWxldGVJdGVtIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNqQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGNBQU1DLE9BREc7QUFFVEMsaUJBQVMsSUFGQTtBQUdUQyxnQkFBUTtBQUhDLE9BREw7QUFNTkMsWUFBTTtBQUNKSixjQUFNSyxNQURGO0FBRUpILGlCQUFTO0FBRkwsT0FOQTtBQVVOSSxvQkFBYztBQUNaTixjQUFNQyxPQURNO0FBRVpDLGlCQUFTO0FBRkc7QUFWUixLLFFBZ0JSSyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWLGFBQUtULFNBQUwsR0FBaUIsS0FBakI7QUFDRCxPQUhPO0FBSVJVLGlCQUpRLHlCQUlPO0FBQ2I7QUFDRCxPQU5PO0FBT1JDLGdCQVBRLHNCQU9JQyxDQVBKLEVBT087QUFDYixhQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsQ0FBckI7QUFDRCxPQVRPO0FBVVJFLGdCQVZRLHdCQVVNO0FBQ1osYUFBS2QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUthLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtSLElBQUwsQ0FBVVUsRUFBaEM7QUFDRCxPQWJPO0FBY1JDLGdCQWRRLHdCQWNNO0FBQ1osYUFBS2hCLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLYSxLQUFMLENBQVcsS0FBWCxFQUFrQixLQUFLUixJQUFMLENBQVVVLEVBQTVCO0FBQ0Q7QUFqQk8sSzs7OztFQWpCOEJFLGVBQUtDLFM7O2tCQUE1QnBCLGMiLCJmaWxlIjoicHJlcGFyZV9idXlfaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVwYXJlQnV5SXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHNob3dNb2RhbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBnb29kOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge31cbiAgICAgIH0sXG4gICAgICBzaG93RGVsdGVCdG46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoaWRlRm9ybSAoKSB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjYXB0Y2hFdmVudCAoKSB7XG4gICAgICAgIC8vIHJldHVybiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGZvcm1TdWJtaXQgKGUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZSk7XG4gICAgICB9LFxuICAgICAgYWxyZWFkeUJ1eSAoKSB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgdGhpcy4kZW1pdCgnbWFya2J1eScsIHRoaXMuZ29vZC5pZClcbiAgICAgIH0sXG4gICAgICBkZWxldGVJdGVtICgpIHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgICB0aGlzLiRlbWl0KCdkZWwnLCB0aGlzLmdvb2QuaWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgXG59XG4iXX0=