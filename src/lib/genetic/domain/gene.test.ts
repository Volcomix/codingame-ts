import { BitGene, RealGene, IntegerGene } from './gene'

describe('BitGene', () => {
  describe('random', () => {
    let gene: BitGene

    beforeEach(() => {
      gene = new BitGene()
    })

    it('returns 0', () => {
      Math.random = jest.fn(() => 0.3)
      expect(gene.random()).toBe(0)
    })

    it('returns 1', () => {
      Math.random = jest.fn(() => 0.7)
      expect(gene.random()).toBe(1)
    })
  })
})

describe('RealGene', () => {
  describe('random', () => {
    let gene: RealGene

    beforeEach(() => {
      gene = new RealGene({ min: -1, max: 2 })
    })

    it('returns a real equal to min', () => {
      Math.random = jest.fn(() => 0)
      expect(gene.random()).toBe(-1)
    })

    it('returns a real greater than min', () => {
      Math.random = jest.fn(() => 0.3)
      expect(gene.random()).toBeCloseTo(-0.1, 8)
    })

    it('returns a real less than max', () => {
      Math.random = jest.fn(() => 0.9)
      expect(gene.random()).toBeCloseTo(1.7, 8)
    })
  })
})

describe('IntegerGene', () => {
  describe('random', () => {
    let gene: IntegerGene

    beforeEach(() => {
      gene = new IntegerGene({ min: -1, max: 9 })
    })

    it('returns an integer equal to min', () => {
      Math.random = jest.fn(() => 0)
      expect(gene.random()).toBe(-1)
    })

    it('returns an integer greater than min', () => {
      Math.random = jest.fn(() => 0.32)
      expect(gene.random()).toBe(2)
    })

    it('returns an integer less than max', () => {
      Math.random = jest.fn(() => 0.99)
      expect(gene.random()).toBe(8)
    })
  })
})
