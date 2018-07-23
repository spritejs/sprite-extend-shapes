import {Layer} from 'sprite-core';
import {
  Polygon,
  Polyline,
  Triangle,
  Rect,
  Star,
  Arc,
  Sector,
  Circle,
  Ring,
  Ellipse,
  EllipseSector,
  Polycurve,
} from '../src/index';

import {compare} from './helpers';
import {createCanvas} from 'canvas';

const test = require('ava');

test('draw polyline', async (t) => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({context: canvas.getContext('2d')});

  const polyline = new Polyline();
  polyline.attr({
    pos: [100, 100],
    lineWidth: 3,
    color: 'red',
    lineCap: 'round',
    lineJoin: 'round',
  });
  layer.append(polyline);

  await layer.prepareRender();
  let isEqual = await compare(canvas, 'polyline-without-points');
  t.truthy(isEqual);


  polyline.attr({
    points: [
      [0, 0],
      [100, 100],
      [150, -50],
    ],
  });
  await layer.prepareRender();
  isEqual = await compare(canvas, 'polyline');
  t.truthy(isEqual);
});

test('draw curve', async (t) => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({context: canvas.getContext('2d')});

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
  await layer.prepareRender();
  let isEqual = await compare(canvas, 'arc-without-center');
  t.truthy(isEqual);

  arc.attr({
    center: [50, 50],
  });
  await layer.prepareRender();
  isEqual = await compare(canvas, 'arc');
  t.truthy(isEqual);

  arc.attr({
    anticlockwise: false,
  });
  await layer.prepareRender();
  isEqual = await compare(canvas, 'arc-clockwise');
  t.truthy(isEqual);
});

test('draw polycurve', async (t) => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({context: canvas.getContext('2d')});

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
    lineCap: 'round',
    lineJoin: 'round',
  });
  layer.append(polycurve);
  await layer.prepareRender();
  cosnt isEqual = await compare(canvas, 'polycurve');
  t.truthy(isEqual);
});