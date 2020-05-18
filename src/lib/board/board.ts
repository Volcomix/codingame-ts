import { Cell } from './cell'
import { Direction, directions } from './direction'

export class Board<T extends Cell = Cell> {
  readonly cells: T[] = []

  private readonly _neighbors = new WeakMap<T, T[]>()

  constructor(
    readonly width: number,
    readonly height: number,
    private readonly _cells: T[][],
    private readonly isCircular = false
  ) {
    this.initCells()
    this.initNeighbors()
  }

  cell(x: number, y: number): T {
    return this._cells[x][y]
  }

  neighbors(cell: T): T[] {
    return this._neighbors.get(cell)
  }

  neighbor(cell: T, direction: Direction): T {
    let x: number
    let y: number
    switch (direction) {
      case Direction.Up:
        if (!this.isCircular && cell.y === 0) return null
        x = cell.x
        y = (cell.y === 0 ? this.height : cell.y) - 1
        break
      case Direction.Right:
        if (!this.isCircular && cell.x === this.width - 1) return null
        x = (cell.x + 1) % this.width
        y = cell.y
        break
      case Direction.Down:
        if (!this.isCircular && cell.y === this.height - 1) return null
        x = cell.x
        y = (cell.y + 1) % this.height
        break
      case Direction.Left:
        if (!this.isCircular && cell.x === 0) return null
        x = (cell.x === 0 ? this.width : cell.x) - 1
        y = cell.y
        break
    }
    return this.cell(x, y)
  }

  private initCells() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const cell = this.cell(x, y)
        if (cell !== null) {
          this.cells.push(cell)
        }
      }
    }
  }

  private initNeighbors() {
    this.cells.forEach((cell) => {
      const neighbors = []
      for (const direction of directions) {
        const neighbor = this.neighbor(cell, direction)
        if (neighbor !== null) {
          neighbors.push(neighbor)
        }
      }
      this._neighbors.set(cell, neighbors)
    })
  }
}
