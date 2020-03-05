import { Chromosome } from './chromosome'

export class Genotype {
  private size: number
  private chromosome: Chromosome

  constructor({ size, chromosome }: { size: number; chromosome: Chromosome }) {
    this.size = size
    this.chromosome = chromosome
  }
}
