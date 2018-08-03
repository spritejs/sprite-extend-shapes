const {
  Polyline,
  Polygon,
  Triangle,
  Rect,
  Star,
  Ellipse,
  EllipseSector,
  EllipseArc,
  Circle,
  Sector,
  Ring,
  Polycurve,
  Arc,
} = require('../../lib/index.js');

const drawCase = require('./drawcase');

// polyline
drawCase('polyline', [300, 300], (layer) => {
  const polyline = new Polyline();
  polyline.attr({
    pos: [100, 100],
    points: [[0, 0], [100, 100], [150, -50]],
    lineWidth: 3,
    color: 'red',
  });
  layer.append(polyline);
  return layer.prepareRender();
});

drawCase('triangle', [300, 300], (layer) => {
  const triangle = new Triangle();
  triangle.attr({
    pos: [100, 100],
    color: 'red',
    sides: [20, 40],
    angle: '40',
    fillColor: 'yellow',
    bgcolor: '#eee',
  });
  layer.append(triangle);
  return layer.prepareRender();
});

drawCase('rect', [300, 300], (layer) => {
  const rectangle = new Rect();
  rectangle.attr({
    pos: [100, 100],
    color: 'red',
    angle: 30,
    sides: [30, 40],
    fillColor: 'yellow',
    bgcolor: '#eee',
  });
  layer.append(rectangle);
  return layer.prepareRender();
});

drawCase('star', [300, 300], (layer) => {
  const star = new Star();
  star.attr({
    pos: [100, 100],
    radius: 30,
    innerRadius: 15,
    color: 'red',
    angles: 5,
    bgcolor: '#eee',
    fillColor: 'yellow',
  });
  layer.append(star);
  return layer.prepareRender();
});

drawCase('defaultInnerRadiusStar', [300, 300], (layer) => {
  const star = new Star();
  star.attr({
    pos: [100, 100],
    radius: 30,
    color: 'red',
    angles: 5,
    bgcolor: '#eee',
    fillColor: 'yellow',
  });
  layer.append(star);
  return layer.prepareRender();
});

drawCase('ellipse', [300, 300], (layer) => {
  const ellipse = new Ellipse();
  ellipse.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    fillColor: 'red',
    lineWidth: 5,
    bgcolor: '#eee',
  });
  layer.append(ellipse);
  return layer.prepareRender();
});

drawCase('defaultEllipseSector', [300, 300], (layer) => {
  const ellipseSector = new EllipseSector();
  layer.append(ellipseSector);
  return layer.prepareRender();
});

drawCase('ellipseSector', [300, 300], (layer) => {
  const ellipseSector = new EllipseSector();
  ellipseSector.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    ellipseSectortAngle: 0,
    endAngle: Math.PI * 1.3,
    lineWidth: 1,
    color: 'red',
    bgcolor: '#eee',
  });
  layer.append(ellipseSector);
  return layer.prepareRender();
});

drawCase(
  'ellipseUsingBezier',
  [300, 300],
  (layer) => {
    const ellipseSector = new EllipseSector();
    ellipseSector.attr({
      pos: [100, 100],
      radiusX: 15,
      radiusY: 30,
      ellipseSectortAngle: 0,
      endAngle: Math.PI * 2,
      lineWidth: 1,
      color: 'red',
      bgcolor: '#eee',
    });
    layer.append(ellipseSector);
    return layer.prepareRender();
  },
  true
);

drawCase(
  'anticlockwiseEllipseUsingBezier',
  [300, 300],
  (layer) => {
    const ellipseSector = new EllipseSector();
    ellipseSector.attr({
      pos: [100, 100],
      radiusX: 15,
      radiusY: 30,
      ellipseSectortAngle: 0,
      endAngle: Math.PI * 2,
      lineWidth: 1,
      color: 'red',
      bgcolor: '#eee',
      anticlockwise: true,
    });
    layer.append(ellipseSector);
    return layer.prepareRender();
  },
  true
);

