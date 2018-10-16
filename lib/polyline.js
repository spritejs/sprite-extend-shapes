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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = install;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function drawSmoothCurve(ctx, points) {
  ctx.moveTo.apply(ctx, (0, _toConsumableArray3.default)(points[0]));

  for (var _i = 1; _i < points.length - 2; _i++) {
    var x = (points[_i][0] + points[_i + 1][0]) / 2;
    var y = (points[_i][1] + points[_i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[_i][0], points[_i][1], x, y);
  }

  // curve through the last two points
  var i = points.length - 3;
  ctx.quadraticCurveTo(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
}

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      parseColorString = utils.parseColorString,
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
        color: 'rgba(0,0,0,1)',
        lineWidth: 1,
        lineCap: 'round',
        lineJoin: 'round',
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
        this.clearCache();
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.clearCache();
        this.set('color', val);
      }
    }, {
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
      key: 'smooth',
      set: function set(val) {
        this.set('smooth', val);
      }
    }]);
    return PolylineAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'tolerance', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'tolerance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'smooth'), _class.prototype)), _class);
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

        var pos = this.attr('points');
        var tolerance = this.attr('tolerance');
        return pCollision([offsetX, offsetY], pos, tolerance);

        function pCollision(point, points) {
          var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

          // point:[x,y];  points:[[x1,y1],[x2,y2],[x3,y3]]; 表示点 与线points是否重叠
          var _point = (0, _slicedToArray3.default)(point, 2),
              x = _point[0],
              y = _point[1];

          var resP = points.reduce(function (res, item, ind, arr) {
            // 两个点放到一起表示一根线，方便后续计算点到该线段距离
            if (ind > 0) {
              res.push([arr[ind - 1], arr[ind]]);
            }
            return res;
          }, []);
          var isPoint = false;
          for (var i = 0; i < resP.length; i += 1) {
            var _resP$i = (0, _slicedToArray3.default)(resP[i], 2),
                _resP$i$ = (0, _slicedToArray3.default)(_resP$i[0], 2),
                x1 = _resP$i$[0],
                y1 = _resP$i$[1],
                _resP$i$2 = (0, _slicedToArray3.default)(_resP$i[1], 2),
                x2 = _resP$i$2[0],
                y2 = _resP$i$2[1];

            var x0 = x - x1,
                y0 = y - y1;
            var _ref2 = [x2 - x1, y2 - y1];
            x1 = _ref2[0];
            y1 = _ref2[1];

            /* eslint-disable no-mixed-operators */
            var _ref3 = [x - x2, y - y2];
            x2 = _ref3[0];
            y2 = _ref3[1];
            var dis = Math.abs(x0 * y1 - y0 * x1) / Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
            var projection = (x0 * x1 + y0 * y1) * (x1 * x2 + y1 * y2);
            if (projection > 0) {
              dis = Math.min(Math.sqrt(Math.pow(x0, 2) + Math.pow(y0, 2)), Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)));
            }
            if (dis < dx) {
              isPoint = true;
              break;
            }
          }
          return isPoint;
        }
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'render', this).call(this, t, drawingContext);
        if (this.points) {
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.lineJoin = this.attr('lineJoin');
          drawingContext.lineCap = this.attr('lineCap');
          drawingContext.lineWidth = this.attr('lineWidth');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');
          drawingContext.beginPath();
          var smooth = this.attr('smooth');

          var path = new Path2D();

          if (smooth) {
            drawSmoothCurve(path, this.points);
          } else {
            this.points.forEach(function (point, i) {
              if (i === 0) {
                path.moveTo.apply(path, (0, _toConsumableArray3.default)(point));
              } else {
                path.lineTo.apply(path, (0, _toConsumableArray3.default)(point));
              }
            });
          }

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