'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _shape = require('../shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var EllipseSectorAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(EllipseSectorAttr, _Shape$Attr);

    function EllipseSectorAttr(subject) {
      (0, _classCallCheck3.default)(this, EllipseSectorAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (EllipseSectorAttr.__proto__ || (0, _getPrototypeOf2.default)(EllipseSectorAttr)).call(this, subject));

      _this.setDefault({
        radiusX: 10,
        radiusY: 20,
        startAngle: 0,
        endAngle: 0,
        color: 'rgba(0,0,0,1)',
        fillColor: 'rgba(0, 0, 0, 1)',
        lineWidth: 1,
        anticlockwise: false
      });
      return _this;
    }

    // 短轴半径


    (0, _createClass3.default)(EllipseSectorAttr, [{
      key: 'radiusX',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('radiusX', val);
      }

      // 长轴半径

    }, {
      key: 'radiusY',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('radiusY', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('endAngle', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('color', val);
      }
    }, {
      key: 'lineWidth',
      set: function set(val) {
        this.clearCache();
        this.set('lineWidth', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('fillColor', val);
      }
    }, {
      key: 'anticlockwise',
      set: function set(val) {
        this.clearCache();
        this.set('anticlockwise', val);
      }
    }, {
      key: 'center',
      set: function set(val) {
        this.clearCache();
        this.set('center', val);
      }
    }]);
    return EllipseSectorAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radiusX', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radiusX'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radiusY', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radiusY'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype)), _class);


  function BezierEllipse2(ctx, x, y, a, b) {
    var k = 0.5522848;
    var ox = a * k; // 水平控制点偏移量
    var oy = b * k; // 垂直控制点偏移量</p> <p> ctx.beginPath();
    // 从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
    ctx.moveTo(x - a, y);
    ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
    ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
    ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
    ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
  }

  var EllipseSector = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(EllipseSector, _Shape);

    function EllipseSector() {
      (0, _classCallCheck3.default)(this, EllipseSector);
      return (0, _possibleConstructorReturn3.default)(this, (EllipseSector.__proto__ || (0, _getPrototypeOf2.default)(EllipseSector)).apply(this, arguments));
    }

    (0, _createClass3.default)(EllipseSector, [{
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(EllipseSector.prototype.__proto__ || (0, _getPrototypeOf2.default)(EllipseSector.prototype), 'render', this).call(this, t, ctx);

        var x = void 0,
            y = void 0;

        var _radiuses = (0, _slicedToArray3.default)(this.radiuses, 2),
            rx = _radiuses[0],
            ry = _radiuses[1];

        if (this.center && this.center.length > 0) {
          var _center = (0, _slicedToArray3.default)(this.center, 2);

          x = _center[0];
          y = _center[1];
        } else {
          x = rx;
          y = ry;
        }

        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');
        ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.fillStyle = findColor(ctx, this, 'fillColor');
        ctx.miterLimit = 3;
        ctx.lineWidth = this.attr('lineWidth');
        ctx.beginPath();

        // 绘制椭圆扇形
        if (this.endAngle - this.startAngle < Math.PI * 2) {
          ctx.moveTo(x, y);
        }
        // 当可以直接使用ellipse接口的时候
        if (ctx.ellipse) {
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');

          ctx.ellipse(x, y, rx, ry, 0, this.startAngle, this.endAngle, this.attr('anticlockwise'));
        } else if (this.endAngle - this.startAngle >= Math.PI * 2) {
          BezierEllipse2(ctx, rx, ry, rx, ry);
        } else {
          throw new Error('you can not draw a ellipseSector when ctx.ellipse is not available!');
        }

        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        return ctx;
      }
    }, {
      key: 'radiuses',
      get: function get() {
        return [this.attr('radiusX'), this.attr('radiusY')];
      }
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }, {
      key: 'center',
      get: function get() {
        return this.attr('center');
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attr = this.attr('size'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            width = _attr2[0],
            height = _attr2[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
            width = _offsetSize[0],
            height = _offsetSize[1];

        var _attr3 = this.attr('anchor'),
            _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
            anchorX = _attr4[0],
            anchorY = _attr4[1];

        var rect = [0, 0, width, height];
        var offsetX = Math.min(0, bounds[0]);
        var offsetY = Math.min(0, bounds[1]);

        rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
        rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
        return rect;
      }
    }]);
    return EllipseSector;
  }(Shape), _class3.Attr = EllipseSectorAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);

  registerNodeType('ellipsesector', EllipseSector, false);
  return { EllipseSector: EllipseSector };
}