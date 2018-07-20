import Shape from '../shape'
import Sector from './sector'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class CircleAttr extends Sector.Attr {
  constructor(subject) {
    super(subject)
  }
}

class Circle extends Shape {
  static Attr = CircleAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radius = this.attr('radius')
    const offsetX = radius
    const offsetY = 0
    const startAngle = 0
    const endAngle = 2 * Math.PI

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    drawingContext.beginPath()
    drawingContext.arc(offsetX, offsetY, radius, startAngle, endAngle)
    drawingContext.fill()
    drawingContext.stroke()

    return drawingContext
  }
}

export default Circle
