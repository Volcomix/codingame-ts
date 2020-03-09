export function random(): number
export function random(max: number): number
export function random(min: number, max: number): number
export function random(min?: number, max?: number): number {
  if (min === undefined && max === undefined) {
    return Math.random()
  } else if (max === undefined) {
    return Math.random() * min // the min argument holds the max
  } else {
    return Math.random() * (max - min) + min
  }
}

export function randomInt(max: number): number
export function randomInt(min: number, max: number): number
export function randomInt(min?: number, max?: number): number {
  return Math.floor(random(min, max))
}

export function randomBit(): number {
  return random() < 0.5 ? 0 : 1
}
