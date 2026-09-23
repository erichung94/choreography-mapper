import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CountRow } from './CountRow'

const row = { startTick: 0, endTick: 32, isIntro: false, phraseNumber: 1 }

it('renders one cell per tick with count labels', () => {
  render(<CountRow row={row} />)

  const cells = screen.getAllByRole('button')
  expect(cells).toHaveLength(32)
  expect(cells[0]).toHaveTextContent('1')
  expect(cells[1]).toHaveTextContent('&')
  expect(cells[16]).toHaveTextContent('1')
})

it('shows the phrase number', () => {
  render(<CountRow row={row} />)
  expect(screen.getByText('Phrase 1')).toBeInTheDocument()
})

it('marks the first count of each 8', () => {
  render(<CountRow row={row} />)
  const cells = screen.getAllByRole('button')
  expect(cells[0]).toHaveClass('cell-eight-start')
  expect(cells[16]).toHaveClass('cell-eight-start')
  expect(cells[2]).not.toHaveClass('cell-eight-start')
})
