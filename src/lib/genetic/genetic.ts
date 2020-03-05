import { Genotype } from './genotype'
import { Gene } from './gene'

export class Genetic<T extends Gene> {
  readonly genotype: Genotype<T>
  readonly fitness: (chromosome: number[]) => number

  constructor({
    genotype,
    fitness,
  }: {
    genotype: Genotype<T>
    fitness: (chromosome: number[]) => number
  }) {
    this.genotype = genotype
    this.fitness = fitness
  }

  evolve() {
    const population = this.initPopulation()
    const fitness = this.findFitness(population)
  }

  private initPopulation() {
    return this.genotype.random()
  }

  private findFitness(population: number[][]) {
    return population.map(chromosome => this.fitness(chromosome))
  }
}
