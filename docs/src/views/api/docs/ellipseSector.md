## EllipseSector

:::demo

```javascript
const {Scene, Layer, EllipseSector} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const ellipseSector = new EllipseSector();
ellipseSector.attr({
  radiusX: 30,
  radiusY: 80,
  startAngle: 0,
  bgcolor: '#eee',
  endAngle: Math.PI * 1.3,
  lineWidth: 1,
  color: 'red'
});

ellipseSector.on('mousemove', evt => {
  ellipseSector.attr('color', 'yellow');
  evt.stopDispatch();
});

ellipseSector.on('mouseleave', evt => {
  ellipseSector.attr('color', 'red');
  evt.stopDispatch();
});

layer.append(ellipseSector);
```

:::
