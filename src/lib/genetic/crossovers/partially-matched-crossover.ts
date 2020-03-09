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
      this.repairGene(chromosome, i, swappedWith)
    }
    for (let i = end; i < chromosome.length; i++) {
      this.repairGene(chromosome, i, swappedWith)
    }
  }

  private repairGene(
    chromosome: number[],
    index: number,
    swappedWith: Map<number, number>
  ) {
    let allele = chromosome[index]
    while (swappedWith.has(allele)) {
      allele = swappedWith.get(allele)
    }
    chromosome[index] = allele
  }
}
