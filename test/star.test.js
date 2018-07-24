import { Layer } from "sprite-core";
import { Star } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw star", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const star = new Star();
  star.attr({
    pos: [100, 100],
    radius: 30,
    innerRadius: 15,
    color: "red",
    angles: 5,
    bgcolor: "#eee",
    fillColor: "yellow"
  });
  layer.append(star);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "star");
  t.truthy(isEqual);
});

test("draw star", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const star = new Star({
    pos: [100, 100],
    radius: 30,
    color: "red",
    angles: 5,
    bgcolor: "#eee",
    fillColor: "yellow"
  });
  layer.append(star);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "defaultInnerRadiusStar");
  t.truthy(isEqual);
});
