import { Layer } from "sprite-core";
import { Ellipse } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw ellipse", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ellipse = new Ellipse();
  ellipse.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    fillColor: "red",
    lineWidth: 5,
    bgcolor: "#eee"
  });
  layer.append(ellipse);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ellipse");
  t.truthy(isEqual);
});
