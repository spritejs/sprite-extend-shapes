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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return shapes; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _polyline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _polycurve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _polygon_polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _polygon_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _polygon_rect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _polygon_star__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _ellipseShape_sector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56);
/* harmony import */ var _ellipseShape_ellipse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58);
/* harmony import */ var _ellipseShape_ellipseSector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var _ellipseShape_ellipseArc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59);
/* harmony import */ var _ellipseShape_circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60);
/* harmony import */ var _ring__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61);




















// auto use
if (typeof window !== 'undefined' && window.spritejs) {
  window.spritejs.use(install);
}

function install(spritejs) {
  return [_shape__WEBPACK_IMPORTED_MODULE_1__["default"], _polyline__WEBPACK_IMPORTED_MODULE_2__["default"], _polycurve__WEBPACK_IMPORTED_MODULE_3__["default"], _wave__WEBPACK_IMPORTED_MODULE_4__["default"], _polygon_polygon__WEBPACK_IMPORTED_MODULE_5__["default"], _polygon_triangle__WEBPACK_IMPORTED_MODULE_6__["default"], _polygon_rect__WEBPACK_IMPORTED_MODULE_7__["default"], _polygon_star__WEBPACK_IMPORTED_MODULE_8__["default"], _arc__WEBPACK_IMPORTED_MODULE_9__["default"], _ellipseShape_sector__WEBPACK_IMPORTED_MODULE_10__["default"], _ellipseShape_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"], _ellipseShape_ellipseSector__WEBPACK_IMPORTED_MODULE_12__["default"], _ellipseShape_ellipseArc__WEBPACK_IMPORTED_MODULE_13__["default"], _ellipseShape_circle__WEBPACK_IMPORTED_MODULE_14__["default"], _ring__WEBPACK_IMPORTED_MODULE_15__["default"]].reduce((pkg, Node) => {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(pkg, spritejs.use(Node, null, false));
  }, {});
}

const shapes = {
  Polyline: _polyline__WEBPACK_IMPORTED_MODULE_2__["default"],
  Polycurve: _polycurve__WEBPACK_IMPORTED_MODULE_3__["default"],
  Wave: _wave__WEBPACK_IMPORTED_MODULE_4__["default"],
  Polygon: _polygon_polygon__WEBPACK_IMPORTED_MODULE_5__["default"],
  Triangle: _polygon_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  Rect: _polygon_rect__WEBPACK_IMPORTED_MODULE_7__["default"],
  Star: _polygon_star__WEBPACK_IMPORTED_MODULE_8__["default"],
  Arc: _arc__WEBPACK_IMPORTED_MODULE_9__["default"],
  Sector: _ellipseShape_sector__WEBPACK_IMPORTED_MODULE_10__["default"],
  Ellipse: _ellipseShape_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"],
  EllipseSector: _ellipseShape_ellipseSector__WEBPACK_IMPORTED_MODULE_12__["default"],
  EllipseArc: _ellipseShape_ellipseArc__WEBPACK_IMPORTED_MODULE_13__["default"],
  Circle: _ellipseShape_circle__WEBPACK_IMPORTED_MODULE_14__["default"],
  Ring: _ring__WEBPACK_IMPORTED_MODULE_15__["default"]
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

var core = module.exports = { version: '2.6.3' };
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
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sprite_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var sprite_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprite_draggable__WEBPACK_IMPORTED_MODULE_1__);


const _applyDecoratedDescriptor = __webpack_require__(45);


