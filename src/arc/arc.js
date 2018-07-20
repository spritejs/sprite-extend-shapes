import Shape from '../shape'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class ArcAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      radius: 0,
      startPoint: [0, 0],
      anticlockwise: false,
      color: '#000',
      lineWidth: 1
    })
  }

  @attr
  set color(val) {
    val = parseColorString(val)
    this.set('color', val)
  }

  @attr
  set lineWidth(val) {
    this.set('lineWidth', val)
  }

  @attr
  set startPoint(point) {
    this.set('startPoint', point)
  }

  @attr
  set angle(angle) {
    this.set('angle', angle)
  }
}

class Arc extends Shape {
  static Attr = ArcAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radius = this.attr('radius')
    const [x, y] = this.attr('startPoint')
    const angle = this.attr('angle') // 旋转角度
    const startAngle = Math.acos(x / radius) // 起始弧度
    const endAngle = startAngle + (angle / 180) * Math.PI // 结束弧度：起始弧度 + 使用时传入的角度（转换为弧度）
    const anticlockwise = this.attr('anticlockwise') // true: 逆时针绘制；false：顺时针绘制；default: false

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')

    drawingContext.beginPath()
    drawingContext.arc(0, 0, radius, startAngle, endAngle, anticlockwise)
    drawingContext.stroke()

    return drawingContext
  }
}

export default Arc
