import { BitGrid } from './bit-grid'

describe('BitGrid', () => {
  let bitGrid: BitGrid

  beforeEach(() => {
    bitGrid = new BitGrid(15, 15)
  })

  describe('constructor', () => {
    it('set all cells to false', () => {
      expect(bitGrid.get(1, 1)).toBe(false)
    })
  })

  describe('clear', () => {
    it('set all cells to false', () => {
      bitGrid.set(1, 1, true)
      bitGrid.clear()
      expect(bitGrid.get(1, 1)).toBe(false)
    })
  })

  describe('get', () => {
    it('returns true', () => {
      bitGrid.set(11, 12, true)
      expect(bitGrid.get(11, 12)).toBe(true)
    })

    it('returns false', () => {
      bitGrid.set(1, 1, false)
      expect(bitGrid.get(1, 1)).toBe(false)
    })
  })

  describe('copyTo', () => {
    it('copies into the target bit grid', () => {
      bitGrid.set(1, 1, true)
      const target = new BitGrid(bitGrid.width, bitGrid.height)
      bitGrid.copyTo(target)
      expect(target.get(1, 1)).toBe(true)
    })
  })

  describe('and', () => {
    it('performs a binary AND and stores the result in this', () => {
      bitGrid.set(0, 0, true)
      bitGrid.set(1, 1, true)
      const other = new BitGrid(bitGrid.width, bitGrid.height)
      other.set(1, 1, true)
      other.set(1, 2, true)
      bitGrid.and(other)
      expect(bitGrid.get(1, 1)).toBe(true)
      expect(bitGrid.get(0, 0)).toBe(false)
      expect(bitGrid.get(1, 2)).toBe(false)
    })
  })

  describe('or', () => {
    it('performs a binary OR and stores the result in this', () => {
      bitGrid.set(1, 1, true)
      const other = new BitGrid(bitGrid.width, bitGrid.height)
      other.set(1, 2, true)
      bitGrid.or(other)
      expect(bitGrid.get(1, 1)).toBe(true)
      expect(bitGrid.get(1, 2)).toBe(true)
    })
  })

  it('matches snapshot', () => {
    bitGrid.set(0, 0, true)
    bitGrid.set(1, 1, true)
    bitGrid.set(14, 14, true)
    expect(bitGrid).toMatchSnapshot()
  })
})
