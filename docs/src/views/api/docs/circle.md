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
  strokeColor: 'red',
  bgcolor: '#eee'
});

circle.on('mousemove', evt => {
  circle.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

circle.on('mouseleave', evt => {
  circle.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(circle);
```

:::
