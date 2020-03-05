import { Genotype } from './genotype'

export class Genetic {
  readonly genotype: Genotype
  readonly fitness: (chromosome: number[]) => number

  constructor({
    genotype,
    fitness,
  }: {
    genotype: Genotype
    fitness: (chromosome: number[]) => number
  }) {
    this.genotype = genotype
    this.fitness = fitness
  }
}
