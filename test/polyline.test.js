import { Layer } from 'sprite-core'
import { Polyline } from '../src/index'

import { compare } from './helpers'
import { createCanvas } from 'canvas'

const test = require('ava')

test('draw polyline', async t => {
  const canvas = createCanvas(300, 300)
  const layer = new Layer({ context: canvas.getContext('2d') })

  const polyline = new Polyline()
  polyline.attr({
    pos: [100, 100],
    points: [[0, 0], [100, 100], [150, -50]],
    lineWidth: 3,
    color: 'red',
    lineCap: 'round',
    lineJoin: 'round'
  })
  layer.append(polyline)

  await layer.prepareRender()
  const isEqual = await compare(canvas, 'polyline')
  t.truthy(isEqual)
})
