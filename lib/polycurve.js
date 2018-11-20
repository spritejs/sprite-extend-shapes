'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

  var PolycurveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolycurveAttr, _Shape$Attr);

    function PolycurveAttr(subject) {
      (0, _classCallCheck3.default)(this, PolycurveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolycurveAttr.__proto__ || (0, _getPrototypeOf2.default)(PolycurveAttr)).call(this, subject));

      _this.setDefault({
        points: [],
        startPoint: [0, 0]
      });
      return _this;
    }

    (0, _createClass3.default)(PolycurveAttr, [{
      key: 'points',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'startPoint',
      set: function set(val) {
        this.clearCache();
        this.clearFlow();
        this.set('startPoint', val);
      }
    }]);
    return PolycurveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype)), _class);
  var Polycurve = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Polycurve, _Shape);

    function Polycurve() {
      (0, _classCallCheck3.default)(this, Polycurve);
      return (0, _possibleConstructorReturn3.default)(this, (Polycurve.__proto__ || (0, _getPrototypeOf2.default)(Polycurve)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polycurve, [{
      key: 'pointCollision',


      // FIXME: 碰撞检测
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'render', this).call(this, t, ctx);
        var startPoint = this.attr('startPoint');
        var points = this.points;

        ctx.fillStyle = this.attr('fillColor');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineCap = this.attr('lineCap');
        ctx.lineWidth = this.attr('lineWidth');
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');

        var path = new Path2D();
        path.moveTo.apply(path, (0, _toConsumableArray3.default)(startPoint));

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
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Polycurve;
  }(Shape), _class2.Attr = PolycurveAttr, _temp);

  registerNodeType('polycurve', Polycurve, false);
  return { Polycurve: Polycurve };
}