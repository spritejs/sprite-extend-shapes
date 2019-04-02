## Circle

:::demo

```javascript
const {Scene, Layer, Circle} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const circle = new Circle();
circle.attr({
  radius: 30,
  lineWidth: 5,
  color: 'red',
  bgcolor: '#eee'
});

circle.on('mousemove', evt => {
  circle.attr('color', 'yellow');
  evt.stopDispatch();
});

circle.on('mouseleave', evt => {
  circle.attr('color', 'red');
  evt.stopDispatch();
});

layer.append(circle);
```

:::
