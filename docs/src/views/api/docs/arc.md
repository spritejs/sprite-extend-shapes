## Arc

:::demo

```javascript
const {Scene, Layer, Arc} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const arc = new Arc();
arc.attr({
  radius: 50,
  startAngle: Math.PI * 0.75,
  endAngle: Math.PI * 2.75,
  lineWidth: 5,

  strokeColor: 'red',
  bgcolor: '#ccc'
});

arc.on('mousemove', evt => {
  arc.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

arc.on('mouseleave', evt => {
  arc.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(arc);
```

:::
