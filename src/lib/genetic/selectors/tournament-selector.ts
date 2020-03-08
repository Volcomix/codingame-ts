import { Selector } from './selector'
import { randomInt } from '../../utils/random-utils'

export class TournamentSelector implements Selector {
  constructor(readonly tournamentSize: number) {}

  select(population: number[][], fitness: number[], count: number): number[][] {
    return Array.from({ length: count }, () =>
      this.selectOne(population, fitness)
    )
  }

  private selectOne(population: number[][], fitness: number[]): number[] {
    let bestChromosome: number[] = null
    let maxFitness = -Infinity
    for (let i = 0; i < this.tournamentSize; i++) {
      const j = randomInt(population.length)
      if (fitness[j] > maxFitness) {
        bestChromosome = population[j]
        maxFitness = fitness[j]
      }
    }
    return bestChromosome
  }
}
