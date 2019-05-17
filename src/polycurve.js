import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor, flow} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolycurveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        startPoint: null
      });
    }

    @attr
    set points(val) {
      this.clearFlow();
      this.set('points', val);
    }

    @attr
    set startPoint(val) {
      this.clearFlow();
      this.set('startPoint', val);
    }
  }

  class Polycurve extends Shape {
    static Attr = PolycurveAttr;

    get points() {
      return this.attr('points');
    }

    get lineBoundings() {
      const startPoint = this.attr('startPoint');

      let points = startPoint && startPoint.length === 2 ? [...startPoint] : [];
      const ps = this.points;
      ps.forEach(p => points.push.apply(points, p));

      let minX = 0;
      let maxX = 0;
      let minY = 0;
      let maxY = 0;

      points.forEach((point, i) => {
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

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + lw * 2;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + lw * 2;
      }

      return [width, height].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const lineBoundings = this.lineBoundings;

      const [x, y, w, h] = super.originalRect;
      const rect = [x - lineBoundings[0], y - lineBoundings[1], w, h];

      return rect;
    }

    get isVirtual() {
      return false;
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;

        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        return (
          this.path &&
          (this.context.isPointInPath(this.path, offsetX, offsetY) ||
            this.context.isPointInStroke(this.path, offsetX, offsetY))
        );
      }
    }

    render(t, ctx) {
      super.render(t, ctx);
      const points = this.points;
      const startPoint = this.attr('startPoint');
      const lw = this.attr('lineWidth');

      ctx.lineCap = this.attr('lineCap');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineWidth = lw;
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.fillStyle = this.attr('fillColor');
      ctx.strokeStyle = findColor(ctx, this, 'strokeColor');

      const path = new Path2D();

      if (startPoint && startPoint.length === 2) {
        // ctx.translate(...startPoint.map(v => -v + lw));
        path.moveTo(...startPoint);
      }

      /* eslint-disable arrow-parens */
      points.forEach(point => {
        const [cp1x, cp1y, cp2x, cp2y, x, y] = point;
        path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      });

      ctx.fill(path);
      ctx.stroke(path);

      this.path = path;

      return ctx;
    }
  }
  registerNodeType('polycurve', Polycurve, false);
  return {Polycurve};
}
