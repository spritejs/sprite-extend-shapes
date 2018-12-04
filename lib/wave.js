'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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
        percent: 0.5,
        waveTime: 2000,
        amplitude: 0
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
    }]);
    return WaveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'percent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'waveTime', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'waveTime'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'amplitude', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'amplitude'), _class.prototype)), _class);
  var Wave = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Wave, _Shape);

    function Wave() {
      (0, _classCallCheck3.default)(this, Wave);
      return (0, _possibleConstructorReturn3.default)(this, (Wave.__proto__ || (0, _getPrototypeOf2.default)(Wave)).apply(this, arguments));
    }

    (0, _createClass3.default)(Wave, [{
      key: 'render',
      value: function render(t, ctx) {
        var _this3 = this;

        (0, _get3.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'render', this).call(this, t, ctx);

        var lw = this.attr('lineWidth');
        var radius = this.attr('radius');
        var offset = this.attr('offset');
        var percent = this.attr('percent');
        var AMPLITUDE = this.attr('amplitude') || radius / 10;
        var amplitude = radius / 4 * sin(percent * Math.PI) + AMPLITUDE; // 振幅

        var startAngle = 0;
        var endAngle = 0;

        if (percent <= 0.5) {
          startAngle = 0.25 - percent / 2;
          endAngle = startAngle + percent;
        } else if (percent < 1) {
          startAngle = 0 - (percent - 0.5) / 2;
        } else {
          startAngle = 0;
        }
        endAngle = startAngle + percent;
        startAngle *= Math.PI * 2;
        endAngle *= Math.PI * 2;

        var halfSinStartAngle = sin(startAngle / 2);
        var halfCosStartAngle = cos(startAngle / 2);

        var cx = 0,
            cy = 0;

        var startTime = Date.now();
        var clockwise = 1;
        var time = this.attr('waveTime') || 2000;

        var step = function step() {
          ctx.fillStyle = _this3.attr('fillColor');

          ctx.beginPath();

          if (percent < 1) {
            var T = Math.min(1.0, (Date.now() - startTime) / time);
            // 找到平面的中心点，然后在中心点左右两侧分别画贝塞尔曲线模拟 正弦波
            var x = cx,
                y = cy + round(radius * halfSinStartAngle);

            var cp1 = void 0;
            var cp2 = void 0;
            var cp3 = void 0;
            var cp4 = void 0;
            if (clockwise) {
              cp1 = [cx - radius * halfCosStartAngle, y];
              cp2 = [cx - radius * halfCosStartAngle / 2, y + (1 - 2 * T) * amplitude];
              cp3 = [cx + radius * halfCosStartAngle / 2, y + (2 * T - 1) * amplitude];
              cp4 = [cx + radius * halfCosStartAngle, y];
            } else {
              cp1 = [cx - radius * halfCosStartAngle, y];
              cp2 = [cx - radius * halfCosStartAngle / 2, y + (2 * T - 1) * amplitude];
              cp3 = [cx + radius * halfCosStartAngle / 2, y + (1 - 2 * T) * amplitude];
              cp4 = [cx + radius * halfCosStartAngle, y];
            }

            ctx.clearRect(cx - radius - offset - lw, cy - radius - offset - lw, (radius + offset + lw) * 2, (radius + offset + lw) * 2);
            ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], x, y);
            ctx.bezierCurveTo(x, y, cp3[0], cp3[1], cp4[0], cp4[1]);

            if (T === 1) {
              startTime = Date.now();
              clockwise = !clockwise;
            }
          }

          // 绘制圆弧
          ctx.arc(cx, cy, radius, 0 - (endAngle - Math.PI) / 2, (endAngle - Math.PI) / 2 + Math.PI, 0);
          ctx.closePath();
          ctx.fill();
          ctx.save();

          ctx.beginPath();
          ctx.strokeStyle = '#ccc';
          ctx.strokeStyle = findColor(ctx, _this3, 'color');
          ctx.lineJoin = _this3.attr('lineJoin');
          ctx.lineCap = _this3.attr('lineCap');
          ctx.lineWidth = lw;
          ctx.arc(cx, cy, radius + offset, 0, Math.PI * 2, 0);
          ctx.stroke();
          ctx.closePath();

          if (_this3.hasDrawed) {
            requestAnimationFrame(step);
          } else {
            return _promise2.default.resolve();
          }
        };

        var wave = function wave() {
          var _attr = _this3.attr('pos');

          var _attr2 = (0, _slicedToArray3.default)(_attr, 2);

          cx = _attr2[0];
          cy = _attr2[1];

          _this3.hasDrawed = true;
          requestAnimationFrame(step);
        };

        var promise = step();
        if (promise && promise.then) {
          promise.then(wave);
        } else {
          wave();
        }

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