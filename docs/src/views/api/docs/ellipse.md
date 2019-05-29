## Ellipse

:::demo

```javascript
const {Scene, Layer, Ellipse} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const ellipse = new Ellipse();
ellipse.attr({
  radiusX: 30,
  radiusY: 80,
  fillColor: 'red',
  bgcolor: '#eee',
  lineWidth: 5
});

ellipse.on('mousemove', evt => {
  ellipse.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

ellipse.on('mouseleave', evt => {
  ellipse.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(ellipse);
```

:::
