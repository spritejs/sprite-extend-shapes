import ShapePlugin from './shape';
import {drawSmoothCurveLine} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  class PolygonAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        smooth: null
      });
    }

    @attr
    set smooth(val) {
      this.set('smooth', val);
    }

    @attr
    set points(val) {
      this.clearFlow();
      this.set('points', val);
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
  }

  class Polygon extends Shape {
    static Attr = PolygonAttr;

    get lineBoundings() {
      const lw = this.attr('lineWidth');

      const bounds = [0, 0, 0, 0];
      const points = this.points;

      points.forEach(([x, y]) => {
        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);

        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;
      width = bounds[2] - Math.min(0, bounds[0]) + lw;
      height = bounds[3] - Math.min(0, bounds[1]) + lw;
      return [width, height].map(Math.ceil);
    }

    // @flow
    // get originalRect() {
    //   // const bounds = this.lineBoundings;
    //   // const lw = this.attr('lineWidth');
    //   // const [width, height] = this.offsetSize;
    //   // const [anchorX, anchorY] = this.attr('anchor');
    //   // const rect = [0, 0, width, height];
    //   // const offsetX = Math.min(0, bounds[0]);
    //   // const offsetY = Math.min(0, bounds[1]);
    //   // rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
    //   // rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
    //   // return rect;
    //   const lineBoundings = this.lineBoundings;
    //   const [x, y, w, h] = super.originalRect;
    //   const rect = [x, y, w, h];

    //   return rect;
    // }

    get points() {
      return this.attr('points');
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let {offsetX = 0, offsetY = 0} = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;
        return (
          this.path &&
          (this.context.isPointInPath(this.path, offsetX, offsetY) ||
            this.context.isPointInStroke(this.path, offsetX, offsetY))
        );
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points.length) {
        const bounds = this.lineBoundings;
        const lw = this.attr('lineWidth');
        drawingContext.translate(
          -Math.min(0, bounds[0]) + lw / 2,
          -Math.min(0, bounds[1]) + lw / 2
        );
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        drawingContext.beginPath();
        const path = new Path2D();
        let smooth = this.attr('smooth');
        const points = this.points.slice(0, this.points.length);
        if (smooth && !smooth.length) {
          smooth = [0, points.length - 1];
        }
        // 绘制光滑曲线（直线）
        if (!smooth) {
          points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
            }
          });
        } else {
          if (Object.prototype.toString.call(smooth[0]) !== '[object Array]') {
            // 如果不是多维数组，转成多维
            smooth = [smooth];
          }
          const startPos = points[0];
          const endPos = points[points.length - 1];
          if (startPos[0] !== endPos[0] || startPos[1] !== endPos[1]) {
            points.push(points[0]);
          }
          let subIndex = 0;
          smooth.forEach((arr, iind) => {
            const smoothStart = arr[0];
            const smoothEnd = arr[1];
            for (let i = subIndex; i < smoothStart; i++) {
              if (i === 0) {
                // 如果是所有线条的起始点
                path.moveTo(...points[0]);
              } else {
                // 如果是转换点
                path.lineTo(...points[i]);
              }
            }
            const smoothPoints = points.slice(smoothStart, smoothEnd + 1);
            drawSmoothCurveLine(path, smoothPoints, smoothStart);
            subIndex = smoothEnd;
          });
          for (let i = subIndex; i < points.length - 1; i++) {
            // 如果绘图未绘制到最后一个点
            path.lineTo(points[i][0], points[i][1]);
          }
        }

        path.closePath();
        drawingContext.closePath();
        drawingContext.fill(path);
        drawingContext.stroke(path);
        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('polygon', Polygon, false);
  return {Polygon};
}
