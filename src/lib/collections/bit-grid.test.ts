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

  describe('reset', () => {
    it('set all cells to false', () => {
      bitGrid.set(1, 1, true)
      bitGrid.reset()
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

  it('matches snapshot', () => {
    bitGrid.set(0, 0, true)
    bitGrid.set(1, 1, true)
    bitGrid.set(14, 14, true)
    expect(bitGrid).toMatchSnapshot()
  })
})
