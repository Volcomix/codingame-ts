import { Selector } from './selector'
import { randomInt } from '../../utils/random-utils'

export class MonteCarloSelector implements Selector {
  select(
    population: number[][],
    _fitness: number[],
    count: number
  ): number[][] {
    return Array.from({ length: count }, () => this.selectOne(population))
  }

  private selectOne(population: number[][]): number[] {
    const i = randomInt(population.length)
    return population[i]
  }
}
