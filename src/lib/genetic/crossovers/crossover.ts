export abstract class Crossover {
  constructor(readonly probability: number) {}

  abstract crossover(a: number[], b: number[]): void
}
