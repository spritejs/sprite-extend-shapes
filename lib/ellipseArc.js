"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _shape = _interopRequireDefault(require("./shape"));

var _sector = _interopRequireDefault(require("./sector"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var _use2 = use(_sector.default, null, false),
      Sector = _use2.Sector;

  var EllipseArcAttr =
  /*#__PURE__*/
  function (_Sector$Attr) {
    (0, _inherits2.default)(EllipseArcAttr, _Sector$Attr);

    /* eslint-disable no-useless-constructor */
    function EllipseArcAttr(subject) {
      (0, _classCallCheck2.default)(this, EllipseArcAttr);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EllipseArcAttr).call(this, subject));
    }

    return EllipseArcAttr;
  }(Sector.Attr);

  var EllipseArc =
  /*#__PURE__*/
  function (_Shape) {
    (0, _inherits2.default)(EllipseArc, _Shape);

    function EllipseArc() {
      (0, _classCallCheck2.default)(this, EllipseArc);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EllipseArc).apply(this, arguments));
    }

    (0, _createClass2.default)(EllipseArc, [{
      key: "render",
      value: function render(t, drawingContext) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(EllipseArc.prototype), "render", this).call(this, t, drawingContext);
        var radiusX = this.attr('radiusX');
        var radiusY = this.attr('radiusY');
        var x = 0;
        var y = 0;
        var rotate = this.attr('rotate');
        var startAngle = this.attr('startAngle');
        var endAngle = this.attr('endAngle');
        var anticlockwise = this.attr('anticlockwise');
        var lw = this.attr('lineWidth');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineWidth = lw;
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        drawingContext.strokeStyle = findColor(drawingContext, this, 'strokeColor');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');

        if (drawingContext.ellipse) {
          drawingContext.beginPath();
          drawingContext.translate(radiusX + lw / 2, radiusY + lw / 2);
          drawingContext.ellipse(x, y, radiusX, radiusY, rotate, startAngle, endAngle, anticlockwise);
          drawingContext.fill();
          drawingContext.stroke();
        } else {
          throw new Error("Your browser does'n support canvas ellipse");
        }

        return drawingContext;
      }
    }, {
      key: "isVirtual",
      get: function get() {
        return true;
      }
    }]);
    return EllipseArc;
  }(Shape);

  (0, _defineProperty2.default)(EllipseArc, "Attr", EllipseArcAttr);
  registerNodeType('ellipsearc', EllipseArc, false);
  return {
    EllipseArc: EllipseArc
  };
}