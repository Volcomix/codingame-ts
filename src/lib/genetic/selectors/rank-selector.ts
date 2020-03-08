import { RouletteWheelSelector } from './roulette-wheel-selector'

export class RankSelector extends RouletteWheelSelector {
  protected selectStochasticAcceptance(
    population: number[][],
    fitness: number[],
    count: number
  ): number[][] {
    let maxRank = 0
    const ranks = new Array(population.length)

    this.sortFitness(fitness).forEach(({ index }, rankMinusOne) => {
      const rank = rankMinusOne + 1
      maxRank = Math.max(maxRank, rank)
      ranks[index] = rank
    })

    return Array.from({ length: count }, () =>
      this.selectOneStochasticAcceptance(population, ranks, maxRank)
    )
  }

  protected selectLinearWalk(
    population: number[][],
    fitness: number[],
    count: number
  ): number[][] {
    let rankSum = 0
    const ranks = new Array(population.length)

    this.sortFitness(fitness).forEach(({ index }, rankMinusOne) => {
      const rank = rankMinusOne + 1
      rankSum += rank
      ranks[index] = rank
    })

    return Array.from({ length: count }, () =>
      this.selectOneLinearWalk(population, ranks, rankSum)
    )
  }

  private sortFitness(fitness: number[]) {
    return fitness
      .map((fitnessValue, index) => ({ index, fitnessValue }))
      .sort((a, b) => a.fitnessValue - b.fitnessValue)
  }
}
