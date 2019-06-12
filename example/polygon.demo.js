function renderPolygonShapes() {
  const group = new Group({
    boxSizing: 'content-box',
    pos: [0, 0],
    size: [240, 800],
    bgcolor: 'green'
  });
  layer.append(group);

  const rect = new Rect();
  rect.attr({
    boxSizing: 'border-box',
    pos: [10, 10],
    strokeColor: 'red',
    border: [10, '#000'],
    lineCap: 'square',
    width: 50,
    height: 50,
    lineWidth: 10,
    fillColor: 'yellow'
    // bgcolor: 'blue'
  });

  rect.on('mouseenter', evt => {
    rect.attr('strokeColor', 'yellow');
    evt.stopDispatch();
  });

  rect.on('mouseleave', evt => {
    rect.attr('strokeColor', 'red');
    evt.stopDispatch();
  });

  window.rect = rect;

  group.appendChild(rect);

  const triangle = new Triangle();
  triangle.attr({
    pos: [10, 100],
    strokeColor: 'red',
    sides: [100, 100],
    angle: 90,
    lineWidth: 1,
    fillColor: 'yellow',
    bgcolor: '#eee'
  });

  triangle.on('mouseenter', evt => {
    triangle.attr('strokeColor', 'yellow');
    evt.stopDispatch();
  });

  triangle.on('mouseleave', evt => {
    triangle.attr('strokeColor', 'red');
    evt.stopDispatch();
  });

  group.appendChild(triangle);

  const star = new Star();
  star.attr({
    pos: [10, 210],
    radius: 50,
    innerRadius: 50,
    strokeColor: 'red',
    border: [2, 'red'],
    lineWidth: 30,
    angles: 5,
    bgcolor: 'blue',
    fillColor: 'yellow'
    //anchor: [ 0.5, 0.5 ]
  });
  star.on('mouseenter', evt => {
    star.attr('fillColor', 'green');
    evt.stopDispatch();
  });

  star.on('mouseleave', evt => {
    star.attr('fillColor', 'yellow');
    evt.stopDispatch();
  });

  group.appendChild(star);

  const polygon = new Polygon();
  polygon.attr({
    pos: [10, 340],
    fillColor: 'red',
    points: [
      [0, 140],
      [0, 70],
      [50, 60],
      [100, 20],
      [150, 80],
      [200, 100],
      [200, 140],
      [150, 110],
      [100, 90],
      [50, 130]
    ],
    strokeColor: 'blue',
    lineWidth: 10,
    bgcolor: '#eee',
    smooth: [1, 5]
  });
  polygon.on('mousemove', evt => {
    polygon.attr('strokeColor', {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}]
    });
    evt.stopDispatch();
  });
  polygon.on('mouseleave', evt => {
    polygon.attr('strokeColor', null);
    evt.stopDispatch();
  });
  group.appendChild(polygon);

  let points = [
    [60.86761704288983, 32.58359213500126],
    [61.55367074350507, 72.36067977499789],
    [23.935414596786792, 59.41640786499874],
    [0, 27.63932022500211],
    [38.04226065180614, 16],
    [76.08452130361229, 27.639320225002095],
    [52.149106706825506, 59.41640786499873],
    [14.530850560107229, 72.3606797749979],
    [15.216904260722458, 32.58359213500127],
    [38.04226065180613, 0]
  ];
  let pg = new Polygon();
  pg.attr({
    points: points,
    pos: [10, 510],
    fillColor: '#0ff',
    strokeColor: 'red',
    bgcolor: '#eee',
    lineWidth: 0
  });
  group.appendChild(pg);
}
