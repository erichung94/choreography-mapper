// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { countLabelAt, isCountTick } from './ticks'

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

describe('countLabelAt', () => {
  it('labels counts 1 to 8 and marks the half counts with &', () => {
    expect(countLabelAt(0)).toBe('1')
    expect(countLabelAt(1)).toBe('&')
    expect(countLabelAt(2)).toBe('2')
    expect(countLabelAt(14)).toBe('8')
    expect(countLabelAt(15)).toBe('&')
  })
})

it('starts again at 1 after every 8 counts', () => {
  expect(countLabelAt(16)).toBe('1')
  expect(countLabelAt(34)).toBe('2')
})
