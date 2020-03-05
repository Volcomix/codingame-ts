import { Genotype } from './genotype'
import { IntegerChromosome } from './chromosome'
import { Genetic } from './genetic'

it('instantiates', () => {
  new Genetic({
    genotype: new Genotype({
      size: 100,
      chromosome: new IntegerChromosome({
        size: 10,
        min: -90,
        max: 90,
      }),
    }),
    fitness: chromosome => chromosome.reduce((sum, allele) => sum + allele, 0),
  })
})
