import ShapePlugin from './shape';
import SectorPlugin from './sector';
import {angleOf} from './util';

export default function install({use, utils, registerNodeType}) {
  const {findColor, flow} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const {Sector} = use(SectorPlugin, null, false);

  class EllipseArcAttr extends Sector.Attr {
    /* eslint-disable no-useless-constructor */
    constructor(subject) {
      super(subject);
    }
  }

  class EllipseArc extends Shape {
    static Attr = EllipseArcAttr;

    get isVirtual() {
      return false;
    }

    @flow
    get lineBoundings() {
      const [rx, ry] = this.radiuses;
      return [0, 0, 2 * rx, 2 * ry];
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      let [width, height] = [...this.attrSize];
      width = bounds[2] - Math.min(0, bounds[0]);
      height = bounds[3] - Math.min(0, bounds[1]);

      return [width, height].map(Math.ceil);
    }

    get radiuses() {
      return [this.attr('radiusX'), this.attr('radiusY')];
    }

    get center() {
      const [rx, ry] = this.radiuses;
      return [rx, ry];
    }    

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX, offsetY} = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        const lw = this.attr('lineWidth');
        const rx = this.radiuses[0] - lw / 2;
        const ry = this.radiuses[1] - lw / 2;
        const [cx, cy] = this.center;

        const dx = offsetX - cx;
        const dy = offsetY - cy;

        if(Math.abs(dx ** 2 / rx ** 2 + dy ** 2 / ry ** 2 - 1) <= 2 * lw / (rx + ry)) {
          const PI2 = 2 * Math.PI;
          let startAngle = this.attr('startAngle') % (2 * PI2);
          let endAngle = this.attr('endAngle') % (2 * PI2);
          if(startAngle < 0) startAngle += PI2;
          if(endAngle < 0) endAngle += PI2;
          const angle = angleOf([dx, dy]);
          if(angle >= startAngle && angle <= endAngle) {
            return true;
          }
        }
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      const [radiusX, radiusY] = this.radiuses;
      const [cx, cy] = this.center;
      const startAngle = this.attr('startAngle');
      const endAngle = this.attr('endAngle');
      const anticlockwise = this.attr('anticlockwise');

      const lw = this.attr('lineWidth');

      drawingContext.lineCap = this.attr('lineCap');
      drawingContext.lineJoin = this.attr('lineJoin');
      drawingContext.lineWidth = lw;
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
      drawingContext.setLineDash(this.attr('lineDash'));
      drawingContext.lineDashOffset = this.attr('lineDashOffset');

      drawingContext.strokeStyle = findColor(
        drawingContext,
        this,
        'strokeColor'
      );
      drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');

      drawingContext.beginPath();
      if (drawingContext.ellipse) {
        drawingContext.ellipse(
          cx,
          cy,
          Math.max(0, radiusX - lw / 2),
          Math.max(0, radiusY - lw / 2),
          0,
          startAngle,
          endAngle,
          anticlockwise
        );
      } else if(radiusX === radiusY) {
        drawingContext.arc(
          cx,
          cy,
          Math.max(0, radiusX - lw / 2),
          startAngle,
          endAngle,
          anticlockwise
        )
      } else {
        throw new Error("Your browser does'n support canvas ellipse");
      }

      drawingContext.fill();
      drawingContext.stroke();
      return drawingContext;
    }
  }
  registerNodeType('ellipsearc', EllipseArc, false);
  return {EllipseArc};
}
