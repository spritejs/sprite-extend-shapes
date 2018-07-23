'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _shape = require('../shape');

var _shape2 = _interopRequireDefault(_shape);

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr,
    parseColorString = _spriteCore.utils.parseColorString,
    findColor = _spriteCore.utils.findColor;
var PolygonAttr = (_class = function (_Shape$Attr) {
  (0, _inherits3.default)(PolygonAttr, _Shape$Attr);

  function PolygonAttr(subject) {
    (0, _classCallCheck3.default)(this, PolygonAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

    _this.setDefault({
      points: null,
      color: 'rgba(0,0,0,1)',
      fillColor: 'rgba(0, 0, 0, 1)',
      lineWidth: 1
    });
    return _this;
  }

  (0, _createClass3.default)(PolygonAttr, [{
    key: 'points',
    set: function set(val) {
      this.set('points', val);
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
  return PolygonAttr;
}(_shape2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);
var Polygon = (_temp = _class2 = function (_Shape) {
  (0, _inherits3.default)(Polygon, _Shape);

  function Polygon() {
    (0, _classCallCheck3.default)(this, Polygon);
    return (0, _possibleConstructorReturn3.default)(this, (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Polygon, [{
    key: 'render',
    value: function render(t, drawingContext) {
      (0, _get3.default)(Polygon.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polygon.prototype), 'render', this).call(this, t, drawingContext);
      if (this.points) {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');
        drawingContext.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.beginPath();
        this.points.forEach(function (point, i) {
          if (i === 0) {
            drawingContext.moveTo.apply(drawingContext, (0, _toConsumableArray3.default)(point));
          } else {
            drawingContext.lineTo.apply(drawingContext, (0, _toConsumableArray3.default)(point));
          }
        });
        drawingContext.closePath();
        drawingContext.stroke();
        drawingContext.fill();
      }
      return drawingContext;
    }
  }, {
    key: 'points',
    get: function get() {
      return this.attr('points');
    }
  }, {
    key: 'lineBoundings',
    get: function get() {
      var bounds = [0, 0, 0, 0];
      var points = this.points;
      points.forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);
        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
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
  return Polygon;
}(_shape2.default), _class2.Attr = PolygonAttr, _temp);
exports.default = Polygon;