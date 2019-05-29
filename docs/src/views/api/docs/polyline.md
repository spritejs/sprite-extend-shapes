## Polyline

:::demo

```javascript
const {Scene, Layer, Polyline} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const polyline = new Polyline();
polyline.attr({
  pos: [10, 10],
  strokeColor: {
    vector: [0, 0, 150, 150],
    colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}]
  },
  lineWidth: 1,
  points: [
    [216.44779756291575, 31.3368559404028],
    [35.94034007190373, 135.81354964617464],
    [245.94034007190373, 235.81354964617464]
  ],
  tolerance: 7,
  bgcolor: '#eee',
  // smooth: true,
  close: true
});
polyline.on('click', () => alert('click'));
polyline.on('mousemove', () => polyline.attr('smooth', true));
polyline.on('mouseleave', () => polyline.attr('smooth', false));

layer.append(polyline);
```

:::
