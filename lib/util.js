"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.sin = exports.cos = undefined;

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.drawSmoothCurveLine = drawSmoothCurveLine;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cos = exports.cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};
var sin = exports.sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};
var round = exports.round = function round(v) {
  return Math.round(v);
};

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */
function drawSmoothCurveLine(ctx, points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;

    var x0 = void 0;
    var y0 = void 0;
    var x1 = void 0;
    var y1 = void 0;

    if (points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if (i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if (i > points.length - 3) {
      var last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  }

  points = points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return { x: x, y: y };
  });

  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      var _getCtrlPoint = getCtrlPoint(i - 1),
          _getCtrlPoint2 = (0, _slicedToArray3.default)(_getCtrlPoint, 2),
          A = _getCtrlPoint2[0],
          B = _getCtrlPoint2[1];

      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}