"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

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
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var RingAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var RingAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(RingAttr, _Shape$Attr2);

      function RingAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, RingAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(RingAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          innerRaius: 10,
          outerRadius: 20,
          startAngle: 0,
          endAngle: Math.PI * 2,
          lineWidth: 1,
          maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性

        });

        return _this;
      } // 内圆半径


      return RingAttr;
    }(_Shape$Attr);

    return {
      F: RingAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "innerRadius",
        value: function innerRadius(val) {
          this.set('innerRadius', val);
        } // 外圆半径

      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "outerRadius",
        value: function outerRadius(val) {
          this.set('outerRadius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "maxRadius",
        value: function maxRadius(val) {
          this.set('maxRadius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "startAngle",
        value: function startAngle(val) {
          this.set('startAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "endAngle",
        value: function endAngle(val) {
          this.set('endAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "center",
        value: function center(val) {
          this.set('center', val);
        }
      }]
    };
  }, Shape.Attr);

  var Ring = _decorate(null, function (_initialize2, _Shape) {
    var Ring =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Ring, _Shape2);

      function Ring() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Ring);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Ring)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Ring;
    }(_Shape);

    return {
      F: Ring,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return RingAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: // 边界依赖于最大圆
        function lineBoundings() {
          var maxRadius = this.attr('maxRadius');

          if (maxRadius <= 0) {
            var radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
            maxRadius = radius;
          }

          return [0, 0, 2 * maxRadius, 2 * maxRadius];
        }
      }, {
        kind: "get",
        key: "startAngle",
        value: function startAngle() {
          return this.attr('startAngle');
        }
      }, {
        kind: "get",
        key: "endAngle",
        value: function endAngle() {
          return this.attr('endAngle');
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - Math.min(0, bounds[0]);
          height = bounds[3] - Math.min(0, bounds[1]);
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "originalRect",
        value: function originalRect() {
          var lineBoundings = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _get2 = (0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "originalRect", this),
              _get3 = (0, _slicedToArray2.default)(_get2, 4),
              x = _get3[0],
              y = _get3[1],
              w = _get3[2],
              h = _get3[3];

          var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
          return rect;
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "pointCollision", this).call(this, evt)) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            var r = this.attr('maxRadius');
            var offset = this.attr('outerRadius'); // 偏移量

            if (r <= 0) {
              r = offset;
            }

            offset = r - offset; // 如果未设置maxRadius，偏移量应当０

            var r0 = this.attr('innerRadius');
            var TAU = Math.PI * 2;
            var startAngle = this.attr('startAngle');

            if (startAngle > TAU) {
              startAngle %= TAU;
            } else {
              startAngle = (startAngle + Math.ceil(Math.abs(startAngle) / TAU) * TAU) % TAU;
            }

            var endAngle = this.attr('endAngle') - this.attr('startAngle') + startAngle;
            var d = Math.sqrt(Math.pow(offsetX - r, 2) + Math.pow(offsetY - r, 2));
            var angle = Math.atan2(offsetY - r, offsetX - r);

            if (angle < 0 || endAngle > TAU) {
              angle += TAU;
            }

            return d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle;
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, ctx) {
          (0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "render", this).call(this, t, ctx);
          var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
          var outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
          var lw = this.attr('lineWidth');
          var startAngle = this.startAngle;
          var endAngle = this.endAngle;
          ctx.miterLimit = 0;
          ctx.lineWidth = lw;
          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');
          ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
          ctx.fillStyle = findColor(ctx, this, 'fillColor');
          var x = 0,
              y = 0;
          var maxRadius = this.attr('maxRadius');

          if (maxRadius <= 0) {
            maxRadius = outerRadius;
          }

          var lineBoundings = this.lineBoundings;
          ctx.translate(lineBoundings[2] / 2 - x, lineBoundings[3] / 2 - y);
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0, outerRadius - lw / 2), startAngle, endAngle, false);

          if (endAngle - startAngle === Math.PI * 2) {
            ctx.moveTo(outerRadius + innerRadius, outerRadius);
          }

          ctx.arc(x, y, Math.max(0, innerRadius - lw / 2), endAngle, startAngle, true);
          ctx.closePath();
          ctx.fill();

          if (lw > 0) {
            ctx.stroke();
          }

          return ctx;
        }
      }]
    };
  }, Shape);

  registerNodeType('ring', Ring);
  return {
    Ring: Ring
  };
}