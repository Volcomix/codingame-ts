export function random(): number
export function random(max: number): number
export function random(min: number, max: number): number
export function random(min?: number, max?: number): number {
  if (min == null && max == null) {
    return Math.random()
  } else if (max == null) {
    return Math.random() * min // the min argument holds the max
  } else {
    return Math.random() * (max - min) + min
  }
}

export function randomInt(max: number): number
export function randomInt(min: number, max: number): number
export function randomInt(min?: number, max?: number): number {
  if (max == null) {
    return Math.floor(random(min)) // the min argument holds the max
  } else {
    return Math.floor(random(min, max))
  }
}

export function randomBit(): number {
  return random() < 0.5 ? 0 : 1
}
