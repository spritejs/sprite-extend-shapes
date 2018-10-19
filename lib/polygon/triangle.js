'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _polygon = require('./polygon');

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var Triangle = function (_Polygon) {
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
  }(Polygon);

  registerNodeType('triangle', Triangle, false);
  return { Triangle: Triangle };
}