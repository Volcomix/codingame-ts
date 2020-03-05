export abstract class Gene {}

export class BitGene extends Gene {}

export abstract class NumberGene extends Gene {
  private min: number
  private max: number

  constructor({ min, max }: { min: number; max: number }) {
    super()
    this.min = min
    this.max = max
  }
}

export class RealGene extends NumberGene {}

export class IntegerGene extends NumberGene {}
