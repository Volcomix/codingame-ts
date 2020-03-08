import { Crossover } from './crossover'
import { randomInt } from '../../utils/random-utils'

export class MultiPointCrossover extends Crossover {
  constructor(probability: number, readonly crossoverPointCount: number) {
    super(probability)
  }

  crossover(a: number[], b: number[]): void {
    const crossoverPoints = new Set()
    for (let i = 0; i < this.crossoverPointCount; i++) {
      crossoverPoints.add(randomInt(a.length))
    }
    let isSwapping = false
    for (let i = 0; i < a.length; i++) {
      if (crossoverPoints.has(i)) {
        isSwapping = !isSwapping
      }
      if (isSwapping) {
        this.swap(a, b, i)
      }
    }
  }
}
