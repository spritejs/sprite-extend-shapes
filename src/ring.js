import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const reflow = true;

  class RingAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: Math.PI * 2,
        lineWidth: 1,
        maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性
      });
    }

    // 内圆半径
    @attr({reflow})
    set innerRadius(val) {
      this.set('innerRadius', val);
    }

    // 外圆半径
    @attr({reflow})
    set outerRadius(val) {
      this.set('outerRadius', val);
    }

    @attr({reflow})
    set maxRadius(val) {
      this.set('maxRadius', val);
    }

    @attr({reflow})
    set startAngle(val) {
      this.set('startAngle', val);
    }

    @attr({reflow})
    set endAngle(val) {
      this.set('endAngle', val);
    }

    @attr({reflow})
    set center(val) {
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

      width = bounds[2] - Math.min(0, bounds[0]);

      height = bounds[3] - Math.min(0, bounds[1]);

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

        const TAU = Math.PI * 2;
        let startAngle = this.attr('startAngle');
        if (startAngle > TAU) {
          startAngle %= TAU;
        } else {
          startAngle =
            (startAngle + Math.ceil(Math.abs(startAngle) / TAU) * TAU) % TAU;
        }
        let endAngle =
          this.attr('endAngle') - this.attr('startAngle') + startAngle;

        const d = Math.sqrt((offsetX - r) ** 2 + (offsetY - r) ** 2);
        let angle = Math.atan2(offsetY - r, offsetX - r);

        if (angle < 0 || endAngle > TAU) {
          angle += TAU;
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
      const startAngle = this.startAngle;
      const endAngle = this.endAngle;

      ctx.miterLimit = 0;
      ctx.lineWidth = lw;
      ctx.lineCap = this.attr('lineCap');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      const [x, y] = [0, 0];
      let maxRadius = this.attr('maxRadius');

      if (maxRadius <= 0) {
        maxRadius = outerRadius;
      }

      const lineBoundings = this.lineBoundings;
      ctx.translate(lineBoundings[2] / 2 - x, lineBoundings[3] / 2 - y);

      ctx.beginPath();
      ctx.arc(x, y, Math.max(0, outerRadius - lw / 2), startAngle, endAngle, false);
      if (endAngle - startAngle === Math.PI * 2) {
        ctx.moveTo(outerRadius + innerRadius, outerRadius);
      }
      ctx.arc(x, y, Math.max(0, innerRadius - lw / 2), endAngle, startAngle, true);
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
