import EllipseSectorPlugin from './ellipseSector';

export default function install({use, utils, registerNodeType}) {
  const {EllipseSector} = use(EllipseSectorPlugin, null, false);

  class Sector extends EllipseSector {
    get radiuses() {
      return [this.attr('radius'), this.attr('radius')];
    }
  }

  Sector.defineAttributes({
    radius(attr, val) {
      attr.clearFlow();
      attr.set('radius', val);
    }
  });

  registerNodeType('sector', Sector, false);
  return {Sector};
}
