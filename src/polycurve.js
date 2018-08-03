import {utils} from 'sprite-core';
import Shape from './shape';
const {attr, parseColorString, findColor} = utils;

class PolycurveAttr extends Shape.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      points: [],
      startPoint: [0, 0],
      color: 'rgba(0,0,0,1)',
      lineWidth: 1,
      lineCap: 'round',
      lineJoin: 'round',
    });
  }

  @attr
  set points(val) {
    this.set('points', val);
  }

  @attr
  set startPoint(val) {
    this.set('startPoint', val);
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
  set lineCap(val) {
    this.set('lineCap', val);
  }

  @attr
  set lineJoin(val) {
    this.set('lineJoin', val);
  }
}

class Polycurve extends Shape {
  static Attr = PolycurveAttr;

  get points() {
    return this.attr('points');
  }

  get isVirtual() {
    return true;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
    const startPoint = this.attr('startPoint');
    const points = this.points;

    drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
    drawingContext.lineJoin = this.attr('lineJoin');
    drawingContext.lineCap = this.attr('lineCap');
    drawingContext.lineWidth = this.attr('lineWidth');
    drawingContext.setLineDash(this.attr('lineDash'));
    drawingContext.lineDashOffset = this.attr('lineDashOffset');

    drawingContext.moveTo(...startPoint);
    points.forEach((point) => {
      const [cp1x, cp1y, cp2x, cp2y, x, y] = point;
      drawingContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    });
    drawingContext.stroke();

    return drawingContext;
  }
}

export default Polycurve;
