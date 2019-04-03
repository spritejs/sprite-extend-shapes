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

var _ellipse = require('./ellipse');

var _ellipse2 = _interopRequireDefault(_ellipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_ellipse2.default, null, false),
      Ellipse = _use.Ellipse;

  var CircleAttr = (_class = function (_Ellipse$Attr) {
    (0, _inherits3.default)(CircleAttr, _Ellipse$Attr);

    function CircleAttr(subject) {
      (0, _classCallCheck3.default)(this, CircleAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (CircleAttr.__proto__ || (0, _getPrototypeOf2.default)(CircleAttr)).call(this, subject));

      _this.setDefault({
        radius: 10
      });
      return _this;
    }

    (0, _createClass3.default)(CircleAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }]);
    return CircleAttr;
  }(Ellipse.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype)), _class);
  var Circle = (_temp = _class2 = function (_Ellipse) {
    (0, _inherits3.default)(Circle, _Ellipse);

    function Circle() {
      (0, _classCallCheck3.default)(this, Circle);
      return (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).apply(this, arguments));
    }

    (0, _createClass3.default)(Circle, [{
      key: 'radiuses',
      get: function get() {
        var radius = this.attr('radius');
        return [radius, radius];
      }
    }]);
    return Circle;
  }(Ellipse), _class2.Attr = CircleAttr, _temp);


  registerNodeType('circle', Circle, false);

  return { Circle: Circle };
}