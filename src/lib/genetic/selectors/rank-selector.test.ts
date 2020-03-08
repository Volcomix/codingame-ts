import { RankSelector } from './rank-selector'

const population = Array.from({ length: 4 }, (_, i) => [i])
const fitness = Array.from({ length: 4 }, (_, i) => i / 50)

describe('RankSelector', () => {
  describe('select with stochastic acceptance', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.99999999)
        .mockReturnValueOnce(0.4)
        .mockReturnValue(0.49999999)

      const selector = new RankSelector()
      const selectedChromosomes = selector.select(population, fitness, 2)
      expect(selectedChromosomes).toEqual([[3], [1]])
      expect(Math.random).toHaveBeenCalledTimes(6)
    })
  })

  describe('select with linear walk', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.7)
        .mockReturnValue(0.99999999)

      const selector = new RankSelector(false)
      const selectedChromosomes = selector.select(population, fitness, 5)
      expect(selectedChromosomes).toEqual([[0], [1], [2], [3], [3]])
      expect(Math.random).toHaveBeenCalledTimes(5)
    })
  })
})
