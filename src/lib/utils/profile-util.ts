export function loadTestCase(testCase: string) {
  const testCastStrings = testCase
    .trim()
    .split('\n')
    .filter((line) => line.startsWith('[in] '))
    .map((line) => line.substr(5))
    .reverse()

  ;(typeof global === 'undefined' ? window : global).readline = function () {
    return testCastStrings.pop()
  }
}
