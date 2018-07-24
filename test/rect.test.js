import { Layer } from "sprite-core";
import { Rect } from "../src/index";
import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw rect", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const rect = new Rect();
  rect.attr({
    pos: [100, 100],
    color: "red",
    angle: 30,
    sides: [30, 40],
    fillColor: "yellow",
    bgcolor: "#eee"
  });
  layer.append(rect);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "rect");
  t.truthy(isEqual);
});
