import { Layer } from 'sprite-core'
import { Triangle } from '../src/index'
import { compare } from './helpers'
import { createCanvas } from 'canvas'

const test = require('ava')

test('draw triangle', async t => {
  const canvas = createCanvas(300, 300)
  const layer = new Layer({ context: canvas.getContext('2d') })

  const triangle = new Triangle()
  triangle.attr({
    pos: [100, 100],
    color: 'red',
    sides: [20, 40],
    angle: '40',
    fillColor: 'yellow',
    bgcolor: '#eee'
  })
  layer.append(triangle)

  await layer.prepareRender()
  const isEqual = await compare(canvas, 'triangle')
  t.truthy(isEqual)
})
