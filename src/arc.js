import ShapePlugin from './shape';
import {angleOf} from './util';

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
      const r = this.attr('radius');
      return [0, 0, 2 * r, 2 * r];
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      let [width, height] = [...this.attrSize];
      width = bounds[2] - Math.min(0, bounds[0]);
      height = bounds[3] - Math.min(0, bounds[1]);

      return [width, height].map(Math.ceil);
    }

    get center() {
      const lw = this.attr('lineWidth');
      const r = this.attr('radius');
      return [r, r];
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

        const lw = this.attr('lineWidth');
        const radius = this.attr('radius') - lw / 2;
        const [cx, cy] = this.center;

        const dx = offsetX - cx;
        const dy = offsetY - cy;

        const dist = Math.sqrt(dx ** 2 + dy ** 2);
        if(Math.abs(dist - radius) <= lw / 2) {
          const PI2 = 2 * Math.PI;
          let startAngle = this.attr('startAngle') % (2 * PI2);
          let endAngle = this.attr('endAngle') % (2 * PI2);
          if(startAngle < 0) startAngle += PI2;
          if(endAngle < 0) endAngle += PI2;
          const angle = angleOf([dx, dy]);
          if(angle >= startAngle && angle <= endAngle) {
            return true;
          }
          const lineCap = this.attr('lineCap');
          if(lineCap !== 'butt') {
            // 处理端点，目前把 square 当做 round 处理，待完善 
            const pa = [radius * Math.cos(startAngle), radius * Math.sin(startAngle)];
            const pb = [radius * Math.cos(endAngle), radius * Math.sin(endAngle)];
            return Math.sqrt((dx - pa[0]) ** 2 + (dy - pa[1]) ** 2) <= lw / 2
              || Math.sqrt((dx - pb[0]) ** 2 + (dy - pb[1]) ** 2) <= lw / 2;
          }
        }
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

      const lw = this.attr('lineWidth');
      ctx.lineCap = this.attr('lineCap');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineWidth = lw;
      ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');

      if(endAngle > startAngle) {
        ctx.arc(cx, cy, radius - lw / 2, startAngle, endAngle, anticlockwise);
        ctx.stroke();
      }

      return ctx;
    }
  }
  registerNodeType('arc', Arc, false);
  return {Arc};
}
