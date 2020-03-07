export function sum(array: number[]): number {
  return array.reduce((sum, value) => sum + value, 0)
}

export function max(array: number[]): number {
  return Math.max(...array)
}
