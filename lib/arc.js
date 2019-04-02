'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get4 = require('babel-runtime/helpers/get');

var _get5 = _interopRequireDefault(_get4);

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
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var ArcAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(ArcAttr, _Shape$Attr);

    function ArcAttr(subject) {
      (0, _classCallCheck3.default)(this, ArcAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ArcAttr.__proto__ || (0, _getPrototypeOf2.default)(ArcAttr)).call(this, subject));

      _this.setDefault({
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
      return _this;
    }

    // 圆弧起始点


    (0, _createClass3.default)(ArcAttr, [{
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
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype)), _class);
  var Arc = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Arc, _Shape);

    function Arc() {
      (0, _classCallCheck3.default)(this, Arc);
      return (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).apply(this, arguments));
    }

    (0, _createClass3.default)(Arc, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get5.default)(Arc.prototype.__proto__ || (0, _getPrototypeOf2.default)(Arc.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;
          return this.path && this.context.isPointInStroke(this.path, offsetX, offsetY);
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get5.default)(Arc.prototype.__proto__ || (0, _getPrototypeOf2.default)(Arc.prototype), 'render', this).call(this, t, ctx);

        var _center = (0, _slicedToArray3.default)(this.center, 2),
            cx = _center[0],
            cy = _center[1];

        var startAngle = this.startAngle;
        var endAngle = this.endAngle;
        var radius = this.attr('radius');
        var anticlockwise = this.attr('anticlockwise');

        ctx.beginPath();
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
        return ctx;
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return false;
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        var lw = this.attr('lineWidth');

        var r = this.attr('radius');
        return [0, 0, 2 * r, 2 * r];
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _ref2 = [].concat((0, _toConsumableArray3.default)(this.attrSize)),
            width = _ref2[0],
            height = _ref2[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + lw * 1;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + lw * 1;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var lineBoundings = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _get2 = (0, _get5.default)(Arc.prototype.__proto__ || (0, _getPrototypeOf2.default)(Arc.prototype), 'originalRect', this),
            _get3 = (0, _slicedToArray3.default)(_get2, 4),
            x = _get3[0],
            y = _get3[1],
            w = _get3[2],
            h = _get3[3];

        var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
        return rect;
      }
    }, {
      key: 'center',
      get: function get() {
        var lw = this.attr('lineWidth');
        var r = this.attr('radius');
        return [r + 0.5 * lw, r + 0.5 * lw];
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
  }(Shape), _class3.Attr = ArcAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'lineBoundings', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'lineBoundings'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);

  registerNodeType('arc', Arc, false);
  return { Arc: Arc };
}