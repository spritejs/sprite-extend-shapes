import {utils} from 'sprite-core';
import EllipseSector from './ellipseSector';
const {attr} = utils;

class SectorAttr extends EllipseSector.Attr {
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

class Sector extends EllipseSector {
  static Attr = SectorAttr

  get radiuses() {
    const radius = this.attr('radius');
    return [radius, radius];
  }
}

export default Sector;
