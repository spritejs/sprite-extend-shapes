import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);

  class PolygonAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: '60',
        sides: [10, 10],
      });
    }

    @attr
    set angle(val) {
      this.set('angle', val);
    }

    @attr
    set sides(val) {
      this.set('sides', val);
    }
  }

  class Triangle extends Polygon {
    static Attr = PolygonAttr;

    get points() {
      const [s1, s2] = this.attr('sides');
      const angle = (Math.PI / 180) * this.attr('angle');
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      return [p0, p1, p2];
    }
  }

  registerNodeType('triangle', Triangle, false);
  return {Triangle};
}
