import ShapePlugin from './shape';
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
      const rotate = this.attr('rotate');
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

      if (drawingContext.ellipse) {
        drawingContext.beginPath();

        drawingContext.translate(radiusX + lw / 2, radiusY + lw / 2);

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
