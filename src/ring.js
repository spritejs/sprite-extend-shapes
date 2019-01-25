import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class RingAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        center: [0, 0],
        lineWidth: 1,
        maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性
      });
    }

    // 内圆半径
    @attr
    set innerRadius(val) {
      this.clearFlow();
      this.set('innerRadius', val);
    }

    // 外圆半径
    @attr
    set outerRadius(val) {
      this.clearFlow();
      this.set('outerRadius', val);
    }

    @attr
    set maxRadius(val) {
      this.clearFlow();
      this.set('maxRadius', val);
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

    @attr
    set center(val) {
      this.clearFlow();
      this.set('center', val);
    }
  }

  class Ring extends Shape {
    static Attr = RingAttr;

    // 边界依赖于最大圆
    get lineBoundings() {
      let maxRadius = this.attr('maxRadius');

      if (maxRadius <= 0) {
        const radius = Math.max(
          this.attr('innerRadius'),
          this.attr('outerRadius')
        );
        maxRadius = radius;
      }

      return [0, 0, 2 * maxRadius, 2 * maxRadius];
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

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        let r = this.attr('maxRadius');
        let offset = this.attr('outerRadius'); // 偏移量

        if (r <= 0) {
          r = offset;
        }

        offset = r - offset; // 如果未设置maxRadius，偏移量应当０
        const r0 = this.attr('innerRadius');
        const startAngle = this.attr('startAngle');
        const endAngle = this.attr('endAngle');

        const d = Math.sqrt((offsetX - r) ** 2 + (offsetY - r) ** 2);
        let angle = Math.atan2(offsetY - r, offsetX - r);
        if (angle < 0) {
          angle = Math.PI * 2 + angle;
        }

        return (
          d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle
        );
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

      const lw = this.attr('lineWidth');

      // 对是否为圆形的判断是没有必要的。
      // const isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
      // const startAngle = isCircle ? 0 : this.startAngle;
      // let endAngle = isCircle ? Math.PI * 2 : this.endAngle;
      // if (endAngle > Math.PI * 2) {
      //   endAngle = Math.PI * 2;
      // }
      const startAngle = this.startAngle;
      const endAngle = this.endAngle;

      ctx.miterLimit = 0;
      ctx.lineWidth = lw;
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      const [x, y] = this.attr('center');
      let maxRadius = this.attr('maxRadius');

      if (maxRadius <= 0) {
        maxRadius = outerRadius;
      }

      const lineBoundings = this.lineBoundings;
      ctx.translate(
        lineBoundings[2] / 2 - x + lw,
        lineBoundings[3] / 2 - y + lw
      );

      ctx.beginPath();
      ctx.arc(x, y, outerRadius, startAngle, endAngle, false);
      if (endAngle - startAngle === Math.PI * 2) {
        ctx.moveTo(outerRadius + innerRadius, outerRadius);
      }
      ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fill();

      if (lw > 0) {
        ctx.stroke();
      }

      return ctx;
    }
  }

  registerNodeType('ring', Ring);
  return {Ring};
}
