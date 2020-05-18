export class BitGrid {
  private buffer: Uint8Array
  private offset: number
  private lastBitPosition: BitPosition = { byteIndex: 0, bitIndexInByte: 0 }

  constructor(readonly width: number, readonly height: number) {
    this.offset = Math.ceil(Math.log2(width))
    this.buffer = new Uint8Array(((height << this.offset) >> 3) + 1)
  }

  clear() {
    this.buffer.fill(0)
  }

  get(x: number, y: number): boolean {
    const { byteIndex, bitIndexInByte } = this.getBitPosition(x, y)
    return ((this.buffer[byteIndex] >> bitIndexInByte) & 1) === 1
  }

  set(x: number, y: number, value: boolean) {
    const { byteIndex, bitIndexInByte } = this.getBitPosition(x, y)
    this.buffer[byteIndex] = value
      ? this.buffer[byteIndex] | (1 << bitIndexInByte)
      : this.buffer[byteIndex] & ~(1 << bitIndexInByte)
  }

  copyTo(target: BitGrid) {
    target.buffer.set(this.buffer)
  }

  and(other: BitGrid) {
    other.buffer.forEach((byte, i) => {
      this.buffer[i] &= byte
    })
  }

  or(other: BitGrid) {
    other.buffer.forEach((byte, i) => {
      this.buffer[i] |= byte
    })
  }

  private getBitPosition(x: number, y: number): BitPosition {
    const bitIndex = (y << this.offset) + x
    const byteIndex = bitIndex >> 3
    this.lastBitPosition.byteIndex = byteIndex
    this.lastBitPosition.bitIndexInByte = bitIndex - (byteIndex << 3)
    return this.lastBitPosition
  }
}

interface BitPosition {
  byteIndex: number
  bitIndexInByte: number
}
