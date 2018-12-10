import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolycurveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        startPoint: [0, 0],
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

    get isVirtual() {
      return true;
    }

    // FIXME: 碰撞检测
    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        const {offsetX, offsetY} = evt;
        return (
          this.path
          && (this.context.isPointInPath(this.path, offsetX, offsetY)
            || this.context.isPointInStroke(this.path, offsetX, offsetY))
        );
      }
    }

    render(t, ctx) {
      super.render(t, ctx);
      // const startPoint = this.attr('startPoint');
      const points = this.points;

      ctx.fillStyle = this.attr('fillColor');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineCap = this.attr('lineCap');
      ctx.lineWidth = this.attr('lineWidth');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');

      const path = new Path2D();
      // path.moveTo(...startPoint);

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
