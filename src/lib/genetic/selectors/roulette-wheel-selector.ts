import { Selector } from './selector'
import { sum, max } from '../../utils/array-utils'
import { random, randomInt } from '../../utils/random-utils'

export class RouletteWheelSelector implements Selector {
  constructor(readonly stochasticAcceptance = true) {}

  select(population: number[][], fitness: number[], count: number): number[][] {
    if (this.stochasticAcceptance) {
      return this.selectStochasticAcceptance(population, fitness, count)
    } else {
      return this.selectLinearWalk(population, fitness, count)
    }
  }

  protected selectStochasticAcceptance(
    population: number[][],
    fitness: number[],
    count: number
  ): number[][] {
    const maxFitness = max(fitness)
    return Array.from({ length: count }, () =>
      this.selectOneStochasticAcceptance(population, fitness, maxFitness)
    )
  }

  protected selectLinearWalk(
    population: number[][],
    fitness: number[],
    count: number
  ): number[][] {
    const fitnessSum = sum(fitness)
    return Array.from({ length: count }, () =>
      this.selectOneLinearWalk(population, fitness, fitnessSum)
    )
  }

  protected selectOneStochasticAcceptance(
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

  protected selectOneLinearWalk(
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
