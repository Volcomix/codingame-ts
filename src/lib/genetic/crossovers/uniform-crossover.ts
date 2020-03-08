import { Crossover } from './crossover'
import { random } from '../../utils/random-utils'

export class UniformCrossover extends Crossover {
  constructor(crossoverProbability: number, readonly swapProbability: number) {
    super(crossoverProbability)
  }

  crossover(a: number[], b: number[]): void {
    for (let i = 0; i < a.length; i++) {
      if (random() < this.swapProbability) {
        this.swap(a, b, i)
      }
    }
  }
}
