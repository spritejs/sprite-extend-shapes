'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.install = install;

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _polyline = require('./polyline');

var _polyline2 = _interopRequireDefault(_polyline);

var _polycurve = require('./polycurve');

var _polycurve2 = _interopRequireDefault(_polycurve);

var _wave = require('./wave');

var _wave2 = _interopRequireDefault(_wave);

var _polygon = require('./polygon/polygon');

var _polygon2 = _interopRequireDefault(_polygon);

var _triangle = require('./polygon/triangle');

var _triangle2 = _interopRequireDefault(_triangle);

var _rect = require('./polygon/rect');

var _rect2 = _interopRequireDefault(_rect);

var _star = require('./polygon/star');

var _star2 = _interopRequireDefault(_star);

var _arc = require('./arc');

var _arc2 = _interopRequireDefault(_arc);

var _sector = require('./ellipseShape/sector');

var _sector2 = _interopRequireDefault(_sector);

var _ellipse = require('./ellipseShape/ellipse');

var _ellipse2 = _interopRequireDefault(_ellipse);

var _ellipseSector = require('./ellipseShape/ellipseSector');

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

var _ellipseArc = require('./ellipseShape/ellipseArc');

var _ellipseArc2 = _interopRequireDefault(_ellipseArc);

var _circle = require('./ellipseShape/circle');

var _circle2 = _interopRequireDefault(_circle);

var _ring = require('./ring');

var _ring2 = _interopRequireDefault(_ring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// auto use
if (typeof window !== 'undefined' && window.spritejs) {
  window.spritejs.use(install);
}

function install(spritejs) {
  return [_shape2.default, _polyline2.default, _polycurve2.default, _wave2.default, _polygon2.default, _triangle2.default, _rect2.default, _star2.default, _arc2.default, _sector2.default, _ellipse2.default, _ellipseSector2.default, _ellipseArc2.default, _circle2.default, _ring2.default].reduce(function (pkg, Node) {
    return (0, _assign2.default)(pkg, spritejs.use(Node, null, false));
  }, {});
}

var shapes = exports.shapes = {
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