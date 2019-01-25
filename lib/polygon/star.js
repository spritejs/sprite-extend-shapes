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

  var PolygonAttr = (_class = function (_Polygon$Attr) {
    (0, _inherits3.default)(PolygonAttr, _Polygon$Attr);

    function PolygonAttr(subject) {
      (0, _classCallCheck3.default)(this, PolygonAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

      _this.setDefault({
        angles: 5
      });
      return _this;
    }

    (0, _createClass3.default)(PolygonAttr, [{
      key: 'angles',
      set: function set(num) {
        this.clearFlow();
        this.set('angles', num);
      }
    }, {
      key: 'radius',
      set: function set(val) {
        // 圆半径
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'innerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('innerRadius', val);
      }
    }]);
    return PolygonAttr;
  }(Polygon.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angles', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype)), _class);


  function getStarPolygonPoints(angles) {
    var points = [];
    var pointsLength = angles * 2;

    return function (outerRadius, innerRadius) {
      var offsetX = outerRadius;
      var radAngle = -Math.PI / 2;
      var radAlpha = Math.PI / angles;
      for (var i = 1; i <= pointsLength; i++) {
        var rad = radAlpha * i + radAngle;
        var len = i % 2 ? innerRadius : outerRadius;
        var xPos = offsetX + Math.cos(rad) * len;
        var yPos = Math.sin(rad) * len;

        points.push([xPos, yPos]);
      }
      return points;
    };
  }

  var Star = (_temp = _class2 = function (_Polygon) {
    (0, _inherits3.default)(Star, _Polygon);

    function Star() {
      (0, _classCallCheck3.default)(this, Star);
      return (0, _possibleConstructorReturn3.default)(this, (Star.__proto__ || (0, _getPrototypeOf2.default)(Star)).apply(this, arguments));
    }

    (0, _createClass3.default)(Star, [{
      key: 'points',
      get: function get() {
        var radius = this.attr('radius');
        var innerRadius = this.attr('innerRadius') || 0.4 * radius;
        return getStarPolygonPoints(this.attr('angles'))(radius, innerRadius);
      }
    }]);
    return Star;
  }(Polygon), _class2.Attr = PolygonAttr, _temp);


  registerNodeType('star', Star, false);
  return { Star: Star };
}