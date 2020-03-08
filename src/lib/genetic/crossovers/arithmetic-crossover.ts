import { Crossover } from './crossover'

export class ArithmeticCrossover extends Crossover {
  constructor(probability: number, readonly weight: number) {
    super(probability)
  }

  crossover(a: number[], b: number[]): void {
    for (let i = 0; i < a.length; i++) {
      const aAllele = a[i]
      const bAllele = b[i]
      a[i] = aAllele * (1 - this.weight) + bAllele * this.weight
      b[i] = aAllele * this.weight + bAllele * (1 - this.weight)
    }
  }
}
