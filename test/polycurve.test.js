import { Layer } from "sprite-core";
import { Polycurve } from "../src/index";
import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw polycurve", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const polycurve = new Polycurve();
  polycurve.attr({
    pos: [100, 100],
    startPoint: [10, 10],
    points: [[20, -10, 110, 50, -20, 40], [10, -10, 20, 50, 0, 0]],
    color: "red",
    lineCap: "round",
    lineJoin: "round",
    lineWidth: 5
  });
  layer.append(polycurve);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "polycurve");
  t.truthy(isEqual);
});
