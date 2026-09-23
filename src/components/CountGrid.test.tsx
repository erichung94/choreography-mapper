import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { CountGrid } from './CountGrid'

it('renders one row per phrase', () => {
  render(<CountGrid firstTick={0} lastTick={95} baselineCounts={16} marks={[]} />)
  expect(screen.getByText('Phrase 1')).toBeInTheDocument()
  expect(screen.getByText('Phrase 3')).toBeInTheDocument()
  expect(screen.queryByText('Phrase 4')).not.toBeInTheDocument()
})
