import { random, randomInt, randomBit } from '../../utils/random-utils'

export interface Gene {
  random(): number
}

export class BitGene implements Gene {
  random() {
    return randomBit()
  }
}

export abstract class NumberGene implements Gene {
  readonly min: number
  readonly max: number

  constructor({ min, max }: { min: number; max: number }) {
    this.min = min
    this.max = max
  }

  abstract random(): number
}

export class RealGene extends NumberGene {
  random() {
    return random(this.min, this.max)
  }
}

export class IntegerGene extends NumberGene {
  random() {
    return randomInt(this.min, this.max)
  }
}
