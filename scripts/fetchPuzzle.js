#!/usr/bin/env node

import { promises as fs } from 'fs'
import axios from 'axios'

const puzzleName = 'tic-tac-toe'

const codingameUrl = 'https://www.codingame.com/services/'
const puzzleFilesDir = 'puzzle-files'

async function main() {
  try {
    const puzzle = await fetchPuzzle()
    console.log(puzzle)
    const replay = await fetchReplay(puzzle.replayIds[0])
    console.log(replay)
    await writePuzzleFiles(replay)
  } catch (error) {
    if (error.response) {
      const { status, statusText, data } = error.response
      console.error({ status, statusText, data })
    } else {
      console.error(error)
    }
  }
}

async function fetchPuzzle() {
  const response = await axios.post(
    `${codingameUrl}/Puzzle/findProgressByPrettyId`,
    [puzzleName, null]
  )
  return response.data
}

async function fetchReplay(replayId) {
  const response = await axios.post(
    `${codingameUrl}/gameResult/findInformationById`,
    [replayId, null]
  )
  return response.data
}

async function writePuzzleFiles(replay) {
  await fs.mkdir(puzzleFilesDir, { recursive: true })
  await fs.writeFile(
    `${puzzleFilesDir}/gameResult.json`,
    JSON.stringify(replay.gameResult)
  )
  await fs.writeFile(`${puzzleFilesDir}/viewer.js`, replay.viewer)
}

main()
