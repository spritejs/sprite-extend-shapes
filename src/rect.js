import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);
  const reflow = true;

  class rectAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: 90,
        sides: null,
        size: null
      });
    }

    @attr({reflow})
    set angle(val) {
      this.set('angle', val);
    }

    @attr({reflow})
    set sides(val) {
      this.set('sides', val);
    }
  }

  class Rect extends Polygon {
    static Attr = rectAttr;

    get lineBoundings() {
      const lw = this.attr('lineWidth');
      const bounds = [0, 0, 0, 0];
      const points = this.points;

      points.forEach(([x, y]) => {
        x += lw;
        y += lw;
        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);
        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
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

    get points() {
      const lw = this.attr('lineWidth');
      let [s1, s2] = this.attr('sides') || this.attr('size');
      s1 -= lw * 1;
      s2 -= lw * 1;
      const oAngle = this.attr('angle');
      let cosAngle = 0;
      let sinAngle = 1;
      if (oAngle === 90) {
        // 90默认不处理
      } else {
        const angle = (Math.PI * this.attr('angle')) / 180;
        cosAngle = Math.cos(angle);
        sinAngle = Math.sin(angle);
      }
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s1 + s2 * cosAngle, s2 * sinAngle];
      const p3 = [s2 * cosAngle, s2 * sinAngle];
      return [p0, p1, p2, p3];
    }
  }

  registerNodeType('rect', Rect, false);
  return {Rect};
}
