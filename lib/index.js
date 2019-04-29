'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ring = exports.Circle = exports.EllipseArc = exports.EllipseSector = exports.Ellipse = exports.Sector = exports.Arc = exports.Star = exports.Rect = exports.Triangle = exports.Polygon = exports.Wave = exports.Polycurve = exports.Polyline = exports.Shape = exports.install = exports.version = exports.Shapes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _arc = require('./arc');

var _arc2 = _interopRequireDefault(_arc);

var _polyline = require('./polyline');

var _polyline2 = _interopRequireDefault(_polyline);

var _polycurve = require('./polycurve');

var _polycurve2 = _interopRequireDefault(_polycurve);

var _wave = require('./wave');

var _wave2 = _interopRequireDefault(_wave);

var _ring = require('./ring');

var _ring2 = _interopRequireDefault(_ring);

var _polygon = require('./polygon');

var _polygon2 = _interopRequireDefault(_polygon);

var _triangle = require('./triangle');

var _triangle2 = _interopRequireDefault(_triangle);

var _rect = require('./rect');

var _rect2 = _interopRequireDefault(_rect);

var _star = require('./star');

var _star2 = _interopRequireDefault(_star);

var _ellipseSector = require('./ellipseSector');

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

var _ellipseArc = require('./ellipseArc');

var _ellipseArc2 = _interopRequireDefault(_ellipseArc);

var _sector = require('./sector');

var _sector2 = _interopRequireDefault(_sector);

var _ellipse = require('./ellipse');

var _ellipse2 = _interopRequireDefault(_ellipse);

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '1.0.5';

var Shapes = exports.Shapes = {
  version: version,
  install: install,
  Shape: _shape2.default,
  Polyline: _polyline2.default,
  Polycurve: _polycurve2.default,
  Wave: _wave2.default,
  Polygon: _polygon2.default,
  Triangle: _triangle2.default,
  Rect: _rect2.default,
  Star: _star2.default,
  Arc: _arc2.default,
  Sector: _sector2.default,
  Ellipse: _ellipse2.default,
  EllipseSector: _ellipseSector2.default,
  EllipseArc: _ellipseArc2.default,
  Circle: _circle2.default,
  Ring: _ring2.default
};

function install(spritejs) {
  return (0, _keys2.default)(Shapes).reduce(function (pkg, key) {
    if (key === 'version' || key === 'install') {
      return pkg;
    }

    return (0, _assign2.default)(pkg, spritejs.use(Shapes[key], null, false));
  }, {});
}

// auto use
// if (typeof window !== 'undefined' && window.spritejs) {
//   window.spritejs.use(Shapes);
// }

exports.version = version;
exports.install = install;
exports.Shape = _shape2.default;
exports.Polyline = _polyline2.default;
exports.Polycurve = _polycurve2.default;
exports.Wave = _wave2.default;
exports.Polygon = _polygon2.default;
exports.Triangle = _triangle2.default;
exports.Rect = _rect2.default;
exports.Star = _star2.default;
exports.Arc = _arc2.default;
exports.Sector = _sector2.default;
exports.Ellipse = _ellipse2.default;
exports.EllipseSector = _ellipseSector2.default;
exports.EllipseArc = _ellipseArc2.default;
exports.Circle = _circle2.default;
exports.Ring = _ring2.default;
exports.default = Shapes;