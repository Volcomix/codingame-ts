import { TruncationSelector } from './truncation-selector'

const population = Array.from({ length: 5 }, (_, i) => [i])
const fitness = Array.from({ length: 5 }, (_, i) => i / 5)

describe('TruncationSelector', () => {
  describe('select', () => {
    beforeEach(() => {
      Math.random = jest.fn(() => 0)
    })

    it('selects chromosomes from population', () => {
      const selector = new TruncationSelector()
      const selectedChromosomes = selector.select(population, fitness, 3)
      expect(selectedChromosomes).toEqual([[4], [3], [2]])
      expect(Math.random).not.toHaveBeenCalled()
    })
  })
})
