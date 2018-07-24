import { Layer } from "sprite-core";
import { Circle } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw circle", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const circle = new Circle();
  circle.attr({
    pos: [100, 100],
    radius: 30,
    lineWidth: 5,
    color: "red",
    bgcolor: "#eee",
    anticlockwise: true
  });
  layer.append(circle);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "circle");
  t.truthy(isEqual);
});

test("draw circle without ellipse", async t => {
  const canvas = createCanvas(300, 300);
  const context = canvas.getContext("2d");
  context.ellipse = null;
  const layer = new Layer({ context });

  const circle = new Circle();
  circle.attr({
    pos: [100, 100],
    radius: 30,
    lineWidth: 5,
    color: "red",
    bgcolor: "#eee",
    anticlockwise: true
  });
  layer.append(circle);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "BezierCircle");
  t.truthy(isEqual);
});
