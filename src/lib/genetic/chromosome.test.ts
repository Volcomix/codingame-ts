import {
  BinaryChromosome,
  RealChromosome,
  IntegerChromosome,
} from './chromosome'

beforeEach(() => {
  Math.random = jest
    .fn()
    .mockReturnValueOnce(0.2)
    .mockReturnValueOnce(0.7)
    .mockReturnValueOnce(0.4)
})

describe('BinaryChromosome', () => {
  describe('random', () => {
    it('generates random bit genes', () => {
      const chromosome = new BinaryChromosome({ size: 3 }).random()
      expect(chromosome).toEqual([0, 1, 0])
    })
  })
})

describe('RealChromosome', () => {
  describe('random', () => {
    it('generates random real genes', () => {
      const chromosome = new RealChromosome({
        size: 3,
        min: -1,
        max: 2,
      }).random()
      expect(chromosome).toHaveLength(3)
      expect(chromosome[0]).toBeCloseTo(-0.4, 8)
      expect(chromosome[1]).toBeCloseTo(1.1, 8)
      expect(chromosome[2]).toBeCloseTo(0.2, 8)
    })
  })
})

describe('IntegerChromosome', () => {
  describe('random', () => {
    it('generates random integerer genes', () => {
      const chromosome = new IntegerChromosome({
        size: 3,
        min: -1,
        max: 9,
      }).random()
      expect(chromosome).toEqual([1, 6, 3])
    })
  })
})

describe('PermutationChromosome', () => {
  describe('random', () => {
    it.todo('generates a random permutation of integer genes')
  })
})
