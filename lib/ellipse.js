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

  var Ellipse =
  /*#__PURE__*/
  function (_EllipseSector) {
    (0, _inherits2.default)(Ellipse, _EllipseSector);

    function Ellipse() {
      (0, _classCallCheck2.default)(this, Ellipse);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ellipse).apply(this, arguments));
    }

    (0, _createClass2.default)(Ellipse, [{
      key: "startAngle",
      get: function get() {
        return 0;
      }
    }, {
      key: "endAngle",
      get: function get() {
        return 2 * Math.PI;
      }
    }]);
    return Ellipse;
  }(EllipseSector);

  registerNodeType('ellipse', Ellipse, false);
  return {
    Ellipse: Ellipse
  };
}