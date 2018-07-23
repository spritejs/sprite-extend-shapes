'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr,
    parseColorString = _spriteCore.utils.parseColorString,
    findColor = _spriteCore.utils.findColor;
var PolylineAttr = (_class = function (_Shape$Attr) {
  (0, _inherits3.default)(PolylineAttr, _Shape$Attr);

  function PolylineAttr(subject) {
    (0, _classCallCheck3.default)(this, PolylineAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PolylineAttr.__proto__ || (0, _getPrototypeOf2.default)(PolylineAttr)).call(this, subject));

    _this.setDefault({
      points: null,
      color: 'rgba(0,0,0,1)',
      lineWidth: 1,
      lineCap: 'round',
      lineJoin: 'round'
    });
    return _this;
  }

  (0, _createClass3.default)(PolylineAttr, [{
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
    key: 'lineCap',
    set: function set(val) {
      this.set('lineCap', val);
    }
  }, {
    key: 'lineJoin',
    set: function set(val) {
      this.set('lineJoin', val);
    }
  }]);
  return PolylineAttr;
}(_shape2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineJoin'), _class.prototype)), _class);
var Polyline = (_temp = _class2 = function (_Shape) {
  (0, _inherits3.default)(Polyline, _Shape);

  function Polyline() {
    (0, _classCallCheck3.default)(this, Polyline);
    return (0, _possibleConstructorReturn3.default)(this, (Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).apply(this, arguments));
  }

  (0, _createClass3.default)(Polyline, [{
    key: 'render',
    value: function render(t, drawingContext) {
      (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'render', this).call(this, t, drawingContext);
      if (this.points) {
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.beginPath();

        this.points.forEach(function (point, i) {
          if (i === 0) {
            drawingContext.moveTo.apply(drawingContext, (0, _toConsumableArray3.default)(point));
          } else {
            drawingContext.lineTo.apply(drawingContext, (0, _toConsumableArray3.default)(point));
          }
        });
        drawingContext.stroke();
      }
      return drawingContext;
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
  return Polyline;
}(_shape2.default), _class2.Attr = PolylineAttr, _temp);
exports.default = Polyline;