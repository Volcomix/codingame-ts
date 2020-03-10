import { Alterer } from '../domain/alterer'
import { random } from '../../utils/random-utils'

export abstract class Mutator extends Alterer {
  private subProbability: number

  constructor(probability: number) {
    super(probability)

    // subProbability is used as chromosomeProbability and geneProbability
    // considering probability = chromosomeProbability * geneProbability
    this.subProbability = Math.sqrt(probability)
  }

  mutate(chromosome: number[]): void {
    for (let i = 0; i < chromosome.length; i++) {
      if (random() < this.subProbability) {
        this.mutateGene(chromosome, i)
      }
    }
  }

  protected mutateGene(_chromosome: number[], _index: number): void {}
}
