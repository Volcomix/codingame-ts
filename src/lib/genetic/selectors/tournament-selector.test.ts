import { TournamentSelector } from './tournament-selector'

const population = Array.from({ length: 5 }, (_, i) => [i])
const fitness = Array.from({ length: 5 }, (_, i) => i / 5)

describe('TournamentSelector', () => {
  describe('select', () => {
    it('selects chromosomes from population', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.2)
        .mockReturnValueOnce(0.0)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.6)
        .mockReturnValue(0.99999999)

      const selector = new TournamentSelector(2)
      const selectedChromosomes = selector.select(population, fitness, 3)
      expect(selectedChromosomes).toEqual([[1], [2], [4]])
    })
  })
})
