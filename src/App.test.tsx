import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from './App'

it('shows the app name', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: 'Choreography Mapper' })).toBeInTheDocument()
})
