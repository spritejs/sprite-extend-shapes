import PolygonPlugin from './polygon';

function polygonPoints(outerRadius, innerRadius, number, lw) {
  let center = outerRadius;
  const radAngle = Math.PI / 2;
  const radAlpha = Math.PI / number;
  let points = [];

  for (let i = 1; i <= number * 2; i++) {
    let r = i % 2 ? outerRadius - lw : innerRadius;
    let alpha = radAlpha * i + radAngle;
    let x = center + r * Math.cos(alpha);
    let y = center + r * Math.sin(alpha);
    points.push([x, y]);
  }

  return points;
}

export default function install({use, utils, registerNodeType}) {
  const {attr, flow} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);
  const reflow = true;

  class PolygonAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angles: 5
      });
    }

    @attr({reflow})
    set angles(num) {
      this.set('angles', num);
    }

    @attr({reflow})
    set radius(val) {
      // 圆半径
      this.set('radius', val);
    }

    @attr({reflow})
    set innerRadius(val) {
      this.set('innerRadius', val);
    }
  }

  class Star extends Polygon {
    static Attr = PolygonAttr;

    get lineBoundings() {
      const radius = this.attr('radius');
      return [0, 0, radius * 2, radius * 2];
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
      const radius = this.attr('radius');
      const lw = this.attr('lineWidth');
      const innerRadius = this.attr('innerRadius') || 0.5 * radius;
      return polygonPoints(radius, innerRadius, this.attr('angles'), lw);
    }
  }

  registerNodeType('star', Star, false);
  return {Star};
}
