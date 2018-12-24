(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spriteShapes"] = factory();
	else
		root["spriteShapes"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = undefined;

var _assign = __webpack_require__(1);

var _assign2 = _interopRequireDefault(_assign);

exports.install = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

var _polyline = __webpack_require__(96);

var _polyline2 = _interopRequireDefault(_polyline);

var _polycurve = __webpack_require__(116);

var _polycurve2 = _interopRequireDefault(_polycurve);

var _wave = __webpack_require__(117);

var _wave2 = _interopRequireDefault(_wave);

var _polygon = __webpack_require__(118);

var _polygon2 = _interopRequireDefault(_polygon);

var _triangle = __webpack_require__(119);

var _triangle2 = _interopRequireDefault(_triangle);

var _rect = __webpack_require__(120);

var _rect2 = _interopRequireDefault(_rect);

var _star = __webpack_require__(121);

var _star2 = _interopRequireDefault(_star);

var _arc = __webpack_require__(122);

var _arc2 = _interopRequireDefault(_arc);

var _sector = __webpack_require__(123);

var _sector2 = _interopRequireDefault(_sector);

var _ellipse = __webpack_require__(125);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _ellipseSector = __webpack_require__(124);

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

var _ellipseArc = __webpack_require__(126);

var _ellipseArc2 = _interopRequireDefault(_ellipseArc);

var _circle = __webpack_require__(127);

var _circle2 = _interopRequireDefault(_circle);

var _ring = __webpack_require__(128);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(20) });


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var ctx = __webpack_require__(7);
var hide = __webpack_require__(9);
var has = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(8);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(13);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function () {
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(24);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(22);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(27)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(24);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(28);
var toAbsoluteIndex = __webpack_require__(30);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(34);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(33) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _spriteDraggable = __webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var BaseSprite = _ref.BaseSprite,
      utils = _ref.utils;
  var attr = utils.attr,
      parseColorString = utils.parseColorString;
  var ShapeAttr = (_class = function (_BaseSprite$Attr) {
    (0, _inherits3.default)(ShapeAttr, _BaseSprite$Attr);

    function ShapeAttr(subject) {
      (0, _classCallCheck3.default)(this, ShapeAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ShapeAttr.__proto__ || (0, _getPrototypeOf2.default)(ShapeAttr)).call(this, subject));

      _this.setDefault({
        color: 'transparent',
        fillColor: 'transparent',
        lineWidth: 0,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [0, 0],
        lineDashOffset: 0,
        enableCache: false
      });
      return _this;
    }

    (0, _createClass3.default)(ShapeAttr, [{
      key: 'lineWidth',
      set: function set(val) {
        this.set('lineWidth', val);
      }
    }, {
      key: 'lineCap',
      set: function set(val) {
        this.set('lineCap', val);
      }
    }, {
      key: 'lineJoin',
      set: function set(val) {
        this.set('lineJoin', val);
      }
    }, {
      key: 'lineDash',
      set: function set(val) {
        this.set('lineDash', val);
      }
    }, {
      key: 'lineDashOffset',
      set: function set(val) {
        this.set('lineDashOffset', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.set('fillColor', val);
      }
    }, {
      key: 'draggable',
      set: function set(val) {
        this.set('draggable', val);
        (0, _spriteDraggable.draggable)(this.subject, val);
      }
    }, {
      key: 'droppable',
      set: function set(val) {
        this.set('droppable', val);
        (0, _spriteDraggable.droppable)(this.subject, val);
      }
    }]);
    return ShapeAttr;
  }(BaseSprite.Attr), (_applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'draggable', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'draggable'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'droppable', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'droppable'), _class.prototype)), _class);
  var Shape = (_temp = _class2 = function (_BaseSprite) {
    (0, _inherits3.default)(Shape, _BaseSprite);

    function Shape() {
      (0, _classCallCheck3.default)(this, Shape);
      return (0, _possibleConstructorReturn3.default)(this, (Shape.__proto__ || (0, _getPrototypeOf2.default)(Shape)).apply(this, arguments));
    }

    return Shape;
  }(BaseSprite), _class2.Attr = ShapeAttr, _temp);


  return { Shape: Shape };
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(23);
var $getOwnPropertyDescriptor = __webpack_require__(43).f;

__webpack_require__(44)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(13);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(6);
var fails = __webpack_require__(15);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(6).Object.getPrototypeOf;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(38);
var $getPrototypeOf = __webpack_require__(48);

