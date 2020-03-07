import { Selector } from './selector'

export class RWLinearWalkSelector implements Selector {
  select(population: number[][], fitness: number[], count: number): number[][] {
    const fitnessSum = fitness.reduce(
      (sum, chromosomeFitness) => sum + chromosomeFitness,
      0
    )
    return Array.from({ length: count }, () =>
      this.selectOne(population, fitness, fitnessSum)
    )
  }

  private selectOne(
    population: number[][],
    fitness: number[],
    fitnessSum: number
  ): number[] {
    let partialSum = Math.random() * fitnessSum
    for (let i = 0; i < population.length; i++) {
      partialSum -= fitness[i]
      if (partialSum < 0) {
        return population[i]
      }
    }
  }
}

export class RWStochasticAcceptanceSelector implements Selector {
  select(population: number[][], fitness: number[], count: number): number[][] {
    const maxFitness = Math.max(...fitness)
    return Array.from({ length: count }, () =>
      this.selectOne(population, fitness, maxFitness)
    )
  }

  private selectOne(
    population: number[][],
    fitness: number[],
    maxFitness: number
  ): number[] {
    while (true) {
      const i = Math.floor(Math.random() * population.length)
      if (Math.random() < fitness[i] / maxFitness) {
        return population[i]
      }
    }
  }
}
