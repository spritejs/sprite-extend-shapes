function renderPolylineShapes() {
  const group = new Group({
    boxSizing: 'content-box',
    pos: [250, 0],
    size: [240, 800],
    bgcolor: 'green'
  });
  layer.append(group);

  const polyline2 = new Polyline();
  polyline2.attr({
    pos: [10, 10],
    strokeColor: {
      vector: [0, 0, 150, 150],
      colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'blue'}]
    },
    lineWidth: 1,
    points: [
      [-1, 140],
      [0, 70],
      [50, 44],
      [100, 20],
      [150, 80],
      [200, 100],
      [200, 141]
    ],
    tolerance: 7,
    lineWidth: 20,
    bgcolor: '#eee',
    fillColor: 'red',
    smooth: true,
    close: true
  });
  polyline2.on('click', () => alert('click2'));
  polyline2.on('mousemove', evt => console.log('move: ', evt));
  group.appendChild(polyline2);

  const polycurve = new Polycurve();
  polycurve.attr({
    pos: [10, 200],
    startPoint: [20, 20],
    points: [
      [221, 158, 221, 189.2639320225002, 165.8680339887499, 189.2639320225002],
      [
        165.8680339887499,
        189.2639320225002,
        110.73606797749979,
        189.2639320225002,
        110.73606797749979,
        378.5278640450004
      ]
    ],
    lineWidth: 10,
    bgcolor: '#eee',
    strokeColor: '#f00'
    //fillColor: 'green'
  });

  polycurve.on('mouseenter', () => {
    polycurve.attr('fillColor', 'yellow');
  });

  polycurve.on('click', () => {
    polycurve.attr('fillColor', 'yellow');
  });

  polycurve.on('mouseleave', () => {
    polycurve.attr('fillColor', 'blue');
  });

  group.appendChild(polycurve);
}
