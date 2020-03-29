export function stringToLines(...inputs: string[]) {
  return []
    .concat(
      ...inputs.map(input =>
        input
          .trim()
          .split('\n')
          .map(line => line.trim())
      )
    )
    .reverse()
}
