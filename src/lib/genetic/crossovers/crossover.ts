import { randomInt } from '../../utils/random-utils'

export abstract class Crossover {
  constructor(readonly probability: number) {}

  abstract crossover(a: number[], b: number[]): void

  protected swap(a: number[], b: number[], index: number) {
    const allele = a[index]
    a[index] = b[index]
    b[index] = allele
  }

  protected randomRegion(length: number): { begin: number; end: number } {
    let begin = randomInt(length)
    let end = randomInt(length)
    if (begin > end) {
      const temp = begin
      begin = end
      end = temp
    } else if (begin === end) {
      end = length
    }
    return { begin, end }
  }
}
