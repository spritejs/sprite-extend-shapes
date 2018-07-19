import Shape from './shape'
import Polygon from './polygon'
import { utils } from 'sprite-core'

const { attr, parseColorString, findColor } = utils

class PolygonAttr extends Polygon.Attr {
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

function getStarPolygonPoints(angles) {
  const points = []
  const pointsLength = angles * 2

  return function(outerRadius, innerRadius) {
    const offsetX = Math.floor(outerRadius / 2)
    let radAngle = -Math.PI / 2
    let radAlpha = (Math.PI * 2) / angles / 2

    for (let i = 1; i <= pointsLength; i++) {
      let rad = radAlpha * i + radAngle
      let len = i % 2 ? innerRadius : outerRadius
      let xPos = offsetX + Math.cos(rad) * len
      let yPos = Math.sin(rad) * len

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

    return getStarPolygonPoints(this.attr('angles'))(radius, innerRadius)
  }
}

export default Star
