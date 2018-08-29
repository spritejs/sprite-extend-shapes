'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _spriteCore = require('sprite-core');

var _shape = require('../shape');

var _shape2 = _interopRequireDefault(_shape);

var _sector = require('./sector');

var _sector2 = _interopRequireDefault(_sector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findColor = _spriteCore.utils.findColor;

var EllipseArcAttr = function (_Ellipse$Attr) {
  (0, _inherits3.default)(EllipseArcAttr, _Ellipse$Attr);

  /* eslint-disable no-useless-constructor */
  function EllipseArcAttr(subject) {
    (0, _classCallCheck3.default)(this, EllipseArcAttr);
    return (0, _possibleConstructorReturn3.default)(this, (EllipseArcAttr.__proto__ || (0, _getPrototypeOf2.default)(EllipseArcAttr)).call(this, subject));
  }

  return EllipseArcAttr;
}(_sector2.default.Attr);

var EllipseArc = (_temp = _class = function (_Shape) {
  (0, _inherits3.default)(EllipseArc, _Shape);

  function EllipseArc() {
    (0, _classCallCheck3.default)(this, EllipseArc);
    return (0, _possibleConstructorReturn3.default)(this, (EllipseArc.__proto__ || (0, _getPrototypeOf2.default)(EllipseArc)).apply(this, arguments));
  }

  (0, _createClass3.default)(EllipseArc, [{
    key: 'render',
    value: function render(t, drawingContext) {
      (0, _get3.default)(EllipseArc.prototype.__proto__ || (0, _getPrototypeOf2.default)(EllipseArc.prototype), 'render', this).call(this, t, drawingContext);

      var radiusX = this.attr('radiusX');
      var radiusY = this.attr('radiusY');
      var x = 0;
      var y = 0;
      var rotate = this.attr('rotate') / 180 * Math.PI;
      var startAngle = this.attr('startAngle') / 180 * Math.PI;
      var endAngle = this.attr('endAngle') / 180 * Math.PI;
      var anticlockwise = this.attr('anticlockwise');

      drawingContext.lineWidth = this.attr('lineWidth');
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
      drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');

      if (drawingContext.ellipse) {
        drawingContext.beginPath();
        drawingContext.ellipse(x, y, radiusX, radiusY, rotate, startAngle, endAngle, anticlockwise);
        drawingContext.fill();
        drawingContext.stroke();
      } else {
        throw new Error("Your browser does'n support canvas ellipse");
      }

      return drawingContext;
    }
  }, {
    key: 'isVirtual',
    get: function get() {
      return true;
    }
  }]);
  return EllipseArc;
}(_shape2.default), _class.Attr = EllipseArcAttr, _temp);
exports.default = EllipseArc;