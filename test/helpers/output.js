const {Polyline} = require('../../lib/index.js');

const drawCase = require('./drawcase');

drawCase('polyline', [300, 300], (layer) => {
  const polyline = new Polyline();
  polyline.attr({
    pos: [100, 100],
    points: [
      [0, 0],
      [100, 100],
      [150, -50],
    ],
    lineWidth: 3,
    color: 'red',
  });
  layer.append(polyline);
  return layer.prepareRender();
});
