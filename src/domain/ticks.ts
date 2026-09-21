import { TICKS_PER_COUNT } from './types'

/** The label for a cell, given its distance in ticks from the start of its row. */
export function isCountTick(tick: number): boolean {
  return tick % 2 === 0
}

export function countLabelAt(offsetTicks: number): string {
  if (!isCountTick(offsetTicks)) return '&'
  const countIndex = offsetTicks / TICKS_PER_COUNT
  return String((countIndex % 8) + 1)
}
