export class Queue<T> {
  private array: T[]
  private firstIndex = 0
  private lastIndex = 0

  constructor(arrayLength: number) {
    this.array = new Array(arrayLength)
  }

  get length() {
    return this.lastIndex - this.firstIndex
  }

  clear() {
    this.firstIndex = 0
    this.lastIndex = 0
  }

  enqueue(element: T) {
    this.array[this.lastIndex++] = element
  }

  dequeue(): T {
    return this.array[this.firstIndex++]
  }
}
