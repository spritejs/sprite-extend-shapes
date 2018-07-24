import { Layer } from "sprite-core";
import { EllipseSector } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw ellipseSector with default attr", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ellipseSector = new EllipseSector();
  layer.append(ellipseSector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "defaultEllipseSector");
  t.truthy(isEqual);
});

test("draw ellipseSector", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ellipseSector = new EllipseSector();
  ellipseSector.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    ellipseSectortAngle: 0,
    endAngle: Math.PI * 1.3,
    lineWidth: 1,
    color: "red",
    bgcolor: "#eee"
  });
  layer.append(ellipseSector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ellipseSector");
  t.truthy(isEqual);
});

test("draw ellipseSector without canvas's ellipse", async t => {
  const canvas = createCanvas(300, 300);
  const context = canvas.getContext("2d");
  context.ellipse = null;

  const layer = new Layer({ context });

  const ellipseSector = new EllipseSector();
  ellipseSector.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    ellipseSectortAngle: 0,
    endAngle: Math.PI * 2,
    lineWidth: 1,
    color: "red",
    bgcolor: "#eee"
  });
  layer.append(ellipseSector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ellipseUsingBezier");
  t.truthy(isEqual);
});

test("draw anticlockwise ellipseSector without canvas's ellipse", async t => {
  const canvas = createCanvas(300, 300);
  const context = canvas.getContext("2d");
  context.ellipse = null;

  const layer = new Layer({ context });

  const ellipseSector = new EllipseSector();
  ellipseSector.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    ellipseSectortAngle: 0,
    endAngle: Math.PI * 2,
    lineWidth: 1,
    color: "red",
    bgcolor: "#eee",
    anticlockwise: true
  });
  layer.append(ellipseSector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "anticlockwiseEllipseUsingBezier");
  t.truthy(isEqual);
});
