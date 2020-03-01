import { BitGene, RealGene, IntegerGene } from './gene'

export class Chromosome {
  constructor({ size, gene }) {
    this.size = size
    this.gene = gene
  }
}

export class BinaryChromosome extends Chromosome {
  constructor({ size }) {
    super({ size, gene: new BitGene() })
  }
}

export class RealChromosome extends Chromosome {
  constructor({ size, min, max }) {
    super({ size, gene: new RealGene({ min, max }) })
  }
}

export class IntegerChromosome extends Chromosome {
  constructor({ size, min, max }) {
    super({ size, gene: new IntegerGene({ min, max }) })
  }
}

export class PermutationChromosome extends Chromosome {
  constructor({ min, max }) {
    super({ size: max - min + 1, gene: new IntegerGene({ min, max }) })
  }
}
