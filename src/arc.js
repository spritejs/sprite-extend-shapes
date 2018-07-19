import Shape from './shape'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class ArcAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      radius: 0,
      points: [[0, 0], [0, 0]],
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
  set points(points) {
    this.set('points', points)
  }

  @attr
  set startAngle(angle) {
    this.set('startAngle', angle)
  }

  @attr
  set endAngle(angle) {
    this.set('endAngle', angle)
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
    let startAngle = 0
    let endAngle = 0

    const attrStartAngle = this.attr('startAngle')
    const attrEndAngle = this.attr('endAngle')

    if (attrStartAngle >= 0 && attrEndAngle >= 0) {
      startAngle = (attrStartAngle / 180) * Math.PI
      endAngle = (attrEndAngle / 180) * Math.PI
    } else {
      const [x, y] = this.attr('pos')
      const points = this.attr('points')
      startAngle = Math.acos((points[0][0] - (x + radius)) / radius)
      endAngle = Math.acos((points[1][0] - (x + radius)) / radius)
    }

    const offsetX = radius
    const offsetY = 0
    const anticlockwise = this.attr('anticlockwise') // true: 逆时针绘制；false：顺时针绘制；default: false

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')

    drawingContext.beginPath()
    drawingContext.arc(
      offsetX,
      offsetY,
      radius,
      startAngle,
      endAngle,
      anticlockwise
    )
    drawingContext.stroke()

    return drawingContext
  }
}

export default Arc
