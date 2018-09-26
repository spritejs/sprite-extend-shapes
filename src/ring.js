import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  // const Shape = BaseSprite

  class RingAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        color: 'rgba(255,0,0,1)',
        fillColor: 'rgba(255, 0, 0, 1)',
        boxSizing: 'border-box'
      });
    }

    // 内圆半径
    @attr
    set innerRadius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('innerRadius', val);
    }

    // 外圆半径
    @attr
    set outerRadius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('outerRadius', val);
    }

    @attr
    set startAngle(val) {
      this.clearCache();
      this.clearFlow();
      this.set('startAngle', val);
    }

    @attr
    set endAngle(val) {
      this.clearCache();
      this.clearFlow();
      this.set('endAngle', val);
    }

    @attr
    set color(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('color', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('fillColor', val);
    }
  }

  class Ring extends Shape {
    static Attr = RingAttr;

    // 边界依赖于最大圆
    get lineBoundings() {
      const radius = Math.max(
        this.attr('innerRadius'),
        this.attr('outerRadius')
      );
      return [0, 0, 2 * radius, 2 * radius];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attr('size');

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

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        const {offsetX, offsetY} = evt;

        const r = this.attr('outerRadius');
        const r0 = this.attr('innerRadius');
        const startAngle = this.attr('startAngle');
        const endAngle = this.attr('endAngle');

        const d = Math.sqrt((offsetX - r) ** 2 + (offsetY - r) ** 2);
        let angle = Math.atan2(offsetY - r, offsetX - r);
        if (angle < 0) {
          angle = Math.PI * 2 + angle;
        }

        return d >= r0 && d <= r && angle >= startAngle && angle <= endAngle;
        // return this.context.isPointInPath(this.path, offsetX, offsetY);
      }
    }

    render(t, ctx) {
      super.render(t, ctx);
      const innerRadius = Math.min(
        this.attr('innerRadius'),
        this.attr('outerRadius')
      );
      const outerRadius = Math.max(
        this.attr('innerRadius'),
        this.attr('outerRadius')
      );

      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');

      const isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
      const startAngle = isCircle ? 0 : this.startAngle;
      let endAngle = isCircle ? Math.PI * 2 : this.endAngle;
      if (endAngle > Math.PI * 2) {
        endAngle = Math.PI * 2;
      }
      ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

      ctx.miterLimit = 0;
      ctx.lineWidth = lw;
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      // 下方代码为 Path2D 模拟画扇形（暂时不用）
      // const x = outerRadius;
      // const y = outerRadius;
      // const r0 = outerRadius;
      // const r = innerRadius;
      // const unitX = Math.cos(startAngle);
      // const unitY = Math.sin(startAngle);

      // const path = new Path2D();

      // path.moveTo(unitX * r0 + x, unitY * r0 + y);
      // path.lineTo(unitX * r + x, unitY * r + y);
      // path.arc(x, y, r, startAngle, endAngle, false);
      // path.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);

      // if (r0 !== 0) {
      //   path.arc(x, y, r0, endAngle, startAngle, true);
      // }

      // this.path = path;
      // ctx.fill(path);

      ctx.beginPath();
      ctx.arc(
        outerRadius,
        outerRadius,
        outerRadius,
        startAngle,
        endAngle,
        false
      );
      if (endAngle - startAngle === Math.PI * 2) {
        ctx.moveTo(outerRadius + innerRadius, outerRadius);
      }
      ctx.arc(
        outerRadius,
        outerRadius,
        innerRadius,
        endAngle,
        startAngle,
        true
      );
      ctx.closePath();

      if (lw > 0) {
        ctx.stroke();
      }

      ctx.fill();
      return ctx;
    }
  }

  registerNodeType('ring', Ring);
  return {Ring};
}
