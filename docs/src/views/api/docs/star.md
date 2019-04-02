## Star

:::demo

```javascript
const {Scene, Layer, Star} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const star = new Star();
star.attr({
  pos: [50, 40],
  radius: 40,
  innerRadius: 24,
  color: '#000',
  lineWidth: 4,
  angles: 5,
  bgcolor: '#eee',
  fillColor: 'red'
  //anchor: [ 0.5, 0.5 ]
});

star.on('mouseenter', evt => {
  star.attr('fillColor', 'green');
  evt.stopDispatch();
});

star.on('mouseleave', evt => {
  star.attr('fillColor', 'red');
  evt.stopDispatch();
});

layer.append(star);
```

:::
