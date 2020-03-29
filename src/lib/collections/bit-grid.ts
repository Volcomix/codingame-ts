export class BitGrid {
  private cells: number[][]
  private mark = Number.MIN_SAFE_INTEGER

  constructor(readonly width: number, readonly height: number) {
    this.cells = Array.from({ length: width }, () =>
      Array.from({ length: height }, () => this.mark)
    )
    this.reset()
  }

  reset() {
    this.mark++
  }

  revertReset() {
    this.mark--
  }

  get(x: number, y: number) {
    return this.cells[x][y] >= this.mark
  }

  set(x: number, y: number, value: boolean) {
    this.cells[x][y] = value ? this.mark : this.mark - 1
  }
}
