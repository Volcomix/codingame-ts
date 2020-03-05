import { Chromosome } from './chromosome'
import { Gene } from './gene'

export class Genotype<T extends Gene> {
  readonly size: number
  readonly chromosome: Chromosome<T>

  constructor({
    size,
    chromosome,
  }: {
    size: number
    chromosome: Chromosome<T>
  }) {
    this.size = size
    this.chromosome = chromosome
  }
}
