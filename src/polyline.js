import ShapePlugin from './shape';
import {drawSmoothCurveLine} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

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

    @attr
    set points(val) {
      this.clearFlow();
      this.set('points', val);
    }

    @attr
    set smooth(val) {
      this.set('smooth', val);
    }

    @attr
    set close(val) {
      this.set('close', val);
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
      this.context.lineWidth = this.attr('lineWidth') + tolerance; // 点击范围为线条加上容差值，方便碰撞检测
      let res = false;
      if (
        this.path &&
        (this.context.isPointInStroke(this.path, offsetX, offsetY) ||
          (this.attr('close') &&
            this.context.isPointInPath(this.path, offsetX, offsetY))) // 如果是闭合曲线，判断是否点击到闭合曲线内部
      ) {
        res = true;
      }
      this.context.lineWidth = cacheLineWidth; // 还原当前画布的lineWidth宽度
      return res;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      if (this.points) {
        drawingContext.fillStyle = this.attr('fillColor');
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');

        const smooth = this.attr('smooth');
        const path = new Path2D();

        if (smooth) {
          drawSmoothCurveLine(path, this.points, drawingContext);
        } else {
          this.points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
            }
          });
        }

        if (this.attr('close')) {
          path.closePath();
        }

        drawingContext.fill(path);
        drawingContext.stroke(path);
        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('polyline', Polyline, false);
  return {Polyline};
}
