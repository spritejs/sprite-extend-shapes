'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _util = require('./util');

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

  var PolylineAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolylineAttr, _Shape$Attr);

    function PolylineAttr(subject) {
      (0, _classCallCheck3.default)(this, PolylineAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolylineAttr.__proto__ || (0, _getPrototypeOf2.default)(PolylineAttr)).call(this, subject));

      _this.setDefault({
        points: null,
        close: false,
        smooth: false,
        tolerance: 6
      });
      return _this;
    }

    (0, _createClass3.default)(PolylineAttr, [{
      key: 'tolerance',
      set: function set(val) {
        this.set('tolerance', val);
      }
    }, {
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'smooth',
      set: function set(val) {
        this.set('smooth', val);
      }
    }, {
      key: 'close',
      set: function set(val) {
        this.set('close', val);
      }
    }]);
    return PolylineAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'tolerance', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'tolerance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'close', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'close'), _class.prototype)), _class);
  var Polyline = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Polyline, _Shape);

    function Polyline() {
      (0, _classCallCheck3.default)(this, Polyline);
      return (0, _possibleConstructorReturn3.default)(this, (Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polyline, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'pointCollision', this).call(this, evt);
        var offsetX = evt.offsetX,
            offsetY = evt.offsetY;

        var cacheLineWidth = this.context.lineWidth; // 获取当前画布的lineWidth宽度
        var tolerance = this.attr('tolerance'); // 线条点击的容差像素值，默认6px
        this.context.lineWidth = this.attr('lineWidth') + tolerance; // 点击范围为线条加上容差值，方便碰撞检测
        var res = false;
        if (this.path && (this.context.isPointInStroke(this.path, offsetX, offsetY) || this.attr('close') && this.context.isPointInPath(this.path, offsetX, offsetY)) // 如果是闭合曲线，判断是否点击到闭合曲线内部
        ) {
            res = true;
          }
        this.context.lineWidth = cacheLineWidth; // 还原当前画布的lineWidth宽度
        return res;
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'render', this).call(this, t, drawingContext);

        if (this.points) {
          drawingContext.fillStyle = this.attr('fillColor');
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.lineJoin = this.attr('lineJoin');
          drawingContext.lineCap = this.attr('lineCap');
          drawingContext.lineWidth = this.attr('lineWidth');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');

          var smooth = this.attr('smooth');
          var path = new Path2D();

          if (smooth) {
            (0, _util.drawSmoothCurveLine)(path, this.points, drawingContext);
          } else {
            this.points.forEach(function (point, i) {
              if (i === 0) {
                path.moveTo.apply(path, (0, _toConsumableArray3.default)(point));
              } else {
                path.lineTo.apply(path, (0, _toConsumableArray3.default)(point));
              }
            });
          }

          if (this.attr('close')) {
            path.closePath();
          }

          drawingContext.fill(path);
          drawingContext.stroke(path);
          this.path = path;
        }
        return drawingContext;
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
    return Polyline;
  }(Shape), _class2.Attr = PolylineAttr, _temp);

  registerNodeType('polyline', Polyline, false);
  return { Polyline: Polyline };
}