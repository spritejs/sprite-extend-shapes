import ShapePlugin from './shape';

function drawSmoothCurve(ctx, points) {
  ctx.moveTo(...points[0]);

  for (let i = 1; i < points.length - 2; i++) {
    const x = (points[i][0] + points[i + 1][0]) / 2;
    const y = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], x, y);
  }

  // curve through the last two points
  const i = points.length - 3;
  ctx.quadraticCurveTo(
    points[i][0],
    points[i][1],
    points[i + 1][0],
    points[i + 1][1]
  );
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
          drawSmoothCurve(path, this.points);
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
