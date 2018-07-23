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

var _desc, _value, _class, _class2, _temp;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr,
    parseColorString = _spriteCore.utils.parseColorString,
    findColor = _spriteCore.utils.findColor;
var RingAttr = (_class = function (_Shape$Attr) {
  (0, _inherits3.default)(RingAttr, _Shape$Attr);

  function RingAttr(subject) {
    (0, _classCallCheck3.default)(this, RingAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RingAttr.__proto__ || (0, _getPrototypeOf2.default)(RingAttr)).call(this, subject));

    _this.setDefault({
      innerRaius: 10,
      outterRadius: 20,
      startAngle: 0,
      endAngle: 360,
      color: 'rgba(0,0,0,1)',
      fillColor: 'rgba(0, 0, 0, 1)',
      lineWidth: 1
    });
    return _this;
  }
  // 内圆半径


  (0, _createClass3.default)(RingAttr, [{
    key: 'innerRadius',
    set: function set(val) {
      this.set('innerRadius', val);
    }
    // 外圆半径

  }, {
    key: 'outterRadius',
    set: function set(val) {
      this.set('outterRadius', val);
    }
  }, {
    key: 'startAngle',
    set: function set(val) {
      this.set('startAngle', val);
    }
  }, {
    key: 'endAngle',
    set: function set(val) {
      this.set('endAngle', val);
    }
  }, {
    key: 'color',
    set: function set(val) {
      val = parseColorString(val);
      this.set('color', val);
    }
  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.set('lineWidth', val);
    }
  }, {
    key: 'fillColor',
    set: function set(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }
  }]);
  return RingAttr;
}(_shape2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'outterRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'outterRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);
var Ring = (_temp = _class2 = function (_Shape) {
  (0, _inherits3.default)(Ring, _Shape);

  function Ring() {
    (0, _classCallCheck3.default)(this, Ring);
    return (0, _possibleConstructorReturn3.default)(this, (Ring.__proto__ || (0, _getPrototypeOf2.default)(Ring)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ring, [{
    key: 'render',
    value: function render(t, ctx) {
      (0, _get3.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'render', this).call(this, t, ctx);
      var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outterRadius'));
      var outterRadius = Math.max(this.attr('innerRadius'), this.attr('outterRadius'));

      var bounds = this.lineBoundings;
      var lw = this.attr('lineWidth');

      var isCircle = this.endAngle - this.startAngle > Math.PI * 2;
      var startAngle = isCircle ? 0 : this.startAngle;
      var endAngle = isCircle ? Math.PI * 2 : this.endAngle;
      ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');
      ctx.miterLimit = 3;
      ctx.lineWidth = this.attr('lineWidth');
      ctx.beginPath();

      ctx.arc(outterRadius, outterRadius, outterRadius, startAngle, endAngle, false);
      if (endAngle - startAngle === Math.PI * 2) {
        ctx.moveTo(outterRadius + innerRadius, outterRadius);
      }
      ctx.arc(outterRadius, outterRadius, innerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      return ctx;
    }
  }, {
    key: 'lineBoundings',


    // 边界依赖于最大圆
    get: function get() {
      var radius = Math.max(this.attr('innerRadius'), this.attr('outterRadius'));
      return [0, 0, 2 * radius, 2 * radius];
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
  return Ring;
}(_shape2.default), _class2.Attr = RingAttr, _temp);
exports.default = Ring;