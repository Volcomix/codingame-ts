const readlinebackup = readline

global.readline = function() {
  const line = readlinebackup()
  console.error(line)
  return line
}
