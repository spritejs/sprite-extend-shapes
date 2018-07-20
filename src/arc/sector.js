import Shape from '../shape'
import Arc from './arc'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class SectorAttr extends Arc.Attr {
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
}

class Sector extends Shape {
  static Attr = SectorAttr

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const radius = this.attr('radius')
    const [x, y] = this.attr('pos') // 图形左上顶点坐标
    const [startX, startY] = this.attr('point') // 弧绘制起点
    const angle = this.attr('angle') // 旋转角度

    let startAngle = Math.acos((startX - (x + radius)) / radius) // 起始弧度： 根据起点计算canvas绘制相对于坐标轴的起始弧度
    let endAngle = startAngle + (angle / 180) * Math.PI // 结束弧度：起始弧度 + 使用时传入的角度（转换为弧度）

    const offsetX = radius // 圆心 x 坐标
    const offsetY = 0 // 圆心 y 坐标
    const anticlockwise = this.attr('anticlockwise') // true: 逆时针绘制；false：顺时针绘制；default: false

    drawingContext.lineWidth = this.attr('lineWidth')
    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')

    drawingContext.beginPath()
    drawingContext.moveTo(offsetX, offsetY)
    drawingContext.arc(
      offsetX,
      offsetY,
      radius,
      startAngle,
      endAngle,
      anticlockwise
    )
    drawingContext.closePath()
    drawingContext.fill()
    drawingContext.stroke()

    return drawingContext
  }
}

export default Sector
