import EllipsePlugin from './ellipse';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {Ellipse} = use(EllipsePlugin, null, false);

  class CircleAttr extends Ellipse.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 10,
      });
    }

    @attr
    set radius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('radius', val);
    }
  }

  class Circle extends Ellipse {
    static Attr = CircleAttr;

    get radiuses() {
      const radius = this.attr('radius');
      return [radius, radius];
    }
  }

  registerNodeType('circle', Circle, false);

  return {Circle};
}
