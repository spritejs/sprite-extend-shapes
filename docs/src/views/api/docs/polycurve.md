## Polycurve

:::demo

```javascript
const {Scene, Layer, Polycurve} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
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
  strokeColor: '#f00',
  bgcolor: '#eee',
  fillColor: 'green'
});

polycurve.on('mouseenter', () => {
  polycurve.attr('fillColor', 'yellow');
});

polycurve.on('click', () => {
  polycurve.attr('fillColor', 'yellow');
});

polycurve.on('mouseleave', () => {
  polycurve.attr('fillColor', 'blue');
});

layer.append(polycurve);
```

:::
