import { Crossover } from './crossover'
import { randomInt } from '../../utils/random-utils'

export class PartiallyMatchedCrossover extends Crossover {
  crossover(a: number[], b: number[]): void {
    const { begin, end } = this.randomRegion(a.length)
    const aSwappedWith = new Map<number, number>()
    const bSwappedWith = new Map<number, number>()
    for (let i = begin; i < end; i++) {
      aSwappedWith.set(b[i], a[i])
      bSwappedWith.set(a[i], b[i])
      this.swap(a, b, i)
    }
    this.repair(a, aSwappedWith, begin, end)
    this.repair(b, bSwappedWith, begin, end)
  }

  private repair(
    chromosome: number[],
    swappedWith: Map<number, number>,
    begin: number,
    end: number
  ) {
    for (let i = 0; i < begin; i++) {
      let allele = swappedWith.get(chromosome[i])
      while (allele !== undefined) {
        chromosome[i] = allele
        allele = swappedWith.get(allele)
      }
    }
    for (let i = end; i < chromosome.length; i++) {
      let allele = swappedWith.get(chromosome[i])
      while (allele !== undefined) {
        chromosome[i] = allele
        allele = swappedWith.get(allele)
      }
    }
  }
}
