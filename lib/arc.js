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

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var ArcAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(ArcAttr, _Shape$Attr);

    function ArcAttr(subject) {
      (0, _classCallCheck3.default)(this, ArcAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ArcAttr.__proto__ || (0, _getPrototypeOf2.default)(ArcAttr)).call(this, subject));

      _this.setDefault({
        center: [0, 0],
        startPoint: [0, 0],
        angel: 0,
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
      return _this;
    }

    // 圆弧的圆心


    (0, _createClass3.default)(ArcAttr, [{
      key: 'center',
      set: function set(val) {
        this.clearFlow();
        this.set('center', val);
      }

      // 圆弧起始点

    }, {
      key: 'startPoint',
      set: function set(point) {
        this.clearFlow();
        this.set('startPoint', point);
      }

      // 旋转角度

    }, {
      key: 'angle',
      set: function set(angle) {
        this.clearFlow();
        this.set('angle', angle);
      }
    }, {
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('endAngle', val);
      }

      // 旋转方向

    }, {
      key: 'anticlockwise',
      set: function set(val) {
        this.clearFlow();
        this.set('anticlockwise', val);
      }
    }]);
    return ArcAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype)), _class);
  var Arc = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Arc, _Shape);

    function Arc() {
      (0, _classCallCheck3.default)(this, Arc);
      return (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).apply(this, arguments));
    }

    (0, _createClass3.default)(Arc, [{
      key: 'render',
      value: function render(t, ctx) {
        if (this.attr('center')) {
          var _attr = this.attr('center'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              cx = _attr2[0],
              cy = _attr2[1];

          var startAngle = this.startAngle;
          var endAngle = this.endAngle;
          var radius = this.attr('radius');

          // const [sx, sy] = this.attr('startPoint');
          // const radius = getDist([cx, cy], [sx, sy]);
          var anticlockwise = this.attr('anticlockwise');
          // const angle = this.attr('angle');
          // const startAngle = getRotationAngle([cx, cy], [sx, sy]);
          // const endAngle = anticlockwise
          //   ? startAngle - angle
          //   : startAngle + angle;

          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.lineWidth = this.attr('lineWidth');
          ctx.strokeStyle = findColor(ctx, this, 'color');
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');

          var path = new Path2D();
          path.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
          ctx.stroke(path);
          this.path = path;
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
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }]);
    return Arc;
  }(Shape), _class2.Attr = ArcAttr, _temp);

  registerNodeType('arc', Arc, false);
  return { Arc: Arc };
}