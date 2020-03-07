import { Selector } from './selector'
import { sum, max } from '../../utils/array-utils'
import { random, randomInt } from '../../utils/random-utils'

export class RWLinearWalkSelector implements Selector {
  select(population: number[][], fitness: number[], count: number): number[][] {
    const fitnessSum = sum(fitness)
    return Array.from({ length: count }, () =>
      this.selectOne(population, fitness, fitnessSum)
    )
  }

  private selectOne(
    population: number[][],
    fitness: number[],
    fitnessSum: number
  ): number[] {
    let partialSum = random(fitnessSum)
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
    const maxFitness = max(fitness)
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
      const i = randomInt(population.length)
      if (random() < fitness[i] / maxFitness) {
        return population[i]
      }
    }
  }
}
