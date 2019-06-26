import ShapePlugin from './shape';
import EllipseArcPlugin from './ellipseArc';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {EllipseArc} = use(EllipseArcPlugin, null, false);

  const reflow = true;

  class ArcAttr extends EllipseArc.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 10,
      });
    }

    // 圆弧起始点
    @attr({reflow})
    set radius(val) {
      this.set('radius', val);
    }
  }

  class Arc extends EllipseArc {
    static Attr = ArcAttr;

    get radiuses() {
      const radius = this.attr('radius');
      return [radius, radius];
    }
  }

  registerNodeType('arc', Arc, false);

  return {Arc};
}
