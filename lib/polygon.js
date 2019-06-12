"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var PolygonAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var PolygonAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(PolygonAttr, _Shape$Attr2);

      function PolygonAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, PolygonAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(PolygonAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          points: [],
          smooth: null
        });

        return _this;
      }

      return PolygonAttr;
    }(_Shape$Attr);

    return {
      F: PolygonAttr,
      d: [{
        kind: "set",
        decorators: [attr],
        key: "smooth",
        value: function smooth(val) {
          this.set('smooth', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "points",
        value: function points(val) {
          this.clearFlow();
          this.set('points', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "lineWidth",
        value: function lineWidth(val) {
          this.set('lineWidth', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "fillColor",
        value: function fillColor(val) {
          val = parseColorString(val);
          this.set('fillColor', val);
        }
      }]
    };
  }, Shape.Attr);

  var Polygon = _decorate(null, function (_initialize2, _Shape) {
    var Polygon =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Polygon, _Shape2);

      function Polygon() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Polygon);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Polygon)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Polygon;
    }(_Shape);

    return {
      F: Polygon,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return PolygonAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          var bounds = [0, 0, 0, 0];
          var points = this.attr('points');
          points.forEach(function (_ref2) {
            var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
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
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var lw = this.attr('lineWidth');
          var bounds = this.lineBoundings;

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - bounds[0] + lw;
          height = bounds[3] - bounds[1] + lw;
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        key: "translate",
        value: function translate() {
          var lw = this.attr('lineWidth');
          return [lw / 2, lw / 2];
        }
      }, {
        kind: "get",
        key: "points",
        value: function points() {
          var lw = this.attr('lineWidth');
          return this.attr('points');
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get2.default)((0, _getPrototypeOf3.default)(Polygon.prototype), "pointCollision", this).call(this, evt)) {
            var _evt$offsetX = evt.offsetX,
                offsetX = _evt$offsetX === void 0 ? 0 : _evt$offsetX,
                _evt$offsetY = evt.offsetY,
                offsetY = _evt$offsetY === void 0 ? 0 : _evt$offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            var _this$translate = (0, _slicedToArray2.default)(this.translate, 2),
                tx = _this$translate[0],
                ty = _this$translate[1];

            offsetX += width * anchorX - tx;
            offsetY += height * anchorY - ty;
            return this.path && (this.context.isPointInPath(this.path, offsetX, offsetY) || this.context.isPointInStroke(this.path, offsetX, offsetY));
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, drawingContext) {
          (0, _get2.default)((0, _getPrototypeOf3.default)(Polygon.prototype), "render", this).call(this, t, drawingContext);

          if (this.points.length) {
            var points = this.points.slice(0, this.points.length);
            var translate = this.translate;
            var lw = this.attr('lineWidth');
            drawingContext.translate(translate[0], translate[1]);
            drawingContext.strokeStyle = findColor(drawingContext, this, 'strokeColor');
            drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
            drawingContext.miterLimit = 3;
            drawingContext.lineWidth = lw;
            drawingContext.lineCap = this.attr('lineCap');
            drawingContext.lineJoin = this.attr('lineJoin');
            drawingContext.setLineDash(this.attr('lineDash'));
            drawingContext.lineDashOffset = this.attr('lineDashOffset');
            drawingContext.beginPath();
            var path = new Path2D();
            var smooth = this.attr('smooth');

            if (smooth && !smooth.length) {
              smooth = [0, points.length - 1];
            } // 绘制光滑曲线（直线）


            if (!smooth) {
              points.forEach(function (point, i) {
                if (i === 0) {
                  path.moveTo.apply(path, (0, _toConsumableArray2.default)(point));
                } else {
                  path.lineTo.apply(path, (0, _toConsumableArray2.default)(point));
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
                    path.moveTo.apply(path, (0, _toConsumableArray2.default)(points[0]));
                  } else {
                    // 如果是转换点
                    path.lineTo.apply(path, (0, _toConsumableArray2.default)(points[i]));
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
            lw > 0 && drawingContext.stroke(path);
            this.path = path;
          }

          return drawingContext;
        }
      }]
    };
  }, Shape);

  registerNodeType('polygon', Polygon, false);
  return {
    Polygon: Polygon
  };
}