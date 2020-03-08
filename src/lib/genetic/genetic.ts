import { Genotype } from './domain/genotype'
import { Gene } from './domain/gene'

export class Genetic<T extends Gene> {
  readonly genotype: Genotype<T>
  readonly fitnessFunction: (chromosome: number[]) => number

  constructor({
    genotype,
    fitnessFunction,
  }: {
    genotype: Genotype<T>
    fitnessFunction: (chromosome: number[]) => number
  }) {
    this.genotype = genotype
    this.fitnessFunction = fitnessFunction
  }

  evolve() {
    const population = this.initPopulation()
    const fitness = this.findFitness(population)
  }

  private initPopulation() {
    return this.genotype.random()
  }

  private findFitness(population: number[][]) {
    return population.map(chromosome => this.fitnessFunction(chromosome))
  }
}
