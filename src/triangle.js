import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {Polygon} = use(PolygonPlugin, null, false);

  class Triangle extends Polygon {
    get contentSize() {
      let [s1, s2] = this.attr('sides');
      return [s1, s2];
    }

    get points() {
      let [s1, s2] = this.attr('sides');
      const lw = this.attr('lineWidth');

      s1 -= lw * 2;
      s2 -= lw * 2;
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
