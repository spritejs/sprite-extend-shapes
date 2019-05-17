"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _polygon = _interopRequireDefault(require("./polygon"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_polygon.default, null, false),
      Polygon = _use.Polygon;

  var Triangle =
  /*#__PURE__*/
  function (_Polygon) {
    (0, _inherits2.default)(Triangle, _Polygon);

    function Triangle() {
      (0, _classCallCheck2.default)(this, Triangle);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Triangle).apply(this, arguments));
    }

    (0, _createClass2.default)(Triangle, [{
      key: "contentSize",
      get: function get() {
        var _this$attr = this.attr('sides'),
            _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
            s1 = _this$attr2[0],
            s2 = _this$attr2[1];

        return [s1, s2];
      }
    }, {
      key: "points",
      get: function get() {
        var _this$attr3 = this.attr('sides'),
            _this$attr4 = (0, _slicedToArray2.default)(_this$attr3, 2),
            s1 = _this$attr4[0],
            s2 = _this$attr4[1];

        var lw = this.attr('lineWidth');
        s1 -= lw * 2;
        s2 -= lw * 2;
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
  return {
    Triangle: Triangle
  };
}