## Wave

:::demo

```javascript
const {Scene, Layer, Wave} = spritejs;

const scene = new Scene('.block-demo .demo', {
  viewport: [400, 300],
  displayRatio: 'auto'
});
const layer = scene.layer();

const wave = new Wave();
wave.attr({
  pos: [10, 10],
  lineWidth: 5,
  color: '#158bca',
  fillColor: '#158bca',
  bgcolor: '#eee',

  percent: 0.6,
  amplitude: 20,
  shape:
    'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
  shapeScale: 4,
  shapeColor: 'red',
  shapeFillColor: 'transparent',
  wavesColor: 'red',

  speed: 0
});

layer.append(wave);

let speed = 0;
const step = () => {
  speed += 0.1;
  wave.attr('speed', speed);
  requestAnimationFrame(step);
};
step();

const wave2 = new Wave();
wave2.attr({
  pos: [200, 15],
  radius: 50,
  offset: 10,
  lineWidth: 5,
  bgcolor: '#eee',

  wavesColor: '#158bca',
  outlineColor: '#158bca',
  percent: 0.6,
  amplitude: 20,
  speed: 0
});

layer.append(wave2);
```

:::
