"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
Object.defineProperty(exports, "Shape", {
  enumerable: true,
  get: function get() {
    return _shape.default;
  }
});
Object.defineProperty(exports, "Arc", {
  enumerable: true,
  get: function get() {
    return _arc.default;
  }
});
Object.defineProperty(exports, "Polyline", {
  enumerable: true,
  get: function get() {
    return _polyline.default;
  }
});
Object.defineProperty(exports, "Polycurve", {
  enumerable: true,
  get: function get() {
    return _polycurve.default;
  }
});
Object.defineProperty(exports, "Wave", {
  enumerable: true,
  get: function get() {
    return _wave.default;
  }
});
Object.defineProperty(exports, "Ring", {
  enumerable: true,
  get: function get() {
    return _ring.default;
  }
});
Object.defineProperty(exports, "Polygon", {
  enumerable: true,
  get: function get() {
    return _polygon.default;
  }
});
Object.defineProperty(exports, "Triangle", {
  enumerable: true,
  get: function get() {
    return _triangle.default;
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _rect.default;
  }
});
Object.defineProperty(exports, "Star", {
  enumerable: true,
  get: function get() {
    return _star.default;
  }
});
Object.defineProperty(exports, "EllipseSector", {
  enumerable: true,
  get: function get() {
    return _ellipseSector.default;
  }
});
Object.defineProperty(exports, "EllipseArc", {
  enumerable: true,
  get: function get() {
    return _ellipseArc.default;
  }
});
Object.defineProperty(exports, "Sector", {
  enumerable: true,
  get: function get() {
    return _sector.default;
  }
});
Object.defineProperty(exports, "Ellipse", {
  enumerable: true,
  get: function get() {
    return _ellipse.default;
  }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
exports.default = exports.version = exports.Shapes = void 0;

var _shape = _interopRequireDefault(require("./shape"));

var _arc = _interopRequireDefault(require("./arc"));

var _polyline = _interopRequireDefault(require("./polyline"));

var _polycurve = _interopRequireDefault(require("./polycurve"));

var _wave = _interopRequireDefault(require("./wave"));

var _ring = _interopRequireDefault(require("./ring"));

var _polygon = _interopRequireDefault(require("./polygon"));

var _triangle = _interopRequireDefault(require("./triangle"));

var _rect = _interopRequireDefault(require("./rect"));

var _star = _interopRequireDefault(require("./star"));

var _ellipseSector = _interopRequireDefault(require("./ellipseSector"));

var _ellipseArc = _interopRequireDefault(require("./ellipseArc"));

var _sector = _interopRequireDefault(require("./sector"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _circle = _interopRequireDefault(require("./circle"));

var version = require('../package.json').version;

exports.version = version;
var Shapes = {
  version: version,
  install: install,
  Shape: _shape.default,
  Polyline: _polyline.default,
  Polycurve: _polycurve.default,
  Wave: _wave.default,
  Polygon: _polygon.default,
  Triangle: _triangle.default,
  Rect: _rect.default,
  Star: _star.default,
  Arc: _arc.default,
  Sector: _sector.default,
  Ellipse: _ellipse.default,
  EllipseSector: _ellipseSector.default,
  EllipseArc: _ellipseArc.default,
  Circle: _circle.default,
  Ring: _ring.default
};
exports.Shapes = Shapes;

function install(spritejs) {
  return Object.keys(Shapes).reduce(function (pkg, key) {
    if (key === 'version' || key === 'install') {
      return pkg;
    }

    return Object.assign(pkg, spritejs.use(Shapes[key], null, false));
  }, {});
} // auto use
// if (typeof window !== 'undefined' && window.spritejs) {
//   window.spritejs.use(Shapes);
// }


var _default = Shapes;
exports.default = _default;