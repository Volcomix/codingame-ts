import { Chromosome } from './chromosome'

export class Genotype {
  readonly size: number
  readonly chromosome: Chromosome

  constructor({ size, chromosome }: { size: number; chromosome: Chromosome }) {
    this.size = size
    this.chromosome = chromosome
  }
}
