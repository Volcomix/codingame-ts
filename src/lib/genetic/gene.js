export class Gene {}

export class BitGene extends Gene {}

export class NumberGene extends Gene {
  constructor({ min, max }) {
    this.min = min
    this.max = max
  }
}

export class RealGene extends NumberGene {}

export class IntegerGene extends NumberGene {}
