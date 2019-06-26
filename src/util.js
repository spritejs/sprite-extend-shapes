export const cos = angle => Number(Math.cos(angle).toFixed(15));
export const sin = angle => Number(Math.sin(angle).toFixed(15));
export const round = v => Math.round(v);

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} points 绘制点
 */
export function makeSmoothCurveLine(points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i, a = 0.1, b = 0.1) {
    let x0;
    let y0;
    let x1;
    let y1;

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
      const last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  }

  points = points.map(([x, y]) => ({ x, y }));

  let d = '';
  points.forEach((point, i) => {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      d += `M${point.x} ${point.y}`;
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      d += `L${point.x} ${point.y}`;
    } else {
      const [A, B] = getCtrlPoint(i - 1);
      d += `C${[A.x, A.y, B.x, B.y, point.x, point.y].join(' ')}`;
    }
  });
  return d;
}

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */
export function drawSmoothCurveLine(ctx, points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i, a = 0.1, b = 0.1) {
    let x0;
    let y0;
    let x1;
    let y1;

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
      const last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  }

  points = points.map(([x, y]) => ({ x, y }));

  points.forEach((point, i) => {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      const [A, B] = getCtrlPoint(i - 1);
      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

export function angleOf(v1, v2 = [1, 0]) {
  let ang = Math.atan2(v1[1], v1[0]) - Math.atan2(v2[1], v2[0]);
  if(ang < 0.0) ang += 2.0 * Math.PI;
  return ang;
}

export function pointsEqual(p1, p2) {
  if(p1.length !== p2.length) return false;
  for(let i = 0; i < p1.length; i++) {
    if(p1[i][0] !== p2[i][0] || p1[i][1] !== p2[i][1]) return false;
  }
  return true;
}