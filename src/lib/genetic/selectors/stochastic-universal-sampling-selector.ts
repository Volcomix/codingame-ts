import { Selector } from './selector'
import { sum } from '../../utils/array-utils'
import { random } from '../../utils/random-utils'

export class StochasticUniversalSamplingSelector implements Selector {
  select(population: number[][], fitness: number[], count: number): number[][] {
    const distance = sum(fitness) / count
    let pointer = random(distance)
    let partialSum = 0
    const selectedChromosomes: number[][] = []
    for (
      let i = 0;
      selectedChromosomes.length < count && i < population.length;
      i++
    ) {
      partialSum += fitness[i]
      if (partialSum > pointer) {
        selectedChromosomes.push(population[i])
        pointer += distance
      }
    }
    return selectedChromosomes
  }
}
