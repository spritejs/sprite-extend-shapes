import Shape from '../shape'
import Sector from './sector'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class EllipseAttr extends Sector.Attr {
  constructor(subject) {
    super(subject)
  }

  @attr
  set radiusX(radius) {
    this.set('radiusX', radius)
  }

  @attr
  set radiusY(radius) {
    this.set('radiusY', radius)
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
    const step = radiusX > radiusY ? 1 / radiusX : 1 / radiusY // 分割份数
    const rotate = (45 / 180) * Math.PI
    const radius = Math.min(radiusX, radiusY)
    const offsetX = radius
    const offsetY = 0

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    drawingContext.moveTo(offsetX + radiusX, offsetY)
    drawingContext.beginPath()
    // 循环等分绘制
    for (let i = 0; i <= 2 * Math.PI; i += step) {
      drawingContext.lineTo(
        offsetX + radiusX * Math.cos(i),
        offsetY + radiusY * Math.sin(i)
      )
    }
    drawingContext.closePath()
    drawingContext.fill()
    drawingContext.stroke()

    return drawingContext
  }
}

export default Ellipse
