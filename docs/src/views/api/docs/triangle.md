## Triangle

:::demo

```javascript
const {Scene, Layer, Triangle} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const triangle = new Triangle();
triangle.attr({
  pos: [70, 10],
  strokeColor: 'red',
  sides: [80, 80],
  angle: 60,
  lineWidth: 1,
  fillColor: 'yellow',
  bgcolor: '#eee'
});

triangle.on('mouseenter', evt => {
  triangle.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

triangle.on('mouseleave', evt => {
  triangle.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(triangle);
```

:::
