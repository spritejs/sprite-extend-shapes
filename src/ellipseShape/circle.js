import Ellipse from './ellipse';
import {utils} from 'sprite-core';
const {attr} = utils;

class CircleAttr extends Ellipse.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      radius: 10,
    });
  }

  @attr
  set radius(val) {
    this.set('radius', val);
  }
}

class Circle extends Ellipse {
  static Attr = CircleAttr

  get radiuses() {
    const radius = this.attr('radius');
    return [radius, radius];
  }
}

export default Circle;
