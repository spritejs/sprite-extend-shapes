import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class RingAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        color: 'rgba(0,0,0,1)',
        fillColor: 'rgba(0, 0, 0, 1)'
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

  function isPointCollision(ring, x, y) {
    const [r1, r2] = [ring.attr('outerRadius'), ring.attr('innerRadius')],
      width = ring.contentSize[0];

    const bounds = ring.boundingRect,
      [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    return distance >= width / 2 && distance <= width / 2 + r1 - r2;
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

    // pointCollision(evt) {
    //   if (super.pointCollision(evt)) {
    //     const {offsetX, offsetY} = evt;
    //     return isPointCollision(this, offsetX, offsetY);
    //   }
    // }

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
      const endAngle = isCircle ? Math.PI * 2 : this.endAngle;
      ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');
      ctx.miterLimit = 3;
      ctx.lineWidth = this.attr('lineWidth');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.beginPath();

      ctx.arc(
        outerRadius,
        outerRadius,
        outerRadius,
        startAngle,
        endAngle,
        false
      );
      if(endAngle - startAngle === Math.PI * 2) {
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
      ctx.stroke();
      ctx.fill();
      return ctx;
    }
  }

  registerNodeType('ring', Ring);
  return {Ring};
}

// export default function install({Sprite, utils, registerNodeType}) {
//   function isPointCollision(circle, x, y) {
//     const [r1, r2] = circle.attr('radius'),
//       width = circle.contentSize[0];

//     const bounds = circle.boundingRect,
//       [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];

//     const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
//     return distance >= width / 2 && distance <= width / 2 + r1 - r2;
//   }
//   class Ring extends Sprite {
//     pointCollision(evt) {
//       if (super.pointCollision(evt)) {
//         const {offsetX, offsetY} = evt;
//         return isPointCollision(this, offsetX, offsetY);
//       }
//     }
//   }

//   Ring.defineAttributes({
//     init(attr) {
//       attr.setDefault(
//         {
//           radius: [0, 0],
//           color: 'black'
//         },
//         {
//           borderRadius() {
//             const [r1, r2] = this.radius;
//             return (r1 + r2) / 2;
//           },
//           width() {
//             const r2 = this.radius[1];
//             return 2 * r2;
//           },
//           height() {
//             const r2 = this.radius[1];
//             return 2 * r2;
//           },
//           border() {
//             const [r1, r2] = this.radius;
//             return {width: r1 - r2, color: this.color, style: 'solid'};
//           }
//         }
//       );
//     },
//     radius(attr, val) {
//       // 定义半径属性 [外环，内环]
//       attr.clearCache();
//       if (!Array.isArray(val)) {
//         val = [val, 0];
//       }
//       attr.set('radius', val);
//     },
//     color(attr, val) {
//       attr.clearCache();
//       attr.set('color', val);
//     }
//   });

//   registerNodeType('ring', Ring);

//   return {Ring};
// }
