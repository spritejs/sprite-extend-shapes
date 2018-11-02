import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);

  class rectAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: '90',
        sides: [10, 10],
        size: null
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

    get points() {
      const size = this.attr('size');

      if (size && size.every(Boolean)) {
        const [w, h] = size.map(Number);
        const [x, y] = this.attr('pos');
        const p0 = [x, y];
        const p1 = [x + w, y];
        const p2 = [x + w, y + h];
        const p3 = [x, y + h];
        return [p0, p1, p2, p3];
      }

      const [s1, s2] = this.attr('sides');
      const angle = (Math.PI / 180) * this.attr('angle');
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
      const p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      return [p0, p1, p2, p3];
    }
  }

  registerNodeType('rect', Rect, false);
  return {Rect};
}
