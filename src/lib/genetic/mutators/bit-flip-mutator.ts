import { Mutator } from './mutator'

export class BitFlipMutator extends Mutator {
  protected mutateGene(chromosome: number[], index: number): void {
    if (chromosome[index] === 0) {
      chromosome[index] = 1
    } else {
      chromosome[index] = 0
    }
  }
}
