import { Layer } from "sprite-core";
import { EllipseArc } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw ellipseArc", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const ellipseArc = new EllipseArc();
  ellipseArc.attr({
    pos: [100, 100],
    radiusX: 15,
    radiusY: 30,
    startAngle: 0,
    endAngle: Math.PI * 0.7,
    lineWidth: 1,
    color: "red",
    bgcolor: "#eee"
  });
  layer.append(ellipseArc);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "ellipseArc");
  t.truthy(isEqual);
});
