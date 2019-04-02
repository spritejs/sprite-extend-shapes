'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _shape = require('../shape');

var _shape2 = _interopRequireDefault(_shape);

var _util = require('../util');

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

  var PolygonAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolygonAttr, _Shape$Attr);

    function PolygonAttr(subject) {
      (0, _classCallCheck3.default)(this, PolygonAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

      _this.setDefault({
        points: [],
        smooth: null
      });
      return _this;
    }

    (0, _createClass3.default)(PolygonAttr, [{
      key: 'smooth',
      set: function set(val) {
        this.set('smooth', val);
      }
    }, {
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.set('color', val);
      }
    }, {
      key: 'lineWidth',
      set: function set(val) {
        this.set('lineWidth', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.set('fillColor', val);
      }
    }]);
    return PolygonAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);
  var Polygon = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Polygon, _Shape);

    function Polygon() {
      (0, _classCallCheck3.default)(this, Polygon);
      return (0, _possibleConstructorReturn3.default)(this, (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polygon, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Polygon.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polygon.prototype), 'pointCollision', this).call(this, evt)) {
          var _evt$offsetX = evt.offsetX,
              offsetX = _evt$offsetX === undefined ? 0 : _evt$offsetX,
              _evt$offsetY = evt.offsetY,
              offsetY = _evt$offsetY === undefined ? 0 : _evt$offsetY;

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;
          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(Polygon.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polygon.prototype), 'render', this).call(this, t, drawingContext);
        if (this.points.length) {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');
          drawingContext.translate(-Math.min(0, bounds[0]) + lw / 2, -Math.min(0, bounds[1]) + lw / 2);
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
          drawingContext.miterLimit = 3;
          drawingContext.lineWidth = this.attr('lineWidth');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');
          drawingContext.beginPath();
          var path = new Path2D();
          var smooth = this.attr('smooth');
          var points = this.points.slice(0, this.points.length);
          if (smooth && !smooth.length) {
            smooth = [0, points.length - 1];
          }
          // 绘制光滑曲线（直线）
          if (!smooth) {
            points.forEach(function (point, i) {
              if (i === 0) {
                path.moveTo.apply(path, (0, _toConsumableArray3.default)(point));
              } else {
                path.lineTo.apply(path, (0, _toConsumableArray3.default)(point));
              }
            });
          } else {
            if (Object.prototype.toString.call(smooth[0]) !== '[object Array]') {
              // 如果不是多维数组，转成多维
              smooth = [smooth];
            }
            var startPos = points[0];
            var endPos = points[points.length - 1];
            if (startPos[0] !== endPos[0] || startPos[1] !== endPos[1]) {
              points.push(points[0]);
            }
            var subIndex = 0;
            smooth.forEach(function (arr, iind) {
              var smoothStart = arr[0];
              var smoothEnd = arr[1];
              for (var i = subIndex; i < smoothStart; i++) {
                if (i === 0) {
                  // 如果是所有线条的起始点
                  path.moveTo.apply(path, (0, _toConsumableArray3.default)(points[0]));
                } else {
                  // 如果是转换点
                  path.lineTo.apply(path, (0, _toConsumableArray3.default)(points[i]));
                }
              }
              var smoothPoints = points.slice(smoothStart, smoothEnd + 1);
              (0, _util.drawSmoothCurveLine)(path, smoothPoints, smoothStart);
              subIndex = smoothEnd;
            });
            for (var i = subIndex; i < points.length - 1; i++) {
              // 如果绘图未绘制到最后一个点
              path.lineTo(points[i][0], points[i][1]);
            }
          }

          path.closePath();
          drawingContext.closePath();
          drawingContext.fill(path);
          drawingContext.stroke(path);
          this.path = path;
        }
        return drawingContext;
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        var lw = this.attr('lineWidth');

        var bounds = [0, 0, 0, 0];
        var points = this.points;

        points.forEach(function (_ref2) {
          var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
              x = _ref3[0],
              y = _ref3[1];

          bounds[0] = Math.min(x, bounds[0]);
          bounds[1] = Math.min(y, bounds[1]);

          bounds[2] = Math.max(x, bounds[2]);
          bounds[3] = Math.max(y, bounds[3]);
        });
        return bounds;
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        width = bounds[2] - Math.min(0, bounds[0]) + lw;
        height = bounds[3] - Math.min(0, bounds[1]) + lw;
        return [width, height].map(Math.ceil);
      }

      // @flow
      // get originalRect() {
      //   // const bounds = this.lineBoundings;
      //   // const lw = this.attr('lineWidth');
      //   // const [width, height] = this.offsetSize;
      //   // const [anchorX, anchorY] = this.attr('anchor');
      //   // const rect = [0, 0, width, height];
      //   // const offsetX = Math.min(0, bounds[0]);
      //   // const offsetY = Math.min(0, bounds[1]);
      //   // rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
      //   // rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
      //   // return rect;
      //   const lineBoundings = this.lineBoundings;
      //   const [x, y, w, h] = super.originalRect;
      //   const rect = [x, y, w, h];

      //   return rect;
      // }

    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }]);
    return Polygon;
  }(Shape), _class3.Attr = PolygonAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);

  registerNodeType('polygon', Polygon, false);
  return { Polygon: Polygon };
}