## Sector

:::demo

```javascript
const {Scene, Layer, Sector} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const sector = new Sector();
sector.attr({
  startAngle: 0,
  endAngle: Math.PI * 0.7,
  radius: 50,
  lineWidth: 5,
  bgcolor: '#eee',
  strokeColor: 'red'
});

sector.on('mousemove', evt => {
  sector.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

sector.on('mouseleave', evt => {
  sector.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(sector);
```

:::
