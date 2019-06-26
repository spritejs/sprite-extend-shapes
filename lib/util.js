"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSmoothCurveLine = makeSmoothCurveLine;
exports.drawSmoothCurveLine = drawSmoothCurveLine;
exports.angleOf = angleOf;
exports.pointsEqual = pointsEqual;
exports.round = exports.sin = exports.cos = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};

exports.cos = cos;

var sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};

exports.sin = sin;

var round = function round(v) {
  return Math.round(v);
};
/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} points 绘制点
 */


exports.round = round;

function makeSmoothCurveLine(points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
    var x0;
    var y0;
    var x1;
    var y1;

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

    return [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }];
  }

  points = points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return {
      x: x,
      y: y
    };
  });
  var d = '';
  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      d += "M".concat(point.x, " ").concat(point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      d += "L".concat(point.x, " ").concat(point.y);
    } else {
      var _getCtrlPoint = getCtrlPoint(i - 1),
          _getCtrlPoint2 = (0, _slicedToArray2.default)(_getCtrlPoint, 2),
          A = _getCtrlPoint2[0],
          B = _getCtrlPoint2[1];

      d += "C".concat([A.x, A.y, B.x, B.y, point.x, point.y].join(' '));
    }
  });
  return d;
}
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
    var x0;
    var y0;
    var x1;
    var y1;

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

    return [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }];
  }

  points = points.map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return {
      x: x,
      y: y
    };
  });
  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      var _getCtrlPoint3 = getCtrlPoint(i - 1),
          _getCtrlPoint4 = (0, _slicedToArray2.default)(_getCtrlPoint3, 2),
          A = _getCtrlPoint4[0],
          B = _getCtrlPoint4[1];

      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

function angleOf(v1) {
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 0];
  var ang = Math.atan2(v1[1], v1[0]) - Math.atan2(v2[1], v2[0]);
  if (ang < 0.0) ang += 2.0 * Math.PI;
  return ang;
}

function pointsEqual(p1, p2) {
  if (p1.length !== p2.length) return false;

  for (var i = 0; i < p1.length; i++) {
    if (p1[i][0] !== p2[i][0] || p1[i][1] !== p2[i][1]) return false;
  }

  return true;
}