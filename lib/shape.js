'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var BaseSprite = _ref.BaseSprite,
      utils = _ref.utils;
  var attr = utils.attr,
      parseColorString = utils.parseColorString;
  var ShapeAttr = (_class = function (_BaseSprite$Attr) {
    (0, _inherits3.default)(ShapeAttr, _BaseSprite$Attr);

    function ShapeAttr(subject) {
      (0, _classCallCheck3.default)(this, ShapeAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ShapeAttr.__proto__ || (0, _getPrototypeOf2.default)(ShapeAttr)).call(this, subject));

      _this.setDefault({
        color: 'transparent',
        fillColor: 'transparent',
        lineWidth: 0,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [0, 0],
        lineDashOffset: 0,
        enableCache: false
      });
      return _this;
    }

    (0, _createClass3.default)(ShapeAttr, [{
      key: 'lineWidth',
      set: function set(val) {
        this.clearCache();
        this.set('lineWidth', val);
      }
    }, {
      key: 'lineCap',
      set: function set(val) {
        this.clearCache();
        this.set('lineCap', val);
      }
    }, {
      key: 'lineJoin',
      set: function set(val) {
        this.clearCache();
        this.set('lineJoin', val);
      }
    }, {
      key: 'lineDash',
      set: function set(val) {
        this.clearCache();
        this.set('lineDash', val);
      }
    }, {
      key: 'lineDashOffset',
      set: function set(val) {
        this.clearCache();
        this.set('lineDashOffset', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('fillColor', val);
      }
    }]);
    return ShapeAttr;
  }(BaseSprite.Attr), (_applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);
  var Shape = (_temp = _class2 = function (_BaseSprite) {
    (0, _inherits3.default)(Shape, _BaseSprite);

    function Shape() {
      (0, _classCallCheck3.default)(this, Shape);
      return (0, _possibleConstructorReturn3.default)(this, (Shape.__proto__ || (0, _getPrototypeOf2.default)(Shape)).apply(this, arguments));
    }

    return Shape;
  }(BaseSprite), _class2.Attr = ShapeAttr, _temp);


  return { Shape: Shape };
}