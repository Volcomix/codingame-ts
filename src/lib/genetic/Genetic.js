const genotype = new Genotype({
  size: 100,
  chromosome: new IntegerChromosome({
    size: 10,
    min: -90,
    max: 90,
  }),
})

class Genotype {
  constructor({ size, chromosome }) {
    this.size = size
    this.chromosome = chromosome
  }
}

class Chromosome {
  constructor({ size, gene }) {
    this.size = size
    this.gene = gene
  }
}

class BinaryChromosome extends Chromosome {
  constructor({ size }) {
    super({ size, gene: new BitGene() })
  }
}

class RealChromosome extends Chromosome {
  constructor({ size, min, max }) {
    super({ size, gene: new RealGene({ min, max }) })
  }
}

class IntegerChromosome extends Chromosome {
  constructor({ size, min, max }) {
    super({ size, gene: new IntegerGene({ min, max }) })
  }
}

class PermutationChromosome extends Chromosome {
  constructor({ min, max }) {
    super({ size: max - min + 1, gene: new IntegerGene({ min, max }) })
  }
}

class Gene {}

class BitGene extends Gene {}

class NumberGene extends Gene {
  constructor({ min, max }) {
    this.min = min
    this.max = max
  }
}

class RealGene extends NumberGene {}

class IntegerGene extends NumberGene {}
