import PolygonPlugin from './polygon';

function polygonPoints(outerRadius, innerRadius, number, lw) {
  const radAngle = outerRadius > innerRadius ? Math.PI / 2 : -Math.PI / 2;
  const radAlpha = Math.PI / number;
  let points = [];

  for (let i = 1; i <= number * 2; i++) {
    let r = i % 2 ? outerRadius : innerRadius;
    let alpha = radAlpha * i + radAngle;
    let cos = Math.cos(alpha);
    let sin = Math.sin(alpha);
    let x = r * cos - (lw / 2) * cos;
    let y = r * sin - (lw / 1.75) * sin;

    points.push([x + outerRadius, y + outerRadius]);
  }

  return points;
}

export default function install({use, utils, registerNodeType}) {
  const {attr, flow} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);

  class PolygonAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angles: 5
      });
    }

    @attr
    set angles(num) {
      this.clearFlow();
      this.set('angles', num);
    }

    @attr
    set radius(val) {
      // 圆半径
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set innerRadius(val) {
      this.clearFlow();
      this.set('innerRadius', val);
    }
  }

  class Star extends Polygon {
    static Attr = PolygonAttr;

    get lineBoundings() {
      const radius = this.attr('radius');
      const points = this.points;
      let lw = this.attr('lineWidth');

      let minX = null,
        minY = null,
        maxX = null,
        maxY = null;
      let x, y;
      for (let point of points) {
        [x, y] = point;

        minX = minX ? Math.min(minX, x) : x;
        minY = minY ? Math.min(minY, y) : y;
        maxX = maxX ? Math.max(maxX, x) : x;
        maxY = maxY ? Math.max(maxY, y) : y;
      }

      return [0, 0, maxX + minX, maxY + minY];
    }

    @flow
    get contentSize() {
      const lw = this.attr('lineWidth');
      const bounds = this.lineBoundings;
      let [width, height] = this.attrSize;
      width = bounds[2] - bounds[0];
      height = bounds[3] - bounds[1];
      return [width, height].map(Math.ceil);
    }

    get translate() {
      return [0, 0];
    }

    get points() {
      let radius = this.attr('radius');
      let lw = this.attr('lineWidth');
      let innerRadius = this.attr('innerRadius') || 0.5 * radius;
      let angles = this.attr('angles');

      if (radius <= innerRadius) {
        // 绘制正多边形
        innerRadius = radius;
        angles /= 2;
      }

      return polygonPoints(radius, innerRadius, angles, lw);
    }
  }

  registerNodeType('star', Star, false);
  return {Star};
}
