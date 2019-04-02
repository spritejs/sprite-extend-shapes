<article style="width: 96%" class="markdown-body">

## 安装

### 使用 npm 或 yarn 安装

```shell
npm i sprite-extend-shapes
```

## 使用

```javascript
import * as spritejs from 'spritejs';
import Shapes from 'sprite-extend-shapes';

spritejs.use(Shapes);
```

### 手动加载

```javascript
import * as spritejs from 'spritejs';
import {Circle} from 'sprite-extend-shapes';

spritejs.use(Circle);
```

:::demo

```javascript
const {Scene, Layer, Polycurve} = spritejs;

const scene = new Scene('.block-demo .demo', {
  resolution: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const polycurve = new Polycurve();
polycurve.attr({
  pos: [10, 10],
  startPoint: [10, 10],
  points: [
    [21, 58, 221, 189.2639320225002, 165.8680339887499, 189.2639320225002],
    [
      165.8680339887499,
      189.2639320225002,
      110.73606797749979,
      189.2639320225002,
      110.73606797749979,
      278.5278640450004
    ]
  ],
  lineWidth: 1,
  color: '#f00',
  fillColor: 'green'
});

polycurve.on('mouseenter', () => {
  polycurve.attr('fillColor', 'yellow');
});

polycurve.on('click', () => {
  polycurve.attr('fillColor', 'yellow');
});

polycurve.on('mouseleave', () => {
  polycurve.attr('fillColor', 'red');
});

layer.append(polycurve);
```

:::

</article>
