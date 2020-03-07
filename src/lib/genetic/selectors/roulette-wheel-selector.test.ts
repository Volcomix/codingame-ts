import { RouletteWheelSelector } from './roulette-wheel-selector'

beforeEach(() => {
  Math.random = jest
    .fn()
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0.1)
    .mockReturnValueOnce(0.4)
    .mockReturnValueOnce(0.7)
    .mockReturnValue(0.99999999)
})

describe('RouletteWheelSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      const selector = new RouletteWheelSelector()
      const population = Array.from({ length: 5 }, (_, i) => [i])
      const fitness = Array.from({ length: 5 }, (_, i) => i / 5)
      const selectedChromosomes = selector.select(population, fitness, 5)
      expect(selectedChromosomes).toEqual([[1], [2], [3], [4], [4]])
    })
  })
})
