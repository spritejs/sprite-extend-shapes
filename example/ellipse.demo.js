function renderEllipseShapes() {
  const group = new Group({
    boxSizing: 'content-box',
    pos: [500, 0],
    size: [240, 800],
    bgcolor: 'green'
  });
  layer.append(group);

  const arc = new Arc();
  arc.attr({
    pos: [10, 220],
    radius: 50,
    startAngle: Math.PI * 0.75,
    endAngle: Math.PI * 2.75,
    lineWidth: 20,
    strokeColor: 'red',
    startAngle: Math.PI * 0,
    endAngle: Math.PI * 1.6,
    lineCap: 'round',
    bgcolor: '#eee'
  });
  arc.on('mousemove', evt => {
    arc.attr('strokeColor', 'yellow');
    evt.stopDispatch();
  });
  arc.on('mouseleave', evt => {
    arc.attr('strokeColor', 'red');
    evt.stopDispatch();
  });
  arc.on('click', () => alert('click arc'));
  group.appendChild(arc);

  const sector = new Sector();
  sector.attr({
    pos: [10, 340],
    startAngle: 0,
    endAngle: Math.PI * 1.8,
    radius: 50,
    maxRadius: 50,
    lineWidth: 10,
    fillColor: 'orange',
    bgcolor: '#eee',
    strokeColor: 'blue'
  });

  sector.on('mousemove', evt => {
    sector.attr('bgcolor', 'red');
  });

  sector.on('mouseleave', evt => {
    sector.attr('bgcolor', '#eee');
  });

  group.appendChild(sector);

  const circle = new Circle();
  circle.attr({
    pos: [10, 450],
    radius: 50,
    lineWidth: 20,
    strokeColor: 'red',
    bgcolor: '#eee',
    anticlockwise: true,
    lineDash: [4, 6],
    lineDashOffset: 4
  });

  circle.animate(
    [
      {radius: 50 + 4 + 2, strokeColor: 'transparent'},
      {radius: 50 + 2, strokeColor: 'red'}
    ],
    {
      duration: 3000,
      iterations: Infinity
    }
  );

  circle.on('mousemove', evt => {
    circle.attr('radius', 60);
    evt.stopDispatch();
  });

  circle.on('mouseleave', evt => {
    circle.attr('radius', 30);
    evt.stopDispatch();
  });

  group.appendChild(circle);

  const ring2 = new Ring();
  ring2.attr({
    pos: [10, 570],
    bgcolor: '#eee',
    innerRadius: 15,
    outerRadius: 30,
    maxRadius: 50,
    fillColor: 'blue',
    startAngle: Math.PI * 0.8,
    endAngle: Math.PI * 2,
    lineWidth: 10
  });
  ring2.on('mouseenter', evt => {
    ring2.attr('fillColor', 'yellow');
    evt.stopDispatch();
  });

  ring2.on('mouseleave', evt => {
    ring2.attr('fillColor', 'blue');
    evt.stopDispatch();
  });
  group.appendChild(ring2);

  const ring3 = new Ring();
  ring3.attr({
    pos: [10, 570],
    innerRadius: 15,
    outerRadius: 40,
    maxRadius: 50,
    fillColor: 'red',
    endAngle: Math.PI * 0.8,
    lineWidth: 10
  });
  ring3.on('mouseenter', evt => {
    ring3.attr('fillColor', 'yellow');
    evt.stopDispatch();
  });

  ring3.on('mouseleave', evt => {
    ring3.attr('fillColor', 'blue');
    evt.stopDispatch();
  });
  group.appendChild(ring3);

  {
    const ellipse = new EllipseSector();
    ellipse.attr({
      pos: [10, 680],
      radiusX: 15,
      radiusY: 40,
      fillColor: 'red',
      lineWidth: 1,
      bgcolor: '#eee',

      startAngle: Math.PI * 0.9,
      endAngle: Math.PI * 2.1
    });
    ellipse.on('mouseenter', evt => {
      ellipse.attr('fillColor', 'yellow');
      evt.stopDispatch();
    });

    ellipse.on('mouseleave', evt => {
      ellipse.attr('fillColor', 'blue');
      evt.stopDispatch();
    });
    group.appendChild(ellipse);
  }

  {
    const ellipse = new EllipseSector();
    ellipse.attr({
      pos: [50, 680],
      radiusX: 15,
      radiusY: 40,
      fillColor: 'red',
      lineWidth: 1,
      bgcolor: '#eee',

      startAngle: -Math.PI * 2.8,
      endAngle: -Math.PI * 2.9
    });
    ellipse.on('mouseenter', evt => {
      ellipse.attr('fillColor', 'yellow');
      evt.stopDispatch();
    });

    ellipse.on('mouseleave', evt => {
      ellipse.attr('fillColor', 'blue');
      evt.stopDispatch();
    });
    group.appendChild(ellipse);
  }

  {
    const ellipse = new EllipseSector();
    ellipse.attr({
      pos: [100, 680],
      radiusX: 15,
      radiusY: 40,
      fillColor: 'red',
      lineWidth: 1,
      bgcolor: '#eee',

      startAngle: -Math.PI * 0.8,
      endAngle: Math.PI * 0.9
    });
    ellipse.on('mouseenter', evt => {
      ellipse.attr('fillColor', 'yellow');
      evt.stopDispatch();
    });

    ellipse.on('mouseleave', evt => {
      ellipse.attr('fillColor', 'blue');
      evt.stopDispatch();
    });
    group.appendChild(ellipse);
  }

  {
    const ellipse = new EllipseSector();
    ellipse.attr({
      pos: [150, 680],
      radiusX: 15,
      radiusY: 40,
      fillColor: 'red',
      lineWidth: 1,
      bgcolor: '#eee',

      startAngle: Math.PI * 0.8,
      endAngle: -Math.PI * 0.9
    });
    ellipse.on('mouseenter', evt => {
      ellipse.attr('fillColor', 'yellow');
      evt.stopDispatch();
    });

    ellipse.on('mouseleave', evt => {
      ellipse.attr('fillColor', 'blue');
      evt.stopDispatch();
    });
    group.appendChild(ellipse);
  }

  {
    const ellipse = new EllipseSector();
    ellipse.attr({
      pos: [190, 680],
      radiusX: 15,
      radiusY: 40,
      fillColor: 'red',
      lineWidth: 1,
      bgcolor: '#eee',

      startAngle: Math.PI * 0.8,
      endAngle: Math.PI * 1.9
    });
    ellipse.on('mouseenter', evt => {
      ellipse.attr('fillColor', 'yellow');
      evt.stopDispatch();
    });

    ellipse.on('mouseleave', evt => {
      ellipse.attr('fillColor', 'blue');
      evt.stopDispatch();
    });
    group.appendChild(ellipse);
  }
}
