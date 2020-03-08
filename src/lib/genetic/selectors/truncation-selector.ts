import { Selector } from './selector'

export class TruncationSelector implements Selector {
  select(population: number[][], fitness: number[], count: number): number[][] {
    const sortedFitness = this.sortFitness(fitness)
    return Array.from(
      { length: count },
      (_, i) => population[sortedFitness[i].index]
    )
  }

  private sortFitness(fitness: number[]) {
    return fitness
      .map((fitnessValue, index) => ({ index, fitnessValue }))
      .sort((a, b) => b.fitnessValue - a.fitnessValue)
  }
}
