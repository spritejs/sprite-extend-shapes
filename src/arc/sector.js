import Shape from '../shape'
import Ellipse from './ellipse'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class SectorAttr extends Ellipse.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      fillColor: 'transparent'
    })
  }

  @attr
  set fillColor(val) {
    val = parseColorString(val)
    this.set('fillColor', val)
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

class Sector extends Shape {
  static Attr = SectorAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radius = this.attr('radius')
    const startAngle = (this.attr('startAngle') / 180) * Math.PI
    const endAngle = (this.attr('endAngle') / 180) * Math.PI
    const x = radius // 圆心 x 坐标
    const y = 0 // 圆心 y 坐标
    const anticlockwise = this.attr('anticlockwise') // true: 逆时针绘制；false：顺时针绘制；default: false

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    drawingContext.beginPath()
    drawingContext.moveTo(x, y)
    drawingContext.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    drawingContext.closePath()
    drawingContext.fill()
    drawingContext.stroke()

    return drawingContext
  }
}

export default Sector
