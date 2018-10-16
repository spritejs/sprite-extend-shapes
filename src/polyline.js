import ShapePlugin from './shape';

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */
function drawSmoothCurveLine(ctx, points) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} points
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(points, i, a = 0.1, b = 0.1) {
    let x0;
    let y0;
    let x1;
    let y1;

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
    if (i == 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      const [A, B] = getCtrlPoint(points, i - 1);
      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

export default function install({use, utils, registerNodeType}) {
  const {attr, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolylineAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: null,
        color: 'rgba(0,0,0,1)',
        lineWidth: 1,
        lineCap: 'round',
        lineJoin: 'round',
        smooth: false,
        tolerance: 6
      });
    }

    @attr
    set tolerance(val) {
      this.set('tolerance', val);
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
    set lineCap(val) {
      this.clearCache();
      this.set('lineCap', val);
    }

    @attr
    set lineJoin(val) {
      this.clearCache();
      this.set('lineJoin', val);
    }

    @attr
    set smooth(val) {
      this.set('smooth', val);
    }
  }

  class Polyline extends Shape {
    static Attr = PolylineAttr;

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    pointCollision(evt) {
      super.pointCollision(evt);
      const {offsetX, offsetY} = evt;
      const pos = this.attr('points');
      const tolerance = this.attr('tolerance');

      // return this.context.isPointInPath(this.path, offsetX, offsetY);

      return pCollision([offsetX, offsetY], pos, tolerance);

      function pCollision(point, points, dx = 6) {
        // point:[x,y];  points:[[x1,y1],[x2,y2],[x3,y3]]; 表示点 与线points是否重叠
        const [x, y] = point;
        const resP = points.reduce((res, item, ind, arr) => {
          // 两个点放到一起表示一根线，方便后续计算点到该线段距离
          if (ind > 0) {
            res.push([arr[ind - 1], arr[ind]]);
          }
          return res;
        }, []);
        let isPoint = false;
        for (let i = 0; i < resP.length; i += 1) {
          let [[x1, y1], [x2, y2]] = resP[i];
          const [x0, y0] = [x - x1, y - y1];
          [x1, y1] = [x2 - x1, y2 - y1];
          [x2, y2] = [x - x2, y - y2];
          /* eslint-disable no-mixed-operators */
          let dis = Math.abs(x0 * y1 - y0 * x1) / Math.sqrt(x1 ** 2 + y1 ** 2);
          const projection = (x0 * x1 + y0 * y1) * (x1 * x2 + y1 * y2);
          if (projection > 0) {
            dis = Math.min(
              Math.sqrt(x0 ** 2 + y0 ** 2),
              Math.sqrt(x2 ** 2 + y2 ** 2)
            );
          }
          if (dis < dx) {
            isPoint = true;
            break;
          }
        }
        return isPoint;
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points) {
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        drawingContext.beginPath();
        const smooth = this.attr('smooth');

        const path = new Path2D();

        if (smooth) {
          drawSmoothCurveLine(path, this.points);
        } else {
          this.points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
            }
          });
        }

        drawingContext.stroke(path);

        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('polyline', Polyline, false);

  return {Polyline};
}
