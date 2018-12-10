const { Scene, Layer, Sector} = spritevue.spritejs
const scene = new Scene('.playgroundPreview div', {
  displayRatio: 'auto'
});
const layer = scene.layer();
const sector = new Sector();
sector.attr({
  pos: [280, 400],
  // center: [0, 0],
  startAngle: 0,
  endAngle: Math.PI * 0.3,
  radius: 90,
  lineWidth: 10,
  fillColor: 'orange',
  bgcolor: '#eee',
  color: '#fff'
});
layer.append(sector);