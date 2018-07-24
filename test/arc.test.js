import { Layer } from "sprite-core";
import { Arc } from "../src/index";
import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw arc", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const arc = new Arc();
  arc.attr({
    pos: [100, 100],
    center: [20, 0],
    startPoint: [10, 0],
    angle: Math.PI / 2,
    lineWidth: 5,
    anticlockwise: true,
    color: "red"
  });
  layer.append(arc);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "arc");
  t.truthy(isEqual);
});
