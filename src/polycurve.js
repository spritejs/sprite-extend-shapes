import Shape from './shape'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class PolycurveAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      points: [],
      color: 'rgba(0,0,0,1)',
      lineWidth: 1,
      lineCap: 'round',
      lineJoin: 'round'
    })
  }

  @attr
  set points(val) {
    this.set('points', val)
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
  set lineCap(val) {
    this.set('lineCap', val)
  }

  @attr
  set lineJoin(val) {
    this.set('lineJoin', val)
  }
}

class Polycurve extends Shape {
  static Attr = PolycurveAttr

  get points() {
    return this.attr('points')
  }

  get isVirtual() {
    return true
  }

  render(t, drawingContext) {
    super.render(t, drawingContext)

    const points = this.points

    if (!points.length || points.length < 3) {
      throw new Error(
        'Polycurve needs 3 points to draw which should be like [[cp1x, cp1y], [cp2x, cp2y], [x, y]]'
      )
      return
    }

    const [posX, posY] = this.attr('pos')
    let [[cp1x, cp1y], [cp2x, cp2y], [x, y]] = points
    cp1x -= posX
    cp1y -= posY
    cp2x -= posX
    cp2y -= posY
    x -= posX
    y -= posY

    drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
    drawingContext.lineJoin = this.attr('lineJoin')
    drawingContext.lineCap = this.attr('lineCap')
    drawingContext.lineWidth = this.attr('lineWidth')

    drawingContext.beginPath()
    drawingContext.moveTo(0, 0)
    drawingContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    drawingContext.stroke()

    return drawingContext
  }
}

export default Polycurve
