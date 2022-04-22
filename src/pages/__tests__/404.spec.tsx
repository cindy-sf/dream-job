import { render, screen } from '@testing-library/react'

import PageNotFound from '../404.page'

describe('PageNotFound', () => {
  it('should render the 404 page properly', () => {
    // GIVEN
    render(<PageNotFound />)

    // THEN
    expect(
      screen.getByText('Sorry, this page does not exist', {
        exact: true,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText('page not found')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument()
  })
})
