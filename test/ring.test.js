import { Layer } from "sprite-core";
import { Ring } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw ring", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ring = new Ring();
  ring.attr({
    pos: [100, 100],
    innerRadius: 15,
    outterRadius: 50,
    fillColor: {
      vector: [0, 0, 150, 150],
      colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
    },
    lineWidth: 4,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 2.6,
    bgcolor: "#eee"
  });
  layer.append(ring);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ring");
  t.truthy(isEqual);
});

test("draw ring sector", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ring = new Ring();
  ring.attr({
    pos: [100, 100],
    innerRadius: 15,
    outterRadius: 50,
    fillColor: {
      vector: [0, 0, 150, 150],
      colors: [{ offset: 0, color: "red" }, { offset: 1, color: "green" }]
    },
    lineWidth: 4,
    startAngle: Math.PI * 0.5,
    endAngle: Math.PI * 1.6,
    bgcolor: "#eee",
    color: "red"
  });
  layer.append(ring);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ringSector");
  t.truthy(isEqual);
});
