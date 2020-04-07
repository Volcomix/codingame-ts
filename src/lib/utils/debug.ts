const readlinebackup = readline

global.readline = function () {
  const line = readlinebackup()
  console.error('[in]', line)
  return line
}
