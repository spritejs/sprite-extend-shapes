import Shape from '../shape'
import Circle from './circle'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class RingAttr extends Circle.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      fillColor: 'transparent',
      innerRadius: 0,
      outerRadius: 0
    })
  }

  @attr
  set innerRadius(radius) {
    this.set('innerRadius', radius)
  }

  @attr
  set outerRadius(radius) {
    this.set('outerRadius', radius)
  }
}

class Ring extends Shape {
  static Attr = RingAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const innerRadius = this.attr('innerRadius')
    const outerRadius = this.attr('outerRadius')
    const offsetX = outerRadius
    const offsetY = 0
    const startAngle = 0
    const endAngle = Math.PI * 2

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    drawingContext.beginPath()

    drawingContext.arc(offsetX, offsetY, outerRadius, startAngle, endAngle)
    drawingContext.moveTo(offsetX + outerRadius - innerRadius, offsetY) // 重新落笔
    drawingContext.arc(offsetX, offsetY, innerRadius, startAngle, endAngle)

    drawingContext.fill('evenodd') // 奇偶环绕原则剪切
    drawingContext.stroke()

    return drawingContext
  }
}

export default Ring
