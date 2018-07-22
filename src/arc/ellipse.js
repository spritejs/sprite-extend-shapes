import Shape from '../shape'
import Arc from './arc'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class EllipseAttr extends Arc.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      startAngle: 0,
      endAngle: 360
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
  set rotate(angle) {
    this.set('rotate', angle)
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

class Ellipse extends Shape {
  static Attr = EllipseAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radiusX = this.attr('radiusX')
    const radiusY = this.attr('radiusY')
    const x = 0
    const y = 0
    const startAngle = (this.attr('startAngle') / 180) * Math.PI
    const endAngle = (this.attr('endAngle') / 180) * Math.PI

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    if (drawingContext.ellipse) {
      const rotate = (this.attr('rotate') / 180) * Math.PI
      const anticlockwise = this.attr('anticlockwise')

      drawingContext.beginPath()
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
      // const step = radiusX > radiusY ? 1 / radiusX : 1 / radiusY // 分割份数
      // drawingContext.moveTo(offsetX + radiusX, offsetY)
      // drawingContext.beginPath()
      // // 循环等分绘制
      // for (let i = 0; i <= 2 * Math.PI; i += step) {
      //   drawingContext.lineTo(
      //     offsetX + radiusX * Math.cos(i),
      //     offsetY + radiusY * Math.sin(i)
      //   )
      // }
      throw new Error("Your browser does'n support canvas ellipse")
    }

    return drawingContext
  }
}

export default Ellipse
