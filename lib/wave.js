'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get4 = require('babel-runtime/helpers/get');

var _get5 = _interopRequireDefault(_get4);

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

var _svgPathToCanvas = require('svg-path-to-canvas');

var _svgPathToCanvas2 = _interopRequireDefault(_svgPathToCanvas);

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor,
      flow = utils.flow;

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
        amplitude: 0, // 振幅

        percent: 0, // 当为数组时将渲染多个 波浪线
        wavesColor: '#000', // 波浪线颜色

        shape: '', // 可以使用 svg path，默认圆
        shapeScale: 1, // 当使用 svg path 时可能需要进行适当比例缩放
        shapeColor: '#000', // svgpath 边框颜色
        shapeFillColor: 'transparent', // svgpath 背景颜色

        showOutline: true, // 用于控制是否显示外圈圆环，当 shape 为 svg path 将强制不显示
        outlineColor: '#000', // 外圆环颜色

        speed: 0 // 用于控制移动速度，主要是提供一个可以修改的属性，配合 spritejs 动画用
      });
      return _this;
    }

    (0, _createClass3.default)(WaveAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'offset',
      set: function set(val) {
        this.clearFlow();
        this.set('offset', val);
      }
    }, {
      key: 'amplitude',
      set: function set(val) {
        this.clearFlow();
        this.set('amplitude', val);
      }
    }, {
      key: 'speed',
      set: function set(val) {
        this.clearFlow();
        this.set('speed', val);
      }
    }, {
      key: 'percent',
      set: function set(val) {
        this.clearFlow();
        this.set('percent', val);
      }
    }, {
      key: 'wavesColor',
      set: function set(val) {
        this.clearFlow();
        this.set('wavesColor', val);
      }
    }, {
      key: 'shape',
      set: function set(val) {
        this.clearFlow();
        this.set('shape', val);
      }
    }]);
    return WaveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'amplitude', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'amplitude'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'speed', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'speed'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'percent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wavesColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'wavesColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'shape', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'shape'), _class.prototype)), _class);
  var Wave = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Wave, _Shape);

    function Wave() {
      (0, _classCallCheck3.default)(this, Wave);
      return (0, _possibleConstructorReturn3.default)(this, (Wave.__proto__ || (0, _getPrototypeOf2.default)(Wave)).apply(this, arguments));
    }

    (0, _createClass3.default)(Wave, [{
      key: 'render',
      value: function render(t, ctx) {
        var _this3 = this;

        (0, _get5.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'render', this).call(this, t, ctx);
        var lw = this.attr('lineWidth');
        var radius = this.attr('radius');
        var offset = this.attr('offset');
        var shape = this.attr('shape');
        var showOutline = this.attr('showOutline');
        var AMPLITUDE = this.attr('amplitude') || radius / 10;

        ctx.save();

        var cx = void 0;
        var cy = void 0;
        var horizontalLength = void 0;
        var verticalLength = void 0;
        var svgpath = void 0;

        if (!shape) {
          cx = lw + radius + offset;
          cy = lw + radius + offset;

          horizontalLength = verticalLength = radius;
        } else {
          svgpath = new _svgPathToCanvas2.default(shape);

          var _svgpath$center = (0, _slicedToArray3.default)(svgpath.center, 2);

          cx = _svgpath$center[0];
          cy = _svgpath$center[1];

          var _svgpath$size$map = svgpath.size.map(function (v) {
            return (v + lw) / 2;
          });

          var _svgpath$size$map2 = (0, _slicedToArray3.default)(_svgpath$size$map, 2);

          horizontalLength = _svgpath$size$map2[0];
          verticalLength = _svgpath$size$map2[1];
        }

        if (showOutline && !svgpath) {
          // 外接圆
          ctx.beginPath();
          ctx.strokeStyle = this.attr('outlineColor');
          ctx.lineWidth = lw;
          ctx.arc(cx, cy, Math.min(horizontalLength, verticalLength) + offset, 0, Math.PI * 2, false);
          ctx.stroke();
        }

        if (!svgpath) {
          // 内接圆设为剪辑区域;
          ctx.beginPath();
          ctx.arc(cx, cy + 0, Math.min(horizontalLength, verticalLength), 0, Math.PI * 2, false);
        } else {
          ctx.translate(lw, lw);

          svgpath.save().beginPath().strokeStyle(this.attr('shapeColor')).fillStyle(this.attr('shapeFillColor')).scale(this.attr('shapeScale')).lineWidth(lw).trim().to(ctx).fill().stroke();

          var _svgpath$center2 = (0, _slicedToArray3.default)(svgpath.center, 2);

          cx = _svgpath$center2[0];
          cy = _svgpath$center2[1];

          var _svgpath$size$map3 = svgpath.size.map(function (v) {
            return (v + lw * 2) / 2;
          });

          var _svgpath$size$map4 = (0, _slicedToArray3.default)(_svgpath$size$map3, 2);

          horizontalLength = _svgpath$size$map4[0];
          verticalLength = _svgpath$size$map4[1];
        }

        ctx.clip();

        // 绘制正弦曲线

        var colors = this.attr('wavesColor');
        var percent = this.attr('percent');

        if (!Array.isArray(percent)) {
          percent = [percent];
        }

        if (!Array.isArray(colors)) {
          colors = [colors];
        }

        percent.map(function (percent, i) {
          percent = percent > 1 ? 1 : percent;

          var y = 0;

          if (_this3.attr('shape')) {
            // 使用 svgPath
            if (percent <= 0.5) {
              y = (0.5 - percent) * verticalLength * 2;
            } else {
              y = -(percent - 0.5) * verticalLength * 2;
            }
          } else {
            var startAngle = 0;
            if (percent <= 0.5) {
              startAngle = 0.25 - percent / 2;
            } else if (percent < 1) {
              startAngle = 0 - (percent - 0.5) / 2;
            } else {
              startAngle = 0;
            }
            startAngle *= Math.PI * 2;
            var sinVal = percent >= 1 ? -1 : (0, _util.sin)(startAngle / 2);
            y = (0, _util.round)(radius * sinVal);
          }

          var A = (radius / 20 * (0, _util.sin)(percent * Math.PI) + i * 10 + AMPLITUDE) / 2; // 振幅;
          var W = Math.PI * 2 / 200;
          var H = cy + y + i * 5;
          var Q = _this3.attr('speed');

          ctx.beginPath();
          ctx.moveTo(cx - horizontalLength, cy);

          for (var x = cx - horizontalLength; x <= cx + horizontalLength; x++) {
            // 三角函数公式：y=Asin（wx+φ）+h
            var _y = A * (i % 2 ? Math.sin : Math.cos)(W * x + Q) + H;
            ctx.lineTo(x, _y);
          }
          // 向下形成闭合区域
          ctx.lineTo(cx + horizontalLength, cy + verticalLength);
          ctx.lineTo(cx - horizontalLength, cy + verticalLength);
          ctx.lineTo(cx - horizontalLength, cy);
          ctx.fillStyle = colors[i] || colors[0];
          ctx.fill();
          ctx.closePath();
        });

        ctx.restore();
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return false;
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        var lw = this.attr('lineWidth');

        if (this.attr('shape')) {
          var svgpath = new _svgPathToCanvas2.default(this.attr('shape'));

          svgpath.scale(this.attr('shapeScale')).lineWidth(lw).trim();

          return [-lw, -lw].concat((0, _toConsumableArray3.default)(svgpath.size.map(function (v) {
            return v += lw;
          })));
        }

        var len = lw + this.attr('radius') + this.attr('offset');
        return [lw, lw, 2 * len, 2 * len];
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        if (width == '') {
          width = bounds[2] - Math.min(0, bounds[0]);
        }
        if (height == '') {
          height = bounds[3] - Math.min(0, bounds[1]);
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var lineBoundings = this.lineBoundings;

        var _get2 = (0, _get5.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'originalRect', this),
            _get3 = (0, _slicedToArray3.default)(_get2, 4),
            x = _get3[0],
            y = _get3[1],
            w = _get3[2],
            h = _get3[3];

        var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
        return rect;
      }
    }]);
    return Wave;
  }(Shape), _class3.Attr = WaveAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'lineBoundings', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'lineBoundings'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('wave', Wave, false);
  return { Wave: Wave };
}