import {utils} from 'sprite-core';
import Shape from './shape';

const {attr, parseColorString, findColor} = utils;

class RingAttr extends Shape.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      innerRaius: 10,
      outerRadius: 20,
      startAngle: 0,
      endAngle: 360,
      color: "rgba(0,0,0,1)",
      fillColor: "rgba(0, 0, 0, 1)",
      lineWidth: 1,
      lineDash: [4, 16],
      lineDashOffset: 2
    });
  }

  @attr
  set lineDash(val) {
    this.attr("lineDash", val);
  }

  @attr
  set lineDashOffset(val) {
    this.attr("lineDashOffset", val);
  }

  // 内圆半径
  @attr
  set innerRadius(val) {
    this.set('innerRadius', val);
  }

  // 外圆半径
  @attr
  set outerRadius(val) {
    this.set('outerRadius', val);
  }

  @attr
  set startAngle(val) {
    this.set('startAngle', val);
  }

  @attr
  set endAngle(val) {
    this.set('endAngle', val);
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

class Ring extends Shape {
  static Attr = RingAttr;

  // 边界依赖于最大圆
  get lineBoundings() {
    const radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
    return [0, 0, 2 * radius, 2 * radius];
  }

  get startAngle() {
    return this.attr('startAngle');
  }

  get endAngle() {
    return this.attr('endAngle');
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

  render(t, ctx) {
    super.render(t, ctx);
    const innerRadius = Math.min(
      this.attr('innerRadius'),
      this.attr('outerRadius')
    );
    const outerRadius = Math.max(
      this.attr('innerRadius'),
      this.attr('outerRadius')
    );

    const bounds = this.lineBoundings;
    const lw = this.attr('lineWidth');

    const isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
    const startAngle = isCircle ? 0 : this.startAngle;
    const endAngle = isCircle ? Math.PI * 2 : this.endAngle;
    ctx.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);

    ctx.strokeStyle = findColor(ctx, this, 'color');
    ctx.fillStyle = findColor(ctx, this, 'fillColor');
    ctx.miterLimit = 3;
<<<<<<< HEAD
    ctx.lineWidth = this.attr('lineWidth');
=======
    ctx.lineWidth = this.attr("lineWidth");
    ctx.setLineDash(this.attr("lineDash"));
    ctx.lineDashOffset = this.attr("lineDashOffset");
>>>>>>> d9218a8b1dd868b1638e8e98360cc4d4c87d7dcc
    ctx.beginPath();

    ctx.arc(outerRadius, outerRadius, outerRadius, startAngle, endAngle, false);
    if(endAngle - startAngle === Math.PI * 2) {
      ctx.moveTo(outerRadius + innerRadius, outerRadius);
    }
    ctx.arc(outerRadius, outerRadius, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    return ctx;
  }
}

export default Ring;
