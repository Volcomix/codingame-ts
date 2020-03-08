import { Crossover } from './crossover'
import { randomInt } from '../../utils/random-utils'

export class SinglePointCrossover extends Crossover {
  crossover(a: number[], b: number[]): void {
    for (let i = randomInt(a.length); i < a.length; i++) {
      const allele = a[i]
      a[i] = b[i]
      b[i] = allele
    }
  }
}
