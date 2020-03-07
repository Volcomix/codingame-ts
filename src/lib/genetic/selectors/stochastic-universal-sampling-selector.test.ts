import { StochasticUniversalSamplingSelector } from './stochastic-universal-sampling-selector'

const population = Array.from({ length: 5 }, (_, i) => [i])
const fitness = Array.from({ length: 5 }, (_, i) => i / 5)

describe('StochasticUniversalSamplingSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest.fn().mockReturnValue(0.45)

      const selector = new StochasticUniversalSamplingSelector()
      const selectedChromosomes = selector.select(population, fitness, 3)
      expect(selectedChromosomes).toEqual([[2], [3], [4]])
      expect(Math.random).toHaveBeenCalledTimes(1)
    })
  })
})
