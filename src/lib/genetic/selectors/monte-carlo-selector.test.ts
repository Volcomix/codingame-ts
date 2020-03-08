import { MonteCarloSelector } from './monte-carlo-selector'

const population = Array.from({ length: 5 }, (_, i) => [i])
const fitness = Array.from({ length: 5 }, (_, i) => i / 5)

describe('MonteCarloSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.4)
        .mockReturnValue(0.99999999)

      const selector = new MonteCarloSelector()
      const selectedChromosomes = selector.select(population, fitness, 2)
      expect(selectedChromosomes).toEqual([[2], [4]])
      expect(Math.random).toHaveBeenCalledTimes(2)
    })
  })
})
