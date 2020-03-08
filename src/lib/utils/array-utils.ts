export function sum(array: number[]): number {
  return array.reduce((sum, value) => sum + value, 0)
}

export function min(array: number[]): number {
  return Math.min(...array)
}

export function max(array: number[]): number {
  return Math.max(...array)
}
