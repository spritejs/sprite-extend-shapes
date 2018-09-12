import EllipseSectorPlugin from './ellipseSector';

export default function install({use, utils, registerNodeType}) {
  const {EllipseSector} = use(EllipseSectorPlugin, null, false);
  class Ellipse extends EllipseSector {
    get startAngle() {
      return 0;
    }

    get endAngle() {
      return 2 * Math.PI;
    }
  }

  registerNodeType('ellipse', Ellipse, false);

  return {Ellipse};
}
