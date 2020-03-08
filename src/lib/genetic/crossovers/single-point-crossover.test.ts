import { SinglePointCrossover } from './single-point-crossover'

describe('SinglePointCrossover', () => {
  describe('crossover', () => {
    let singlePointCrossover: SinglePointCrossover
    let a: number[]
    let b: number[]

    beforeEach(() => {
      singlePointCrossover = new SinglePointCrossover(1)
      a = [0, 1, 2, 3, 4]
      b = [4, 3, 2, 1, 0]
    })

    it('alters both chromosomes', () => {
      Math.random = jest.fn(() => 0.6)

      singlePointCrossover.crossover(a, b)
      expect(a).toEqual([0, 1, 2, 1, 0])
      expect(b).toEqual([4, 3, 2, 3, 4])
    })

    it('swaps all genes', () => {
      Math.random = jest.fn(() => 0.1)

      singlePointCrossover.crossover(a, b)
      expect(a).toEqual([4, 3, 2, 1, 0])
      expect(b).toEqual([0, 1, 2, 3, 4])
    })

    it('swaps the last gene', () => {
      Math.random = jest.fn(() => 0.99999999)

      singlePointCrossover.crossover(a, b)
      expect(a).toEqual([0, 1, 2, 3, 0])
      expect(b).toEqual([4, 3, 2, 1, 4])
    })
  })
})
