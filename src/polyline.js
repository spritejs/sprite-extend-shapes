import ShapePlugin from './shape';
import SvgPath from 'svg-path-to-canvas';
import {makeSmoothCurveLine, pointsEqual} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const reflow = true;

  class PolylineAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: null,
        close: false,
        smooth: false,
        tolerance: 6
      });
    }

    @attr
    set tolerance(val) {
      this.set('tolerance', val);
    }

    @attr({reflow})
    set points(val) {
      this.set('points', val);
      this.subject.path = null;
    }

    @attr({reflow})
    set smooth(val) {
      this.set('smooth', val);
      this.subject.path = null;
    }

    @attr
    set close(val) {
      this.set('close', val);
      this.subject.path = null;
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

    pointCollision(evt) {
      super.pointCollision(evt);
      const {offsetX, offsetY} = evt;
      const cacheLineWidth = this.context.lineWidth; // 获取当前画布的lineWidth宽度
      const tolerance = this.attr('tolerance'); // 线条点击的容差像素值，默认6px
      let res = false;
      const path = this.path;
      if (path) {
        const lineWidth = this.attr('lineWidth') + tolerance,
          lineCap = this.attr('lineCap'),
          lineJoin = this.attr('lineJoin');

        if (this.attr('close')) {
          res = path.isPointInPath(offsetX, offsetY);
        }

        res |= path.isPointInStroke(offsetX, offsetY, {
          lineWidth,
          lineCap,
          lineJoin
        });
      }
      return res;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      if (this.points) {
        const lw = this.attr('lineWidth');
        drawingContext.fillStyle = this.attr('fillColor');
        drawingContext.strokeStyle = findColor(
          drawingContext,
          this,
          'strokeColor'
        );
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = lw;
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');

        // drawingContext.translate(lw / 2, lw / 2);

        if (!this.path || !pointsEqual(this.path.points, this.points)) {
          const smooth = this.attr('smooth');

          let d = '';
          if (smooth) {
            d += makeSmoothCurveLine(this.points, 0);
          } else {
            this.points.forEach((point, i) => {
              if (i === 0) {
                d += `M${point.join(' ')}`;
              } else {
                d += `L${point.join(' ')}`;
              }
            });
          }

          if (this.attr('close')) {
            d += 'Z';
          }

          this.path = new SvgPath(d);
          this.path.points = [...this.points];
        }

        if (this.path) {
          this.path.beginPath().to(drawingContext);
          drawingContext.fill();
          drawingContext.stroke();
        }
      }
      return drawingContext;
    }
  }
  registerNodeType('polyline', Polyline, false);
  return {Polyline};
}
