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
        percent: 0.5
      });
    }

    @attr
    set radius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set percent(val) {
      this.clearCache();
      this.clearFlow();
      this.set('percent', val);
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

      const [cx, cy] = [0, 0];
      const radius = this.attr('radius');
      const percent = this.attr('percent');

      ctx.fillStyle = this.attr('fillColor');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineCap = this.attr('lineCap');
      ctx.lineWidth = this.attr('lineWidth');

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

      ctx.beginPath();

      if (percent < 1) {
        const amplitude = ((percent * radius) / 10) * 4; // 振幅
        const [x, y] = [cx, round(radius * sin(startAngle / 2))];
        const cp1 = [cx - radius * cos(startAngle / 2), y];
        const cp2 = [(cx - radius * cos(startAngle / 2)) / 2, y + amplitude];
        const cp3 = [(radius * cos(startAngle / 2)) / 2, y - amplitude];
        const cp4 = [radius * cos(startAngle / 2), y];

        ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], x, y);
        ctx.bezierCurveTo(x, y, cp3[0], cp3[1], cp4[0], cp4[1]);
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
      ctx.stroke();

      return ctx;
    }
  }
  registerNodeType('wave', Wave, false);
  return {Wave};
}
