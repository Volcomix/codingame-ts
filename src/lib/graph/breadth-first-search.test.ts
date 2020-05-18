import { Queue } from '../collections/queue'
import { bfs } from './breadth-first-search'

describe('bfs', () => {
  it('performs a breadth-first search', () => {
    const graph = [[1, 4, 5], [3, 4], [1], [2, 4], [], []]

    const visited = new Array<number>()
    const marked = new Array<boolean>(graph.length).fill(false)
    const queue = new Queue<number>(graph.length)

    const adjacent = (node: number) => graph[node]
    const visit = (node: number) => visited.push(node)
    const mark = (node: number) => (marked[node] = true)
    const isMarked = (node: number) => marked[node]

    bfs(0, adjacent, visit, mark, isMarked, queue)

    expect(visited).toEqual([0, 1, 4, 5, 3, 2])
  })
})
