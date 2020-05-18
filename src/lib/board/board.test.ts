import { Board } from './board'

describe('Board', () => {
  describe('when isCircular is false', () => {
    let board: Board

    beforeEach(() => {
      board = new Board(2, 2, [
        [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
        ],
        [{ x: 1, y: 0 }, null],
      ])
    })

    describe('width', () => {
      it('gets the width', () => {
        expect(board.width).toBe(2)
      })
    })

    describe('height', () => {
      it('gets the height', () => {
        expect(board.height).toBe(2)
      })
    })

    describe('cells', () => {
      it('gets the cells', () => {
        expect(board.cells).toEqual([
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 0 },
        ])
      })
    })

    describe('cell', () => {
      it('returns the cell', () => {
        expect(board.cell(0, 1)).toEqual({ x: 0, y: 1 })
      })

      it('returns null', () => {
        expect(board.cell(1, 1)).toBeNull()
      })
    })

    describe('neighbors', () => {
      it('returns the neighbors', () => {
        expect(board.neighbors(board.cell(0, 0))).toEqual([
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ])
      })
    })
  })

  describe('when isCircular is true', () => {
    let board: Board

    beforeEach(() => {
      board = new Board(
        3,
        3,
        [
          [{ x: 0, y: 0 }, null, { x: 0, y: 2 }],
          [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
          ],
          [null, { x: 2, y: 1 }, { x: 2, y: 2 }],
        ],
        true
      )
    })

    describe('neighbors', () => {
      it('returns the neighbors', () => {
        expect(board.neighbors(board.cell(0, 0))).toEqual([
          { x: 0, y: 2 },
          { x: 1, y: 0 },
        ])
      })
    })
  })
})
