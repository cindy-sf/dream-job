import { render, screen } from '@testing-library/react'

import Home from '..'

describe('Home', () => {
  describe('render', () => {
    it('should display the page title correctly', () => {
      // GIVEN
      render(<Home />)

      // THEN
      expect(
        screen.getByText(
          'Discover and deploy boilerplate example Next.js projects.',
          { exact: true }
        )
      ).toBeInTheDocument()
    })
  })
})
