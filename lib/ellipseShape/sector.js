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

exports.default = install;

var _ellipseSector = require('./ellipseSector');

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector2.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Sector = function (_EllipseSector) {
    (0, _inherits3.default)(Sector, _EllipseSector);

    function Sector() {
      (0, _classCallCheck3.default)(this, Sector);
      return (0, _possibleConstructorReturn3.default)(this, (Sector.__proto__ || (0, _getPrototypeOf2.default)(Sector)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sector, [{
      key: 'radiuses',
      get: function get() {
        return [this.attr('radius'), this.attr('radius')];
      }
    }]);
    return Sector;
  }(EllipseSector);

  Sector.defineAttributes({
    radius: function radius(attr, val) {
      attr.clearCache();
      attr.clearFlow();
      attr.set('radius', val);
    }
  });

  registerNodeType('sector', Sector, false);
  return { Sector: Sector };
}