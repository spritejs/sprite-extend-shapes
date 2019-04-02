import Shape from './shape';
import Polyline from './polyline';

import Polycurve from './polycurve';
import Wave from './wave';

import Polygon from './polygon/polygon';
import Triangle from './polygon/triangle';
import Rect from './polygon/rect';
import Star from './polygon/star';

import Arc from './arc';
import Sector from './ellipseShape/sector';
import Ellipse from './ellipseShape/ellipse';
import EllipseSector from './ellipseShape/ellipseSector';
import EllipseArc from './ellipseShape/ellipseArc';
import Circle from './ellipseShape/circle';
import Ring from './ring';

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
// 移除是为了实现按需加载
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
