import ShapePlugin from '../shape';

export default function install({BaseSprite, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;
  // const {Shape} = use(ShapePlugin, null, false);

  class PolygonAttr extends BaseSprite.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        points: [],
        color: 'rgba(0,0,0,1)',
        fillColor: null,
        lineWidth: 1
      });
    }

    @attr
    set points(val) {
      this.clearCache();
      this.clearFlow();
      this.set('points', val);
    }

    @attr
    set color(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('color', val);
    }

    @attr
    set lineWidth(val) {
      this.clearCache();
      this.set('lineWidth', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('fillColor', val);
    }
  }

  class Polygon extends BaseSprite {
    static Attr = PolygonAttr;

    // get lineBoundings() {
    //   const bounds = [0, 0, 0, 0];
    //   const points = this.points;
    //   points.forEach(([x, y]) => {
    //     bounds[0] = Math.min(x, bounds[0]);
    //     bounds[1] = Math.min(y, bounds[1]);
    //     bounds[2] = Math.max(x, bounds[2]);
    //     bounds[3] = Math.max(y, bounds[3]);
    //   });
    //   return bounds;
    // }

    // @flow
    // get contentSize() {
    //   const bounds = this.lineBoundings;
    //   const lw = this.attr('lineWidth') || 0;
    //   const width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
    //   const height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;

    //   return [width, height].map(Math.ceil);
    // }

    // @flow
    // get originalRect() {
    //   const bounds = this.lineBoundings;
    //   const lw = this.attr('lineWidth') || 0;
    //   const [width, height] = this.contentSize;
    //   const [anchorX, anchorY] = this.attr('anchor');

    //   const rect = [0, 0, width, height];
    //   const offsetX = Math.min(0, bounds[0]);
    //   const offsetY = Math.min(0, bounds[1]);
    //   rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
    //   rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);

    //   return rect;
    // }

    get lineBoundings() {
      const bounds = [0, 0, 0, 0];
      const points = this.points;
      points.forEach(([x, y]) => {
        bounds[0] = Math.min(x, bounds[0]);
        bounds[1] = Math.min(y, bounds[1]);
        bounds[2] = Math.max(x, bounds[2]);
        bounds[3] = Math.max(y, bounds[3]);
      });
      return bounds;
    }

    @flow
    get contentSize() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      let [width, height] = this.attr('size');

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + 2 * lw;
      }
      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * lw;
      }

      return [width, height].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const bounds = this.lineBoundings;
      const lw = this.attr('lineWidth');
      const [width, height] = this.offsetSize;
      const [anchorX, anchorY] = this.attr('anchor');

      const rect = [0, 0, width, height];
      const offsetX = Math.min(0, bounds[0]);
      const offsetY = Math.min(0, bounds[1]);

      rect[0] = offsetX - lw - anchorX * (width + offsetX - 2 * lw);
      rect[1] = offsetY - lw - anchorY * (height + offsetY - 2 * lw);
      return rect;
    }

    get points() {
      return this.attr('points');
    }

    pointCollision(evt) {
      if (super.pointCollision(evt)) {
        const {offsetX, offsetY} = evt;
        return this.context.isPointInPath(this.path, offsetX, offsetY);
      }
    }

    render(t, drawingContext) {
      super.render(t, drawingContext);

      if (this.points.length) {
        const bounds = this.lineBoundings;
        const lw = this.attr('lineWidth');
        drawingContext.translate(
          -Math.min(0, bounds[0]) + lw,
          -Math.min(0, bounds[1]) + lw
        );
        drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
        drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
        drawingContext.miterLimit = 3;
        drawingContext.lineWidth = this.attr('lineWidth');
        // drawingContext.setLineDash(this.attr('lineDash'));
        // drawingContext.lineDashOffset = this.attr('lineDashOffset');

        // drawingContext.beginPath();
        const path = new Path2D();

        this.points.forEach((point, i) => {
          if (i === 0) {
            path.moveTo(...point);
          } else {
            path.lineTo(...point);
          }
        });

        path.closePath();

        // drawingContext.closePath();
        drawingContext.stroke(path);
        // drawingContext.fill();

        this.path = path;
      }
      return drawingContext;
    }
  }
  registerNodeType('ploycurve', Polygon, false);
  return {Polygon};
}
