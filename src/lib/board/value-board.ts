import { Board } from './board'
import { ValueCell } from './value-cell'

export class ValueBoard<T> extends Board<ValueCell<T>> {
  constructor(
    width: number,
    height: number,
    values: T[][],
    isCircular = false
  ) {
    const cells = Array.from({ length: width }, (_, x) =>
      Array.from({ length: height }, (_, y) => {
        const value = values[x][y]
        if (value === null) {
          return null
        }
        return { x, y, value }
      })
    )
    super(width, height, cells, isCircular)
  }
}
