import Shape from './shape'
import Polygon from './polygon'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class PolygonAttr extends Shape.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      angles: 5
    })
  }

  @attr
  set angles(num) {
    this.set('angles', num)
  }

  @attr
  set radius(val) {
    // 圆半径
    this.set('radius', val)
  }

  @attr
  set innerRadius(val) {
    this.set('innerRadius', val)
  }
}

function calculateStarN(sides) {
  return function(x, y, radius, innerRadius) {
    let sideIndentRadius = innerRadius
    let radAngle = -Math.PI / 2
    let radAlpha = (Math.PI * 2) / sides / 2

    const points = []

    for (let i = 1; i <= sides * 2; i++) {
      let rad = radAlpha * i + radAngle
      let len = i % 2 ? sideIndentRadius : radius
      let xPos = x + Math.cos(rad) * len
      let yPos = y + Math.sin(rad) * len

      points.push([xPos, yPos])
    }

    return points
  }
}

class Star extends Polygon {
  static Attr = PolygonAttr

  get points() {
    const [x, y] = this.attr('pos')
    const radius = this.attr('radius')
    const innerRadius = this.attr('innerRadius') || 0.4 * radius

    return calculateStarN(this.attr('angles'))(x, y, radius, innerRadius)
  }
}

export default Star
