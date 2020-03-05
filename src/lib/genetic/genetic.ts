import { Genotype } from './genotype'

export class Genetic<T> {
  readonly genotype: Genotype
  readonly fitness: (chromosome: T[]) => number

  constructor({
    genotype,
    fitness,
  }: {
    genotype: Genotype
    fitness: (chromosome: T[]) => number
  }) {
    this.genotype = genotype
    this.fitness = fitness
  }
}
