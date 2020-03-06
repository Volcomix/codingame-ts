import { Genotype } from './genotype'
import { Chromosome } from './chromosome'
import { Gene } from './gene'

describe('Genotype', () => {
  describe('random', () => {
    it('generates random chromosomes', () => {
      const genotype = new Genotype({
        size: 3,
        chromosome: new TestChromosome(),
      }).random()
      expect(genotype).toEqual([[0], [1], [2]])
    })
  })
})

class TestChromosome extends Chromosome<TestGene> {
  constructor() {
    super({ size: 1, gene: new TestGene() })
  }
}

class TestGene extends Gene {
  private inc = 0

  random() {
    return this.inc++
  }
}
