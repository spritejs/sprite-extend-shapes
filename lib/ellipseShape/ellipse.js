'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ellipseSector = require('./ellipseSector');

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ellipse = function (_EllipseSector) {
  (0, _inherits3.default)(Ellipse, _EllipseSector);

  function Ellipse() {
    (0, _classCallCheck3.default)(this, Ellipse);
    return (0, _possibleConstructorReturn3.default)(this, (Ellipse.__proto__ || (0, _getPrototypeOf2.default)(Ellipse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Ellipse, [{
    key: 'startAngle',
    get: function get() {
      return 0;
    }
  }, {
    key: 'endAngle',
    get: function get() {
      return 2 * Math.PI;
    }
  }]);
  return Ellipse;
}(_ellipseSector2.default);

exports.default = Ellipse;