function install({ BaseSprite, utils }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr, parseColorString } = utils;

  let ShapeAttr = (_class = class ShapeAttr extends BaseSprite.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        color: 'transparent',
        fillColor: 'transparent',
        lineWidth: 0,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [0, 0],
        lineDashOffset: 0,
        enableCache: false
      });
    }

    set lineWidth(val) {
      this.set('lineWidth', val);
    }

    set lineCap(val) {
      this.set('lineCap', val);
    }

    set lineJoin(val) {
      this.set('lineJoin', val);
    }

    set lineDash(val) {
      this.set('lineDash', val);
    }

    set lineDashOffset(val) {
      this.set('lineDashOffset', val);
    }

    set fillColor(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }

    set draggable(val) {
      this.set('draggable', val);
      Object(sprite_draggable__WEBPACK_IMPORTED_MODULE_1__["draggable"])(this.subject, val);
    }

    set droppable(val) {
      this.set('droppable', val);
      Object(sprite_draggable__WEBPACK_IMPORTED_MODULE_1__["droppable"])(this.subject, val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'draggable', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'draggable'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'droppable', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'droppable'), _class.prototype)), _class);
  let Shape = (_temp = _class2 = class Shape extends BaseSprite {}, _class2.Attr = ShapeAttr, _temp);


  return { Shape };
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}([function(t,e,n){var r=n(22)("wks"),o=n(14),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(9),o=n(30),i=n(18),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(48),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(13);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(1),o=n(2),i=n(49),u=n(7),f=n(5),a=function(t,e,n){var c,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,h=t&a.B,m=t&a.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(c in d&&(n=e),n)(s=!p&&x&&void 0!==x[c])&&f(g,c)||(l=s?x[c]:n[c],g[c]=d&&"function"!=typeof x[c]?n[c]:h&&s?i(l,r):m&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&u(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(34),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(22)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(11)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3).f,o=n(5),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(1),o=n(2),i=n(11),u=n(38),f=n(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){n(28),n(35),t.exports=n(60)},function(t,e,n){n(45);for(var r=n(1),o=n(7),i=n(8),u=n(0)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<f.length;a++){var c=f[a],s=r[c],l=s&&s.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(11),o=n(17),i=n(32),u=n(7),f=n(8),a=n(51),c=n(24),s=n(57),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,h,m){a(n,e,v);var g,b,x,_=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",w="values"==y,S=!1,M=t.prototype,j=M[l]||M["@@iterator"]||y&&M[y],P=j||_(y),E=y?w?_("entries"):P:void 0,T="Array"==e&&M.entries||j;if(T&&(x=s(T.call(new t)))!==Object.prototype&&x.next&&(c(x,O,!0),r||"function"==typeof x[l]||u(x,l,d)),w&&j&&"values"!==j.name&&(S=!0,P=function(){return j.call(this)}),r&&!m||!p&&!S&&M[l]||u(M,l,P),f[e]=P,f[O]=d,y)if(g={values:w?P:_("values"),keys:h?P:_("keys"),entries:E},m)for(b in g)b in M||i(M,b,g[b]);else o(o.P+o.F*(p||S),e,g);return g}},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(9),o=n(52),i=n(23),u=n(21)("IE_PROTO"),f=function(){},a=function(){var t,e=n(31)("iframe"),r=i.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(5),o=n(6),i=n(53)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),a=0,c=[];for(n in f)n!=u&&r(f,n)&&c.push(n);for(;e.length>a;)r(f,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){"use strict";var r=n(59)(!0);n(29)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(15),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){n(28),n(35),t.exports=n(62)},function(t,e,n){e.f=n(0)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(34),o=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.droppable=e.draggable=void 0;var r=n(42);e.draggable=r.draggable,e.droppable=r.droppable},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(43)),o=u(n(64));e.draggable=function(t,e){return e&&e.destroy||!1===e?t[p]?(delete t[p],t.off("mousedown",t[c]).off("mousemove",t[s]).off("mouseup",t[l])):t:t[p]?t:(t[p]=!0,t[c]=function(e){if(e.stopPropagation(),(f=function t(e){return e[p]?e:"layer"===e.tarName?null:e.parentNode?t(e.parentNode):null}(e.target))!==t)return;var n=e.offsetX,r=e.offsetY;f.x0_=n,f.y0_=r,f.dispatchEvent("dragstart",y(e),!0,!0),f.setMouseCapture()},t[s]=function(e){if(e.stopPropagation(),f&&f===t&&null!=f.x0_){var n=e.offsetX,o=e.offsetY,u=n-t.x0_,c=o-t.y0_,s=t.attr("pos"),l=(0,r.default)(s,2),p=l[0],d=l[1],m=new i.Matrix(t.transform.m),g=m.transformPoint(u,c),b=(0,r.default)(g,2);u=b[0],c=b[1];var x=t.dragRect||[],_=(0,r.default)(x,4),O=_[0],w=_[1],S=_[2],M=_[3],j=p+u,P=d+c;void 0!==O&&(j=Math.max(O,j)),void 0!==S&&(j=Math.min(S,j)),void 0!==w&&(P=Math.max(w,P)),void 0!==M&&(P=Math.min(M,P)),t.attr({x:j,y:P}),f.dispatchEvent("drag",y(e),!0,!0),function(t,e){t.dragItem=e;e.renderBox;a.forEach(function(n){if(e!==n){var r=h(e,n);r&&!n[v]?(n[v]=!0,n.dispatchEvent("dragenter",y(t),!0,!0)):!r&&n[v]?(delete n[v],n.dispatchEvent("dragleave",y(t),!0,!0)):r&&n[v]&&n.dispatchEvent("dragover",y(t),!0,!0)}})}(e,t)}},t[l]=function(e){e.stopPropagation(),f&&null!=f.x0_&&(f.releaseMouseCapture(),delete f.x0_,delete f.y0_,f.dispatchEvent("dragend",y(e),!0,!0),function(t,e){t.dragItem=e,a.forEach(function(n){var r=h(e,n);r&&n[v]&&(delete n[v],n.dispatchEvent("drop",y(t),!0,!0))})}(e,t));f=null},e&&e.dragRect&&(t.dragRect=e.dragRect),t.on("mousedown",t[c]).on("mousemove",t[s]).on("mouseup",t[l]))},e.droppable=function(t,e){if(e&&e.destroy||!1===e){if(t[d]){delete t[p];var n=a.indexOf(t);-1!==n&&a.splice(n,1)}}else t[d]||(a.push(t),t[d]=!0);return t};var i=n(75);function u(t){return t&&t.__esModule?t:{default:t}}var f=null,a=[],c=(0,o.default)("mouseDown"),s=(0,o.default)("mouseMove"),l=(0,o.default)("mouseUp"),p=(0,o.default)("isDraggable"),d=(0,o.default)("isDroppable"),v=(0,o.default)("_isDragenter");function y(t){return{detail:t}}function h(t,e){var n=t.renderBox,r=m(t),o=m(e);r=[r[0]-o[0],r[1]-o[1]];var i=[(n[0]+n[2])/2+r[0],(n[1]+n[3])/2+r[1]];return e.pointCollision({offsetX:i[0],offsetY:i[1],layerX:i[0],layerY:i[1]})}function m(t){var e=0,n=0;if(t.parent&&t.parent.tagName&&"layer"!==t.parent.tagName.toLowerCase()){var o=(0,r.default)(t.parent.renderBox,2);e=o[0],n=o[1]}return[e,n]}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(44)),o=i(n(61));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var f,a=(0,o.default)(t);!(r=(f=a.next()).done)&&(n.push(f.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){"use strict";var r=n(46),o=n(47),i=n(8),u=n(6);t.exports=n(29)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(50);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(33),o=n(13),i=n(24),u={};n(7)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(9),i=n(19);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,a=0;f>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(6),o=n(54),i=n(55);t.exports=function(t){return function(e,n,u){var f,a=r(e),c=o(a.length),s=i(u,c);if(t&&n!=n){for(;c>s;)if((f=a[s++])!=f)return!0}else for(;c>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(20),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(5),o=n(58),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(20),o=n(16);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),a=r(n),c=f.length;return a<0||a>=c?t?"":void 0:(i=f.charCodeAt(a))<55296||i>56319||a+1===c||(u=f.charCodeAt(a+1))<56320||u>57343?t?f.charAt(a):i:t?f.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(36),o=n(0)("iterator"),i=n(8);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e,n){var r=n(9),o=n(63);t.exports=n(2).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(36),o=n(0)("iterator"),i=n(8);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){n(66),n(72),n(73),n(74),t.exports=n(2).Symbol},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(4),u=n(17),f=n(32),a=n(67).KEY,c=n(12),s=n(22),l=n(24),p=n(14),d=n(0),v=n(38),y=n(25),h=n(68),m=n(69),g=n(9),b=n(10),x=n(6),_=n(18),O=n(13),w=n(33),S=n(70),M=n(71),j=n(3),P=n(19),E=M.f,T=j.f,L=S.f,k=r.Symbol,A=r.JSON,I=A&&A.stringify,N=d("_hidden"),C=d("toPrimitive"),F={}.propertyIsEnumerable,D=s("symbol-registry"),R=s("symbols"),z=s("op-symbols"),V=Object.prototype,G="function"==typeof k,B=r.QObject,W=!B||!B.prototype||!B.prototype.findChild,Y=i&&c(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(V,e);r&&delete V[e],T(t,e,n),r&&t!==V&&T(V,e,r)}:T,H=function(t){var e=R[t]=w(k.prototype);return e._k=t,e},J=G&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},X=function(t,e,n){return t===V&&X(z,e,n),g(t),e=_(e,!0),g(n),o(R,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=w(n,{enumerable:O(0,!1)})):(o(t,N)||T(t,N,O(1,{})),t[N][e]=!0),Y(t,e,n)):T(t,e,n)},K=function(t,e){g(t);for(var n,r=h(e=x(e)),o=0,i=r.length;i>o;)X(t,n=r[o++],e[n]);return t},U=function(t){var e=F.call(this,t=_(t,!0));return!(this===V&&o(R,t)&&!o(z,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,N)&&this[N][t])||e)},q=function(t,e){if(t=x(t),e=_(e,!0),t!==V||!o(R,e)||o(z,e)){var n=E(t,e);return!n||!o(R,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=L(x(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==N||e==a||r.push(e);return r},Z=function(t){for(var e,n=t===V,r=L(n?z:x(t)),i=[],u=0;r.length>u;)!o(R,e=r[u++])||n&&!o(V,e)||i.push(R[e]);return i};G||(f((k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(z,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),Y(this,t,O(1,n))};return i&&W&&Y(V,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),M.f=q,j.f=X,n(40).f=S.f=Q,n(26).f=U,n(39).f=Z,i&&!n(11)&&f(V,"propertyIsEnumerable",U,!0),v.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!G,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=P(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=k(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,e){return void 0===e?w(t):K(w(t),e)},defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:q,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),A&&u(u.S+u.F*(!G||c(function(){var t=k();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!J(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,I.apply(A,r)}}),k.prototype[C]||n(7)(k.prototype,C,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(14)("meta"),o=n(10),i=n(5),u=n(3).f,f=0,a=Object.isExtensible||function(){return!0},c=!n(12)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){var r=n(19),o=n(39),i=n(26);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),a=i.f,c=0;f.length>c;)a.call(t,u=f[c++])&&e.push(u);return e}},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(6),o=n(40).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(26),o=n(13),i=n(6),u=n(18),f=n(5),a=n(30),c=Object.getOwnPropertyDescriptor;e.f=n(4)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector=e.Matrix=void 0;var r=i(n(76)),o=i(n(77));function i(t){return t&&t.__esModule?t:{default:t}}e.Matrix=r.default,e.Vector=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){t=t||[1,0,0,1,0,0],this.m=[t[0],t[1],t[2],t[3],t[4],t[5]]};r.prototype.unit=function(){return this.m=[1,0,0,1,0,0],this},r.prototype.multiply=function(t){var e=this.m,n=void 0;n=t instanceof r?t.m:t;var o=e[0]*n[0]+e[2]*n[1],i=e[1]*n[0]+e[3]*n[1],u=e[0]*n[2]+e[2]*n[3],f=e[1]*n[2]+e[3]*n[3],a=e[0]*n[4]+e[2]*n[5]+e[4],c=e[1]*n[4]+e[3]*n[5]+e[5];return e[0]=o,e[1]=i,e[2]=u,e[3]=f,e[4]=a,e[5]=c,this},r.prototype.inverse=function(){var t=new r(this.m),e=t.m,n=1/(e[0]*e[3]-e[1]*e[2]),o=e[3]*n,i=-e[1]*n,u=-e[2]*n,f=e[0]*n,a=n*(e[2]*e[5]-e[3]*e[4]),c=n*(e[1]*e[4]-e[0]*e[5]);return e[0]=o,e[1]=i,e[2]=u,e[3]=f,e[4]=a,e[5]=c,t},r.prototype.translate=function(t,e){return this.multiply([1,0,0,1,t,e])},r.prototype.rotate=function(t){var e=t*Math.PI/180,n=Math.cos(e),r=Math.sin(e);return this.multiply([n,r,-r,n,0,0])},r.prototype.skew=function(t,e){e|=0;var n=t*Math.PI/180,r=e*Math.PI/180,o=Math.tan(n),i=Math.tan(r);return this.multiply([1,i,o,1,0,0])},r.prototype.scale=function(t,e){return this.multiply([t,0,0,e,0,0])},r.prototype.transformPoint=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2]+this.m[4],e=n*this.m[1]+r*this.m[3]+this.m[5]]},r.prototype.transformVector=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2],e=n*this.m[1]+r*this.m[3]]},e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(78)),o=u(n(81)),i=u(n(82));function u(t){return t&&t.__esModule?t:{default:t}}var f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];(0,o.default)(this,t);var i=(0,r.default)(e,3),u=i[0],f=i[1],a=i[2],c=(0,r.default)(n,3),s=c[0],l=c[1],p=c[2];a=a||0,p=p||0,this.x=u-s,this.y=f-l,this.z=a-p}return(0,i.default)(t,[{key:"unit",value:function(){var e=this.length;return new t([this.x/e,this.y/e,this.z/e])}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"cross",value:function(e){var n=this.x,r=this.y,o=this.z,i=e.x,u=e.y,f=e.z;return new t([r*f-o*u,o*i-n*f,n*u-i*r])}},{key:"length",get:function(){var t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}}]),t}();e.default=f},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(79)),o=i(n(80));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var f,a=(0,o.default)(t);!(r=(f=a.next()).done)&&(n.push(f.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(83),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(84),__esModule:!0}},function(t,e,n){n(85);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(17);r(r.S+r.F*!n(4),"Object",{defineProperty:n(3).f})}])});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);


const _applyDecoratedDescriptor = __webpack_require__(45);




function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let PolylineAttr = (_class = class PolylineAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: null,
        close: false,
        smooth: false,
        tolerance: 6
      });
    }

    set tolerance(val) {
      this.set('tolerance', val);
    }

    set points(val) {
      this.clearFlow();
      this.set('points', val);
    }

    set smooth(val) {
      this.set('smooth', val);
    }

    set close(val) {
      this.set('close', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'tolerance', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'tolerance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'close', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'close'), _class.prototype)), _class);
  let Polyline = (_temp = _class2 = class Polyline extends Shape {

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    pointCollision(evt) {
      super.pointCollision(evt);
      const { offsetX, offsetY } = evt;
      const cacheLineWidth = this.context.lineWidth; // 获取当前画布的lineWidth宽度
      const tolerance = this.attr('tolerance'); // 线条点击的容差像素值，默认6px
      this.context.lineWidth = this.attr('lineWidth') + tolerance; // 点击范围为线条加上容差值，方便碰撞检测
      let res = false;
      if (this.path && (this.context.isPointInStroke(this.path, offsetX, offsetY) || this.attr('close') && this.context.isPointInPath(this.path, offsetX, offsetY)) // 如果是闭合曲线，判断是否点击到闭合曲线内部
      ) {
          res = true;
        }
      this.context.lineWidth = cacheLineWidth; // 还原当前画布的lineWidth宽度
      return res;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points) {
        drawingContext.fillStyle = this.attr('fillColor');
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.lineJoin = this.attr('lineJoin');
        drawingContext.lineCap = this.attr('lineCap');
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');

        const smooth = this.attr('smooth');
        const path = new Path2D();

        if (smooth) {
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["drawSmoothCurveLine"])(path, this.points, drawingContext);
        } else {
          this.points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
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
  }, _class2.Attr = PolylineAttr, _temp);

  registerNodeType('polyline', Polyline, false);
  return { Polyline };
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSmoothCurveLine", function() { return drawSmoothCurveLine; });
const cos = angle => Number(Math.cos(angle).toFixed(15));
const sin = angle => Number(Math.sin(angle).toFixed(15));
const round = v => Math.round(v);

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
  function getCtrlPoint(i, a = 0.1, b = 0.1) {
    let x0;
    let y0;
    let x1;
    let y1;

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
      const last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  }

  points = points.map(([x, y]) => ({ x, y }));

  points.forEach((point, i) => {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      const [A, B] = getCtrlPoint(i - 1);
      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let PolycurveAttr = (_class = class PolycurveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        startPoint: [0, 0]
      });
    }

    set points(val) {
      this.clearFlow();
      this.set('points', val);
    }

    set startPoint(val) {
      this.clearFlow();
      this.set('startPoint', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'points', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'startPoint'), _class.prototype)), _class);
  let Polycurve = (_temp = _class2 = class Polycurve extends Shape {

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    // FIXME: 碰撞检测
    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        const { offsetX, offsetY } = evt;

        return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
      }
    }

    render(t, ctx) {
      super.render(t, ctx);
      // const startPoint = this.attr('startPoint');
      const points = this.points;

      ctx.fillStyle = this.attr('fillColor');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.lineJoin = this.attr('lineJoin');
      ctx.lineCap = this.attr('lineCap');
      ctx.lineWidth = this.attr('lineWidth');
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');

      const path = new Path2D();
      // path.moveTo(...startPoint);

      /* eslint-disable arrow-parens */
      points.forEach(point => {
        const [cp1x, cp1y, cp2x, cp2y, x, y] = point;
        path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      });

      ctx.fill(path);
      ctx.stroke(path);

      this.path = path;

      return ctx;
    }
  }, _class2.Attr = PolycurveAttr, _temp);

  registerNodeType('polycurve', Polycurve, false);
  return { Polycurve };
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);


const _applyDecoratedDescriptor = __webpack_require__(45);




function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let WaveAttr = (_class = class WaveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 50,
        offset: 10,
        percent: 0,
        amplitude: 0,
        speed: 0
      });
    }

    set radius(val) {
      this.clearFlow();
      this.set('radius', val);
    }

    set offset(val) {
      this.clearFlow();
      this.set('offset', val);
    }

    set percent(val) {
      this.clearFlow();
      this.set('percent', val);
    }

    set amplitude(val) {
      this.clearFlow();
      this.set('amplitude', val);
    }

    set speed(val) {
      this.clearFlow();
      this.set('speed', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offset', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'offset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'percent', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'percent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'amplitude', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'amplitude'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'speed', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'speed'), _class.prototype)), _class);
  let Wave = (_temp = _class2 = class Wave extends Shape {

    get points() {
      return this.attr('points');
    }

    get isVirtual() {
      return true;
    }

    render(t, ctx) {
      super.render(t, ctx);
      const lw = this.attr('lineWidth');
      const strokeStyle = findColor(ctx, this, 'color');
      const fillStyle = findColor(ctx, this, 'fillColor');
      const radius = this.attr('radius');
      const offset = this.attr('offset');
      const percent = this.attr('percent');
      const AMPLITUDE = this.attr('amplitude') || radius / 10;
      const [cx, cy] = [0, 0];

      let startAngle = 0;
      if (percent <= 0.5) {
        startAngle = 0.25 - percent / 2;
      } else if (percent < 1) {
        startAngle = 0 - (percent - 0.5) / 2;
      } else {
        startAngle = 0;
      }
      startAngle *= Math.PI * 2;
      const sinVal = percent >= 1 ? -1 : Object(_util__WEBPACK_IMPORTED_MODULE_2__["sin"])(startAngle / 2);
      const y = Object(_util__WEBPACK_IMPORTED_MODULE_2__["round"])(radius * sinVal);

      // 三角函数公式：y=Asin（wx+φ）+h
      const A = (radius / 20 * Object(_util__WEBPACK_IMPORTED_MODULE_2__["sin"])(percent * Math.PI) + AMPLITUDE) / 2; // 振幅;
      const W = Math.PI * 2 / 200;
      const H = cy + y;
      const Q = this.attr('speed');

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
      for (let x = cx - radius; x <= cx + radius; x++) {
        const _y = A * Math.sin(W * x + Q) + H;
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
  }, _class2.Attr = WaveAttr, _temp);


  registerNodeType('wave', Wave, false);
  return { Wave };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);


const _applyDecoratedDescriptor = __webpack_require__(45);




function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  const { attr, flow, parseColorString, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let PolygonAttr = (_class = class PolygonAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        smooth: null
      });
    }

    set smooth(val) {
      this.set('smooth', val);
    }

    set points(val) {
      this.clearFlow();
      this.set('points', val);
    }

    set color(val) {
      val = parseColorString(val);
      this.set('color', val);
    }

    set lineWidth(val) {
      this.set('lineWidth', val);
    }

    set fillColor(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'smooth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'smooth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'points', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'points'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'fillColor'), _class.prototype)), _class);
  let Polygon = (_class2 = (_temp = _class3 = class Polygon extends Shape {

    get lineBoundings() {
      const bounds = [0, 0, 0, 0];
      const points = this.points;

      points.forEach(([x, y]) => {
        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);
        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
    }

    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;
      width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      return [width, height].map(Math.ceil);
    }

    get originalRect() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      const [width, height] = this.offsetSize;
      const [anchorX, anchorY] = this.attr('anchor');

      const rect = [0, 0, width, height];
      const offsetX = Math.min(0, bounds[0]);
      const offsetY = Math.min(0, bounds[1]);

      rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
      rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
      return rect;
    }

    get points() {
      return this.attr('points');
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let { offsetX = 0, offsetY = 0 } = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;
        return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);
      if (this.points.length) {
        const bounds = this.lineBoundings;
        const lw = this.attr('lineWidth');
        drawingContext.translate(-Math.min(0, bounds[0]) + lw, -Math.min(0, bounds[1]) + lw);
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineWidth = this.attr('lineWidth');
        drawingContext.setLineDash(this.attr('lineDash'));
        drawingContext.lineDashOffset = this.attr('lineDashOffset');
        drawingContext.beginPath();
        const path = new Path2D();
        let smooth = this.attr('smooth');
        const points = this.points.slice(0, this.points.length);
        if (smooth && !smooth.length) {
          smooth = [0, points.length - 1];
        }
        // 绘制光滑曲线（直线）
        if (!smooth) {
          points.forEach((point, i) => {
            if (i === 0) {
              path.moveTo(...point);
            } else {
              path.lineTo(...point);
            }
          });
        } else {
          if (Object.prototype.toString.call(smooth[0]) !== '[object Array]') {
            // 如果不是多维数组，转成多维
            smooth = [smooth];
          }
          const startPos = points[0];
          const endPos = points[points.length - 1];
          if (startPos[0] !== endPos[0] || startPos[1] !== endPos[1]) {
            points.push(points[0]);
          }
          let subIndex = 0;
          smooth.forEach((arr, iind) => {
            const smoothStart = arr[0];
            const smoothEnd = arr[1];
            for (let i = subIndex; i < smoothStart; i++) {
              if (i === 0) {
                // 如果是所有线条的起始点
                path.moveTo(...points[0]);
              } else {
                // 如果是转换点
                path.lineTo(...points[i]);
              }
            }
            const smoothPoints = points.slice(smoothStart, smoothEnd + 1);
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["drawSmoothCurveLine"])(path, smoothPoints, smoothStart);
            subIndex = smoothEnd;
          });
          for (let i = subIndex; i < points.length - 1; i++) {
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
  }, _class3.Attr = PolygonAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);

  registerNodeType('polygon', Polygon, false);
  return { Polygon };
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);


function install({ use, utils, registerNodeType }) {
  const { Polygon } = use(_polygon__WEBPACK_IMPORTED_MODULE_0__["default"], null, false);

  let Triangle = class Triangle extends Polygon {
    get points() {
      const [s1, s2] = this.attr('sides');
      const angle = Math.PI / 180 * this.attr('angle');
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      return [p0, p1, p2];
    }
  };


  registerNodeType('triangle', Triangle, false);
  return { Triangle };
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr } = utils;
  const { Polygon } = use(_polygon__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let rectAttr = (_class = class rectAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angle: 90,
        sides: null,
        size: null
      });
    }

    set angle(val) {
      this.clearFlow();
      this.set('angle', val);
    }

    set sides(val) {
      this.clearFlow();
      this.set('sides', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'angle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sides', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'sides'), _class.prototype)), _class);
  let Rect = (_temp = _class2 = class Rect extends Polygon {

    get points() {
      const [s1, s2] = this.attr('sides') || this.attr('size');
      const oAngle = this.attr('angle');
      let cosAngle = 0;
      let sinAngle = 1;
      if (oAngle === 90) {
        // 90默认不处理
      } else {
        const angle = Math.PI * this.attr('angle') / 180;
        cosAngle = Math.cos(angle);
        sinAngle = Math.sin(angle);
      }
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [s1 + s2 * cosAngle, s2 * sinAngle];
      const p3 = [s2 * cosAngle, s2 * sinAngle];
      return [p0, p1, p2, p3];

      // const [s1, s2] = this.attr('sides') || this.attr('size');
      // const angle = (Math.PI / 180) * this.attr('angle');
      // const p0 = [0, 0];
      // const p1 = [s1, 0];
      // const p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
      // const p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
      // return [p0, p1, p2, p3];
    }
  }, _class2.Attr = rectAttr, _temp);


  registerNodeType('rect', Rect, false);
  return { Rect };
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr } = utils;
  const { Polygon } = use(_polygon__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let PolygonAttr = (_class = class PolygonAttr extends Polygon.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        angles: 5
      });
    }

    set angles(num) {
      this.clearFlow();
      this.set('angles', num);
    }

    set radius(val) {
      // 圆半径
      this.clearFlow();
      this.set('radius', val);
    }

    set innerRadius(val) {
      this.clearFlow();
      this.set('innerRadius', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'angles', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'angles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'innerRadius'), _class.prototype)), _class);


  function getStarPolygonPoints(angles) {
    const points = [];
    const pointsLength = angles * 2;

    return function (outerRadius, innerRadius) {
      const offsetX = outerRadius;
      const radAngle = -Math.PI / 2;
      const radAlpha = Math.PI * 2 / angles;

      for (let i = 1; i <= pointsLength; i++) {
        const rad = radAlpha * i + radAngle;
        const len = i % 2 ? innerRadius : outerRadius;
        const xPos = offsetX + Math.cos(rad) * len;
        const yPos = Math.sin(rad) * len;

        points.push([xPos, yPos]);
      }

      return points;
    };
  }

  let Star = (_temp = _class2 = class Star extends Polygon {

    get points() {
      const radius = this.attr('radius');
      const innerRadius = this.attr('innerRadius') || 0.4 * radius;
      return getStarPolygonPoints(this.attr('angles'))(radius, innerRadius);
    }
  }, _class2.Attr = PolygonAttr, _temp);


  registerNodeType('star', Star, false);
  return { Star };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let ArcAttr = (_class = class ArcAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        center: [0, 0],
        startPoint: [0, 0],
        angel: 0,
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
    }

    // 圆弧的圆心

    set center(val) {
      this.clearFlow();
      this.set('center', val);
    }

    // 圆弧起始点

    set startPoint(point) {
      this.clearFlow();
      this.set('startPoint', point);
    }

    // 旋转角度

    set angle(angle) {
      this.clearFlow();
      this.set('angle', angle);
    }

    set radius(val) {
      this.clearFlow();
      this.set('radius', val);
    }

    set startAngle(val) {
      this.clearFlow();
      this.set('startAngle', val);
    }

    set endAngle(val) {
      this.clearFlow();
      this.set('endAngle', val);
    }

    // 旋转方向

    set anticlockwise(val) {
      this.clearFlow();
      this.set('anticlockwise', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'center', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'center'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startPoint', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'startPoint'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'angle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'angle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'anticlockwise'), _class.prototype)), _class);
  let Arc = (_temp = _class2 = class Arc extends Shape {

    get isVirtual() {
      return true;
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    render(t, ctx) {
      if (this.attr('center')) {
        const [cx, cy] = this.attr('center');

        const startAngle = this.startAngle;
        const endAngle = this.endAngle;
        const radius = this.attr('radius');

        // const [sx, sy] = this.attr('startPoint');
        // const radius = getDist([cx, cy], [sx, sy]);
        const anticlockwise = this.attr('anticlockwise');
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

        const path = new Path2D();
        path.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
        ctx.stroke(path);
        this.path = path;
      } else {
        console.error('center must be given when drawing an arc!');
      }
      return ctx;
    }
  }, _class2.Attr = ArcAttr, _temp);

  registerNodeType('arc', Arc, false);
  return { Arc };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _ellipseSector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);


function install({ use, utils, registerNodeType }) {
  const { EllipseSector } = use(_ellipseSector__WEBPACK_IMPORTED_MODULE_0__["default"], null, false);

  let Sector = class Sector extends EllipseSector {
    get radiuses() {
      return [this.attr('radius'), this.attr('radius')];
    }
  };


  Sector.defineAttributes({
    radius(attr, val) {
      attr.clearFlow();
      attr.set('radius', val);
    }
  });

  registerNodeType('sector', Sector, false);
  return { Sector };
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  const { attr, flow, parseColorString, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let EllipseSectorAttr = (_class = class EllipseSectorAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radiusX: 10,
        radiusY: 20,
        center: [0, 0],
        startAngle: 0,
        endAngle: 0,
        lineWidth: 1,
        anticlockwise: false
      });
    }

    // 短轴半径

    set radiusX(val) {
      this.clearFlow();
      this.set('radiusX', val);
    }

    // 长轴半径

    set radiusY(val) {
      this.clearFlow();
      this.set('radiusY', val);
    }

    set startAngle(val) {
      this.clearFlow();
      this.set('startAngle', val);
    }

    set endAngle(val) {
      this.clearFlow();
      this.set('endAngle', val);
    }

    set color(val) {
      val = parseColorString(val);
      this.set('color', val);
    }

    set lineWidth(val) {
      this.set('lineWidth', val);
    }

    set fillColor(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }

    set anticlockwise(val) {
      this.set('anticlockwise', val);
    }

    set center(val) {
      this.clearFlow();
      this.set('center', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'radiusX', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radiusX'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'radiusY', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radiusY'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anticlockwise', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'anticlockwise'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'center'), _class.prototype)), _class);
  let EllipseSector = (_class2 = (_temp = _class3 = class EllipseSector extends Shape {

    get radiuses() {
      return [this.attr('radiusX'), this.attr('radiusY')];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    get center() {
      return this.attr('center');
    }

    get lineBoundings() {
      return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
    }

    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = [...this.attrSize];

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      }

      return [width, height].map(Math.ceil);
    }

    get originalRect() {
      const radiuses = this.radiuses;
      const [x, y, w, h] = super.originalRect;
      const rect = [x - radiuses[0], y - radiuses[1], w, h];
      return rect;
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let { offsetX, offsetY } = evt;
        // FIXME: 如果事件是改变半径大小，会导致contentSize变化，如何避免？
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
      }
    }

    render(t, ctx) {
      let x;
      let y;
      const [rx, ry] = this.radiuses;

      if (this.center && this.center.length > 0) {
        [x, y] = this.center;
      } else {
        x = rx;
        y = ry;
      }

      ctx.translate(this.radiuses[0], this.radiuses[1]);

      const startAngle = this.startAngle;
      const endAngle = this.endAngle;

      ctx.miterLimit = 3;
      ctx.lineWidth = this.attr('lineWidth');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      const path = new Path2D();
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
  }, _class3.Attr = EllipseSectorAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ellipsesector', EllipseSector, false);
  return { EllipseSector };
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _ellipseSector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);


function install({ use, utils, registerNodeType }) {
  const { EllipseSector } = use(_ellipseSector__WEBPACK_IMPORTED_MODULE_0__["default"], null, false);
  let Ellipse = class Ellipse extends EllipseSector {
    get startAngle() {
      return 0;
    }

    get endAngle() {
      return 2 * Math.PI;
    }
  };


  registerNodeType('ellipse', Ellipse, false);

  return { Ellipse };
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _sector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);



function install({ use, utils, registerNodeType }) {
  var _class, _temp;

  const { findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_0__["default"], null, false);
  const { Sector } = use(_sector__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let EllipseArcAttr = class EllipseArcAttr extends Sector.Attr {
    /* eslint-disable no-useless-constructor */
    constructor(subject) {
      super(subject);
    }
  };
  let EllipseArc = (_temp = _class = class EllipseArc extends Shape {

    get isVirtual() {
      return true;
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      const radiusX = this.attr('radiusX');
      const radiusY = this.attr('radiusY');
      const x = 0;
      const y = 0;
      const rotate = this.attr('rotate') / 180 * Math.PI;
      const startAngle = this.attr('startAngle') / 180 * Math.PI;
      const endAngle = this.attr('endAngle') / 180 * Math.PI;
      const anticlockwise = this.attr('anticlockwise');

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
  }, _class.Attr = EllipseArcAttr, _temp);

  registerNodeType('ellipsearc', EllipseArc, false);
  return { EllipseArc };
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _class2, _temp;

  const { attr } = utils;
  const { Ellipse } = use(_ellipse__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let CircleAttr = (_class = class CircleAttr extends Ellipse.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 10
      });
    }

    set radius(val) {
      this.clearFlow();
      this.set('radius', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'radius'), _class.prototype)), _class);
  let Circle = (_temp = _class2 = class Circle extends Ellipse {

    get radiuses() {
      const radius = this.attr('radius');
      return [radius, radius];
    }
  }, _class2.Attr = CircleAttr, _temp);


  registerNodeType('circle', Circle, false);

  return { Circle };
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


const _applyDecoratedDescriptor = __webpack_require__(45);



function install({ use, utils, registerNodeType }) {
  var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

  const { attr, flow, findColor } = utils;
  const { Shape } = use(_shape__WEBPACK_IMPORTED_MODULE_1__["default"], null, false);

  let RingAttr = (_class = class RingAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        innerRaius: 10,
        outerRadius: 20,
        startAngle: 0,
        endAngle: 360,
        center: [0, 0],
        lineWidth: 1,
        maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性
      });
    }

    // 内圆半径

    set innerRadius(val) {
      this.clearFlow();
      this.set('innerRadius', val);
    }

    // 外圆半径

    set outerRadius(val) {
      this.clearFlow();
      this.set('outerRadius', val);
    }

    set maxRadius(val) {
      this.clearFlow();
      this.set('maxRadius', val);
    }

    set startAngle(val) {
      this.clearFlow();
      this.set('startAngle', val);
    }

    set endAngle(val) {
      this.clearFlow();
      this.set('endAngle', val);
    }

    set center(val) {
      this.clearFlow();
      this.set('center', val);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'innerRadius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'innerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'outerRadius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'outerRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'maxRadius', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'maxRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'startAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endAngle', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'endAngle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'center', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'center'), _class.prototype)), _class);
  let Ring = (_class2 = (_temp = _class3 = class Ring extends Shape {

    // 边界依赖于最大圆
    get lineBoundings() {
      let maxRadius = this.attr('maxRadius');

      if (maxRadius <= 0) {
        const radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
        maxRadius = radius;
      }

      return [0, 0, 2 * maxRadius, 2 * maxRadius];
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attrSize;

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      }

      return [width, height].map(Math.ceil);
    }

    get originalRect() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      const [width, height] = this.offsetSize;
      const [anchorX, anchorY] = this.attr('anchor');

      const rect = [0, 0, width, height];
      const offsetX = Math.min(0, bounds[0]);
      const offsetY = Math.min(0, bounds[1]);

      rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
      rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);

      return rect;
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        let { offsetX, offsetY } = evt;
        const [anchorX, anchorY] = this.attr('anchor');
        const [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        let r = this.attr('maxRadius');
        let offset = this.attr('outerRadius'); // 偏移量

        if (r <= 0) {
          r = offset;
        }

        offset = r - offset; // 如果未设置maxRadius，偏移量应当０
        const r0 = this.attr('innerRadius');
        const startAngle = this.attr('startAngle');
        const endAngle = this.attr('endAngle');

        const d = Math.sqrt((offsetX - r) ** 2 + (offsetY - r) ** 2);
        let angle = Math.atan2(offsetY - r, offsetX - r) + (endAngle > Math.PI * 2 ? startAngle : 0); // 当 endAngle > 1周时，需要加上 startAngle

        if (angle < 0) {
          angle = Math.PI * 2 + angle;
        }

        return d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle;
      }
    }

    render(t, ctx) {
      super.render(t, ctx);
      const innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
      const outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));

      const lw = this.attr('lineWidth');

      // 对是否为圆形的判断是没有必要的。
      // const isCircle = this.endAngle - this.startAngle >= Math.PI * 2;
      // const startAngle = isCircle ? 0 : this.startAngle;
      // let endAngle = isCircle ? Math.PI * 2 : this.endAngle;
      // if (endAngle > Math.PI * 2) {
      //   endAngle = Math.PI * 2;
      // }
      const startAngle = this.startAngle;
      const endAngle = this.endAngle;

      ctx.miterLimit = 0;
      ctx.lineWidth = lw;
      ctx.setLineDash(this.attr('lineDash'));
      ctx.lineDashOffset = this.attr('lineDashOffset');
      ctx.strokeStyle = findColor(ctx, this, 'color');
      ctx.fillStyle = findColor(ctx, this, 'fillColor');

      const [x, y] = this.attr('center');
      let maxRadius = this.attr('maxRadius');

      if (maxRadius <= 0) {
        maxRadius = outerRadius;
      }

      const lineBoundings = this.lineBoundings;
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
  }, _class3.Attr = RingAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [flow], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);


  registerNodeType('ring', Ring);
  return { Ring };
}

/***/ })
/******/ ]);
});