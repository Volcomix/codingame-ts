import { sum, max } from './array-utils'

describe('sum', () => {
  it('sums the numbers', () => {
    expect(sum([1, 2])).toBe(3)
  })
})

describe('max', () => {
  it('returns the max number', () => {
    expect(max([1, 3, 2])).toBe(3)
  })
})
