import { stringToLines } from './test-utils'

describe('stringToLines', () => {
  it('returns a stack or lines', () => {
    const lines = stringToLines(`
      0 
      1
    `)
    expect(lines).toEqual(['1', '0'])
  })
})
