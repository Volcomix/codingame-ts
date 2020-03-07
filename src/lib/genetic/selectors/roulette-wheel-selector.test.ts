import {
  LinearWalkSelector,
  StochasticAcceptanceSelector,
} from './roulette-wheel-selector'

describe('LinearWalkSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.7)
        .mockReturnValue(0.99999999)

      const selector = new LinearWalkSelector()
      const population = Array.from({ length: 5 }, (_, i) => [i])
      const fitness = Array.from({ length: 5 }, (_, i) => i / 5)
      const selectedChromosomes = selector.select(population, fitness, 5)
      expect(selectedChromosomes).toEqual([[1], [2], [3], [4], [4]])
    })
  })
})

describe('StochasticAcceptanceSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.99999999)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.49999999)

      const selector = new StochasticAcceptanceSelector()
      const population = Array.from({ length: 5 }, (_, i) => [i])
      const fitness = Array.from({ length: 5 }, (_, i) => i / 5)
      const selectedChromosomes = selector.select(population, fitness, 2)
      expect(selectedChromosomes).toEqual([[4], [2]])
    })
  })
})
