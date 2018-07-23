import Shape from '../shape';
import {utils} from 'sprite-core';

const {attr, parseColorString, findColor} = utils;

class EllipseSectorAttr extends Shape.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      radiusX: 10,
      radiusY: 20,
      startAngle: 0,
      endAngle: 360,
      color: 'rgba(0,0,0,1)',
      fillColor: 'rgba(0, 0, 0, 1)',
      lineWidth: 1,
      anticlockwise: false,
    });
  }

  // 短轴半径
  @attr
  set radiusX(val) {
    this.set('radiusX', val);
  }
  // 长轴半径
  @attr
  set radiusY(val) {
    this.set('radiusY', val);
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
  @attr
  set anticlockwise(val) {
    this.set('anticlockwise', val);
  }
}


function BezierEllipse2(ctx, x, y, a, b) {
  const k = 0.5522848;
  const ox = a * k;// 水平控制点偏移量
  const oy = b * k; // 垂直控制点偏移量</p> <p> ctx.beginPath();
  // 从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
  ctx.moveTo(x - a, y);
  ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
  ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
  ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
  ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
}

class EllipseSector extends Shape {
  static Attr = EllipseSectorAttr

  get radiuses() {
    return [this.attr('radiusX'), this.attr('radiusY')];
  }

  get startAngle() {
    return this.attr('startAngle');
  }

  get endAngle() {
    return this.attr('endAngle');
  }

  get lineBoundings() {
    return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
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
    const [rx, ry] = this.radiuses;
    const bounds = this.lineBoundings;
    const lw = this.attr('lineWidth');
    ctx.translate(
      -Math.min(0, bounds[0]) + lw,
      -Math.min(0, bounds[1]) + lw
    );

    ctx.strokeStyle = findColor(ctx, this, 'color');
    ctx.fillStyle = findColor(ctx, this, 'fillColor');
    ctx.miterLimit = 3;
    ctx.lineWidth = this.attr('lineWidth');
    ctx.beginPath();

    // 绘制椭圆扇形
    if(this.endAngle - this.startAngle < Math.PI * 2) {
      ctx.moveTo(rx, ry);
    }
    // 当可以直接使用ellipse接口的时候
    if(ctx.ellipse) {
      ctx.ellipse(rx, ry, rx, ry, 0, this.startAngle, this.endAngle, this.attr('anticlockwise'));
    } else if(this.endAngle - this.startAngle >= Math.PI * 2) {
      BezierEllipse2(ctx, rx, ry, rx, ry);
    } else {
      throw new Error("you can't draw a ellipseSector when ctx.ellipse is not available!");
    }


    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    return ctx;
  }
}

export default EllipseSector;
