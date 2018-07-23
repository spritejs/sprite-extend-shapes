import Polygon from './polygon';
import {utils} from 'sprite-core';

const {attr} = utils;

class PolygonAttr extends Polygon.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      angles: 5,
    });
  }

  @attr
  set angles(num) {
    this.set('angles', num);
  }

  @attr
  set radius(val) {
    // 圆半径
    this.set('radius', val);
  }

  @attr
  set innerRadius(val) {
    this.set('innerRadius', val);
  }
}

function getStarPolygonPoints(angles) {
  const points = [];
  const pointsLength = angles * 2;

  return function (outerRadius, innerRadius) {
    const offsetX = outerRadius;
    const radAngle = -Math.PI / 2;
    const radAlpha = (Math.PI * 2) / angles / 2;

    for(let i = 1; i <= pointsLength; i++) {
      const rad = radAlpha * i + radAngle;
      const len = i % 2 ? innerRadius : outerRadius;
      const xPos = offsetX + Math.cos(rad) * len;
      const yPos = Math.sin(rad) * len;

      points.push([xPos, yPos]);
    }

    return points;
  };
}

class Star extends Polygon {
  static Attr = PolygonAttr

  get points() {
    const radius = this.attr('radius');
    const innerRadius = this.attr('innerRadius') || 0.4 * radius;

    return getStarPolygonPoints(this.attr('angles'))(radius, innerRadius);
  }
}

export default Star;
