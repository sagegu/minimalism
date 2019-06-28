'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 计算器组件（暂时已弃用）


var Caculate = function (_wepy$component) {
  _inherits(Caculate, _wepy$component);

  function Caculate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Caculate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Caculate.__proto__ || Object.getPrototypeOf(Caculate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      showCaculation: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      showFormula: {
        type: Boolean,
        default: true
      },
      showScreen: {
        type: Boolean,
        default: false
      },
      amount: {
        type: String,
        default: '0',
        twoWay: true
      }
    }, _this.data = {
      formula: '',
      op: {
        'plus': '+',
        'minus': '-'
      },
      opArr: ['+', '-'],
      infix: [],
      suffix: [],
      lastVal: 0
    }, _this.methods = {
      hideCaculation: function hideCaculation() {
        this.showCaculation = false;
      },
      caculatBtn: function caculatBtn(event) {
        var value = event.target.dataset.num;
        var number = parseInt(value, 10);
        if (!isNaN(number)) {
          this.buildNumberInfix(number);
          this.calculate();
        } else {
          this.buildOpInfix(this.op[value]);
        }
      },
      backspace: function backspace() {
        var result = parseInt(this.amount, 10).toString();
        var newResult = result.split('');
        if (newResult.length == 1) {
          this.resetData();
          return;
        } else {
          var money = result.substr(0, result.length - 1);
          this.lastVal = money;
          this.infix = [parseInt(money, 10)];
        }
        this.calculate();
      },
      caculatok: function caculatok() {
        this.resetData(false);
        this.showCaculation = false;
        this.$emit('invokeCaculation', this.amount);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Caculate, [{
    key: 'resetData',


    // 计算器的方法
    value: function resetData() {
      var resetAmount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.infix = [];
      this.suffix = [];
      this.lastVal = 0;
      this.formula = '';
      if (resetAmount) this.amount = '0.00';
    }
  }, {
    key: 'isOp',
    value: function isOp(op) {
      return op && this.opArr.indexOf(op) !== -1;
    }
  }, {
    key: 'priorHigher',
    value: function priorHigher(a, b) {
      return (a === '+' || a === '-') && (b === '*' || b === '/');
    }
  }, {
    key: 'opCalc',
    value: function opCalc(b, op, a) {
      a = parseInt(a, 10);
      b = parseInt(b, 10);
      switch (op) {
        case '+':
          return a + b;
        case '-':
          return Math.max(0, a - b);
        default:
          return 0;
      }
    }

    // 1 ~ 9 的中缀构建

  }, {
    key: 'buildNumberInfix',
    value: function buildNumberInfix(val) {
      if (!this.isOp(this.lastVal)) {
        val = this.lastVal * 10 + val;
        this.infix.pop();
      }
      this.lastVal = val;
      this.infix.push(val);
    }

    // +、- 的中缀构建

  }, {
    key: 'buildOpInfix',
    value: function buildOpInfix(op) {
      if (this.infix.length == 0) {
        this.infix.push(parseInt(this.amount, 10));
      }
      if (this.isOp(this.lastVal)) {
        this.infix.pop();
      }
      this.lastVal = op;
      this.infix.push(op);
    }
  }, {
    key: 'calculate',
    value: function calculate(type) {
      if (this.infix.length % 2 == 0 && this.infix.length != 1) {
        return;
      }
      this.infix2Suffix();
      this.calcSuffix();
    }

    // 计算后缀表达式

  }, {
    key: 'calcSuffix',
    value: function calcSuffix() {
      var result = [];
      for (var i = 0; i < this.suffix.length; i++) {
        if (!this.isOp(this.suffix[i])) {
          result.push(this.suffix[i]);
        } else {
          result.push(this.opCalc(result.pop(), this.suffix[i], result.pop()));
        }
      }
      this.amount = result.length == 0 ? '0.00' : result[0] + '.00';
    }

    // 中缀表达式转后缀

  }, {
    key: 'infix2Suffix',
    value: function infix2Suffix() {
      var temp = [];
      this.suffix = [];
      for (var i = 0; i < this.infix.length; i++) {
        if (!this.isOp(this.infix[i])) {
          this.suffix.push(this.infix[i]);
        } else {
          if (!temp.length) {
            temp.push(this.infix[i]);
          } else {
            var opTop = temp[temp.length - 1];
            if (!this.priorHigher(opTop, this.infix[i])) {
              while (temp.length && !this.priorHigher(opTop, this.infix[i])) {
                this.suffix.push(temp.pop());
                opTop = temp[temp.length - 1];
              }
            }
            // 将当前运算符也压入后缀表达式
            temp.push(this.infix[i]);
          }
        }
      }
      // 将剩余运算符号压入
      while (temp.length) {
        this.suffix.push(temp.pop());
      }
    }
  }]);

  return Caculate;
}(_wepy2.default.component);

exports.default = Caculate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhY3VsYXRlLmpzIl0sIm5hbWVzIjpbIkNhY3VsYXRlIiwicHJvcHMiLCJzaG93Q2FjdWxhdGlvbiIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsInNob3dGb3JtdWxhIiwic2hvd1NjcmVlbiIsImFtb3VudCIsIlN0cmluZyIsImRhdGEiLCJmb3JtdWxhIiwib3AiLCJvcEFyciIsImluZml4Iiwic3VmZml4IiwibGFzdFZhbCIsIm1ldGhvZHMiLCJoaWRlQ2FjdWxhdGlvbiIsImNhY3VsYXRCdG4iLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiZGF0YXNldCIsIm51bSIsIm51bWJlciIsInBhcnNlSW50IiwiaXNOYU4iLCJidWlsZE51bWJlckluZml4IiwiY2FsY3VsYXRlIiwiYnVpbGRPcEluZml4IiwiYmFja3NwYWNlIiwicmVzdWx0IiwidG9TdHJpbmciLCJuZXdSZXN1bHQiLCJzcGxpdCIsImxlbmd0aCIsInJlc2V0RGF0YSIsIm1vbmV5Iiwic3Vic3RyIiwiY2FjdWxhdG9rIiwiJGVtaXQiLCJyZXNldEFtb3VudCIsImluZGV4T2YiLCJhIiwiYiIsIk1hdGgiLCJtYXgiLCJ2YWwiLCJpc09wIiwicG9wIiwicHVzaCIsImluZml4MlN1ZmZpeCIsImNhbGNTdWZmaXgiLCJpIiwib3BDYWxjIiwidGVtcCIsIm9wVG9wIiwicHJpb3JIaWdoZXIiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEssR0FBUTtBQUNOQyxzQkFBZ0I7QUFDZEMsY0FBTUMsT0FEUTtBQUVkQyxpQkFBUyxLQUZLO0FBR2RDLGdCQUFRO0FBSE0sT0FEVjtBQU1OQyxtQkFBYTtBQUNYSixjQUFNQyxPQURLO0FBRVhDLGlCQUFTO0FBRkUsT0FOUDtBQVVORyxrQkFBWTtBQUNWTCxjQUFNQyxPQURJO0FBRVZDLGlCQUFTO0FBRkMsT0FWTjtB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ZSxDQUFDLEtBQUtzQixXQUFMLENBQWlCRCxLQUFqQixFQUF3QixLQUFLM0MsS0FBTCxDQUFXd0MsQ0FBWCxDQUF4QixDQUF2QixFQUErRDtBQUM3RCxxQkFBS3ZDLE1BQUwsQ0FBWW9DLElBQVosQ0FBaUJLLEtBQUtOLEdBQUwsRUFBakI7QUFDQU8sd0JBQVFELEtBQUtBLEtBQUtwQixNQUFMLEdBQWMsQ0FBbkIsQ0FBUjtBQUNEO0FBQ0Y7QUFDRDtBQUNBb0IsaUJBQUtMLElBQUwsQ0FBVSxLQUFLckMsS0FBTCxDQUFXd0MsQ0FBWCxDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Q7QUFDQSxhQUFPRSxLQUFLcEIsTUFBWixFQUFvQjtBQUNsQixhQUFLckIsTUFBTCxDQUFZb0MsSUFBWixDQUFpQkssS0FBS04sR0FBTCxFQUFqQjtBQUNEO0FBQ0Y7Ozs7RUF6S2lDUyxlQUFLQyxTOztrQkFBdEI3RCxRIiwiZmlsZSI6ImNhY3VsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyDorqHnrpflmajnu4Tku7bvvIjmmoLml7blt7LlvIPnlKjvvIlcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FjdWxhdGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBzaG93Q2FjdWxhdGlvbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgc2hvd0Zvcm11bGE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNob3dTY3JlZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhbW91bnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnMCcsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBmb3JtdWxhOiAnJyxcbiAgICAgIG9wOiB7XG4gICAgICAgICdwbHVzJzogJysnLFxuICAgICAgICAnbWludXMnOiAnLScsXG4gICAgICB9LFxuICAgICAgb3BBcnI6IFsnKycsICctJ10sXG4gICAgICBpbmZpeDogW10sXG4gICAgICBzdWZmaXg6IFtdLFxuICAgICAgbGFzdFZhbDogMFxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGlkZUNhY3VsYXRpb24gKCkge1xuICAgICAgICB0aGlzLnNob3dDYWN1bGF0aW9uID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjYWN1bGF0QnRuKGV2ZW50KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bTtcbiAgICAgICAgbGV0IG51bWJlciA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgICAgICAgaWYgKCFpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgdGhpcy5idWlsZE51bWJlckluZml4KG51bWJlcilcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idWlsZE9wSW5maXgodGhpcy5vcFt2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFja3NwYWNlICgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHBhcnNlSW50KHRoaXMuYW1vdW50LCAxMCkudG9TdHJpbmcoKVxuICAgICAgICBsZXQgbmV3UmVzdWx0ID0gcmVzdWx0LnNwbGl0KCcnKVxuICAgICAgICBpZiAobmV3UmVzdWx0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5yZXNldERhdGEoKVxuICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbW9uZXkgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKVxuICAgICAgICAgIHRoaXMubGFzdFZhbCA9IG1vbmV5XG4gICAgICAgICAgdGhpcy5pbmZpeCA9IFtwYXJzZUludChtb25leSwgMTApXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKClcbiAgICAgIH0sXG4gICAgICBjYWN1bGF0b2soKSB7XG4gICAgICAgIHRoaXMucmVzZXREYXRhKGZhbHNlKVxuICAgICAgICB0aGlzLnNob3dDYWN1bGF0aW9uID0gZmFsc2VcbiAgICAgICAgdGhpcy4kZW1pdCgnaW52b2tlQ2FjdWxhdGlvbicsIHRoaXMuYW1vdW50KVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDorqHnrpflmajnmoTmlrnms5VcbiAgICByZXNldERhdGEgKHJlc2V0QW1vdW50ID0gdHJ1ZSkge1xuICAgICAgdGhpcy5pbmZpeCA9IFtdXG4gICAgICB0aGlzLnN1ZmZpeCA9IFtdXG4gICAgICB0aGlzLmxhc3RWYWwgPSAwXG4gICAgICB0aGlzLmZvcm11bGEgPSAnJ1xuICAgICAgaWYgKHJlc2V0QW1vdW50KSB0aGlzLmFtb3VudCA9ICcwLjAwJ1xuICAgIH1cblxuICAgIGlzT3AgKG9wKSB7XG4gICAgICByZXR1cm4gb3AgJiYgdGhpcy5vcEFyci5pbmRleE9mKG9wKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHJpb3JIaWdoZXIgKGEsIGIpIHtcbiAgICAgIHJldHVybiAoYSA9PT0gJysnIHx8IGEgPT09ICctJykgJiYgKGIgPT09ICcqJyB8fCBiID09PSAnLycpO1xuICAgIH1cblxuICAgIG9wQ2FsYyAoYiwgb3AsIGEpIHtcbiAgICAgIGEgPSBwYXJzZUludChhLCAxMClcbiAgICAgIGIgPSBwYXJzZUludChiLCAxMClcbiAgICAgIHN3aXRjaChvcCkge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCAoYSAtIGIpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAxIH4gOSDnmoTkuK3nvIDmnoTlu7pcbiAgICBidWlsZE51bWJlckluZml4ICh2YWwpIHtcbiAgICAgIGlmKCF0aGlzLmlzT3AodGhpcy5sYXN0VmFsKSkge1xuICAgICAgICB2YWwgPSB0aGlzLmxhc3RWYWwgKiAxMCArIHZhbFxuICAgICAgICB0aGlzLmluZml4LnBvcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RWYWwgPSB2YWxcbiAgICAgIHRoaXMuaW5maXgucHVzaCh2YWwpXG4gICAgfVxuXG4gICAgLy8gK+OAgS0g55qE5Lit57yA5p6E5bu6XG4gICAgYnVpbGRPcEluZml4IChvcCkge1xuICAgICAgaWYodGhpcy5pbmZpeC5sZW5ndGggPT0gMCkge1xuICAgICAgICB0aGlzLmluZml4LnB1c2gocGFyc2VJbnQodGhpcy5hbW91bnQsIDEwKSlcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzT3AodGhpcy5sYXN0VmFsKSkge1xuICAgICAgICB0aGlzLmluZml4LnBvcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RWYWwgPSBvcFxuICAgICAgdGhpcy5pbmZpeC5wdXNoKG9wKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZSAodHlwZSkge1xuICAgICAgaWYgKHRoaXMuaW5maXgubGVuZ3RoICUgMiA9PSAwICYmIHRoaXMuaW5maXgubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmluZml4MlN1ZmZpeCgpXG4gICAgICB0aGlzLmNhbGNTdWZmaXgoKVxuICAgIH1cblxuICAgIC8vIOiuoeeul+WQjue8gOihqOi+vuW8j1xuICAgIGNhbGNTdWZmaXggKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1ZmZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcCh0aGlzLnN1ZmZpeFtpXSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN1ZmZpeFtpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm9wQ2FsYyhyZXN1bHQucG9wKCksIHRoaXMuc3VmZml4W2ldLCByZXN1bHQucG9wKCkpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFtb3VudCA9IHJlc3VsdC5sZW5ndGggPT0gMCA/ICcwLjAwJyA6IGAke3Jlc3VsdFswXX0uMDBgXG4gICAgfVxuXG4gICAgLy8g5Lit57yA6KGo6L6+5byP6L2s5ZCO57yAXG4gICAgaW5maXgyU3VmZml4ICgpIHtcbiAgICAgIGxldCB0ZW1wID0gW11cbiAgICAgIHRoaXMuc3VmZml4ID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcCh0aGlzLmluZml4W2ldKSkge1xuICAgICAgICAgIHRoaXMuc3VmZml4LnB1c2godGhpcy5pbmZpeFtpXSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIXRlbXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5pbmZpeFtpXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9wVG9wID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpb3JIaWdoZXIob3BUb3AsIHRoaXMuaW5maXhbaV0pKSB7XG4gICAgICAgICAgICAgIHdoaWxlICh0ZW1wLmxlbmd0aCAmJiAhdGhpcy5wcmlvckhpZ2hlcihvcFRvcCwgdGhpcy5pbmZpeFtpXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1ZmZpeC5wdXNoKHRlbXAucG9wKCkpXG4gICAgICAgICAgICAgICAgb3BUb3AgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5bCG5b2T5YmN6L+Q566X56ym5Lmf5Y6L5YWl5ZCO57yA6KGo6L6+5byPXG4gICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5pbmZpeFtpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIOWwhuWJqeS9mei/kOeul+espuWPt+WOi+WFpVxuICAgICAgd2hpbGUgKHRlbXAubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3VmZml4LnB1c2godGVtcC5wb3AoKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cbiJdfQ==