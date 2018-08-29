'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _spriteCore = require('sprite-core');

var _polygon = require('./polygon');

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr;
var PolygonAttr = (_class = function (_Polygon$Attr) {
  (0, _inherits3.default)(PolygonAttr, _Polygon$Attr);

  function PolygonAttr(subject) {
    (0, _classCallCheck3.default)(this, PolygonAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

    _this.setDefault({
      angle: '60',
      sides: [10, 10]
    });
    return _this;
  }

  (0, _createClass3.default)(PolygonAttr, [{
    key: 'angle',
    set: function set(val) {
      this.set('angle', val);
    }
  }, {
    key: 'sides',
    set: function set(val) {
      this.set('sides', val);
    }
  }]);
  return PolygonAttr;
}(_polygon2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sides', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sides'), _class.prototype)), _class);
var Triangle = (_temp = _class2 = function (_Polygon) {
  (0, _inherits3.default)(Triangle, _Polygon);

  function Triangle() {
    (0, _classCallCheck3.default)(this, Triangle);
    return (0, _possibleConstructorReturn3.default)(this, (Triangle.__proto__ || (0, _getPrototypeOf2.default)(Triangle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Triangle, [{
    key: 'points',
    get: function get() {
      var _attr = this.attr('sides'),
          _attr2 = (0, _slicedToArray3.default)(_attr, 2),
          s1 = _attr2[0],
          s2 = _attr2[1];

      var angle = Math.PI / 180 * this.attr('angle');
      var p0 = [0, 0];
      var p1 = [s1, 0];
      var p2 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      return [p0, p1, p2];
    }
  }]);
  return Triangle;
}(_polygon2.default), _class2.Attr = PolygonAttr, _temp);
exports.default = Triangle;