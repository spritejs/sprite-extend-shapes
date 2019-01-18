import ShapePlugin from '../shape';

export default function install({ use, utils, registerNodeType }) {
  const { attr, flow, parseColorString, findColor } = utils;
  const { Shape } = use(ShapePlugin, null, false);

  class EllipseSectorAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radiusX: 10,
        radiusY: 20,
        center: [ 0, 0 ],
        startAngle: 0,
        endAngle: 0,
        lineWidth: 1,
        anticlockwise: false,
      });
    }

    // 短轴半径
    @attr
    set radiusX(val) {
      this.clearFlow();
      this.set('radiusX', val);
    }

    // 长轴半径
    @attr
    set radiusY(val) {
      this.clearFlow();
      this.set('radiusY', val);
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
    set color(val) {
      val = parseColorString(val);
      this.set('color', val);
    }

    @attr
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

    @attr
    set center(val) {
      this.clearFlow();
      this.set('center', val);
    }
  }

  class EllipseSector extends Shape {
    static Attr = EllipseSectorAttr;

    get radiuses() {
      return [ this.attr('radiusX'), this.attr('radiusY') ];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    get center() {
      return this.attr('center');
    }

    get lineBoundings() {
      return [ 0, 0, 2 * this.radiuses[ 0 ], 2 * this.radiuses[ 1 ] ];
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [ width, height ] = [ ...this.attrSize ];

      if (width === '') {
        width = bounds[ 2 ] - Math.min(0, bounds[ 0 ]) + 2 * lw;
      }
      if (height === '') {
        height = bounds[ 3 ] - Math.min(0, bounds[ 1 ]) + 2 * lw;
      }

      return [ width, height ].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const radiuses = this.radiuses;
      const [ x, y, w, h ] = super.originalRect;
      const rect = [ x - radiuses[ 0 ], y - radiuses[ 1 ], w, h ];
      return rect;
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let { offsetX, offsetY } = evt;
        // FIXME: 如果事件是改变半径大小，会导致contentSize变化，如何避免？
        const [ anchorX, anchorY ] = this.attr('anchor');
        const [ width, height ] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        return (
          this.path
          && (this.context.isPointInPath(this.path, offsetX, offsetY)
            || this.context.isPointInStroke(this.path, offsetX, offsetY))
        );
      }
    }

    render(t, ctx) {
      let x;
      let y;
      const [ rx, ry ] = this.radiuses;

      if (this.center && this.center.length > 0) {
        [ x, y ] = this.center;
      } else {
        x = rx;
        y = ry;
      }

      ctx.translate(this.radiuses[ 0 ], this.radiuses[ 1 ]);

      const startAngle = this.startAngle;
      const endAngle = this.endAngle;

      ctx.miterLimit = 3;
      ctx.lineWidth = this.attr('lineWidth');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      const path = new Path2D();
      if (this.endAngle - this.startAngle < Math.PI * 2) {
        path.moveTo(x, y);
      }
      path.ellipse(
        x,
        y,
        rx,
        ry,
        0,
        startAngle,
        endAngle,
        this.attr('anticlockwise')
      );
      path.closePath();

      ctx.fill(path);
      ctx.stroke(path);

      this.path = path;

      return ctx;
    }
  }

  registerNodeType('ellipsesector', EllipseSector, false);
  return { EllipseSector };
}
