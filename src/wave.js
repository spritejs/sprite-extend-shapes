import SvgPath from 'svg-path-to-canvas';
import ShapePlugin from './shape';
import {sin, round, cos} from './util';

export default function install({use, utils, registerNodeType}) {
  const {attr, findColor, flow} = utils;
  const {Shape} = use(ShapePlugin, null, false);
  const reflow = true;

  class WaveAttr extends Shape.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        radius: 50,
        offset: 10,
        amplitude: 0, // 振幅

        percent: 0, // 当为数组时将渲染多个 波浪线
        wavesColor: '#000', // 波浪线颜色

        shape: '', // 可以使用 svg path，默认圆
        shapeScale: 1, // 当使用 svg path 时可能需要进行适当比例缩放
        shapeColor: '#000', // svgpath 边框颜色
        shapeFillColor: 'transparent', // svgpath 背景颜色

        showOutline: true, // 用于控制是否显示外圈圆环，当 shape 为 svg path 将强制不显示
        outlineColor: '#000', // 外圆环颜色

        speed: 0 // 用于控制移动速度，主要是提供一个可以修改的属性，配合 spritejs 动画用
      });
    }

    @attr({reflow})
    set radius(val) {
      this.set('radius', val);
    }

    @attr({reflow})
    set offset(val) {
      this.set('offset', val);
    }

    @attr({reflow})
    set amplitude(val) {
      this.set('amplitude', val);
    }

    @attr({reflow})
    set speed(val) {
      this.set('speed', val);
    }

    @attr({reflow})
    set percent(val) {
      this.set('percent', val);
    }

    @attr({reflow})
    set wavesColor(val) {
      this.set('wavesColor', val);
    }

    @attr({reflow})
    set shape(val) {
      this.set('shape', val);
    }
  }

  class Wave extends Shape {
    static Attr = WaveAttr;

    get isVirtual() {
      return false;
    }

    @flow
    get lineBoundings() {
      const lw = this.attr('lineWidth');

      if (this.attr('shape')) {
        const svgpath = new SvgPath(this.attr('shape'));

        svgpath
          .scale(this.attr('shapeScale'))
          .lineWidth(lw)
          .trim();

        return [-lw, -lw, ...svgpath.size.map(v => (v += lw))];
      }

      const len = lw + this.attr('radius') + this.attr('offset');
      return [lw, lw, 2 * len, 2 * len];
    }

    @flow
    get contentSize() {
      var bounds = this.lineBoundings;

      let [width, height] = this.attrSize;

      if (width == '') {
        width = bounds[2] - Math.min(0, bounds[0]);
      }
      if (height == '') {
        height = bounds[3] - Math.min(0, bounds[1]);
      }

      return [width, height].map(Math.ceil);
    }

    @flow
    get originalRect() {
      const lineBoundings = this.lineBoundings;
      const [x, y, w, h] = super.originalRect;
      const rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
      return rect;
    }

    render(t, ctx) {
      super.render(t, ctx);
      const lw = this.attr('lineWidth');
      let radius = this.attr('radius');
      const offset = this.attr('offset');
      const shape = this.attr('shape');
      const showOutline = this.attr('showOutline');
      const AMPLITUDE = this.attr('amplitude') || radius / 10;

      ctx.save();

      let cx;
      let cy;
      let horizontalLength;
      let verticalLength;
      let svgpath;

      if (!shape) {
        cx = lw + radius + offset;
        cy = lw + radius + offset;

        horizontalLength = verticalLength = radius;
      } else {
        svgpath = new SvgPath(shape);
        [cx, cy] = svgpath.center;
        [horizontalLength, verticalLength] = svgpath.size.map(
          v => (v + lw) / 2
        );
      }

      if (showOutline && !svgpath) {
        // 外接圆
        ctx.beginPath();
        ctx.strokeStyle = this.attr('outlineColor');
        ctx.lineWidth = lw;
        ctx.arc(
          cx,
          cy,
          Math.min(horizontalLength, verticalLength) + offset,
          0,
          Math.PI * 2,
          false
        );
        ctx.stroke();
      }

      if (!svgpath) {
        // 内接圆设为剪辑区域;
        ctx.beginPath();
        ctx.arc(
          cx,
          cy + 0,
          Math.min(horizontalLength, verticalLength),
          0,
          Math.PI * 2,
          false
        );
      } else {
        ctx.translate(lw, lw);

        svgpath
          .save()
          .beginPath()
          .strokeStyle(this.attr('shapeColor'))
          .fillStyle(this.attr('shapeFillColor'))
          .scale(this.attr('shapeScale'))
          .lineWidth(lw)
          .trim()
          .to(ctx)
          .fill()
          .stroke();

        [cx, cy] = svgpath.center;
        [horizontalLength, verticalLength] = svgpath.size.map(
          v => (v + lw * 2) / 2
        );
      }

      ctx.clip();

      // 绘制正弦曲线

      let colors = this.attr('wavesColor');
      let percent = this.attr('percent');

      if (!Array.isArray(percent)) {
        percent = [percent];
      }

      if (!Array.isArray(colors)) {
        colors = [colors];
      }

      percent.map((percent, i) => {
        percent = percent > 1 ? 1 : percent;

        let y = 0;

        if (this.attr('shape')) {
          // 使用 svgPath
          y = -(percent - 0.5) * verticalLength * 2;
        } else {
          let startAngle = 0;
          if (percent <= 0.5) {
            startAngle = 0.25 - percent / 2;
          } else if (percent < 1) {
            startAngle = 0 - (percent - 0.5) / 2;
          } else {
            startAngle = 0;
          }
          startAngle *= Math.PI * 2;
          const sinVal = percent >= 1 ? -1 : sin(startAngle / 2);
          y = round(radius * sinVal);
        }

        const A =
          ((radius / 20) * sin(percent * Math.PI) + i * 10 + AMPLITUDE) / 2; // 振幅;
        const W = (Math.PI * 2) / 200;
        const H = cy + y + i * 5;
        const Q = this.attr('speed');

        ctx.beginPath();
        ctx.moveTo(cx - horizontalLength, cy);

        for (let x = cx - horizontalLength; x <= cx + horizontalLength; x++) {
          // 三角函数公式：y=Asin（wx+φ）+h
          let _y = A * (i % 2 ? Math.sin : Math.cos)(W * x + Q) + H;
          ctx.lineTo(x, _y);
        }
        // 向下形成闭合区域
        ctx.lineTo(cx + horizontalLength, cy + verticalLength);
        ctx.lineTo(cx - horizontalLength, cy + verticalLength);
        ctx.lineTo(cx - horizontalLength, cy);
        ctx.fillStyle = colors[i] || colors[0];

        ctx.fill();
        ctx.closePath();
      });

      ctx.restore();
    }
  }

  registerNodeType('wave', Wave, false);
  return {Wave};
}
