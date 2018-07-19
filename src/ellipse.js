import Shape from './shape'
import Sector from './sector'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class EllipseAttr extends Sector.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      vertical: false
    })
  }

  @attr
  set radiusX(radius) {
    this.set('radiusX', radius)
  }

  @attr
  set radiusY(radius) {
    this.set('radiusY', radius)
  }

  @attr
  set vertical(val) {
    this.set('vertical', val)
  }
}

class Ellipse extends Shape {
  static Attr = EllipseAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radiusX = this.attr('radiusX')
    const radiusY = this.attr('radiusY')
    const radius = Math.max(radiusX, radiusY)
    const offsetX = radius
    const offsetY = 0

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    if (this.attr('vertical')) {
      drawingContext.scale(radiusY / radius, radiusX / radius)
    } else {
      drawingContext.scale(radiusX / radius, radiusY / radius)
    }

    drawingContext.beginPath()
    drawingContext.arc(offsetX, offsetY, radius, 0, 2 * Math.PI)
    drawingContext.fill()
    drawingContext.stroke()

    return drawingContext
  }
}

export default Ellipse
