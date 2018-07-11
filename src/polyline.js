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
  get isVirtual() {
    return true
  }
  render(t, drawingContext) {
    super.render(t, drawingContext)
    if(this.points) {
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
