export abstract class Crossover {
  constructor(readonly probability: number) {}

  abstract crossover(a: number[], b: number[]): void

  protected swap(a: number[], b: number[], index: number) {
    const allele = a[index]
    a[index] = b[index]
    b[index] = allele
  }
}
