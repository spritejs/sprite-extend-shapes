const {
  Polyline,
  Arc,
  Polycurve,
  EllipseSector,
} = require('../../lib/index.js');

const drawCase = require('./drawcase');

// polyline
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
drawCase('polyline-without-points', [300, 300], (layer) => {
  const polyline = new Polyline();
  polyline.attr({
    pos: [100, 100],
    lineWidth: 3,
    color: 'red',
  });
  layer.append(polyline);
  return layer.prepareRender();
});

// arc
drawCase('arc', [300, 300], (layer) => {
  const arc = new Arc();
  arc.attr({
    pos: [100, 100],
    center: [50, 50],
    startPoint: [50, 0],
    angle: Math.PI / 2,
    color: 'red',
    lineWidth: 4,
    anticlockwise: true,
  });
  layer.append(arc);
  return layer.prepareRender();
});

drawCase('arc-without-center', [300, 300], (layer) => {
  const arc = new Arc();
  arc.attr({
    pos: [100, 100],
    startPoint: [50, 0],
    angle: Math.PI / 2,
    color: 'red',
    lineWidth: 4,
    anticlockwise: true,
  });
  layer.append(arc);
  return layer.prepareRender();
});
drawCase('arc-clockwise', [300, 300], (layer) => {
  const arc = new Arc();
  arc.attr({
    pos: [100, 100],
    center: [50, 50],
    startPoint: [50, 0],
    angle: Math.PI / 2,
    color: 'red',
    lineWidth: 4,
  });
  layer.append(arc);
  return layer.prepareRender();
});

// polycurve

drawCase('polycurve', [300, 300], (layer) => {
  const polycurve = new Polycurve();
  polycurve.attr({
    pos: [100, 100],
    startPoint: [10, 10],
    points: [
      [20, -10, 110, 50, -20, 40],
      [10, -10, 20, 50, 0, 0],
    ],
    lineWidth: 5,
    color: 'red',
  });
  layer.append(polycurve);
  return layer.prepareRender();
});

drawCase('ellipseSector', [300, 300], (layer) => {
  const ellipseSector = new EllipseSector();
  ellipseSector.attr({
    pos: [620, 400],
    radiusX: 15,
    radiusY: 30,
    startAngle: 0,
    endAngle: Math.PI * 1.3,
    lineWidth: 1,
    color: 'red',
    bgcolor: '#eee',
  });
  layer.append(ellipseSector);
  return layer.prepareRender();
});
