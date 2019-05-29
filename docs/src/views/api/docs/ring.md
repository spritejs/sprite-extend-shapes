## Ring

:::demo

```javascript
const {Scene, Layer, Ring} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const ring = new Ring();
ring.attr({
  pos: [60, 40],
  innerRadius: 15,
  outerRadius: 50,
  fillColor: 'green',
  startAngle: Math.PI * 0.8,
  endAngle: Math.PI * 1.4,
  lineWidth: 2,
  bgcolor: '#eee'
});

ring.on('mousemove', evt => {
  ring.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

ring.on('mouseleave', evt => {
  ring.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(ring);
```

:::
