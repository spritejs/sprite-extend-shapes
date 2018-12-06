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

// auto use
// if (typeof window !== 'undefined' && window.spritejs) {
  // window.spritejs.use(install);
// }

export function install(spritejs) {
  return [
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
    Ring,
  ].reduce((pkg, Node) => {
    return Object.assign(pkg, spritejs.use(Node, null, false));
  }, {});
}

export const shapes = {
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
  Ring,
};