drawCase('circle', [300, 300], (layer) => {
  const circle = new Circle();
  circle.attr({
    pos: [100, 100],
    radius: 30,
    lineWidth: 5,
    color: 'red',
    bgcolor: '#eee',
    anticlockwise: true,
  });
  layer.append(circle);
  return layer.prepareRender();
});

drawCase(
  'BezierCircle',
  [300, 300],
  (layer) => {
    const circle = new Circle();
    circle.attr({
      pos: [100, 100],
      radius: 30,
      lineWidth: 5,
      color: 'red',
      bgcolor: '#eee',
      anticlockwise: true,
    });
    layer.append(circle);
    return layer.prepareRender();
  },
  true
);

drawCase('defaultSector', [300, 300], (layer) => {
  const sector = new Sector();
  layer.append(sector);
  return layer.prepareRender();
});

drawCase('sector', [300, 300], (layer) => {
  const sector = new Sector();
  sector.attr({
    pos: [100, 100],
    startAngle: 0,
    endAngle: Math.PI,
    radius: 30,
    lineWidth: 5,
    bgcolor: 'yellow',
    color: 'red',
  });
  layer.append(sector);
  return layer.prepareRender();
});

drawCase('ellipseArc', [300, 300], (layer) => {
  const ellipseArc = new EllipseArc();
  ellipseArc.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    startAngle: 0,
    endAngle: Math.PI * 0.7,
    lineWidth: 1,
    color: 'red',
    bgcolor: '#eee',
  });
  layer.append(ellipseArc);
  return layer.prepareRender();
});

drawCase('ring', [300, 300], (layer) => {
  const ring = new Ring();
  ring.attr({
    pos: [100, 100],
    innerRadius: 15,
    outterRadius: 50,
    fillColor: {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
    },
    lineWidth: 4,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 2.6,
    bgcolor: '#eee',
  });
  layer.append(ring);
  return layer.prepareRender();
});

drawCase('ringSector', [300, 300], (layer) => {
  const ring = new Ring();
  ring.attr({
    pos: [100, 100],
    innerRadius: 15,
    outterRadius: 50,
    fillColor: {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
    },
    lineWidth: 4,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 1.6,
    bgcolor: '#eee',
    color: 'red',
  });
  layer.append(ring);
  return layer.prepareRender();
});

drawCase('polycurve', [300, 300], (layer) => {
  const polycurve = new Polycurve();
  polycurve.attr({
    pos: [100, 100],
    startPoint: [10, 10],
    points: [[20, -10, 110, 50, -20, 40], [10, -10, 20, 50, 0, 0]],
    color: 'red',
    lineCap: 'round',
    lineJoin: 'round',
    lineWidth: 5,
  });
  layer.append(polycurve);
  return layer.prepareRender();
});

drawCase('arc', [300, 300], (layer) => {
  const arc = new Arc();
  arc.attr({
    pos: [100, 100],
    center: [20, 0],
    startPoint: [10, 0],
    angle: Math.PI / 2,
    lineWidth: 5,
    anticlockwise: true,
    color: 'red',
  });
  layer.append(arc);
  return layer.prepareRender();
});

drawCase('polygon', [300, 300], (layer) => {
  const polygon = new Polygon();
  polygon.attr({
    pos: [100, 100],
    color: {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
    },
    fillColor: 'yellow',
    points: [[0, 0], [100, 100], [200, -50]],
    bgcolor: '#eee',
    lineWidth: 5,
  });
  layer.append(polygon);
  return layer.prepareRender();
});

drawCase('NoPointsPolygon', [300, 300], (layer) => {
  const polygon = new Polygon();
  polygon.attr({
    pos: [100, 100],
    color: {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}],
    },
    fillColor: 'yellow',
    bgcolor: '#eee',
    lineWidth: 5,
  });
  layer.append(polygon);
  return layer.prepareRender();
});
