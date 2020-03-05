export abstract class Gene {}

export class BitGene extends Gene {
  random() {
    return Math.random() < 0.5 ? 0 : 1
  }
}

export abstract class NumberGene extends Gene {
  readonly min: number
  readonly max: number

  constructor({ min, max }: { min: number; max: number }) {
    super()
    this.min = min
    this.max = max
  }

  random() {
    return Math.random() * (this.max - this.min) + this.min
  }
}

export class RealGene extends NumberGene {}

export class IntegerGene extends NumberGene {
  random() {
    return Math.floor(super.random())
  }
}
