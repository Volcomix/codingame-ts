import { Queue } from './queue'

describe('Queue', () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue(10)
  })

  describe('constructor', () => {
    it('creates an empty queue', () => {
      expect(queue).toHaveLength(0)
    })
  })

  describe('enqueue', () => {
    it('adds an element to the end', () => {
      queue.enqueue(2)
      expect(queue).toHaveLength(1)
    })
  })

  describe('dequeue', () => {
    beforeEach(() => {
      queue.enqueue(2)
    })

    it('returns the first element', () => {
      expect(queue.dequeue()).toBe(2)
    })

    it('removes the first element', () => {
      queue.dequeue()
      expect(queue).toHaveLength(0)
    })
  })

  describe('clear', () => {
    it('removes all elements', () => {
      queue.enqueue(2)
      queue.clear()
      expect(queue).toHaveLength(0)
    })
  })
})
