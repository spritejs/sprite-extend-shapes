import ShapePlugin from './shape';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor} = utils;
  const {Shape} = use(ShapePlugin, null, false);

  const getDist = (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  const getRotationAngle = (point, center) => {
    const [px, py] = point;
    const [cx, cy] = center;
    return Math.atan2(1, 0) - Math.atan2(cx - px, cy - py);
  };

  class ArcAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        center: [0, 0],
        startPoint: [0, 0],
        angel: 0,
        radius: 0,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false
      });
    }

    // 圆弧的圆心
    @attr
    set center(val) {
      this.clearCache();
      this.clearFlow();
      this.set('center', val);
    }

    // 圆弧起始点
    @attr
    set startPoint(point) {
      this.clearCache();
      this.clearFlow();
      this.set('startPoint', point);
    }

    // 旋转角度
    @attr
    set angle(angle) {
      this.clearCache();
      this.clearFlow();
      this.set('angle', angle);
    }

    @attr
    set radius(val) {
      this.clearCache();
      this.clearFlow();
      this.set('radius', val);
    }

    @attr
    set startAngle(val) {
      this.clearCache();
      this.clearFlow();
      this.set('startAngle', val);
    }

    @attr
    set endAngle(val) {
      this.clearCache();
      this.clearFlow();
      this.set('endAngle', val);
    }

    // 旋转方向
    @attr
    set anticlockwise(val) {
      this.clearCache();
      this.clearFlow();
      this.set('anticlockwise', val);
    }
  }

  class Arc extends Shape {
    static Attr = ArcAttr;

    get isVirtual() {
      return true;
    }

    get startAngle() {
      return this.attr('startAngle');
    }

    get endAngle() {
      return this.attr('endAngle');
    }

    render(t, ctx) {
      if (this.attr('center')) {
        const [cx, cy] = this.attr('center');

        const startAngle = this.startAngle;
        const endAngle = this.endAngle;
        const radius = this.attr('radius');

        // const [sx, sy] = this.attr('startPoint');
        // const radius = getDist([cx, cy], [sx, sy]);
        const anticlockwise = this.attr('anticlockwise');
        // const angle = this.attr('angle');
        // const startAngle = getRotationAngle([cx, cy], [sx, sy]);
        // const endAngle = anticlockwise
        //   ? startAngle - angle
        //   : startAngle + angle;

        ctx.lineCap = this.attr('lineCap');
        ctx.lineJoin = this.attr('lineJoin');
        ctx.lineWidth = this.attr('lineWidth');
        ctx.strokeStyle = findColor(ctx, this, 'color');
        ctx.setLineDash(this.attr('lineDash'));
        ctx.lineDashOffset = this.attr('lineDashOffset');

        const path = new Path2D();
        path.arc(cx, cy, radius, startAngle, endAngle, anticlockwise);
        ctx.stroke(path);
        this.path = path;
      } else {
        console.error('center must be given when drawing an arc!');
      }
      return ctx;
    }
  }
  registerNodeType('arc', Arc, false);
  return {Arc};
}
