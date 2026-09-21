// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { layoutRowBounds } from './rows'

describe('layoutRowBounds', () => {
  it('lays out baseline rows forward from tick 0', () => {
    const rows = layoutRowBounds({ firstTick: 0, lastTick: 95, baselineCounts: 16, marks: [] })

    expect(rows.map((r) => [r.startTick, r.endTick])).toEqual([
      [0, 32],
      [32, 64],
      [64, 96],
    ])
    expect(rows.map((r) => r.phraseNumber)).toEqual([1, 2, 3])
    expect(rows.every((r) => !r.isIntro)).toBe(true)
  })

  it('lets the last row run past the end of the song', () => {
    const rows = layoutRowBounds({ firstTick: 0, lastTick: 40, baselineCounts: 16, marks: [] })
    expect(rows.map((r) => [r.startTick, r.endTick])).toEqual([
      [0, 32],
      [32, 64],
    ])
  })
})
