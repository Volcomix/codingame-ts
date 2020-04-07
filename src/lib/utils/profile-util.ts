export function loadTestCase(testCase: string) {
  const testCastStrings = testCase
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('[in] '))
    .map((line) => line.substr(5))
    .reverse()

  global.readline = function () {
    return testCastStrings.pop()
  }
}
