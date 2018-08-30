'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = install;

var _ellipseSector = require('./ellipseSector');

var _ellipseSector2 = _interopRequireDefault(_ellipseSector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class, _class2, _temp;

  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_ellipseSector2.default, null, false),
      EllipseSector = _use.EllipseSector;

  var SectorAttr = (_class = function (_EllipseSector$Attr) {
    (0, _inherits3.default)(SectorAttr, _EllipseSector$Attr);

    function SectorAttr(subject) {
      (0, _classCallCheck3.default)(this, SectorAttr);

      var _this = (0, _possibleConstructorReturn3.default)(this, (SectorAttr.__proto__ || (0, _getPrototypeOf2.default)(SectorAttr)).call(this, subject));

      _this.setDefault({
        radius: 10
      });
      return _this;
    }

    (0, _createClass3.default)(SectorAttr, [{
      key: 'radius',
      set: function set(val) {
        this.set('radius', val);
      }
    }]);
    return SectorAttr;
  }(EllipseSector.Attr), (_applyDecoratedDescriptor(_class.prototype, 'radius', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'radius'), _class.prototype)), _class);
  var Sector = (_temp = _class2 = function (_EllipseSector) {
    (0, _inherits3.default)(Sector, _EllipseSector);

    function Sector() {
      (0, _classCallCheck3.default)(this, Sector);
      return (0, _possibleConstructorReturn3.default)(this, (Sector.__proto__ || (0, _getPrototypeOf2.default)(Sector)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sector, [{
      key: 'radiuses',
      get: function get() {
        var radius = this.attr('radius');
        return [radius, radius];
      }
    }]);
    return Sector;
  }(EllipseSector), _class2.Attr = SectorAttr, _temp);


  registerNodeType('sector', Sector, false);
  return { Sector: Sector };
}