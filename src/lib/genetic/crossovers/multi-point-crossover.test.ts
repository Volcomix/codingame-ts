import { MultiPointCrossover } from './multi-point-crossover'

describe('MultiPointCrossover', () => {
  describe('crossover', () => {
    let multiPointCrossover: MultiPointCrossover
    let a: number[]
    let b: number[]

    beforeEach(() => {
      multiPointCrossover = new MultiPointCrossover(1, 2)
      a = [0, 1, 2, 3, 4]
      b = [4, 3, 2, 1, 0]
    })

    it('alters both chromosomes', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.2)
        .mockReturnValue(0.8)

      multiPointCrossover.crossover(a, b)
      expect(a).toEqual([0, 3, 2, 1, 4])
      expect(b).toEqual([4, 1, 2, 3, 0])
      expect(Math.random).toHaveBeenCalledTimes(2)
    })

    it('swaps the first gene', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValue(0.2)

      multiPointCrossover.crossover(a, b)
      expect(a).toEqual([4, 1, 2, 3, 4])
      expect(b).toEqual([0, 3, 2, 1, 0])
      expect(Math.random).toHaveBeenCalledTimes(2)
    })

    it('swaps genes with overlapping crossover points', () => {
      Math.random = jest.fn(() => 0.2)

      multiPointCrossover.crossover(a, b)
      expect(a).toEqual([0, 3, 2, 1, 0])
      expect(b).toEqual([4, 1, 2, 3, 4])
      expect(Math.random).toHaveBeenCalledTimes(2)
    })
  })
})
