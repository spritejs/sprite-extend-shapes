import ShapePlugin from '../shape';
import SectorPlugin from './sector';

export default function install({use, utils, registerNodeType}) {
  const {findColor} = utils;
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
      return true;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      const radiusX = this.attr('radiusX');
      const radiusY = this.attr('radiusY');
      const x = 0;
      const y = 0;
      const rotate = (this.attr('rotate') / 180) * Math.PI;
      const startAngle = (this.attr('startAngle') / 180) * Math.PI;
      const endAngle = (this.attr('endAngle') / 180) * Math.PI;
      const anticlockwise = this.attr('anticlockwise');

      drawingContext.lineWidth = this.attr('lineWidth');
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
      drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');

      if (drawingContext.ellipse) {
        drawingContext.beginPath();
        drawingContext.ellipse(
          x,
          y,
          radiusX,
          radiusY,
          rotate,
          startAngle,
          endAngle,
          anticlockwise
        );
        drawingContext.fill();
        drawingContext.stroke();
      } else {
        throw new Error("Your browser does'n support canvas ellipse");
      }

      return drawingContext;
    }
  }
  registerNodeType('ellipsearc', EllipseArc, false);
  return {EllipseArc};
}
