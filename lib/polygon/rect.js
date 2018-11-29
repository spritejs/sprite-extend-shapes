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

exports.default = install;

var _polygon = require('./polygon');

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var sin = function sin(num) {
  return +Math.sin(num).toFixed(15);
};
var cos = function cos(num) {
  return +Math.cos(num).toFixed(15);
};

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var rectAttr = (_class = function (_Polygon$Attr) {
    (0, _inherits3.default)(rectAttr, _Polygon$Attr);

    function rectAttr(subject) {
      (0, _classCallCheck3.default)(this, rectAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (rectAttr.__proto__ || (0, _getPrototypeOf2.default)(rectAttr)).call(this, subject));

      _this.setDefault({
        angle: 90,
        sides: null,
        size: null
      });
      return _this;
    }

    (0, _createClass3.default)(rectAttr, [{
      key: 'angle',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('angle', val);
      }
    }, {
      key: 'sides',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('sides', val);
      }
    }]);
    return rectAttr;
  }(Polygon.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sides', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sides'), _class.prototype)), _class);
  var Rect = (_class2 = (_temp = _class3 = function (_Polygon) {
    (0, _inherits3.default)(Rect, _Polygon);

    function Rect() {
      (0, _classCallCheck3.default)(this, Rect);
      return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || (0, _getPrototypeOf2.default)(Rect)).apply(this, arguments));
    }

    (0, _createClass3.default)(Rect, [{
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'points',
      get: function get() {
        var _ref2 = this.attr('sides') || this.attr('size'),
            _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            s1 = _ref3[0],
            s2 = _ref3[1];

        var angle = Math.PI / 180 * this.attr('angle');
        var p0 = [0, 0];
        var p1 = [s1, 0];
        var p2 = [s1 + s2 * cos(angle), s2 * sin(angle)];
        var p3 = [0, s2 * sin(angle)];

        return [p0, p1, p2, p3];
      }
    }]);
    return Rect;
  }(Polygon), _class3.Attr = rectAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);


  registerNodeType('rect', Rect, false);
  return { Rect: Rect };
}