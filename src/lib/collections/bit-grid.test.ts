import { BitGrid } from './bit-grid'

describe('BitGrid', () => {
  let bitGrid: BitGrid

  beforeEach(() => {
    bitGrid = new BitGrid(2, 2)
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

  describe('revertReset', () => {
    it('reverts cells when nothing else was done after reset', () => {
      bitGrid.set(1, 1, true)
      bitGrid.reset()
      bitGrid.revertReset()
      expect(bitGrid.get(1, 1)).toBe(true)
    })
  })

  describe('get', () => {
    it('returns true', () => {
      bitGrid.set(1, 1, true)
      expect(bitGrid.get(1, 1)).toBe(true)
    })

    it('returns false', () => {
      bitGrid.set(1, 1, false)
      expect(bitGrid.get(1, 1)).toBe(false)
    })
  })
})
