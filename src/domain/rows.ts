import { TICKS_PER_COUNT, type PhraseMark, type RowBounds, type Tick } from './types'

export interface RowLayoutInput {
  /** The first tick that exists in the song */
  firstTick: Tick
  /** the last tick that exists in the song */
  lastTick: Tick
  baselineCounts: number
  marks: PhraseMark[]
}

/** Works out where very row starts and ends. Rows are laid out from tick 0. */
export function layoutRowBounds(input: RowLayoutInput): RowBounds[] {
  const baselineTicks = input.baselineCounts * TICKS_PER_COUNT
  const rows: RowBounds[] = []

  let phraseNumber = 1
  for (let start = 0; start <= input.lastTick; start += baselineTicks) {
    rows.push({ startTick: start, endTick: start + baselineTicks, isIntro: false, phraseNumber })
    phraseNumber += 1
  }
  return rows
}
