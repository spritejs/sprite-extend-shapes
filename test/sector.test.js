import { Layer } from "sprite-core";
import { Sector } from "../src/index";

import { compare } from "./helpers";
import { createCanvas } from "canvas";

const test = require("ava");

test("draw default sector", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const sector = new Sector();
  layer.append(sector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "defaultSector");
  t.truthy(isEqual);
});


test("draw sector", async t => {
  const canvas = createCanvas(300, 300);
  const layer = new Layer({ context: canvas.getContext("2d") });

  const sector = new Sector();
  sector.attr({
    pos: [100, 100],
    startAngle: 0,
    endAngle: Math.PI,
    radius: 30,
    lineWidth: 5,
    bgcolor: "yellow",
    color: "red"
  });
  layer.append(sector);

  await layer.prepareRender();
  const isEqual = await compare(canvas, "sector");
  t.truthy(isEqual);
});
