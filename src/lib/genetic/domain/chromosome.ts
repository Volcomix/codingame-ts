import { Gene, BitGene, RealGene, IntegerGene } from './gene'
import { randomInt } from '../../utils/random-utils'

export abstract class Chromosome<T extends Gene> {
  readonly size: number
  readonly gene: T

  constructor({ size, gene }: { size: number; gene: T }) {
    this.size = size
    this.gene = gene
  }

  random() {
    return Array.from({ length: this.size }, () => this.gene.random())
  }
}

export class BinaryChromosome extends Chromosome<BitGene> {
  constructor({ size }: { size: number }) {
    super({ size, gene: new BitGene() })
  }
}

export class RealChromosome extends Chromosome<RealGene> {
  constructor({ size, min, max }: { size: number; min: number; max: number }) {
    super({ size, gene: new RealGene({ min, max }) })
  }
}

export class IntegerChromosome extends Chromosome<IntegerGene> {
  constructor({ size, min, max }: { size: number; min: number; max: number }) {
    super({ size, gene: new IntegerGene({ min, max }) })
  }
}

export class PermutationChromosome extends Chromosome<IntegerGene> {
  constructor({ min, max }: { min: number; max: number }) {
    super({ size: max - min, gene: new IntegerGene({ min, max }) })
  }

  random() {
    const chromosome = Array.from(
      { length: this.size },
      (_, allele) => allele + this.gene.min
    )
    for (let i = this.size - 1; i > 0; i--) {
      const j = randomInt(i + 1)
      const allele = chromosome[i]
      chromosome[i] = chromosome[j]
      chromosome[j] = allele
    }
    return chromosome
  }
}
