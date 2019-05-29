## Rect

:::demo

```javascript
const {Scene, Layer, Rect} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const rect = new Rect();
rect.attr({
  pos: [10, 10],
  strokeColor: 'red',
  angle: 60,
  lineWidth: 1,
  // size: [100, 100],
  width: 100,
  height: 100,
  fillColor: 'yellow',
  bgcolor: '#eee'
});

rect.on('mouseenter', evt => {
  rect.attr('strokeColor', 'yellow');
  evt.stopDispatch();
});

rect.on('mouseleave', evt => {
  rect.attr('strokeColor', 'red');
  evt.stopDispatch();
});

layer.append(rect);
```

:::
