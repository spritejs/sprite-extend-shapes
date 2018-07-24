const fs = require('fs');
const {createCanvas} = require('canvas');
const Layer = require('sprite-core').Layer;

module.exports = async function (caseId, size, handler, noEllipse = false) {
  const canvas = createCanvas(...size);
  const context = canvas.getContext('2d');

  if (noEllipse) {
    context.ellipse = null
  }

  const layer = new Layer({context});
  await handler(layer, size);
  fs.writeFileSync(`../img/${caseId}.png`, canvas.toBuffer());
};
