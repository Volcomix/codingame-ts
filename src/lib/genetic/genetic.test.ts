import { Genetic } from './genetic'
import { Genotype } from './domain/genotype'
import { IntegerChromosome } from './domain/chromosome'

describe('Genetic', () => {
  describe('evolve', () => {
    it('evolves', () => {
      const genetic = new Genetic({
        genotype: new Genotype({
          size: 100,
          chromosome: new IntegerChromosome({
            size: 10,
            min: -90,
            max: 90,
          }),
        }),
        fitnessFunction: chromosome => {
          return chromosome.reduce((sum, allele) => sum + allele, 0)
        },
      })
      genetic.evolve()
    })
  })
})
