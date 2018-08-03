<<<<<<< HEAD
import {BaseSprite} from 'sprite-core';
class Shape extends BaseSprite {}
=======
import { BaseSprite } from "sprite-core";
import { utils } from "sprite-core";

const { attr, parseColorString, findColor } = utils;

class ShapeAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      lineDash: [0, 0],
      lineDashOffset: 2
    });
  }

  @attr
  set lineDash(val) {
    this.attr("lineDash", val);
  }

  @attr
  set lineDashOffset(val) {
    this.attr("lineDashOffset", val);
  }
}

class Shape extends BaseSprite {
  static Attr = ShapeAttr;
}
>>>>>>> d9218a8b1dd868b1638e8e98360cc4d4c87d7dcc

export default Shape;
