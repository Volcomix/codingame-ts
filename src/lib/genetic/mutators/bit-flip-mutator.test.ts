import { BitFlipMutator } from './bit-flip-mutator'

describe('BitFlipMutator', () => {
  describe('mutateGene', () => {
    let mutator: BitFlipMutator

    beforeEach(() => {
      mutator = new BitFlipMutator(0.1)

      Math.random = jest
        .fn()
        .mockReturnValueOnce(0.32)
        .mockReturnValueOnce(0.31)
        .mockReturnValue(0.32)
    })

    it('flips a bit to 1', () => {
      const chromosome = [1, 0, 1]
      mutator.mutate(chromosome)
      expect(chromosome).toEqual([1, 1, 1])
    })

    it('flips a bit to 0', () => {
      const chromosome = [0, 1, 0]
      mutator.mutate(chromosome)
      expect(chromosome).toEqual([0, 0, 0])
    })
  })
})
