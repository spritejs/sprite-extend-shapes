import ShapePlugin from './shape';
import SvgPath from 'svg-path-to-canvas';
import {makeSmoothCurveLine, pointsEqual} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const reflow = true;

  class PolygonAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        smooth: null
      });
    }

    @attr({reflow})
    set smooth(val) {
      this.set('smooth', val);
      this.subject.path = null;
    }

    @attr({reflow})
    set points(val) {
      this.set('points', val);
      this.subject.path = null;
    }

    @attr({reflow})
    set lineWidth(val) {
      this.set('lineWidth', val);
      this.subject.path = null;
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
      const bounds = [0, 0, 0, 0];
      const points = this.attr('points');

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
      const lw = this.attr('lineWidth');
      const bounds = this.lineBoundings;
      let [width, height] = this.attrSize;
      width = bounds[2] - bounds[0] + lw;
      height = bounds[3] - bounds[1] + lw;
      return [width, height].map(Math.ceil);
    }

    get translate() {
      const lw = this.attr('lineWidth');
      return [lw / 2, lw / 2];
    }

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

        const path = this.path;
        if(path) {
          const lineWidth = this.attr('lineWidth'),
            lineCap = this.attr('lineCap'),
            lineJoin = this.attr('lineJoin');
          return path.isPointInPath(offsetX, offsetY) ||
            path.isPointInStroke(offsetX, offsetY, {lineWidth, lineCap, lineJoin});
        }
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points.length) {
        const translate = this.translate;
        drawingContext.translate(translate[0], translate[1]);

        drawingContext.strokeStyle = findColor(
          drawingContext,
          this,
          'strokeColor'
        );
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');

        if(!this.path || !pointsEqual(this.path.points, this.points)) {
          let smooth = this.attr('smooth');
          const points = this.points.slice(0, this.points.length);

          if (smooth && !smooth.length) {
            smooth = [0, points.length - 1];
          }
          let d = '';
          // 绘制光滑曲线（直线）
          if (!smooth) {
            points.forEach((point, i) => {
              if (i === 0) {
                d += `M${point.join(' ')}`;
              } else {
                d += `L${point.join(' ')}`;
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
                  d += `M${points[0].join(' ')}`;
                } else {
                  // 如果是转换点
                  d += `L${points[i].join(' ')}`;
                }
              }
              const smoothPoints = points.slice(smoothStart, smoothEnd + 1);
              d += makeSmoothCurveLine(smoothPoints, smoothStart);
              subIndex = smoothEnd;
            });
            for (let i = subIndex; i < points.length - 1; i++) {
              // 如果绘图未绘制到最后一个点
              d += `L${points[i].join(' ')}`;
            }
          }
          d += 'Z';
          this.path = new SvgPath(d);
          this.path.points = [...this.points];
        }
        if(this.path) {
          this.path.beginPath().to(drawingContext);
          drawingContext.fill();
          drawingContext.stroke();
        }
      }
      return drawingContext;
    }
  }
  registerNodeType('polygon', Polygon, false);
  return {Polygon};
}
