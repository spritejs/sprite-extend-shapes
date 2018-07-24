import { Layer } from "sprite-core";
import { Polygon } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw polygon", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const polygon = new Polygon();
  polygon.attr({
    pos: [100, 100],
    color: {
      vector: [0, 0, 150, 150],
      colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
    },
    fillColor: "yellow",
    points: [[0, 0], [100, 100], [200, -50]],
    bgcolor: "#eee",
    lineWidth: 5
  });
  layer.append(polygon);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "polygon");
  t.truthy(isEqual);
});

test("draw no points polygon", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const polygon = new Polygon();
  polygon.attr({
    pos: [100, 100],
    color: {
      vector: [0, 0, 150, 150],
      colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
    },
    fillColor: "yellow",
    bgcolor: "#eee",
    lineWidth: 5
  });
  layer.append(polygon);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "NoPointsPolygon");
  t.truthy(isEqual);
});
