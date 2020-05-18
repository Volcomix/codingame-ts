import { ValueBoard } from './value-board'

describe('NumberBoard', () => {
  let board: ValueBoard<number>

  beforeEach(() => {
    board = new ValueBoard(2, 2, [
      [0, 0],
      [0, null],
    ])
  })

  describe('cells', () => {
    it('gets the cells', () => {
      expect(board.cells).toEqual([
        { x: 0, y: 0, value: 0 },
        { x: 0, y: 1, value: 0 },
        { x: 1, y: 0, value: 0 },
      ])
    })
  })

  describe('cell', () => {
    it('holds the cell value', () => {
      expect(board.cell(0, 1).value).toBe(0)
    })
  })

  describe('neighbors', () => {
    it('returns the neighbors', () => {
      expect(board.neighbors(board.cell(0, 0))).toEqual([
        { x: 1, y: 0, value: 0 },
        { x: 0, y: 1, value: 0 },
      ])
    })
  })
})
