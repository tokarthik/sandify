import { Vertex } from '../common/Geometry'
import Shape, { shapeOptions } from './Shape'

const options = {
  ...shapeOptions,
  ...{
    epicycloidA: {
      title: "Large circle radius",
      step: 0.1,
    },
    epicycloidB: {
      title: "Small circle radius",
      step: 0.1,
    },
  }
}

export default class Epicycloid extends Shape {
  constructor() {
    super('Clover')
    this.link = 'http://mathworld.wolfram.com/Epicycloid.html'
  }

  getInitialState() {
    return {
      ...super.getInitialState(),
      ...{
        type: 'epicycloid',
        epicycloidA: 1.0,
        epicycloidB: .25
      }
    }
  }

  getVertices(state) {
    let points = []
    let a = parseFloat(state.shape.epicycloidA)
    let b = parseFloat(state.shape.epicycloidB)

    for (let i=0; i<128; i++) {
      let angle = Math.PI * 2.0 / 128.0 * i
      points.push(Vertex(0.5 * (a + b) * Math.cos(angle) - 0.5 * b * Math.cos(((a + b) / b) * angle),
                         0.5 * (a + b) * Math.sin(angle) - 0.5 * b * Math.sin(((a + b) / b) * angle)))
    }
    return points
  }

  getOptions() {
    return options
  }
}
