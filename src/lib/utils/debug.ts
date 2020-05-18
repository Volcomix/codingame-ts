export function setDebugEnabled(isEnabled: boolean, firstLines: string[] = []) {
  if (isEnabled) {
    firstLines.forEach((line) => console.error('[in]', line))
    const readlinebackup = readline
    ;(typeof global === 'undefined' ? window : global).readline = function () {
      const line = readlinebackup()
      console.error('[in]', line)
      return line
    }
  }
}
