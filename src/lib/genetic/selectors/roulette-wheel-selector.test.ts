import {
  RWLinearWalkSelector,
  RWStochasticAcceptanceSelector,
} from './roulette-wheel-selector'

const population = Array.from({ length: 5 }, (_, i) => [i])
const fitness = Array.from({ length: 5 }, (_, i) => i / 5)

describe('RWLinearWalkSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.7)
        .mockReturnValue(0.99999999)

      const selector = new RWLinearWalkSelector()
      const selectedChromosomes = selector.select(population, fitness, 5)
      expect(selectedChromosomes).toEqual([[1], [2], [3], [4], [4]])
      expect(Math.random).toHaveBeenCalledTimes(5)
    })
  })
})

describe('RWStochasticAcceptanceSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.99999999)
        .mockReturnValueOnce(0.4)
        .mockReturnValue(0.49999999)

      const selector = new RWStochasticAcceptanceSelector()
      const selectedChromosomes = selector.select(population, fitness, 2)
      expect(selectedChromosomes).toEqual([[4], [2]])
      expect(Math.random).toHaveBeenCalledTimes(6)
    })
  })
})