__webpack_require__(44)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(51);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(56);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(74);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(69);
module.exports = __webpack_require__(73).f('iterator');


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(60)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(61);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(62);
var $iterCreate = __webpack_require__(63);
var setToStringTag = __webpack_require__(67);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(68)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(64);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(67);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(68)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(66).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(68)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(34);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
var global = __webpack_require__(5);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(62);
var TO_STRING_TAG = __webpack_require__(68)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(71);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(62);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(68);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(61);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(15);
var shared = __webpack_require__(32);
var setToStringTag = __webpack_require__(67);
var uid = __webpack_require__(34);
var wks = __webpack_require__(68);
var wksExt = __webpack_require__(73);
var wksDefine = __webpack_require__(78);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(80);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(12);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(64);
var gOPNExt = __webpack_require__(81);
var $GOPD = __webpack_require__(43);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(21);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(82).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(34)('meta');
var isObject = __webpack_require__(12);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(15)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(33);
var wksExt = __webpack_require__(73);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(23);
var gOPN = __webpack_require__(82).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(22);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78)('asyncIterator');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78)('observable');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(87);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(91);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(4);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(90).set });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(12);
var anObject = __webpack_require__(11);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(7)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(64) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}([function(t,e,n){var r=n(22)("wks"),o=n(14),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(9),o=n(30),i=n(18),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(48),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(13);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(1),o=n(2),i=n(49),u=n(7),f=n(5),a=function(t,e,n){var c,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,h=t&a.B,m=t&a.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(c in d&&(n=e),n)(s=!p&&x&&void 0!==x[c])&&f(g,c)||(l=s?x[c]:n[c],g[c]=d&&"function"!=typeof x[c]?n[c]:h&&s?i(l,r):m&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&u(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(34),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(22)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(11)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3).f,o=n(5),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(1),o=n(2),i=n(11),u=n(38),f=n(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){n(28),n(35),t.exports=n(60)},function(t,e,n){n(45);for(var r=n(1),o=n(7),i=n(8),u=n(0)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<f.length;a++){var c=f[a],s=r[c],l=s&&s.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(11),o=n(17),i=n(32),u=n(7),f=n(8),a=n(51),c=n(24),s=n(57),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,h,m){a(n,e,v);var g,b,x,_=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",w="values"==y,S=!1,M=t.prototype,j=M[l]||M["@@iterator"]||y&&M[y],P=j||_(y),E=y?w?_("entries"):P:void 0,T="Array"==e&&M.entries||j;if(T&&(x=s(T.call(new t)))!==Object.prototype&&x.next&&(c(x,O,!0),r||"function"==typeof x[l]||u(x,l,d)),w&&j&&"values"!==j.name&&(S=!0,P=function(){return j.call(this)}),r&&!m||!p&&!S&&M[l]||u(M,l,P),f[e]=P,f[O]=d,y)if(g={values:w?P:_("values"),keys:h?P:_("keys"),entries:E},m)for(b in g)b in M||i(M,b,g[b]);else o(o.P+o.F*(p||S),e,g);return g}},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(9),o=n(52),i=n(23),u=n(21)("IE_PROTO"),f=function(){},a=function(){var t,e=n(31)("iframe"),r=i.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(5),o=n(6),i=n(53)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),a=0,c=[];for(n in f)n!=u&&r(f,n)&&c.push(n);for(;e.length>a;)r(f,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){"use strict";var r=n(59)(!0);n(29)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(15),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){n(28),n(35),t.exports=n(62)},function(t,e,n){e.f=n(0)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(34),o=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.droppable=e.draggable=void 0;var r=n(42);e.draggable=r.draggable,e.droppable=r.droppable},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(43)),o=u(n(64));e.draggable=function(t,e){return e&&e.destroy||!1===e?t[p]?(delete t[p],t.off("mousedown",t[c]).off("mousemove",t[s]).off("mouseup",t[l])):t:t[p]?t:(t[p]=!0,t[c]=function(e){if(e.stopPropagation(),(f=function t(e){return e[p]?e:"layer"===e.tarName?null:e.parentNode?t(e.parentNode):null}(e.target))!==t)return;var n=e.offsetX,r=e.offsetY;f.x0_=n,f.y0_=r,f.dispatchEvent("dragstart",y(e),!0,!0),f.setMouseCapture()},t[s]=function(e){if(e.stopPropagation(),f&&f===t&&null!=f.x0_){var n=e.offsetX,o=e.offsetY,u=n-t.x0_,c=o-t.y0_,s=t.attr("pos"),l=(0,r.default)(s,2),p=l[0],d=l[1],m=new i.Matrix(t.transform.m),g=m.transformPoint(u,c),b=(0,r.default)(g,2);u=b[0],c=b[1];var x=t.dragRect||[],_=(0,r.default)(x,4),O=_[0],w=_[1],S=_[2],M=_[3],j=p+u,P=d+c;void 0!==O&&(j=Math.max(O,j)),void 0!==S&&(j=Math.min(S,j)),void 0!==w&&(P=Math.max(w,P)),void 0!==M&&(P=Math.min(M,P)),t.attr({x:j,y:P}),f.dispatchEvent("drag",y(e),!0,!0),function(t,e){t.dragItem=e;e.renderBox;a.forEach(function(n){if(e!==n){var r=h(e,n);r&&!n[v]?(n[v]=!0,n.dispatchEvent("dragenter",y(t),!0,!0)):!r&&n[v]?(delete n[v],n.dispatchEvent("dragleave",y(t),!0,!0)):r&&n[v]&&n.dispatchEvent("dragover",y(t),!0,!0)}})}(e,t)}},t[l]=function(e){e.stopPropagation(),f&&null!=f.x0_&&(f.releaseMouseCapture(),delete f.x0_,delete f.y0_,f.dispatchEvent("dragend",y(e),!0,!0),function(t,e){t.dragItem=e,a.forEach(function(n){var r=h(e,n);r&&n[v]&&(delete n[v],n.dispatchEvent("drop",y(t),!0,!0))})}(e,t));f=null},e&&e.dragRect&&(t.dragRect=e.dragRect),t.on("mousedown",t[c]).on("mousemove",t[s]).on("mouseup",t[l]))},e.droppable=function(t,e){if(e&&e.destroy||!1===e){if(t[d]){delete t[p];var n=a.indexOf(t);-1!==n&&a.splice(n,1)}}else t[d]||(a.push(t),t[d]=!0);return t};var i=n(75);function u(t){return t&&t.__esModule?t:{default:t}}var f=null,a=[],c=(0,o.default)("mouseDown"),s=(0,o.default)("mouseMove"),l=(0,o.default)("mouseUp"),p=(0,o.default)("isDraggable"),d=(0,o.default)("isDroppable"),v=(0,o.default)("_isDragenter");function y(t){return{detail:t}}function h(t,e){var n=t.renderBox,r=m(t),o=m(e);r=[r[0]-o[0],r[1]-o[1]];var i=[(n[0]+n[2])/2+r[0],(n[1]+n[3])/2+r[1]];return e.pointCollision({offsetX:i[0],offsetY:i[1],layerX:i[0],layerY:i[1]})}function m(t){var e=0,n=0;if(t.parent&&t.parent.tagName&&"layer"!==t.parent.tagName.toLowerCase()){var o=(0,r.default)(t.parent.renderBox,2);e=o[0],n=o[1]}return[e,n]}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(44)),o=i(n(61));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var f,a=(0,o.default)(t);!(r=(f=a.next()).done)&&(n.push(f.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){"use strict";var r=n(46),o=n(47),i=n(8),u=n(6);t.exports=n(29)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(50);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(33),o=n(13),i=n(24),u={};n(7)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(9),i=n(19);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,a=0;f>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(6),o=n(54),i=n(55);t.exports=function(t){return function(e,n,u){var f,a=r(e),c=o(a.length),s=i(u,c);if(t&&n!=n){for(;c>s;)if((f=a[s++])!=f)return!0}else for(;c>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(20),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(5),o=n(58),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(20),o=n(16);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),a=r(n),c=f.length;return a<0||a>=c?t?"":void 0:(i=f.charCodeAt(a))<55296||i>56319||a+1===c||(u=f.charCodeAt(a+1))<56320||u>57343?t?f.charAt(a):i:t?f.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(36),o=n(0)("iterator"),i=n(8);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e,n){var r=n(9),o=n(63);t.exports=n(2).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(36),o=n(0)("iterator"),i=n(8);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){n(66),n(72),n(73),n(74),t.exports=n(2).Symbol},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(4),u=n(17),f=n(32),a=n(67).KEY,c=n(12),s=n(22),l=n(24),p=n(14),d=n(0),v=n(38),y=n(25),h=n(68),m=n(69),g=n(9),b=n(10),x=n(6),_=n(18),O=n(13),w=n(33),S=n(70),M=n(71),j=n(3),P=n(19),E=M.f,T=j.f,L=S.f,k=r.Symbol,A=r.JSON,I=A&&A.stringify,N=d("_hidden"),C=d("toPrimitive"),F={}.propertyIsEnumerable,D=s("symbol-registry"),R=s("symbols"),z=s("op-symbols"),V=Object.prototype,G="function"==typeof k,B=r.QObject,W=!B||!B.prototype||!B.prototype.findChild,Y=i&&c(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(V,e);r&&delete V[e],T(t,e,n),r&&t!==V&&T(V,e,r)}:T,H=function(t){var e=R[t]=w(k.prototype);return e._k=t,e},J=G&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},X=function(t,e,n){return t===V&&X(z,e,n),g(t),e=_(e,!0),g(n),o(R,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=w(n,{enumerable:O(0,!1)})):(o(t,N)||T(t,N,O(1,{})),t[N][e]=!0),Y(t,e,n)):T(t,e,n)},K=function(t,e){g(t);for(var n,r=h(e=x(e)),o=0,i=r.length;i>o;)X(t,n=r[o++],e[n]);return t},U=function(t){var e=F.call(this,t=_(t,!0));return!(this===V&&o(R,t)&&!o(z,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,N)&&this[N][t])||e)},q=function(t,e){if(t=x(t),e=_(e,!0),t!==V||!o(R,e)||o(z,e)){var n=E(t,e);return!n||!o(R,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=L(x(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==N||e==a||r.push(e);return r},Z=function(t){for(var e,n=t===V,r=L(n?z:x(t)),i=[],u=0;r.length>u;)!o(R,e=r[u++])||n&&!o(V,e)||i.push(R[e]);return i};G||(f((k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(z,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),Y(this,t,O(1,n))};return i&&W&&Y(V,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),M.f=q,j.f=X,n(40).f=S.f=Q,n(26).f=U,n(39).f=Z,i&&!n(11)&&f(V,"propertyIsEnumerable",U,!0),v.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!G,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=P(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=k(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,e){return void 0===e?w(t):K(w(t),e)},defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:q,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),A&&u(u.S+u.F*(!G||c(function(){var t=k();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!J(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,I.apply(A,r)}}),k.prototype[C]||n(7)(k.prototype,C,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(14)("meta"),o=n(10),i=n(5),u=n(3).f,f=0,a=Object.isExtensible||function(){return!0},c=!n(12)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){var r=n(19),o=n(39),i=n(26);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),a=i.f,c=0;f.length>c;)a.call(t,u=f[c++])&&e.push(u);return e}},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(6),o=n(40).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(26),o=n(13),i=n(6),u=n(18),f=n(5),a=n(30),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector=e.Matrix=void 0;var r=i(n(76)),o=i(n(77));function i(t){return t&&t.__esModule?t:{default:t}}e.Matrix=r.default,e.Vector=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){t=t||[1,0,0,1,0,0],this.m=[t[0],t[1],t[2],t[3],t[4],t[5]]};r.prototype.unit=function(){return this.m=[1,0,0,1,0,0],this},r.prototype.multiply=function(t){var e=this.m,n=void 0;n=t instanceof r?t.m:t;var o=e[0]*n[0]+e[2]*n[1],i=e[1]*n[0]+e[3]*n[1],u=e[0]*n[2]+e[2]*n[3],f=e[1]*n[2]+e[3]*n[3],a=e[0]*n[4]+e[2]*n[5]+e[4],c=e[1]*n[4]+e[3]*n[5]+e[5];return e[0]=o,e[1]=i,e[2]=u,e[3]=f,e[4]=a,e[5]=c,this},r.prototype.inverse=function(){var t=new r(this.m),e=t.m,n=1/(e[0]*e[3]-e[1]*e[2]),o=e[3]*n,i=-e[1]*n,u=-e[2]*n,f=e[0]*n,a=n*(e[2]*e[5]-e[3]*e[4]),c=n*(e[1]*e[4]-e[0]*e[5]);return e[0]=o,e[1]=i,e[2]=u,e[3]=f,e[4]=a,e[5]=c,t},r.prototype.translate=function(t,e){return this.multiply([1,0,0,1,t,e])},r.prototype.rotate=function(t){var e=t*Math.PI/180,n=Math.cos(e),r=Math.sin(e);return this.multiply([n,r,-r,n,0,0])},r.prototype.skew=function(t,e){e|=0;var n=t*Math.PI/180,r=e*Math.PI/180,o=Math.tan(n),i=Math.tan(r);return this.multiply([1,i,o,1,0,0])},r.prototype.scale=function(t,e){return this.multiply([t,0,0,e,0,0])},r.prototype.transformPoint=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2]+this.m[4],e=n*this.m[1]+r*this.m[3]+this.m[5]]},r.prototype.transformVector=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2],e=n*this.m[1]+r*this.m[3]]},e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(78)),o=u(n(81)),i=u(n(82));function u(t){return t&&t.__esModule?t:{default:t}}var f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];(0,o.default)(this,t);var i=(0,r.default)(e,3),u=i[0],f=i[1],a=i[2],c=(0,r.default)(n,3),s=c[0],l=c[1],p=c[2];a=a||0,p=p||0,this.x=u-s,this.y=f-l,this.z=a-p}return(0,i.default)(t,[{key:"unit",value:function(){var e=this.length;return new t([this.x/e,this.y/e,this.z/e])}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"cross",value:function(e){var n=this.x,r=this.y,o=this.z,i=e.x,u=e.y,f=e.z;return new t([r*f-o*u,o*i-n*f,n*u-i*r])}},{key:"length",get:function(){var t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}}]),t}();e.default=f},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(79)),o=i(n(80));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var f,a=(0,o.default)(t);!(r=(f=a.next()).done)&&(n.push(f.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(83),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(84),__esModule:!0}},function(t,e,n){n(85);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(17);r(r.S+r.F*!n(4),"Object",{defineProperty:n(3).f})}])});

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function (target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

var _util = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var PolylineAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolylineAttr, _Shape$Attr);

    function PolylineAttr(subject) {
      (0, _classCallCheck3.default)(this, PolylineAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolylineAttr.__proto__ || (0, _getPrototypeOf2.default)(PolylineAttr)).call(this, subject));

      _this.setDefault({
        points: null,
        close: false,
        smooth: false,
        tolerance: 6
      });
      return _this;
    }

    (0, _createClass3.default)(PolylineAttr, [{
      key: 'tolerance',
      set: function set(val) {
        this.set('tolerance', val);
      }
    }, {
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'smooth',
      set: function set(val) {
        this.set('smooth', val);
      }
    }, {
      key: 'close',
      set: function set(val) {
        this.set('close', val);
      }
    }]);
    return PolylineAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'tolerance', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'tolerance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'close', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'close'), _class.prototype)), _class);
  var Polyline = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Polyline, _Shape);

    function Polyline() {
      (0, _classCallCheck3.default)(this, Polyline);
      return (0, _possibleConstructorReturn3.default)(this, (Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polyline, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'pointCollision', this).call(this, evt);
        var offsetX = evt.offsetX,
            offsetY = evt.offsetY;

        var cacheLineWidth = this.context.lineWidth; // 获取当前画布的lineWidth宽度
        var tolerance = this.attr('tolerance'); // 线条点击的容差像素值，默认6px
        this.context.lineWidth = this.attr('lineWidth') + tolerance; // 点击范围为线条加上容差值，方便碰撞检测
        var res = false;
        if (this.path && (this.context.isPointInStroke(this.path, offsetX, offsetY) || this.attr('close') && this.context.isPointInPath(this.path, offsetX, offsetY)) // 如果是闭合曲线，判断是否点击到闭合曲线内部
        ) {
            res = true;
          }
        this.context.lineWidth = cacheLineWidth; // 还原当前画布的lineWidth宽度
        return res;
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(Polyline.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polyline.prototype), 'render', this).call(this, t, drawingContext);
        if (this.points) {
          drawingContext.fillStyle = this.attr('fillColor');
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.lineJoin = this.attr('lineJoin');
          drawingContext.lineCap = this.attr('lineCap');
          drawingContext.lineWidth = this.attr('lineWidth');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');

          var smooth = this.attr('smooth');
          var path = new Path2D();

          if (smooth) {
            (0, _util.drawSmoothCurveLine)(path, this.points, drawingContext);
            // path.moveTo(200, 140);
            // path.lineTo(0, 140);
            // path.lineTo(0, 70);
          } else {
            this.points.forEach(function (point, i) {
              if (i === 0) {
                path.moveTo.apply(path, (0, _toConsumableArray3.default)(point));
              } else {
                path.lineTo.apply(path, (0, _toConsumableArray3.default)(point));
              }
            });
          }

          if (this.attr('close')) {
            path.closePath();
          }

          drawingContext.fill(path);
          drawingContext.stroke(path);
          this.path = path;
        }
        return drawingContext;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Polyline;
  }(Shape), _class2.Attr = PolylineAttr, _temp);

  registerNodeType('polyline', Polyline, false);
  return { Polyline: Polyline };
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(98);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(100);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(7);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(38);
var call = __webpack_require__(101);
var isArrayIter = __webpack_require__(102);
var toLength = __webpack_require__(28);
var createProperty = __webpack_require__(103);
var getIterFn = __webpack_require__(104);

$export($export.S + $export.F * !__webpack_require__(106)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(62);
var ITERATOR = __webpack_require__(68)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(105);
var ITERATOR = __webpack_require__(68)('iterator');
var Iterators = __webpack_require__(62);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(68)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(68)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.sin = exports.cos = undefined;

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.drawSmoothCurveLine = drawSmoothCurveLine;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cos = exports.cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};
var sin = exports.sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};
var round = exports.round = function round(v) {
  return Math.round(v);
};

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */
function drawSmoothCurveLine(ctx, points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;

    var x0 = void 0;
    var y0 = void 0;
    var x1 = void 0;
    var y1 = void 0;

    if (points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if (i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if (i > points.length - 3) {
      var last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  }

  points = points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return { x: x, y: y };
  });

  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      var _getCtrlPoint = getCtrlPoint(i - 1),
          _getCtrlPoint2 = (0, _slicedToArray3.default)(_getCtrlPoint, 2),
          A = _getCtrlPoint2[0],
          B = _getCtrlPoint2[1];

      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(110);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(113);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(58);
module.exports = __webpack_require__(112);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(105);
var ITERATOR = __webpack_require__(68)('iterator');
var Iterators = __webpack_require__(62);
module.exports = __webpack_require__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(58);
module.exports = __webpack_require__(115);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var get = __webpack_require__(104);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var PolycurveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolycurveAttr, _Shape$Attr);

    function PolycurveAttr(subject) {
      (0, _classCallCheck3.default)(this, PolycurveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolycurveAttr.__proto__ || (0, _getPrototypeOf2.default)(PolycurveAttr)).call(this, subject));

      _this.setDefault({
        points: [],
        startPoint: [0, 0]
      });
      return _this;
    }

    (0, _createClass3.default)(PolycurveAttr, [{
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'startPoint',
      set: function set(val) {
        this.clearFlow();
        this.set('startPoint', val);
      }
    }]);
    return PolycurveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype)), _class);
  var Polycurve = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Polycurve, _Shape);

    function Polycurve() {
      (0, _classCallCheck3.default)(this, Polycurve);
      return (0, _possibleConstructorReturn3.default)(this, (Polycurve.__proto__ || (0, _getPrototypeOf2.default)(Polycurve)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polycurve, [{
      key: 'pointCollision',


      // FIXME: 碰撞检测
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Polycurve.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polycurve.prototype), 'render', this).call(this, t, ctx);
        // const startPoint = this.attr('startPoint');
        var points = this.points;

        ctx.fillStyle = this.attr('fillColor');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineCap = this.attr('lineCap');
        ctx.lineWidth = this.attr('lineWidth');
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');

        var path = new Path2D();
        // path.moveTo(...startPoint);

        /* eslint-disable arrow-parens */
        points.forEach(function (point) {
          var _point = (0, _slicedToArray3.default)(point, 6),
              cp1x = _point[0],
              cp1y = _point[1],
              cp2x = _point[2],
              cp2y = _point[3],
              x = _point[4],
              y = _point[5];

          path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        });

        ctx.fill(path);
        ctx.stroke(path);

        this.path = path;

        return ctx;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Polycurve;
  }(Shape), _class2.Attr = PolycurveAttr, _temp);

  registerNodeType('polycurve', Polycurve, false);
  return { Polycurve: Polycurve };
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

var _util = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var WaveAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(WaveAttr, _Shape$Attr);

    function WaveAttr(subject) {
      (0, _classCallCheck3.default)(this, WaveAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WaveAttr.__proto__ || (0, _getPrototypeOf2.default)(WaveAttr)).call(this, subject));

      _this.setDefault({
        radius: 50,
        offset: 10,
        percent: 0,
        amplitude: 0,
        speed: 0
      });
      return _this;
    }

    (0, _createClass3.default)(WaveAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'offset',
      set: function set(val) {
        this.clearFlow();
        this.set('offset', val);
      }
    }, {
      key: 'percent',
      set: function set(val) {
        this.clearFlow();
        this.set('percent', val);
      }
    }, {
      key: 'amplitude',
      set: function set(val) {
        this.clearFlow();
        this.set('amplitude', val);
      }
    }, {
      key: 'speed',
      set: function set(val) {
        this.clearFlow();
        this.set('speed', val);
      }
    }]);
    return WaveAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offset', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'offset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'percent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'amplitude', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'amplitude'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'speed', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'speed'), _class.prototype)), _class);
  var Wave = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Wave, _Shape);

    function Wave() {
      (0, _classCallCheck3.default)(this, Wave);
      return (0, _possibleConstructorReturn3.default)(this, (Wave.__proto__ || (0, _getPrototypeOf2.default)(Wave)).apply(this, arguments));
    }

    (0, _createClass3.default)(Wave, [{
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Wave.prototype.__proto__ || (0, _getPrototypeOf2.default)(Wave.prototype), 'render', this).call(this, t, ctx);
        var lw = this.attr('lineWidth');
        var strokeStyle = findColor(ctx, this, 'color');
        var fillStyle = findColor(ctx, this, 'fillColor');
        var radius = this.attr('radius');
        var offset = this.attr('offset');
        var percent = this.attr('percent');
        var AMPLITUDE = this.attr('amplitude') || radius / 10;
        var cx = 0,
            cy = 0;


        var startAngle = 0;
        if (percent <= 0.5) {
          startAngle = 0.25 - percent / 2;
        } else if (percent < 1) {
          startAngle = 0 - (percent - 0.5) / 2;
        } else {
          startAngle = 0;
        }
        startAngle *= Math.PI * 2;
        var sinVal = percent >= 1 ? -1 : (0, _util.sin)(startAngle / 2);
        var y = (0, _util.round)(radius * sinVal);

        // 三角函数公式：y=Asin（wx+φ）+h
        var A = (radius / 20 * (0, _util.sin)(percent * Math.PI) + AMPLITUDE) / 2; // 振幅;
        var W = Math.PI * 2 / 200;
        var H = cy + y;
        var Q = this.attr('speed');

        ctx.save();

        // 清除绘制区域
        ctx.clearRect(cx - radius - offset - lw, cy - radius - offset - lw, (radius + offset + lw) * 2, (radius + offset + lw) * 2);

        // 外接圆
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lw;
        ctx.arc(cx, cy, radius + offset, 0, Math.PI * 2, false);
        ctx.stroke();

        // 内接圆设为剪辑区域
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
        ctx.clip();

        // 绘制正弦曲线
        ctx.beginPath();
        for (var x = cx - radius; x <= cx + radius; x++) {
          var _y = A * Math.sin(W * x + Q) + H;
          ctx.lineTo(x, _y);
        }
        // 向下形成闭合区域
        ctx.lineTo(cx + radius, cy + radius);
        ctx.lineTo(cx - radius, cy + radius);
        ctx.lineTo(cx - radius, cy);
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.closePath();

        ctx.restore();

        return ctx;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return Wave;
  }(Shape), _class2.Attr = WaveAttr, _temp);


  registerNodeType('wave', Wave, false);
  return { Wave: Wave };
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

