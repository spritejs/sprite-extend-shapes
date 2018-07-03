import Shape from './shape'
import {utils} from 'sprite-core'

const {attr, parseColorString, findColor} = utils

class PolylineAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      points: null,
      color: 'rgba(0,0,0,1)',
      lineWidth: 1,
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
}

class Polyline extends Shape {
  static Attr = PolylineAttr
  get points() {
    return this.attr('points')
  }
  get lineBoundings() {
    const bounds = [0, 0, 0, 0]
    const points = this.points
    points.forEach(([x, y]) => {
      bounds[0] = Math.min(x, bounds[0])
      bounds[1] = Math.min(y, bounds[1])
      bounds[2] = Math.max(x, bounds[2])
      bounds[3] = Math.max(y, bounds[3])
    })
    return bounds
  }
  get originalRect() {
    const rect = super.originalRect
    const bounds = this.lineBoundings,
      lw = this.attr('lineWidth')
    rect[0] -= -bounds[0] + lw / 2
    rect[1] -= -bounds[1] + lw / 2
    return rect
  }
  get contentSize() {
    const bounds = this.lineBoundings,
      lw = this.attr('lineWidth')

    return [bounds[2] - bounds[0] + lw,
      bounds[3] - bounds[1] + lw]
  }
  render(t, drawingContext) {
    super.render(t, drawingContext)
    if(this.points) {
      const bounds = this.lineBoundings,
        lw = this.attr('lineWidth')
      drawingContext.translate(-bounds[0] + lw / 2, -bounds[1] + lw / 2)
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
      drawingContext.lineJoin = 'round'
      drawingContext.lineCap = 'round'
      drawingContext.lineWidth = this.attr('lineWidth')
      drawingContext.beginPath()

      this.points.forEach((point, i) => {
        if(i === 0) {
          drawingContext.moveTo(...point)
        } else {
          drawingContext.lineTo(...point)
        }
      })
      drawingContext.stroke()
    }
    return drawingContext
  }
}

export default Polyline
