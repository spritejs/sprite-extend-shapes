import Shape from './shape'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

const getDist = (p1, p2) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

const getRotationAngle = (point, center) => {
  const [px, py] = point;
  const [cx, cy] = center;
  return Math.atan2(1, 0) - Math.atan2((cx - px), (cy - py));
}

class ArcAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      center: null,
      startPoint: [0, 0],
      angel: 0,
      anticlockwise: false,
      color: '#000',
      lineWidth: 1
    })
  }


  // 圆弧的圆心
  @attr
  set center(val) {
    this.set('center', val)
  }
  
  // 圆弧起始点
  @attr
  set startPoint(point) {
    this.set('startPoint', point)
  } 

  // 旋转角度
  @attr
  set angle(angle) {
    this.set('angle', angle)
  }

  // 旋转方向
  @attr
  set anticlockwise(val) {
    this.set('anticlockwise', val)
  }

  // 线条颜色
  @attr
  set color(val) {
    val = parseColorString(val)
    this.set('color', val)
  }

  // 线宽
  @attr
  set lineWidth(val) {
    this.set('lineWidth', val)
  }


  
}

class Arc extends Shape {
  static Attr = ArcAttr

  get isVirtual() {
    return true
  }

  render(t, ctx){
    super.render(t, ctx);
    if(this.attr('center')) {
      const [cx, cy] = this.attr('center');
      const [sx, sy] = this.attr('startPoint');
      const radius = getDist([cx, cy], [sx, sy]);
      const anticlockwise = this.attr('anticlockwise');
      const angle = this.attr('angle');
      const startAngle = getRotationAngle([cx, cy], [sx, sy]);
      const endAngle = anticlockwise ? startAngle - angle : startAngle + angle;

      ctx.lineWidth = this.attr('lineWidth');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      
      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
      ctx.stroke();
    } else {
      throw new Error('center must be given when drawing an arc!')
    }
    return ctx;
  }
}

export default Arc
