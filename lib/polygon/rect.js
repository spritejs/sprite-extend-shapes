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

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var rectAttr = (_class = function (_Polygon$Attr) {
    (0, _inherits3.default)(rectAttr, _Polygon$Attr);

    function rectAttr(subject) {
      (0, _classCallCheck3.default)(this, rectAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (rectAttr.__proto__ || (0, _getPrototypeOf2.default)(rectAttr)).call(this, subject));

      _this.setDefault({
        angle: '90',
        sides: [10, 10]
      });
      return _this;
    }

    (0, _createClass3.default)(rectAttr, [{
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
    return rectAttr;
  }(Polygon.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sides', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sides'), _class.prototype)), _class);
  var Rect = (_temp = _class2 = function (_Polygon) {
    (0, _inherits3.default)(Rect, _Polygon);

    function Rect() {
      (0, _classCallCheck3.default)(this, Rect);
      return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || (0, _getPrototypeOf2.default)(Rect)).apply(this, arguments));
    }

    (0, _createClass3.default)(Rect, [{
      key: 'points',
      get: function get() {
        var _attr = this.attr('sides'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            s1 = _attr2[0],
            s2 = _attr2[1];

        var angle = Math.PI / 180 * this.attr('angle');
        var p0 = [0, 0];
        var p1 = [s1, 0];
        var p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
        var p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
        return [p0, p1, p2, p3];
      }
    }]);
    return Rect;
  }(Polygon), _class2.Attr = rectAttr, _temp);


  registerNodeType('rect', Rect, false);
  return { Rect: Rect };
}