"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _ellipseSector = _interopRequireDefault(require("./ellipseSector"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Sector =
  /*#__PURE__*/
  function (_EllipseSector) {
    (0, _inherits2.default)(Sector, _EllipseSector);

    function Sector() {
      (0, _classCallCheck2.default)(this, Sector);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sector).apply(this, arguments));
    }

    (0, _createClass2.default)(Sector, [{
      key: "radiuses",
      get: function get() {
        return [this.attr('radius'), this.attr('radius')];
      }
    }]);
    return Sector;
  }(EllipseSector);

  Sector.defineAttributes({
    radius: function radius(attr, val) {
      attr.clearFlow();
      attr.set('radius', val);
    }
  });
  registerNodeType('sector', Sector, false);
  return {
    Sector: Sector
  };
}