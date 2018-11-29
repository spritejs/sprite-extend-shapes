import PolygonPlugin from './polygon';

const sin = num => +Math.sin(num).toFixed(15);
const cos = num => +Math.cos(num).toFixed(15);

export default function install({use, utils, registerNodeType}) {
  const {attr, flow} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);

  class rectAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: 90,
        sides: null,
        size: null,
      });
    }

    @attr
    set angle(val) {
      this.clearCache();
      this.clearFlow();
      this.set('angle', val);
    }

    @attr
    set sides(val) {
      this.clearCache();
      this.clearFlow();
      this.set('sides', val);
    }
  }

  class Rect extends Polygon {
    static Attr = rectAttr;

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;
      width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      return [width, height].map(Math.ceil);
    }

    get points() {
      const [s1, s2] = this.attr('sides') || this.attr('size');
      const angle = (Math.PI / 180) * this.attr('angle');
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s1 + s2 * cos(angle), s2 * sin(angle)];
      const p3 = [0, s2 * sin(angle)];

      return [p0, p1, p2, p3];
    }
  }

  registerNodeType('rect', Rect, false);
  return {Rect};
}
