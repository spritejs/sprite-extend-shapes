import Shape from './shape';

import Arc from './arc';
import Polyline from './polyline';
import Polycurve from './polycurve';
import Wave from './wave';
import Ring from './ring';

import Polygon from './polygon';
import Triangle from './triangle';
import Rect from './rect';
import Star from './star';

import EllipseSector from './ellipseSector';
import EllipseArc from './ellipseArc';
import Sector from './sector';
import Ellipse from './ellipse';
import Circle from './circle';

const version = require('../package.json').version;

export const Shapes = {
  version,
  install,
  Shape,
  Polyline,
  Polycurve,
  Wave,
  Polygon,
  Triangle,
  Rect,
  Star,
  Arc,
  Sector,
  Ellipse,
  EllipseSector,
  EllipseArc,
  Circle,
  Ring
};

function install(spritejs) {
  return Object.keys(Shapes).reduce((pkg, key) => {
    if (key === 'version' || key === 'install') {
      return pkg;
    }

    return Object.assign(pkg, spritejs.use(Shapes[key], null, false));
  }, {});
}

// auto use
// if (typeof window !== 'undefined' && window.spritejs) {
//   window.spritejs.use(Shapes);
// }

export {
  version,
  install,
  Shape,
  Polyline,
  Polycurve,
  Wave,
  Polygon,
  Triangle,
  Rect,
  Star,
  Arc,
  Sector,
  Ellipse,
  EllipseSector,
  EllipseArc,
  Circle,
  Ring
};

export default Shapes;
