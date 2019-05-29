// import { draggable, droppable } from 'sprite-draggable';
export default function install({BaseSprite, utils}) {
  const {attr, parseColorString} = utils;

  class ShapeAttr extends BaseSprite.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        color: 'transparent',
        fillColor: 'transparent',
        lineWidth: 0,
        lineCap: 'butt',
        lineJoin: 'miter',
        lineDash: [0, 0],
        lineDashOffset: 0,
        enableCache: false
      });
    }

    @attr
    set lineWidth(val) {
      this.set('lineWidth', val);
    }

    @attr
    set lineCap(val) {
      this.set('lineCap', val);
    }

    @attr
    set lineJoin(val) {
      this.set('lineJoin', val);
    }

    @attr
    set lineDash(val) {
      this.set('lineDash', val);
    }

    @attr
    set lineDashOffset(val) {
      this.set('lineDashOffset', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.set('fillColor', val);
    }

    @attr
    set strokeColor(val) {
      val = parseColorString(val);
      this.set('strokeColor', val);
    }

    // @attr
    // set draggable(val) {
    //   this.set('draggable', val);
    //   draggable(this.subject, val);
    // }

    // @attr
    // set droppable(val) {
    //   this.set('droppable', val);
    //   droppable(this.subject, val);
    // }
  }

  class Shape extends BaseSprite {
    static Attr = ShapeAttr;
  }

  return {Shape};
}
