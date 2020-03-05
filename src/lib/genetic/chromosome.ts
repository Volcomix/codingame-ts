import { Gene, BitGene, RealGene, IntegerGene } from './gene'

export abstract class Chromosome {
  readonly size: number
  readonly gene: Gene

  constructor({ size, gene }: { size: number; gene: Gene }) {
    this.size = size
    this.gene = gene
  }

  random() {
    return Array.from({ length: this.size }, () => this.gene.random())
  }
}

export class BinaryChromosome extends Chromosome {
  constructor({ size }: { size: number }) {
    super({ size, gene: new BitGene() })
  }
}

export class RealChromosome extends Chromosome {
  constructor({ size, min, max }: { size: number; min: number; max: number }) {
    super({ size, gene: new RealGene({ min, max }) })
  }
}

export class IntegerChromosome extends Chromosome {
  constructor({ size, min, max }: { size: number; min: number; max: number }) {
    super({ size, gene: new IntegerGene({ min, max }) })
  }
}

export class PermutationChromosome extends Chromosome {
  constructor({ min, max }: { min: number; max: number }) {
    super({ size: max - min + 1, gene: new IntegerGene({ min, max }) })
  }
}
