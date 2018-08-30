export default function install({BaseSprite, utils}) {
  const {attr} = utils;

  class ShapeAttr extends BaseSprite.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        lineWidth: 1,
        lineDash: [0, 0],
        lineDashOffset: 2
      });
    }

    @attr
    set lineWidth(val) {
      this.clearCache();
      this.set('lineWidth', val);
    }

    @attr
    set lineDash(val) {
      this.clearCache();
      this.attr('lineDash', val);
    }

    @attr
    set lineDashOffset(val) {
      this.clearCache();
      this.attr('lineDashOffset', val);
    }
  }

  class Shape extends BaseSprite {
    static Attr = ShapeAttr;
  }

  return {Shape};
}
