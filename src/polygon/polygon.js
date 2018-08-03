import {utils} from 'sprite-core';
import Shape from '../shape';

const {attr, parseColorString, findColor} = utils;

class PolygonAttr extends Shape.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      points: [],
      color: 'rgba(0,0,0,1)',
      fillColor: 'rgba(0, 0, 0, 1)',
      lineWidth: 1,
    });
  }

  @attr
  set points(val) {
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

  get points() {
    return this.attr('points');
  }

  get lineBoundings() {
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

  get contentSize() {
    const bounds = this.lineBoundings;
    const lw = this.attr('lineWidth');
    let [width, height] = this.attr('size');

    if(width === '') {
      width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
    }
    if(height === '') {
      height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
    }

    return [width, height].map(Math.ceil);
  }

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

  render(t, drawingContext) {
    super.render(t, drawingContext);

    if(this.points.length) {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      drawingContext.translate(
        -Math.min(0, bounds[0]) + lw,
        -Math.min(0, bounds[1]) + lw
      );
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
      drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
      drawingContext.miterLimit = 3;
      drawingContext.lineWidth = this.attr('lineWidth');
      drawingContext.setLineDash(this.attr('lineDash'));
      drawingContext.lineDashOffset = this.attr('lineDashOffset');
      drawingContext.beginPath();
      this.points.forEach((point, i) => {
        if(i === 0) {
          drawingContext.moveTo(...point);
        } else {
          drawingContext.lineTo(...point);
        }
      });
      drawingContext.closePath();
      drawingContext.stroke();
      drawingContext.fill();
    }
    return drawingContext;
  }
}

export default Polygon;
