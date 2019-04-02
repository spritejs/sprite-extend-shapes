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

exports.default = install;

var _shape = require('../shape');

var _shape2 = _interopRequireDefault(_shape);

var _sector = require('./sector');

var _sector2 = _interopRequireDefault(_sector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var _class, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var _use2 = use(_sector2.default, null, false),
      Sector = _use2.Sector;

  var EllipseArcAttr = function (_Sector$Attr) {
    (0, _inherits3.default)(EllipseArcAttr, _Sector$Attr);

    /* eslint-disable no-useless-constructor */
    function EllipseArcAttr(subject) {
      (0, _classCallCheck3.default)(this, EllipseArcAttr);
      return (0, _possibleConstructorReturn3.default)(this, (EllipseArcAttr.__proto__ || (0, _getPrototypeOf2.default)(EllipseArcAttr)).call(this, subject));
    }

    return EllipseArcAttr;
  }(Sector.Attr);

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
        var rotate = this.attr('rotate');
        var startAngle = this.attr('startAngle');
        var endAngle = this.attr('endAngle');
        var anticlockwise = this.attr('anticlockwise');

        var lw = this.attr('lineWidth');
        drawingContext.lineWidth = lw;
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
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
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return EllipseArc;
  }(Shape), _class.Attr = EllipseArcAttr, _temp);

  registerNodeType('ellipsearc', EllipseArc, false);
  return { EllipseArc: EllipseArc };
}