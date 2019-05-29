## EllipseArc

:::demo

```javascript
const {Scene, Layer, EllipseArc} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const ellipseArc = new EllipseArc();
ellipseArc.attr({
  radiusX: 30,
  endAngle: Math.PI * 2,
  radiusY: 80,
  strokeColor: 'red',
  bgcolor: '#eee',
  lineWidth: 5
});

layer.append(ellipseArc);
```

:::
