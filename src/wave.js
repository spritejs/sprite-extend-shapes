import ShapePlugin from './shape';
import {sin, round} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class WaveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 50,
        offset: 10,
        percent: 0,
        amplitude: 0,
        speed: 0,
      });
    }

    @attr
    set radius(val) {
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set offset(val) {
      this.clearFlow();
      this.set('offset', val);
    }

    @attr
    set percent(val) {
      this.clearFlow();
      this.set('percent', val);
    }

    @attr
    set amplitude(val) {
      this.clearFlow();
      this.set('amplitude', val);
    }

    @attr
    set speed(val) {
      this.clearFlow();
      this.set('speed', val);
    }
  }

  class Wave extends Shape {
    static Attr = WaveAttr;

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    render(t, ctx) {
      super.render(t, ctx);
      const lw = this.attr('lineWidth');
      const strokeStyle = findColor(ctx, this, 'color');
      const fillStyle = findColor(ctx, this, 'fillColor');
      const radius = this.attr('radius');
      const offset = this.attr('offset');
      const percent = this.attr('percent');
      const AMPLITUDE = this.attr('amplitude') || radius / 10;
      const [cx, cy] = [0, 0];

      let startAngle = 0;
      if (percent <= 0.5) {
        startAngle = 0.25 - percent / 2;
      } else if (percent < 1) {
        startAngle = 0 - (percent - 0.5) / 2;
      } else {
        startAngle = 0;
      }
      startAngle *= Math.PI * 2;
      const sinVal = percent >= 1 ? -1 : sin(startAngle / 2);
      const y = round(radius * sinVal);

      // 三角函数公式：y=Asin（wx+φ）+h
      const A = ((radius / 20) * sin(percent * Math.PI) + AMPLITUDE) / 2; // 振幅;
      const W = (Math.PI * 2) / 200;
      const H = cy + y;
      const Q = this.attr('speed');

      ctx.save();

      // 清除绘制区域
      ctx.clearRect(
        cx - radius - offset - lw,
        cy - radius - offset - lw,
        (radius + offset + lw) * 2,
        (radius + offset + lw) * 2
      );

      // 外接圆
      ctx.beginPath();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lw;
      ctx.arc(cx, cy, radius + offset, 0, Math.PI * 2, false);
      ctx.stroke();

      // 内接圆设为剪辑区域
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
      ctx.clip();

      // 绘制正弦曲线
      ctx.beginPath();
      for (let x = cx - radius; x <= cx + radius; x++) {
        const _y = A * Math.sin(W * x + Q) + H;
        ctx.lineTo(x, _y);
      }
      // 向下形成闭合区域
      ctx.lineTo(cx + radius, cy + radius);
      ctx.lineTo(cx - radius, cy + radius);
      ctx.lineTo(cx - radius, cy);
      ctx.fillStyle = fillStyle;
      ctx.fill();
      ctx.closePath();

      ctx.restore();

      return ctx;
    }
  }

  registerNodeType('wave', Wave, false);
  return {Wave};
}
