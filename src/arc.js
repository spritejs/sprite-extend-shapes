import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class ArcAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
    }

    // 圆弧起始点
    @attr
    set startPoint(point) {
      this.clearFlow();
      this.set('startPoint', point);
    }

    // 旋转角度
    @attr
    set angle(angle) {
      this.clearFlow();
      this.set('angle', angle);
    }

    @attr
    set radius(val) {
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set startAngle(val) {
      this.clearFlow();
      this.set('startAngle', val);
    }

    @attr
    set endAngle(val) {
      this.clearFlow();
      this.set('endAngle', val);
    }

    // 旋转方向
    @attr
    set anticlockwise(val) {
      this.clearFlow();
      this.set('anticlockwise', val);
    }
  }

  class Arc extends Shape {
    static Attr = ArcAttr;

    get isVirtual() {
      return false;
    }

    @flow
    get lineBoundings() {
      const lw = this.attr('lineWidth');

      const r = this.attr('radius');
      return [0, 0, 2 * r, 2 * r];
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = [...this.attrSize];

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + lw * 1;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + lw * 1;
      }

      return [width, height].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const lineBoundings = this.lineBoundings;
      const lw = this.attr('lineWidth');

      const [x, y, w, h] = super.originalRect;
      const rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
      return rect;
    }

    get center() {
      const lw = this.attr('lineWidth');
      const r = this.attr('radius');
      return [r + 0.5 * lw, r + 0.5 * lw];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;
        return (
          this.path && this.context.isPointInStroke(this.path, offsetX, offsetY)
        );
      }
    }

    render(t, ctx) {
      super.render(t, ctx);

      const [cx, cy] = this.center;

      const startAngle = this.startAngle;
      const endAngle = this.endAngle;
      const radius = this.attr('radius');
      const anticlockwise = this.attr('anticlockwise');

      ctx.beginPath();
      ctx.lineCap = this.attr('lineCap');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineWidth = this.attr('lineWidth');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');

      const path = new Path2D();
      path.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
      ctx.stroke(path);
      this.path = path;
      return ctx;
    }
  }
  registerNodeType('arc', Arc, false);
  return {Arc};
}
