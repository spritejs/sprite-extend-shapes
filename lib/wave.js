'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};
var sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};
var round = function round(v) {
  return Math.round(v);
};

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var WaveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(WaveAttr, _Shape$Attr);

    function WaveAttr(subject) {
      (0, _classCallCheck3.default)(this, WaveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WaveAttr.__proto__ || (0, _getPrototypeOf2.default)(WaveAttr)).call(this, subject));

      _this.setDefault({
        radius: 50,
        offset: 10,
        percent: 0,
        waveTime: 4000,
        amplitude: 0,
        speed: 0
      });
      return _this;
    }

    (0, _createClass3.default)(WaveAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'offset',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('offset', val);
      }
    }, {
      key: 'percent',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('percent', val);
      }
    }, {
      key: 'waveTime',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('waveTime', val);
      }
    }, {
      key: 'amplitude',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('amplitude', val);
      }
    }, {
      key: 'speed',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('speed', val);
      }
    }]);
    return WaveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'percent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'waveTime', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'waveTime'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'amplitude', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'amplitude'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'speed', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'speed'), _class.prototype)), _class);
  var Wave = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Wave, _Shape);

    function Wave() {
      (0, _classCallCheck3.default)(this, Wave);
      return (0, _possibleConstructorReturn3.default)(this, (Wave.__proto__ || (0, _getPrototypeOf2.default)(Wave)).apply(this, arguments));
    }

    (0, _createClass3.default)(Wave, [{
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'render', this).call(this, t, ctx);
        var lw = this.attr('lineWidth');
        var strokeStyle = findColor(ctx, this, 'color');
        var fillStyle = findColor(ctx, this, 'fillColor');
        var radius = this.attr('radius');
        var offset = this.attr('offset');
        var percent = this.attr('percent');
        var AMPLITUDE = this.attr('amplitude') || radius / 10;
        var cx = 0,
            cy = 0;


        var startAngle = 0;
        if (percent <= 0.5) {
          startAngle = 0.25 - percent / 2;
        } else if (percent < 1) {
          startAngle = 0 - (percent - 0.5) / 2;
        } else {
          startAngle = 0;
        }
        startAngle *= Math.PI * 2;
        var sinVal = percent >= 1 ? -1 : sin(startAngle / 2);
        var y = round(radius * sinVal);

        // 三角函数公式：y=Asin（wx+φ）+h
        var A = (radius / 20 * sin(percent * Math.PI) + AMPLITUDE) / 2; // 振幅;
        var W = Math.PI * 2 / 200;
        var H = cy + y;
        var Q = this.attr('speed');

        ctx.save();

        // 清除绘制区域
        ctx.clearRect(cx - radius - offset - lw, cy - radius - offset - lw, (radius + offset + lw) * 2, (radius + offset + lw) * 2);

        // 外界圆
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lw;
        ctx.arc(cx, cy, radius + offset, 0, Math.PI * 2, false);
        ctx.stroke();

        // 内接圆设为剪辑区域
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
        ctx.clip();

        // 绘制正弦曲线
        ctx.beginPath();
        for (var x = cx - radius; x <= cx + radius; x++) {
          var _y = A * Math.sin(W * x + Q) + H;
          ctx.lineTo(x, _y);
        }
        // 向下形成闭合区域
        ctx.lineTo(cx + radius, cy + radius);
        ctx.lineTo(cx - radius, cy + radius);
        ctx.lineTo(cx - radius, cy);
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.closePath();

        ctx.restore();

        return ctx;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Wave;
  }(Shape), _class2.Attr = WaveAttr, _temp);


  registerNodeType('wave', Wave, false);
  return { Wave: Wave };
}