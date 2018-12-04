import ShapePlugin from './shape';

const cos = angle => Number(Math.cos(angle).toFixed(15));
const sin = angle => Number(Math.sin(angle).toFixed(15));
const round = v => Math.round(v);

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class WaveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 50,
        offset: 10,
        percent: 0.5,
        waveTime: 2000,
        amplitude: 0,
      });
    }

    @attr
    set radius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set offset(val) {
      this.clearCache();
      this.clearFlow();
      this.set('offset', val);
    }

    @attr
    set percent(val) {
      this.clearCache();
      this.clearFlow();
      this.set('percent', val);
    }

    @attr
    set waveTime(val) {
      this.clearCache();
      this.clearFlow();
      this.set('waveTime', val);
    }

    @attr
    set amplitude(val) {
      this.clearCache();
      this.clearFlow();
      this.set('amplitude', val);
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
      const radius = this.attr('radius');
      const offset = this.attr('offset');
      const percent = this.attr('percent');
      const AMPLITUDE = this.attr('amplitude') || radius / 10;
      const amplitude = (radius / 4) * sin(percent * Math.PI) + AMPLITUDE; // 振幅

      let startAngle = 0;
      let endAngle = 0;

      if (percent <= 0.5) {
        startAngle = 0.25 - percent / 2;
        endAngle = startAngle + percent;
      } else if (percent < 1) {
        startAngle = 0 - (percent - 0.5) / 2;
      } else {
        startAngle = 0;
      }
      endAngle = startAngle + percent;
      startAngle *= Math.PI * 2;
      endAngle *= Math.PI * 2;

      const halfSinStartAngle = sin(startAngle / 2);
      const halfCosStartAngle = cos(startAngle / 2);

      let [cx, cy] = [0, 0];
      let startTime = Date.now();
      let clockwise = 1;
      const time = this.attr('waveTime') || 2000;

      const step = () => {
        ctx.fillStyle = this.attr('fillColor');

        ctx.beginPath();

        if (percent < 1) {
          const T = Math.min(1.0, (Date.now() - startTime) / time);
          // 找到平面的中心点，然后在中心点左右两侧分别画贝塞尔曲线模拟 正弦波
          const [x, y] = [cx, cy + round(radius * halfSinStartAngle)];
          let cp1;
          let cp2;
          let cp3;
          let cp4;
          if (clockwise) {
            cp1 = [cx - radius * halfCosStartAngle, y];
            cp2 = [
              cx - (radius * halfCosStartAngle) / 2,
              y + (1 - 2 * T) * amplitude,
            ];
            cp3 = [
              cx + (radius * halfCosStartAngle) / 2,
              y + (2 * T - 1) * amplitude,
            ];
            cp4 = [cx + radius * halfCosStartAngle, y];
          } else {
            cp1 = [cx - radius * halfCosStartAngle, y];
            cp2 = [
              cx - (radius * halfCosStartAngle) / 2,
              y + (2 * T - 1) * amplitude,
            ];
            cp3 = [
              cx + (radius * halfCosStartAngle) / 2,
              y + (1 - 2 * T) * amplitude,
            ];
            cp4 = [cx + radius * halfCosStartAngle, y];
          }

          ctx.clearRect(
            cx - radius - offset - lw,
            cy - radius - offset - lw,
            (radius + offset + lw) * 2,
            (radius + offset + lw) * 2
          );
          ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], x, y);
          ctx.bezierCurveTo(x, y, cp3[0], cp3[1], cp4[0], cp4[1]);

          if (T === 1) {
            startTime = Date.now();
            clockwise = !clockwise;
          }
        }

        // 绘制圆弧
        ctx.arc(
          cx,
          cy,
          radius,
          0 - (endAngle - Math.PI) / 2,
          (endAngle - Math.PI) / 2 + Math.PI,
          0
        );
        ctx.closePath();
        ctx.fill();
        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = '#ccc';
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineCap = this.attr('lineCap');
        ctx.lineWidth = lw;
        ctx.arc(cx, cy, radius + offset, 0, Math.PI * 2, 0);
        ctx.stroke();
        ctx.closePath();

        if (this.hasDrawed) {
          requestAnimationFrame(step);
        } else {
          return Promise.resolve();
        }
      };

      const wave = () => {
        [cx, cy] = this.attr('pos');
        this.hasDrawed = true;
        requestAnimationFrame(step);
      };

      const promise = step();
      if (promise && promise.then) {
        promise.then(wave);
      } else {
        wave();
      }

      return ctx;
    }
  }

  registerNodeType('wave', Wave, false);
  return {Wave};
}
