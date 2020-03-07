import { random, randomInt, randomBit } from './random-utils'

describe('random', () => {
  beforeEach(() => {
    Math.random = jest.fn(() => 0.32)
  })

  it('returns a real between 0 and 1', () => {
    expect(random()).toBe(0.32)
  })

  it('returns a positive real', () => {
    expect(random(10)).toBe(3.2)
  })

  it('returns a real within a range', () => {
    expect(random(10, 20)).toBe(13.2)
  })
})

describe('randomInt', () => {
  beforeEach(() => {
    Math.random = jest.fn(() => 0.32)
  })

  it('returns a positive integer', () => {
    expect(randomInt(10)).toBe(3)
  })

  it('returns an integer within a range', () => {
    expect(randomInt(10, 20)).toBe(13)
  })
})

describe('randomBit', () => {
  it('returns 0', () => {
    Math.random = jest.fn(() => 0.3)
    expect(randomBit()).toBe(0)
  })

  it('returns 1', () => {
    Math.random = jest.fn(() => 0.7)
    expect(randomBit()).toBe(1)
  })
})
