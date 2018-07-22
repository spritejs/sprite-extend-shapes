import EllipseSector from './ellipseSector'


class EllipseAttr extends EllipseSector.Attr {
  constructor(subject) {
    super(subject)
  }
}

class Ellipse extends EllipseSector {
  static Attr = EllipseAttr

  get startAngle() {
    return 0;
  }
  get endAngle() {
    return 2 * Math.PI;
  }
}

export default Ellipse
