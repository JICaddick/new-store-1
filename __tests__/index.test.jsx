import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import '@testing-library/jest-dom'

describe('Hero', () => {
  it('should render hero component', () => {
    render(<Hero />)

    const heading = screen.getByText(/Honey Dripper Jewelry/i)
    const subheading = screen.getByText(/Sweet Like Honey/i)

    expect(heading).toBeInTheDocument()
    expect(subheading).toBeInTheDocument()
  })
})
