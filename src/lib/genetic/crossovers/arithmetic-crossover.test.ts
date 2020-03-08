import { ArithmeticCrossover } from './arithmetic-crossover'

describe('ArithmeticCrossover', () => {
  describe('crossover', () => {
    let arithmeticCrossover: ArithmeticCrossover
    let a: number[]
    let b: number[]

    beforeEach(() => {
      arithmeticCrossover = new ArithmeticCrossover(1, 0.3)
      a = [0, 1]
      b = [4, 3]
    })

    it('alters both chromosomes', () => {
      arithmeticCrossover.crossover(a, b)
      expect(a).toHaveLength(2)
      expect(a[0]).toBeCloseTo(1.2, 8)
      expect(a[1]).toBeCloseTo(1.6, 8)
      expect(b).toHaveLength(2)
      expect(b[0]).toBeCloseTo(2.8)
      expect(b[1]).toBeCloseTo(2.4)
    })
  })
})
