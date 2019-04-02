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
      findColor = utils.findColor,
      flow = utils.flow;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var PolycurveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolycurveAttr, _Shape$Attr);

    function PolycurveAttr(subject) {
      (0, _classCallCheck3.default)(this, PolycurveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolycurveAttr.__proto__ || (0, _getPrototypeOf2.default)(PolycurveAttr)).call(this, subject));

      _this.setDefault({
        points: [],
        startPoint: null
      });
      return _this;
    }

    (0, _createClass3.default)(PolycurveAttr, [{
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'startPoint',
      set: function set(val) {
        this.clearFlow();
        this.set('startPoint', val);
      }
    }]);
    return PolycurveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype)), _class);
  var Polycurve = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Polycurve, _Shape);

    function Polycurve() {
      (0, _classCallCheck3.default)(this, Polycurve);
      return (0, _possibleConstructorReturn3.default)(this, (Polycurve.__proto__ || (0, _getPrototypeOf2.default)(Polycurve)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polycurve, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get5.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'pointCollision', this).call(this, evt)) {
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

          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get5.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'render', this).call(this, t, ctx);
        var points = this.points;
        var startPoint = this.attr('startPoint');
        var lw = this.attr('lineWidth');

        ctx.fillStyle = this.attr('fillColor');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineCap = this.attr('lineCap');
        ctx.lineWidth = lw;
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');

        var path = new Path2D();

        if (startPoint && startPoint.length === 2) {
          // ctx.translate(...startPoint.map(v => -v + lw));
          path.moveTo.apply(path, (0, _toConsumableArray3.default)(startPoint));
        }

        /* eslint-disable arrow-parens */
        points.forEach(function (point) {
          var _point = (0, _slicedToArray3.default)(point, 6),
              cp1x = _point[0],
              cp1y = _point[1],
              cp2x = _point[2],
              cp2y = _point[3],
              x = _point[4],
              y = _point[5];

          path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        });

        ctx.fill(path);
        ctx.stroke(path);

        this.path = path;

        return ctx;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        var startPoint = this.attr('startPoint');

        var points = startPoint && startPoint.length === 2 ? [].concat((0, _toConsumableArray3.default)(startPoint)) : [];
        var ps = this.points;
        ps.forEach(function (p) {
          return points.push.apply(points, p);
        });

        var minX = 0;
        var maxX = 0;
        var minY = 0;
        var maxY = 0;

        points.forEach(function (point, i) {
          if (i % 2 === 0) {
            if (point < minX) {
              minX = point;
            } else if (point > maxX) {
              maxX = point;
            }
          } else {
            if (point < minY) {
              minY = point;
            } else if (point > maxY) {
              maxY = point;
            }
          }
        });

        return [minX, minY, maxX, maxY];
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + lw * 2;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + lw * 2;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var lineBoundings = this.lineBoundings;

        var _get2 = (0, _get5.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'originalRect', this),
            _get3 = (0, _slicedToArray3.default)(_get2, 4),
            x = _get3[0],
            y = _get3[1],
            w = _get3[2],
            h = _get3[3];

        var rect = [x - lineBoundings[0], y - lineBoundings[1], w, h];

        return rect;
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return false;
      }
    }]);
    return Polycurve;
  }(Shape), _class3.Attr = PolycurveAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);

  registerNodeType('polycurve', Polycurve, false);
  return { Polycurve: Polycurve };
}