import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {Polygon} = use(PolygonPlugin, null, false);

  class rectAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: '90',
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

    get points() {
      const [s1, s2] = this.attr('sides') || this.attr('size');
      const oAngle = this.attr('angle');
      let cosAngle = 0;
      let sinAngle = 1;
      if (oAngle === 90) {
        // 90默认不计算
      } else {
        const angle = Math.PI * this.attr('angle') / 180;
        cosAngle = Math.cos(angle);
        sinAngle = Math.sin(angle);
      }
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s1 + s2 * cosAngle, s2 * sinAngle];
      const p3 = [s2 * cosAngle, s2 * sinAngle];
      return [p0, p1, p2, p3];

      // const [s1, s2] = this.attr('sides') || this.attr('size');
      // const angle = (Math.PI / 180) * this.attr('angle');
      // const p0 = [0, 0];
      // const p1 = [s1, 0];
      // const p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
      // const p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      // return [p0, p1, p2, p3];
    }
  }

  registerNodeType('rect', Rect, false);
  return {Rect};
}
