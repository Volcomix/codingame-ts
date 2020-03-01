import { Genotype } from './genotype'
import { IntegerChromosome } from './chromosome'

const genotype = new Genotype({
  size: 100,
  chromosome: new IntegerChromosome({
    size: 10,
    min: -90,
    max: 90,
  }),
})
