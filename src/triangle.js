import Shape from './shape';
import Polygon from './polyline';
import {utils} from 'sprite-core';

const {attr, parseColorString, findColor} = utils

class PolygonAttr extends Shape.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      type: 'equilateral'
    })
  }

//   默认使用等边三角形（equilateral），其他options：等腰三角形（）
  @attr
  set type(val) {
    this.set('type', val);
  }
}


class Triangle extends Polygon {
  static Attr = PolygonAttr
  render(t, drawingContext) {
    if(this.points) {
      const bounds = this.lineBoundings,
        lw = this.attr('lineWidth');
      drawingContext.translate(-bounds[0] + lw / 2, -bounds[1] + lw / 2)
      drawingContext.strokeStyle = findColor(drawingContext, this, 'color')
      drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor')
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
      drawingContext.closePath()
      drawingContext.stroke()
      drawingContext.fill()
    }
    return drawingContext
  }
}

export default Polygon
