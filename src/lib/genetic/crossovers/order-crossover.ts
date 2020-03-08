import { Crossover } from './crossover'

export class OrderCrossover extends Crossover {
  crossover(a: number[], b: number[]): void {
    const { begin, end } = this.randomRegion(a.length)
    const aCopied = new Set<number>()
    const bCopied = new Set<number>()
    for (let i = begin; i < end; i++) {
      aCopied.add(b[i])
      bCopied.add(a[i])
      this.swap(a, b, i)
    }
    this.repair(a, b, begin, end, aCopied)
    this.repair(b, a, begin, end, bCopied)
  }

  private repair(
    a: number[],
    b: number[],
    begin: number,
    end: number,
    copied: Set<number>
  ) {
    for (let i = end, j = end; copied.size < a.length; i++) {
      if (i === a.length) {
        i = 0
      }
      let allele
      do {
        if (j == a.length) {
          j = 0
        }
        allele = j >= begin && j < end ? b[j] : a[j]
        j++
      } while (copied.has(allele))
      a[i] = allele
      copied.add(allele)
    }
  }
}
