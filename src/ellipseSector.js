import ShapePlugin from './shape';
import {angleOf} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const reflow = true;

  class EllipseSectorAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radiusX: 10,
        radiusY: 20,
        startAngle: 0,
        endAngle: 0,
        lineWidth: 1,
        anticlockwise: false
      });
    }

    // 短轴半径
    @attr({reflow})
    set radiusX(val) {
      this.set('radiusX', val);
    }

    // 长轴半径
    @attr({reflow})
    set radiusY(val) {
      this.set('radiusY', val);
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
    set lineWidth(val) {
      this.set('lineWidth', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }

    @attr
    set anticlockwise(val) {
      this.set('anticlockwise', val);
    }

    @attr({reflow})
    set center(val) {
      this.set('center', val);
    }
  }

  class EllipseSector extends Shape {
    static Attr = EllipseSectorAttr;

    get radiuses() {
      return [this.attr('radiusX'), this.attr('radiusY')];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    get center() {
      const lw = this.attr('lineWidth');
      return this.radiuses.map(v => v);
    }

    get lineBoundings() {
      return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = [...this.attrSize];
      width = bounds[2] - Math.min(0, bounds[0]);
      height = bounds[3] - Math.min(0, bounds[1]);
      return [width, height].map(Math.ceil);
    }

    // @flow
    // get originalRect() {
    //   const lineBoundings = this.lineBoundings;
    //   const [x, y, w, h] = super.originalRect;
    //   const rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
    //   return rect;
    // }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;
        // FIXME: 如果事件是改变半径大小，会导致contentSize变化，如何避免？
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;
        offsetX += width * anchorX;
        offsetY += height * anchorY;

        const [x, y] = this.center;
        let [rx, ry] = this.radiuses;
        const dx = offsetX - x;
        const dy = offsetY - y;

        if (dx ** 2 / rx ** 2 + dy ** 2 / ry ** 2 <= 1.0) {
          const PI2 = 2 * Math.PI;
          let startAngle = this.startAngle;
          let endAngle = this.endAngle;

          if (endAngle - startAngle >= PI2) {
            startAngle = 0;
            endAngle = PI2;
          } else {
            if (startAngle >= 0 && endAngle >= 0) {
              let offsetAngle = endAngle - startAngle;
              startAngle %= PI2;
              endAngle = startAngle + offsetAngle;
            } else {
              const nTPositive = angle => {
                // 使其落入 [0, PI2]区间
                const PI2 = 2 * Math.PI;
                let isNegative = angle < 0;
                let T = isNegative
                  ? -Math.floor(angle / PI2)
                  : Math.ceil(angle / PI2);
                return (angle + T * PI2) % PI2;
              };

              endAngle =
                nTPositive(endAngle) +
                (startAngle <= 0 && startAngle >= endAngle
                  ? PI2
                  : endAngle > 0
                  ? PI2
                  : 0);
              startAngle = nTPositive(startAngle);
            }
          }

          let angle = angleOf([dx, dy]);

          if (endAngle > PI2) {
            let m = endAngle - PI2;
            if (0 <= angle && angle <= m) {
              angle += PI2;
            }
          }
          return angle >= startAngle && angle <= endAngle;
        }
        // TODO: 处理 lineCap?
      }
    }

    render(t, ctx) {
      super.render(t, ctx);

      const [x, y] = this.center;
      const [rx, ry] = this.radiuses;

      const startAngle = this.startAngle;
      const endAngle = this.endAngle;
      const lw = this.attr('lineWidth');
      ctx.miterLimit = 3;
      ctx.miterLimit = 3;
      ctx.lineCap = this.attr('lineCap');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineWidth = lw;
      ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      ctx.beginPath();
      if (this.endAngle - this.startAngle < Math.PI * 2) {
        ctx.moveTo(x, y);
      }

      if (ctx.ellipse) {
        ctx.ellipse(
          x,
          y,
          Math.max(0, rx - lw / 2),
          Math.max(0, ry - lw / 2),
          0,
          startAngle,
          endAngle,
          this.attr('anticlockwise')
        );
        ctx.closePath();
      } else if (rx === ry) {
        ctx.arc(
          x,
          y,
          Math.max(0, rx - lw / 2),
          startAngle,
          endAngle,
          this.attr('anticlockwise')
        );
        ctx.closePath();
      } else {
        throw new Error("Your browser does'n support canvas ellipse");
      }

      ctx.fill();
      ctx.stroke();

      return ctx;
    }
  }

  registerNodeType('ellipsesector', EllipseSector, false);
  return {EllipseSector};
}
