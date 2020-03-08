import { UniformCrossover } from './uniform-crossover'

describe('UniformCrossover', () => {
  describe('crossover', () => {
    let uniformCrossover: UniformCrossover
    let a: number[]
    let b: number[]

    beforeEach(() => {
      uniformCrossover = new UniformCrossover(1, 0.4)
      a = [0, 1, 2, 3, 4]
      b = [4, 3, 2, 1, 0]
    })

    it('alters both chromosomes', () => {
      Math.random = jest
        .fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0.4)
        .mockReturnValueOnce(0.7)
        .mockReturnValueOnce(0.39999999)
        .mockReturnValue(0.99999999)

      uniformCrossover.crossover(a, b)
      expect(a).toEqual([4, 1, 2, 1, 4])
      expect(b).toEqual([0, 3, 2, 3, 0])
    })
  })
})
