/** Each tick is half a count to account for the & counts */
export type Tick = number

export const TICKS_PER_COUNT = 2

/** New row to be created */
export interface PhraseMark {
  tick: Tick
  counts?: number
}

/**One row of the grid */
export interface RowBounds {
  startTick: Tick
  endTick: Tick
  isIntro: boolean
  phraseNumber: number | null
}
