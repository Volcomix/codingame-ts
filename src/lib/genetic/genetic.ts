import { Genotype } from './genotype'
import { Gene } from './gene'

export class Genetic<T extends Gene> {
  readonly genotype: Genotype<T>
  readonly fitness: (chromosome: number[]) => number

  constructor({
    genotype,
    fitness,
  }: {
    genotype: Genotype<T>
    fitness: (chromosome: number[]) => number
  }) {
    this.genotype = genotype
    this.fitness = fitness
  }
}
