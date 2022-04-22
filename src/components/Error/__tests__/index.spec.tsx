import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Error from '..'

describe('Error', () => {
  it('should render the error properly', () => {
    // GIVEN
    render(<Error onRetry={() => {}} />)

    // THEN
    expect(
      screen.getByText('Unfortunately an error has occurred...', {
        exact: true,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText('error')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })

  it('should happend something by clicking on the retry button', () => {
    // GIVEN
    const onRetry = jest.fn()
    render(<Error onRetry={onRetry} />)

    // WHEN
    userEvent.click(screen.getByRole('button', { name: 'Retry' }))

    // THEN
    expect(onRetry).toHaveBeenCalledTimes(1)
  })
})
