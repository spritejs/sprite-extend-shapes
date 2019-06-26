import EllipsePlugin from './ellipse';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {Ellipse} = use(EllipsePlugin, null, false);

  const reflow = true;

  class CircleAttr extends Ellipse.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 10
      });
    }

    @attr({reflow})
    set radius(val) {
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