var _util = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var PolygonAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(PolygonAttr, _Shape$Attr);

    function PolygonAttr(subject) {
      (0, _classCallCheck3.default)(this, PolygonAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

      _this.setDefault({
        points: [],
        smooth: null
      });
      return _this;
    }

    (0, _createClass3.default)(PolygonAttr, [{
      key: 'smooth',
      set: function set(val) {
        this.set('smooth', val);
      }
    }, {
      key: 'points',
      set: function set(val) {
        this.clearFlow();
        this.set('points', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.set('color', val);
      }
    }, {
      key: 'lineWidth',
      set: function set(val) {
        this.set('lineWidth', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.set('fillColor', val);
      }
    }]);
    return PolygonAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class);
  var Polygon = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Polygon, _Shape);

    function Polygon() {
      (0, _classCallCheck3.default)(this, Polygon);
      return (0, _possibleConstructorReturn3.default)(this, (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Polygon, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Polygon.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polygon.prototype), 'pointCollision', this).call(this, evt)) {
          var _evt$offsetX = evt.offsetX,
              offsetX = _evt$offsetX === undefined ? 0 : _evt$offsetX,
              _evt$offsetY = evt.offsetY,
              offsetY = _evt$offsetY === undefined ? 0 : _evt$offsetY;

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;
          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(Polygon.prototype.__proto__ || (0, _getPrototypeOf2.default)(Polygon.prototype), 'render', this).call(this, t, drawingContext);
        if (this.points.length) {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');
          drawingContext.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
          drawingContext.miterLimit = 3;
          drawingContext.lineWidth = this.attr('lineWidth');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');
          drawingContext.beginPath();
          var path = new Path2D();
          var smooth = this.attr('smooth');
          var points = this.points.slice(0, this.points.length);
          if (smooth && !smooth.length) {
            smooth = [0, points.length - 1];
          }
          // 绘制光滑曲线（直线）
          if (!smooth) {
            points.forEach(function (point, i) {
              if (i === 0) {
                path.moveTo.apply(path, (0, _toConsumableArray3.default)(point));
              } else {
                path.lineTo.apply(path, (0, _toConsumableArray3.default)(point));
              }
            });
          } else {
            if (Object.prototype.toString.call(smooth[0]) !== '[object Array]') {
              // 如果不是多维数组，转成多维
              smooth = [smooth];
            }
            var startPos = points[0];
            var endPos = points[points.length - 1];
            if (startPos[0] !== endPos[0] || startPos[1] !== endPos[1]) {
              points.push(points[0]);
            }
            var subIndex = 0;
            smooth.forEach(function (arr, iind) {
              var smoothStart = arr[0];
              var smoothEnd = arr[1];
              for (var i = subIndex; i < smoothStart; i++) {
                if (i === 0) {
                  // 如果是所有线条的起始点
                  path.moveTo.apply(path, (0, _toConsumableArray3.default)(points[0]));
                } else {
                  // 如果是转换点
                  path.lineTo.apply(path, (0, _toConsumableArray3.default)(points[i]));
                }
              }
              var smoothPoints = points.slice(smoothStart, smoothEnd + 1);
              (0, _util.drawSmoothCurveLine)(path, smoothPoints, smoothStart);
              subIndex = smoothEnd;
            });
            for (var i = subIndex; i < points.length - 1; i++) {
              // 如果绘图未绘制到最后一个点
              path.lineTo(points[i][0], points[i][1]);
            }
          }

          path.closePath();
          drawingContext.closePath();
          drawingContext.fill(path);
          drawingContext.stroke(path);
          this.path = path;
        }
        return drawingContext;
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        var bounds = [0, 0, 0, 0];
        var points = this.points;

        points.forEach(function (_ref2) {
          var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
              x = _ref3[0],
              y = _ref3[1];

          bounds[0] = Math.min(x, bounds[0]);
          bounds[1] = Math.min(y, bounds[1]);
          bounds[2] = Math.max(x, bounds[2]);
          bounds[3] = Math.max(y, bounds[3]);
        });
        return bounds;
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
            width = _offsetSize[0],
            height = _offsetSize[1];

        var _attr3 = this.attr('anchor'),
            _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
            anchorX = _attr4[0],
            anchorY = _attr4[1];

        var rect = [0, 0, width, height];
        var offsetX = Math.min(0, bounds[0]);
        var offsetY = Math.min(0, bounds[1]);

        rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
        rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
        return rect;
      }
    }, {
      key: 'points',
      get: function get() {
        return this.attr('points');
      }
    }]);
    return Polygon;
  }(Shape), _class3.Attr = PolygonAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);

  registerNodeType('polygon', Polygon, false);
  return { Polygon: Polygon };
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _polygon = __webpack_require__(118);

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var Triangle = function (_Polygon) {
    (0, _inherits3.default)(Triangle, _Polygon);

    function Triangle() {
      (0, _classCallCheck3.default)(this, Triangle);
      return (0, _possibleConstructorReturn3.default)(this, (Triangle.__proto__ || (0, _getPrototypeOf2.default)(Triangle)).apply(this, arguments));
    }

    (0, _createClass3.default)(Triangle, [{
      key: 'points',
      get: function get() {
        var _attr = this.attr('sides'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            s1 = _attr2[0],
            s2 = _attr2[1];

        var angle = Math.PI / 180 * this.attr('angle');
        var p0 = [0, 0];
        var p1 = [s1, 0];
        var p2 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
        return [p0, p1, p2];
      }
    }]);
    return Triangle;
  }(Polygon);

  registerNodeType('triangle', Triangle, false);
  return { Triangle: Triangle };
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _polygon = __webpack_require__(118);

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var rectAttr = (_class = function (_Polygon$Attr) {
    (0, _inherits3.default)(rectAttr, _Polygon$Attr);

    function rectAttr(subject) {
      (0, _classCallCheck3.default)(this, rectAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (rectAttr.__proto__ || (0, _getPrototypeOf2.default)(rectAttr)).call(this, subject));

      _this.setDefault({
        angle: 90,
        sides: null,
        size: null
      });
      return _this;
    }

    (0, _createClass3.default)(rectAttr, [{
      key: 'angle',
      set: function set(val) {
        this.clearFlow();
        this.set('angle', val);
      }
    }, {
      key: 'sides',
      set: function set(val) {
        this.clearFlow();
        this.set('sides', val);
      }
    }]);
    return rectAttr;
  }(Polygon.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sides', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sides'), _class.prototype)), _class);
  var Rect = (_temp = _class2 = function (_Polygon) {
    (0, _inherits3.default)(Rect, _Polygon);

    function Rect() {
      (0, _classCallCheck3.default)(this, Rect);
      return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || (0, _getPrototypeOf2.default)(Rect)).apply(this, arguments));
    }

    (0, _createClass3.default)(Rect, [{
      key: 'points',
      get: function get() {
        var _ref2 = this.attr('sides') || this.attr('size'),
            _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            s1 = _ref3[0],
            s2 = _ref3[1];

        var oAngle = this.attr('angle');
        var cosAngle = 0;
        var sinAngle = 1;
        if (oAngle === 90) {
          // 90默认不处理
        } else {
          var angle = Math.PI * this.attr('angle') / 180;
          cosAngle = Math.cos(angle);
          sinAngle = Math.sin(angle);
        }
        var p0 = [0, 0];
        var p1 = [s1, 0];
        var p2 = [s1 + s2 * cosAngle, s2 * sinAngle];
        var p3 = [s2 * cosAngle, s2 * sinAngle];
        return [p0, p1, p2, p3];

        // const [s1, s2] = this.attr('sides') || this.attr('size');
        // const angle = (Math.PI / 180) * this.attr('angle');
        // const p0 = [0, 0];
        // const p1 = [s1, 0];
        // const p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
        // const p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
        // return [p0, p1, p2, p3];
      }
    }]);
    return Rect;
  }(Polygon), _class2.Attr = rectAttr, _temp);


  registerNodeType('rect', Rect, false);
  return { Rect: Rect };
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _polygon = __webpack_require__(118);

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_polygon2.default, null, false),
      Polygon = _use.Polygon;

  var PolygonAttr = (_class = function (_Polygon$Attr) {
    (0, _inherits3.default)(PolygonAttr, _Polygon$Attr);

    function PolygonAttr(subject) {
      (0, _classCallCheck3.default)(this, PolygonAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (PolygonAttr.__proto__ || (0, _getPrototypeOf2.default)(PolygonAttr)).call(this, subject));

      _this.setDefault({
        angles: 5
      });
      return _this;
    }

    (0, _createClass3.default)(PolygonAttr, [{
      key: 'angles',
      set: function set(num) {
        this.clearFlow();
        this.set('angles', num);
      }
    }, {
      key: 'radius',
      set: function set(val) {
        // 圆半径
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'innerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('innerRadius', val);
      }
    }]);
    return PolygonAttr;
  }(Polygon.Attr), (_applyDecoratedDescriptor(_class.prototype, 'angles', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype)), _class);


  function getStarPolygonPoints(angles) {
    var points = [];
    var pointsLength = angles * 2;

    return function (outerRadius, innerRadius) {
      var offsetX = outerRadius;
      var radAngle = -Math.PI / 2;
      var radAlpha = Math.PI * 2 / angles;

      for (var i = 1; i <= pointsLength; i++) {
        var rad = radAlpha * i + radAngle;
        var len = i % 2 ? innerRadius : outerRadius;
        var xPos = offsetX + Math.cos(rad) * len;
        var yPos = Math.sin(rad) * len;

        points.push([xPos, yPos]);
      }

      return points;
    };
  }

  var Star = (_temp = _class2 = function (_Polygon) {
    (0, _inherits3.default)(Star, _Polygon);

    function Star() {
      (0, _classCallCheck3.default)(this, Star);
      return (0, _possibleConstructorReturn3.default)(this, (Star.__proto__ || (0, _getPrototypeOf2.default)(Star)).apply(this, arguments));
    }

    (0, _createClass3.default)(Star, [{
      key: 'points',
      get: function get() {
        var radius = this.attr('radius');
        var innerRadius = this.attr('innerRadius') || 0.4 * radius;
        return getStarPolygonPoints(this.attr('angles'))(radius, innerRadius);
      }
    }]);
    return Star;
  }(Polygon), _class2.Attr = PolygonAttr, _temp);


  registerNodeType('star', Star, false);
  return { Star: Star };
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var ArcAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(ArcAttr, _Shape$Attr);

    function ArcAttr(subject) {
      (0, _classCallCheck3.default)(this, ArcAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ArcAttr.__proto__ || (0, _getPrototypeOf2.default)(ArcAttr)).call(this, subject));

      _this.setDefault({
        center: [0, 0],
        startPoint: [0, 0],
        angel: 0,
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
      return _this;
    }

    // 圆弧的圆心


    (0, _createClass3.default)(ArcAttr, [{
      key: 'center',
      set: function set(val) {
        this.clearFlow();
        this.set('center', val);
      }

      // 圆弧起始点

    }, {
      key: 'startPoint',
      set: function set(point) {
        this.clearFlow();
        this.set('startPoint', point);
      }

      // 旋转角度

    }, {
      key: 'angle',
      set: function set(angle) {
        this.clearFlow();
        this.set('angle', angle);
      }
    }, {
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('endAngle', val);
      }

      // 旋转方向

    }, {
      key: 'anticlockwise',
      set: function set(val) {
        this.clearFlow();
        this.set('anticlockwise', val);
      }
    }]);
    return ArcAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'angle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype)), _class);
  var Arc = (_temp = _class2 = function (_Shape) {
    (0, _inherits3.default)(Arc, _Shape);

    function Arc() {
      (0, _classCallCheck3.default)(this, Arc);
      return (0, _possibleConstructorReturn3.default)(this, (Arc.__proto__ || (0, _getPrototypeOf2.default)(Arc)).apply(this, arguments));
    }

    (0, _createClass3.default)(Arc, [{
      key: 'render',
      value: function render(t, ctx) {
        if (this.attr('center')) {
          var _attr = this.attr('center'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              cx = _attr2[0],
              cy = _attr2[1];

          var startAngle = this.startAngle;
          var endAngle = this.endAngle;
          var radius = this.attr('radius');

          // const [sx, sy] = this.attr('startPoint');
          // const radius = getDist([cx, cy], [sx, sy]);
          var anticlockwise = this.attr('anticlockwise');
          // const angle = this.attr('angle');
          // const startAngle = getRotationAngle([cx, cy], [sx, sy]);
          // const endAngle = anticlockwise
          //   ? startAngle - angle
          //   : startAngle + angle;

          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.lineWidth = this.attr('lineWidth');
          ctx.strokeStyle = findColor(ctx, this, 'color');
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');

          var path = new Path2D();
          path.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
          ctx.stroke(path);
          this.path = path;
        } else {
          console.error('center must be given when drawing an arc!');
        }
        return ctx;
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }]);
    return Arc;
  }(Shape), _class2.Attr = ArcAttr, _temp);

  registerNodeType('arc', Arc, false);
  return { Arc: Arc };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _ellipseSector = __webpack_require__(124);

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector2.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Sector = function (_EllipseSector) {
    (0, _inherits3.default)(Sector, _EllipseSector);

    function Sector() {
      (0, _classCallCheck3.default)(this, Sector);
      return (0, _possibleConstructorReturn3.default)(this, (Sector.__proto__ || (0, _getPrototypeOf2.default)(Sector)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sector, [{
      key: 'radiuses',
      get: function get() {
        return [this.attr('radius'), this.attr('radius')];
      }
    }]);
    return Sector;
  }(EllipseSector);

  Sector.defineAttributes({
    radius: function radius(attr, val) {
      attr.clearFlow();
      attr.set('radius', val);
    }
  });

  registerNodeType('sector', Sector, false);
  return { Sector: Sector };
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get4 = __webpack_require__(107);

var _get5 = _interopRequireDefault(_get4);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var EllipseSectorAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(EllipseSectorAttr, _Shape$Attr);

    function EllipseSectorAttr(subject) {
      (0, _classCallCheck3.default)(this, EllipseSectorAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (EllipseSectorAttr.__proto__ || (0, _getPrototypeOf2.default)(EllipseSectorAttr)).call(this, subject));

      _this.setDefault({
        radiusX: 10,
        radiusY: 20,
        center: [0, 0],
        startAngle: 0,
        endAngle: 0,
        lineWidth: 1,
        anticlockwise: false
      });
      return _this;
    }

    // 短轴半径


    (0, _createClass3.default)(EllipseSectorAttr, [{
      key: 'radiusX',
      set: function set(val) {
        this.clearFlow();
        this.set('radiusX', val);
      }

      // 长轴半径

    }, {
      key: 'radiusY',
      set: function set(val) {
        this.clearFlow();
        this.set('radiusY', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('endAngle', val);
      }
    }, {
      key: 'color',
      set: function set(val) {
        val = parseColorString(val);
        this.set('color', val);
      }
    }, {
      key: 'lineWidth',
      set: function set(val) {
        this.set('lineWidth', val);
      }
    }, {
      key: 'fillColor',
      set: function set(val) {
        val = parseColorString(val);
        this.set('fillColor', val);
      }
    }, {
      key: 'anticlockwise',
      set: function set(val) {
        this.set('anticlockwise', val);
      }
    }, {
      key: 'center',
      set: function set(val) {
        this.clearFlow();
        this.set('center', val);
      }
    }]);
    return EllipseSectorAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radiusX', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radiusX'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radiusY', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radiusY'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anticlockwise'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype)), _class);
  var EllipseSector = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(EllipseSector, _Shape);

    function EllipseSector() {
      (0, _classCallCheck3.default)(this, EllipseSector);
      return (0, _possibleConstructorReturn3.default)(this, (EllipseSector.__proto__ || (0, _getPrototypeOf2.default)(EllipseSector)).apply(this, arguments));
    }

    (0, _createClass3.default)(EllipseSector, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get5.default)(EllipseSector.prototype.__proto__ || (0, _getPrototypeOf2.default)(EllipseSector.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          // FIXME: 如果事件是改变半径大小，会导致contentSize变化，如何避免？

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;

          return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        var x = void 0;
        var y = void 0;

        var _radiuses = (0, _slicedToArray3.default)(this.radiuses, 2),
            rx = _radiuses[0],
            ry = _radiuses[1];

        if (this.center && this.center.length > 0) {
          var _center = (0, _slicedToArray3.default)(this.center, 2);

          x = _center[0];
          y = _center[1];
        } else {
          x = rx;
          y = ry;
        }

        ctx.translate(this.radiuses[0], this.radiuses[1]);

        var startAngle = this.startAngle;
        var endAngle = this.endAngle;

        ctx.miterLimit = 3;
        ctx.lineWidth = this.attr('lineWidth');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.fillStyle = findColor(ctx, this, 'fillColor');

        var path = new Path2D();
        if (this.endAngle - this.startAngle < Math.PI * 2) {
          path.moveTo(x, y);
        }
        path.ellipse(x, y, rx, ry, 0, startAngle, endAngle, this.attr('anticlockwise'));
        path.closePath();

        ctx.fill(path);
        ctx.stroke(path);

        this.path = path;

        return ctx;
      }
    }, {
      key: 'radiuses',
      get: function get() {
        return [this.attr('radiusX'), this.attr('radiusY')];
      }
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }, {
      key: 'center',
      get: function get() {
        return this.attr('center');
      }
    }, {
      key: 'lineBoundings',
      get: function get() {
        return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _ref2 = [].concat((0, _toConsumableArray3.default)(this.attrSize)),
            width = _ref2[0],
            height = _ref2[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var radiuses = this.radiuses;

        var _get2 = (0, _get5.default)(EllipseSector.prototype.__proto__ || (0, _getPrototypeOf2.default)(EllipseSector.prototype), 'originalRect', this),
            _get3 = (0, _slicedToArray3.default)(_get2, 4),
            x = _get3[0],
            y = _get3[1],
            w = _get3[2],
            h = _get3[3];

        var rect = [x - radiuses[0], y - radiuses[1], w, h];
        return rect;
      }
    }]);
    return EllipseSector;
  }(Shape), _class3.Attr = EllipseSectorAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ellipsesector', EllipseSector, false);
  return { EllipseSector: EllipseSector };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _ellipseSector = __webpack_require__(124);

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector2.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Ellipse = function (_EllipseSector) {
    (0, _inherits3.default)(Ellipse, _EllipseSector);

    function Ellipse() {
      (0, _classCallCheck3.default)(this, Ellipse);
      return (0, _possibleConstructorReturn3.default)(this, (Ellipse.__proto__ || (0, _getPrototypeOf2.default)(Ellipse)).apply(this, arguments));
    }

    (0, _createClass3.default)(Ellipse, [{
      key: 'startAngle',
      get: function get() {
        return 0;
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return 2 * Math.PI;
      }
    }]);
    return Ellipse;
  }(EllipseSector);

  registerNodeType('ellipse', Ellipse, false);

  return { Ellipse: Ellipse };
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

var _sector = __webpack_require__(123);

var _sector2 = _interopRequireDefault(_sector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(_ref) {
  var _class, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var _use2 = use(_sector2.default, null, false),
      Sector = _use2.Sector;

  var EllipseArcAttr = function (_Sector$Attr) {
    (0, _inherits3.default)(EllipseArcAttr, _Sector$Attr);

    /* eslint-disable no-useless-constructor */
    function EllipseArcAttr(subject) {
      (0, _classCallCheck3.default)(this, EllipseArcAttr);
      return (0, _possibleConstructorReturn3.default)(this, (EllipseArcAttr.__proto__ || (0, _getPrototypeOf2.default)(EllipseArcAttr)).call(this, subject));
    }

    return EllipseArcAttr;
  }(Sector.Attr);

  var EllipseArc = (_temp = _class = function (_Shape) {
    (0, _inherits3.default)(EllipseArc, _Shape);

    function EllipseArc() {
      (0, _classCallCheck3.default)(this, EllipseArc);
      return (0, _possibleConstructorReturn3.default)(this, (EllipseArc.__proto__ || (0, _getPrototypeOf2.default)(EllipseArc)).apply(this, arguments));
    }

    (0, _createClass3.default)(EllipseArc, [{
      key: 'render',
      value: function render(t, drawingContext) {
        (0, _get3.default)(EllipseArc.prototype.__proto__ || (0, _getPrototypeOf2.default)(EllipseArc.prototype), 'render', this).call(this, t, drawingContext);

        var radiusX = this.attr('radiusX');
        var radiusY = this.attr('radiusY');
        var x = 0;
        var y = 0;
        var rotate = this.attr('rotate') / 180 * Math.PI;
        var startAngle = this.attr('startAngle') / 180 * Math.PI;
        var endAngle = this.attr('endAngle') / 180 * Math.PI;
        var anticlockwise = this.attr('anticlockwise');

        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');

        if (drawingContext.ellipse) {
          drawingContext.beginPath();
          drawingContext.ellipse(x, y, radiusX, radiusY, rotate, startAngle, endAngle, anticlockwise);
          drawingContext.fill();
          drawingContext.stroke();
        } else {
          throw new Error("Your browser does'n support canvas ellipse");
        }

        return drawingContext;
      }
    }, {
      key: 'isVirtual',
      get: function get() {
        return true;
      }
    }]);
    return EllipseArc;
  }(Shape), _class.Attr = EllipseArcAttr, _temp);

  registerNodeType('ellipsearc', EllipseArc, false);
  return { EllipseArc: EllipseArc };
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _ellipse = __webpack_require__(125);

var _ellipse2 = _interopRequireDefault(_ellipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_ellipse2.default, null, false),
      Ellipse = _use.Ellipse;

  var CircleAttr = (_class = function (_Ellipse$Attr) {
    (0, _inherits3.default)(CircleAttr, _Ellipse$Attr);

    function CircleAttr(subject) {
      (0, _classCallCheck3.default)(this, CircleAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (CircleAttr.__proto__ || (0, _getPrototypeOf2.default)(CircleAttr)).call(this, subject));

      _this.setDefault({
        radius: 10
      });
      return _this;
    }

    (0, _createClass3.default)(CircleAttr, [{
      key: 'radius',
      set: function set(val) {
        this.clearFlow();
        this.set('radius', val);
      }
    }]);
    return CircleAttr;
  }(Ellipse.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype)), _class);
  var Circle = (_temp = _class2 = function (_Ellipse) {
    (0, _inherits3.default)(Circle, _Ellipse);

    function Circle() {
      (0, _classCallCheck3.default)(this, Circle);
      return (0, _possibleConstructorReturn3.default)(this, (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).apply(this, arguments));
    }

    (0, _createClass3.default)(Circle, [{
      key: 'radiuses',
      get: function get() {
        var radius = this.attr('radius');
        return [radius, radius];
      }
    }]);
    return Circle;
  }(Ellipse), _class2.Attr = CircleAttr, _temp);


  registerNodeType('circle', Circle, false);

  return { Circle: Circle };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(109);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get2 = __webpack_require__(107);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(40);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(54);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(86);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _shape = __webpack_require__(39);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(95);

function install(_ref) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      findColor = utils.findColor;

  var _use = use(_shape2.default, null, false),
      Shape = _use.Shape;

  var RingAttr = (_class = function (_Shape$Attr) {
    (0, _inherits3.default)(RingAttr, _Shape$Attr);

    function RingAttr(subject) {
      (0, _classCallCheck3.default)(this, RingAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (RingAttr.__proto__ || (0, _getPrototypeOf2.default)(RingAttr)).call(this, subject));

      _this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        center: [0, 0],
        lineWidth: 1,
        maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性
      });
      return _this;
    }

    // 内圆半径


    (0, _createClass3.default)(RingAttr, [{
      key: 'innerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('innerRadius', val);
      }

      // 外圆半径

    }, {
      key: 'outerRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('outerRadius', val);
      }
    }, {
      key: 'maxRadius',
      set: function set(val) {
        this.clearFlow();
        this.set('maxRadius', val);
      }
    }, {
      key: 'startAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('startAngle', val);
      }
    }, {
      key: 'endAngle',
      set: function set(val) {
        this.clearFlow();
        this.set('endAngle', val);
      }
    }, {
      key: 'center',
      set: function set(val) {
        this.clearFlow();
        this.set('center', val);
      }
    }]);
    return RingAttr;
  }(Shape.Attr), (_applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'innerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'outerRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'outerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'maxRadius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'maxRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'center'), _class.prototype)), _class);
  var Ring = (_class2 = (_temp = _class3 = function (_Shape) {
    (0, _inherits3.default)(Ring, _Shape);

    function Ring() {
      (0, _classCallCheck3.default)(this, Ring);
      return (0, _possibleConstructorReturn3.default)(this, (Ring.__proto__ || (0, _getPrototypeOf2.default)(Ring)).apply(this, arguments));
    }

    (0, _createClass3.default)(Ring, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'pointCollision', this).call(this, evt)) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1];

          var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;

          var r = this.attr('maxRadius');
          var offset = this.attr('outerRadius'); // 偏移量

          if (r <= 0) {
            r = offset;
          }

          offset = r - offset; // 如果未设置maxRadius，偏移量应当０
          var r0 = this.attr('innerRadius');
          var startAngle = this.attr('startAngle');
          var endAngle = this.attr('endAngle');

          var d = Math.sqrt(Math.pow(offsetX - r, 2) + Math.pow(offsetY - r, 2));
          var angle = Math.atan2(offsetY - r, offsetX - r);
          if (angle < 0) {
            angle = Math.PI * 2 + angle;
          }

          return d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle;
        }
      }
    }, {
      key: 'render',
      value: function render(t, ctx) {
        (0, _get3.default)(Ring.prototype.__proto__ || (0, _getPrototypeOf2.default)(Ring.prototype), 'render', this).call(this, t, ctx);
        var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
        var outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));

        var lw = this.attr('lineWidth');

        var isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
        var startAngle = isCircle ? 0 : this.startAngle;
        var endAngle = isCircle ? Math.PI * 2 : this.endAngle;
        if (endAngle > Math.PI * 2) {
          endAngle = Math.PI * 2;
        }

        ctx.miterLimit = 0;
        ctx.lineWidth = lw;
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.fillStyle = findColor(ctx, this, 'fillColor');

        var _attr3 = this.attr('center'),
            _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
            x = _attr4[0],
            y = _attr4[1];

        var maxRadius = this.attr('maxRadius');

        if (maxRadius <= 0) {
          maxRadius = outerRadius;
        }

        var lineBoundings = this.lineBoundings;
        ctx.translate(lineBoundings[2] / 2 - x + lw, lineBoundings[3] / 2 - y + lw);

        ctx.beginPath();
        ctx.arc(x, y, outerRadius, startAngle, endAngle, false);
        if (endAngle - startAngle === Math.PI * 2) {
          ctx.moveTo(outerRadius + innerRadius, outerRadius);
        }
        ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
        ctx.closePath();

        ctx.fill();

        if (lw > 0) {
          ctx.stroke();
        }
        return ctx;
      }
    }, {
      key: 'lineBoundings',


      // 边界依赖于最大圆
      get: function get() {
        var maxRadius = this.attr('maxRadius');

        if (maxRadius <= 0) {
          var radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
          maxRadius = radius;
        }

        return [0, 0, 2 * maxRadius, 2 * maxRadius];
      }
    }, {
      key: 'startAngle',
      get: function get() {
        return this.attr('startAngle');
      }
    }, {
      key: 'endAngle',
      get: function get() {
        return this.attr('endAngle');
      }
    }, {
      key: 'contentSize',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _attrSize = (0, _slicedToArray3.default)(this.attrSize, 2),
            width = _attrSize[0],
            height = _attrSize[1];

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
        }
        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      key: 'originalRect',
      get: function get() {
        var bounds = this.lineBoundings;
        var lw = this.attr('lineWidth');

        var _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
            width = _offsetSize[0],
            height = _offsetSize[1];

        var _attr5 = this.attr('anchor'),
            _attr6 = (0, _slicedToArray3.default)(_attr5, 2),
            anchorX = _attr6[0],
            anchorY = _attr6[1];

        var rect = [0, 0, width, height];
        var offsetX = Math.min(0, bounds[0]);
        var offsetY = Math.min(0, bounds[1]);

        rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
        rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);

        return rect;
      }
    }]);
    return Ring;
  }(Shape), _class3.Attr = RingAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ring', Ring);
  return { Ring: Ring };
}

/***/ })
/******/ ]);
});