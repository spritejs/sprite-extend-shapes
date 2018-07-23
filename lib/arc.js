'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

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

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _desc, _value, _class, _class2, _temp;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr,
    parseColorString = _spriteCore.utils.parseColorString,
    findColor = _spriteCore.utils.findColor;


var getDist = function getDist(p1, p2) {
  var _p = (0, _slicedToArray3.default)(p1, 2),
      x1 = _p[0],
      y1 = _p[1];

  var _p2 = (0, _slicedToArray3.default)(p2, 2),
      x2 = _p2[0],
      y2 = _p2[1];

  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

var getRotationAngle = function getRotationAngle(point, center) {
  var _point = (0, _slicedToArray3.default)(point, 2),
      px = _point[0],
      py = _point[1];

  var _center = (0, _slicedToArray3.default)(center, 2),
      cx = _center[0],
      cy = _center[1];

  return Math.atan2(1, 0) - Math.atan2(cx - px, cy - py);
};

var ArcAttr = (_class = function (_Shape$Attr) {
  (0, _inherits3.default)(ArcAttr, _Shape$Attr);

  function ArcAttr(subject) {
    (0, _classCallCheck3.default)(this, ArcAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ArcAttr.__proto__ || (0, _getPrototypeOf2.default)(ArcAttr)).call(this, subject));

    _this.setDefault({
      center: null,
      startPoint: [0, 0],
      angel: 0,
      anticlockwise: false,
      color: '#000',
      lineWidth: 1
    });
    return _this;
  }

  // 圆弧的圆心


  (0, _createClass3.default)(ArcAttr, [{
    key: 'center',
    set: function set(val) {
      this.set('center', val);
    }

    // 圆弧起始点

  }, {
    key: 'startPoint',
    set: function set(point) {
      this.set('startPoint', point);
    }

    // 旋转角度

  }, {
    key: 'angle',
    set: function set(angle) {
      this.set('angle', angle);
    }

    // 旋转方向

  }, {
    key: 'anticlockwise',
    set: function set(val) {
      this.set('anticlockwise', val);
    }

    // 线条颜色

  }, {
    key: 'color',
    set: function set(val) {
      val = parseColorString(val);
      this.set('color', val);
    }

    // 线宽

  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.set('lineWidth', val);
    }
  }]);
  return ArcAttr;
}(_shape2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype)), _class);
var Arc = (_temp = _class2 = function (_Shape) {
  (0, _inherits3.default)(Arc, _Shape);

  function Arc() {
    (0, _classCallCheck3.default)(this, Arc);
    return (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).apply(this, arguments));
  }

  (0, _createClass3.default)(Arc, [{
    key: 'render',
    value: function render(t, ctx) {
      (0, _get3.default)(Arc.prototype.__proto__ || (0, _getPrototypeOf2.default)(Arc.prototype), 'render', this).call(this, t, ctx);
      if (this.attr('center')) {
        var _attr = this.attr('center'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            cx = _attr2[0],
            cy = _attr2[1];

        var _attr3 = this.attr('startPoint'),
            _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
            sx = _attr4[0],
            sy = _attr4[1];

        var radius = getDist([cx, cy], [sx, sy]);
        var anticlockwise = this.attr('anticlockwise');
        var angle = this.attr('angle');
        var startAngle = getRotationAngle([cx, cy], [sx, sy]);
        var endAngle = anticlockwise ? startAngle - angle : startAngle + angle;

        ctx.lineWidth = this.attr('lineWidth');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      } else {
        console.error('center must be given when drawing an arc!');
      }
      return ctx;
    }
  }, {
    key: 'isVirtual',
    get: function get() {
      return true;
    }
  }]);
  return Arc;
}(_shape2.default), _class2.Attr = ArcAttr, _temp);
exports.default = Arc;