import Shape from '../shape'
import Ellipse from './sector'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class EllipseSectorAttr extends Ellipse.Attr {
  constructor(subject) {
    super(subject)
  }
}

class EllipseSector extends Shape {
  static Attr = EllipseSectorAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radiusX = this.attr('radiusX')
    const radiusY = this.attr('radiusY')
    const x = 0
    const y = 0
    const rotate = (this.attr('rotate') / 180) * Math.PI
    const startAngle = (this.attr('startAngle') / 180) * Math.PI
    const endAngle = (this.attr('endAngle') / 180) * Math.PI
    const anticlockwise = this.attr('anticlockwise')

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    if (drawingContext.ellipse) {
      drawingContext.beginPath()
      drawingContext.moveTo(x, y)
      drawingContext.ellipse(
        x,
        y,
        radiusX,
        radiusY,
        rotate,
        startAngle,
        endAngle,
        anticlockwise
      )
      drawingContext.closePath()
      drawingContext.fill()
      drawingContext.stroke()
    } else {
      throw new Error("Your browser does'n support canvas ellipse")
    }

    return drawingContext
  }
}

export default EllipseSector
