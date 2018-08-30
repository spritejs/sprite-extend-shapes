import EllipseSectorPlugin from './ellipseSector';

export default function install({use, utils, registerNodeType}) {
  const {attr} = utils;
  const {EllipseSector} = use(EllipseSectorPlugin, null, false);

  class SectorAttr extends EllipseSector.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 10,
      });
    }

    @attr
    set radius(val) {
      this.set('radius', val);
    }
  }

  class Sector extends EllipseSector {
    static Attr = SectorAttr;

    get radiuses() {
      const radius = this.attr('radius');
      return [radius, radius];
    }
  }

  registerNodeType('sector', Sector, false);
  return {Sector};
}
