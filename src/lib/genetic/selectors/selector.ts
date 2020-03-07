export interface Selector {
  select(population: number[][], fitness: number[], count: number): number[][]
}
