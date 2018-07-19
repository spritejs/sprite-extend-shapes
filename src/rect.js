import Shape from './shape';
import Polygon from './polygon';
import {utils} from 'sprite-core';

const {attr} = utils

class rectAttr extends Polygon.Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      angle: '90',
      sides: [10, 10],
    })
  }


  @attr
  set angle(val) {
    this.set('angle', val)
  }

  @attr
  set sides(val) {
    this.set('sides', val)
  }
}


class Rect extends Polygon {
  static Attr = rectAttr
  get points() {
    const [s1, s2] = this.attr('sides');
    const angle = Math.PI / 180 * this.attr('angle');
    const p0 = [0, 0];
    const p1 = [s1, 0];
    const p2 = [s1 + s2 * Math.cos(angle), s2 * Math.sin(angle)];
    const p3 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
    console.log(p1, p2, p3)
    return [p0, p1, p2, p3]
  }
}

export default Rect
