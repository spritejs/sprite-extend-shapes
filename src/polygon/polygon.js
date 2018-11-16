import ShapePlugin from '../shape';

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */
function drawSmoothCurveLine(ctx, points, drawingContext) {
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

    return [{x: x0, y: y0}, {x: x1, y: y1}];
  }

  points = points.map(([x, y]) => ({x, y}));

  points.forEach((point, i) => {
    if (i === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      const [A, B] = getCtrlPoint(i - 1);
      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolygonAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        smooth: null,
      });
    }

    @attr
    set smooth(val) {
      this.set('smooth', val);
    }

    @attr
    set points(val) {
      this.clearCache();
      this.clearFlow();
      this.set('points', val);
    }

    @attr
    set color(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('color', val);
    }

    @attr
    set lineWidth(val) {
      this.clearCache();
      this.set('lineWidth', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('fillColor', val);
    }
  }

  class Polygon extends Shape {
    static Attr = PolygonAttr;

    // get lineBoundings() {
    //   const bounds = [0, 0, 0, 0];
    //   const points = this.points;
    //   points.forEach(([x, y]) => {
    //     bounds[0] = Math.min(x, bounds[0]);
    //     bounds[1] = Math.min(y, bounds[1]);
    //     bounds[2] = Math.max(x, bounds[2]);
    //     bounds[3] = Math.max(y, bounds[3]);
    //   });
    //   return bounds;
    // }

    // @flow
    // get contentSize() {
    //   const bounds = this.lineBoundings;
    //   const lw = this.attr('lineWidth') || 0;
    //   const width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
    //   const height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;

    //   return [width, height].map(Math.ceil);
    // }

    // @flow
    // get originalRect() {
    //   const bounds = this.lineBoundings;
    //   const lw = this.attr('lineWidth') || 0;
    //   const [width, height] = this.contentSize;
    //   const [anchorX, anchorY] = this.attr('anchor');

    //   const rect = [0, 0, width, height];
    //   const offsetX = Math.min(0, bounds[0]);
    //   const offsetY = Math.min(0, bounds[1]);
    //   rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
    //   rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);

    //   return rect;
    // }

    get lineBoundings() {
      const bounds = [0, 0, 0, 0];
      const points = this.points;
      points.forEach(([x, y]) => {
        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);
        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      }

      return [width, height].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      const [width, height] = this.offsetSize;
      const [anchorX, anchorY] = this.attr('anchor');

      const rect = [0, 0, width, height];
      const offsetX = Math.min(0, bounds[0]);
      const offsetY = Math.min(0, bounds[1]);

      rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
      rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
      return rect;
    }

    get points() {
      return this.attr('points');
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;
        return (
          this.context.isPointInPath(this.path, offsetX, offsetY)
          || this.context.isPointInStroke(this.path, offsetX, offsetY)
        );
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points.length) {
        const bounds = this.lineBoundings;
        const lw = this.attr('lineWidth');
        drawingContext.translate(
          -Math.min(0, bounds[0]) + lw,
          -Math.min(0, bounds[1]) + lw
        );
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        // drawingContext.beginPath();
        const path = new Path2D();
        let smooth = this.attr('smooth');
        const points = this.points.slice(0, this.points.length);
        if (smooth) {
          if (!smooth.length) {
            smooth = [0, points.length - 1];
          }
        }
        // 绘制光滑曲线（直线）
        if (!smooth) {
          points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
            }
          });
        } else {
          // const smoothStart = smooth[0];
          // const smoothEnd = smooth[1];
          // // const beforeSmoothPoints = points.slice(0, smoothStart);
          // for (let i = 0; i < smoothStart; i++) {
          //   if (i === 0) {
          //     path.moveTo(...points[0]);
          //   } else {
          //     path.lineTo(...points[i]);
          //   }
          // }
          // const smoothPoints = points.slice(smoothStart, smoothEnd + 1);
          drawSmoothCurveLine(path, points);

          // for (let i = smoothEnd + 1; i < points.length; i++) {
          //   path.lineTo(points[i][0], points[i][1]);
          // }
        }
        path.closePath();
        drawingContext.fill(path);
        drawingContext.stroke(path);
        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('polygon', Polygon, false);
  return {Polygon};
}
