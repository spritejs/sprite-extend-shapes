import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolylineAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: null,
        color: 'rgba(0,0,0,1)',
        lineWidth: 1,
        lineCap: 'round',
        lineJoin: 'round'
      });
    }

    @attr
    set points(val) {
      this.clearCache();
      this.clearFlow();
      this.set('points', val);
    }

    @attr
    set color(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('color', val);
    }

    @attr
    set lineWidth(val) {
      this.clearCache();
      this.set('lineWidth', val);
    }

    @attr
    set lineCap(val) {
      this.clearCache();
      this.set('lineCap', val);
    }

    @attr
    set lineJoin(val) {
      this.clearCache();
      this.set('lineJoin', val);
    }
  }

  class Polyline extends Shape {
    static Attr = PolylineAttr;

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points) {
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        drawingContext.beginPath();

        const path = new Path2D();

        this.points.forEach((point, i) => {
          if (i === 0) {
            path.moveTo(...point);
          } else {
            path.lineTo(...point);
          }
        });
        drawingContext.stroke(path);

        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('ployline', Polyline, false);
  return {Polyline};
}
