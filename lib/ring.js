'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var RingAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(RingAttr, _Shape$Attr);

    function RingAttr(subject) {
      (0, _classCallCheck3.default)(this, RingAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (RingAttr.__proto__ || (0, _getPrototypeOf2.default)(RingAttr)).call(this, subject));

      _this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        color: 'rgba(0,0,0,1)',
        fillColor: 'rgba(0, 0, 0, 1)'
      });
      return _this;
    }

    // 内圆半径


    (0, _createClass3.default)(RingAttr, [{
      key: 'innerRadius',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('innerRadius', val);
      }

      // 外圆半径

    }, {
      key: 'outerRadius',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('outerRadius', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('endAngle', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('color', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('fillColor', val);
      }
    }]);
    return RingAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'outerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'outerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);


  function isPointCollision(ring, x, y) {
    var _ref2 = [ring.attr('outerRadius'), ring.attr('innerRadius')],
        r1 = _ref2[0],
        r2 = _ref2[1],
        width = ring.contentSize[0];
    var bounds = ring.boundingRect,
        cx = bounds[0] + bounds[2] / 2,
        cy = bounds[1] + bounds[3] / 2;


    var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    return distance >= width / 2 && distance <= width / 2 + r1 - r2;
  }

  var Ring = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Ring, _Shape);

    function Ring() {
      (0, _classCallCheck3.default)(this, Ring);
      return (0, _possibleConstructorReturn3.default)(this, (Ring.__proto__ || (0, _getPrototypeOf2.default)(Ring)).apply(this, arguments));
    }

    (0, _createClass3.default)(Ring, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;


          var r = this.attr('outerRadius');
          var r0 = this.attr('innerRadius');
          var startAngle = this.attr('startAngle');
          var endAngle = this.attr('endAngle');

          var d = Math.sqrt(Math.pow(offsetX - r, 2) + Math.pow(offsetY - r, 2));
          var angle = Math.atan2(offsetY - r, offsetX - r);
          if (angle < 0) {
            angle = Math.PI * 2 + angle;
          }

          return d >= r0 && d <= r && angle >= startAngle && angle <= endAngle;
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'render', this).call(this, t, ctx);
        var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
        var outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));

        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
        var startAngle = isCircle ? 0 : this.startAngle;
        var endAngle = isCircle ? Math.PI * 2 : this.endAngle;
        ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.fillStyle = findColor(ctx, this, 'fillColor');
        ctx.miterLimit = 3;
        ctx.lineWidth = this.attr('lineWidth');
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');
        ctx.beginPath();

        ctx.arc(outerRadius, outerRadius, outerRadius, startAngle, endAngle, false);
        if (endAngle - startAngle === Math.PI * 2) {
          ctx.moveTo(outerRadius + innerRadius, outerRadius);
        }
        ctx.arc(outerRadius, outerRadius, innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        return ctx;
      }
    }, {
      key: 'lineBoundings',


      // 边界依赖于最大圆
      get: function get() {
        var radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
        return [0, 0, 2 * radius, 2 * radius];
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
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attr = this.attr('size'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            width = _attr2[0],
            height = _attr2[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
            width = _offsetSize[0],
            height = _offsetSize[1];

        var _attr3 = this.attr('anchor'),
            _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
            anchorX = _attr4[0],
            anchorY = _attr4[1];

        var rect = [0, 0, width, height];
        var offsetX = Math.min(0, bounds[0]);
        var offsetY = Math.min(0, bounds[1]);

        rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
        rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
        return rect;
      }
    }]);
    return Ring;
  }(Shape), _class3.Attr = RingAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ring', Ring);
  return { Ring: Ring };
}

// export default function install({Sprite, utils, registerNodeType}) {
//   function isPointCollision(circle, x, y) {
//     const [r1, r2] = circle.attr('radius'),
//       width = circle.contentSize[0];

//     const bounds = circle.boundingRect,
//       [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];

//     const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
//     return distance >= width / 2 && distance <= width / 2 + r1 - r2;
//   }
//   class Ring extends Sprite {
//     pointCollision(evt) {
//       if (super.pointCollision(evt)) {
//         const {offsetX, offsetY} = evt;
//         return isPointCollision(this, offsetX, offsetY);
//       }
//     }
//   }

//   Ring.defineAttributes({
//     init(attr) {
//       attr.setDefault(
//         {
//           radius: [0, 0],
//           color: 'black'
//         },
//         {
//           borderRadius() {
//             const [r1, r2] = this.radius;
//             return (r1 + r2) / 2;
//           },
//           width() {
//             const r2 = this.radius[1];
//             return 2 * r2;
//           },
//           height() {
//             const r2 = this.radius[1];
//             return 2 * r2;
//           },
//           border() {
//             const [r1, r2] = this.radius;
//             return {width: r1 - r2, color: this.color, style: 'solid'};
//           }
//         }
//       );
//     },
//     radius(attr, val) {
//       // 定义半径属性 [外环，内环]
//       attr.clearCache();
//       if (!Array.isArray(val)) {
//         val = [val, 0];
//       }
//       attr.set('radius', val);
//     },
//     color(attr, val) {
//       attr.clearCache();
//       attr.set('color', val);
//     }
//   });

//   registerNodeType('ring', Ring);

//   return {Ring};
// }