import { describe, expect, it } from 'vitest'
import { isCountTick } from './ticks'

describe('isCountTick', () => {
  it('is true on a count and false on a &', () => {
    expect(isCountTick(0)).toBe(true) //count 1
    expect(isCountTick(1)).toBe(false) //count 1.5
    expect(isCountTick(2)).toBe(true) //count 2
  })

  it('works before the anchor too', () => {
    expect(isCountTick(-2)).toBe(true)
    expect(isCountTick(-1)).toBe(false)
  })
})
