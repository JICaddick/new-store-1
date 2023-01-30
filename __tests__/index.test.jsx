import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('should render home page', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Honey Dripper Jewelry/i,
        })

        expect(heading).toBeInTheDocument()
    })
})