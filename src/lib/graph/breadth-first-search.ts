import { Queue } from '../collections/queue'

export function bfs<T>(
  root: T,
  adjacent: (node: T) => Iterable<T>,
  visit: (node: T) => void,
  mark: (node: T) => void,
  isMarked: (node: T) => boolean,
  nodeCount: number
) {
  const queue = new Queue<T>(nodeCount)
  mark(root)
  queue.enqueue(root)

  while (queue.length) {
    const currentNode = queue.dequeue()
    visit(currentNode)
    for (const nextNode of adjacent(currentNode)) {
      if (!isMarked(nextNode)) {
        mark(nextNode)
        queue.enqueue(nextNode)
      }
    }
  }
}
