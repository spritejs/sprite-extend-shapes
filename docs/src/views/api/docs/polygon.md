## Polygon

:::demo

```javascript
const {Scene, Layer, Polygon} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

let pg = new Polygon();

pg.attr({
  color: 'red',
  fillColor: 'yellow',
  lineWidth: 2,
  points: [[10, 10], [100, 100], [200, 50]],
  bgcolor: '#ccc'
});

pg.on('mousemove', evt => {
  pg.attr('color', 'blue');
  evt.stopDispatch();
});

pg.on('mouseleave', evt => {
  pg.attr('color', 'red');
  evt.stopDispatch();
});

layer.append(pg);
```

:::
