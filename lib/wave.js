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

exports.default = install;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};
var sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};
var round = function round(v) {
  return Math.round(v);
};

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var WaveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(WaveAttr, _Shape$Attr);

    function WaveAttr(subject) {
      (0, _classCallCheck3.default)(this, WaveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WaveAttr.__proto__ || (0, _getPrototypeOf2.default)(WaveAttr)).call(this, subject));

      _this.setDefault({
        radius: 50,
        percent: 0.5
      });
      return _this;
    }

    (0, _createClass3.default)(WaveAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'percent',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('percent', val);
      }
    }]);
    return WaveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'percent'), _class.prototype)), _class);
  var Wave = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Wave, _Shape);

    function Wave() {
      (0, _classCallCheck3.default)(this, Wave);
      return (0, _possibleConstructorReturn3.default)(this, (Wave.__proto__ || (0, _getPrototypeOf2.default)(Wave)).apply(this, arguments));
    }

    (0, _createClass3.default)(Wave, [{
      key: 'pointCollision',


      // FIXME: 碰撞检测
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'render', this).call(this, t, ctx);

        var cx = 0,
            cy = 0;

        var radius = this.attr('radius');
        var percent = this.attr('percent');

        ctx.fillStyle = this.attr('fillColor');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineCap = this.attr('lineCap');
        ctx.lineWidth = this.attr('lineWidth');

        var startAngle = 0;
        var endAngle = 0;

        if (percent <= 0.5) {
          startAngle = 0.25 - percent / 2;
          endAngle = startAngle + percent;
        } else if (percent < 1) {
          startAngle = 0 - (percent - 0.5) / 2;
        } else {
          startAngle = 0;
        }
        endAngle = startAngle + percent;
        startAngle *= Math.PI * 2;
        endAngle *= Math.PI * 2;

        ctx.beginPath();

        if (percent < 1) {
          var amplitude = percent * radius / 10 * 4; // 振幅
          var _ref2 = [cx, round(radius * sin(startAngle / 2))],
              x = _ref2[0],
              y = _ref2[1];

          var cp1 = [cx - radius * cos(startAngle / 2), y];
          var cp2 = [(cx - radius * cos(startAngle / 2)) / 2, y + amplitude];
          var cp3 = [radius * cos(startAngle / 2) / 2, y - amplitude];
          var cp4 = [radius * cos(startAngle / 2), y];

          ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], x, y);
          ctx.bezierCurveTo(x, y, cp3[0], cp3[1], cp4[0], cp4[1]);
        }

        // 绘制圆弧
        ctx.arc(cx, cy, radius, 0 - (endAngle - Math.PI) / 2, (endAngle - Math.PI) / 2 + Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        return ctx;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Wave;
  }(Shape), _class2.Attr = WaveAttr, _temp);

  registerNodeType('wave', Wave, false);
  return { Wave: Wave };
}