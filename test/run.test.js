import { Layer } from "sprite-core";
import * as sprite from "../src/index";
import { compare } from "./helpers";
import { createCanvas } from "canvas";

const fs = require("fs");
const path = require("path");
const test = require("ava");
const drawCase = require("./helpers/drawcase");

const casesDir = "./cases";

fs.readdirSync(path.resolve(__dirname, casesDir))
  .map(file => require(`${casesDir}/${file}`))
  .forEach(runTest);

function runTest(obj) {
  let namespace = Object.keys(obj)[0];
  let Shape = sprite[namespace.replace(/\b\w/g, m => m.toUpperCase())];

  Object.entries(obj[namespace]).forEach(async ([key, value]) => {
    test(`draw ${namespace}: ${key}`, async t => {
      await outputImg(namespace, key, Shape, value, !!value.noellipse);

      const canvas = createCanvas(300, 300);
      const context = canvas.getContext("2d");
      if (value.noellipse) {
        context.ellipse = null;

        delete value.noellipse;
      }
      const layer = new Layer({ context });
      const shape = new Shape();
      if (Object.keys(value).length) {
        shape.attr(value);
      }

      layer.append(shape);

      await layer.prepareRender();
      const isEqual = await compare(canvas, `${namespace}-${key}`);
      t.truthy(isEqual);
    });
  });
}

async function outputImg(namespace, key, Shape, attr, noellipse = false) {
  if (noellipse) {
    await drawCase(
      `${namespace}-${key}`,
      [300, 300],
      layer => {
        const shape = new Shape();
        shape.attr(attr);
        layer.append(shape);
        return layer.prepareRender();
      },
      true
    );
  } else {
    await drawCase(`${namespace}-${key}`, [300, 300], layer => {
      const shape = new Shape();
      shape.attr(attr);
      layer.append(shape);
      return layer.prepareRender();
    });
  }
}
