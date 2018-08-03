import EllipseSector from './ellipseSector';

class Ellipse extends EllipseSector {
  get startAngle() {
    return 0;
  }

  get endAngle() {
    return 2 * Math.PI;
  }
}

export default Ellipse;
