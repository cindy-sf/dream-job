import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import NoResult from '..'

describe('NoResult', () => {
  it('should render no result component properly', () => {
    // GIVEN
    render(<NoResult onReset={() => {}} />)

    // THEN
    expect(
      screen.getByText('No job found for your search...', {
        exact: true,
      })
    ).toBeInTheDocument()
    expect(screen.getByAltText('no result')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Reset filters' })
    ).toBeInTheDocument()
  })

  it('should happend something by clicking on the reset button', () => {
    // GIVEN
    const onReset = jest.fn()
    render(<NoResult onReset={onReset} />)

    // WHEN
    userEvent.click(screen.getByRole('button', { name: 'Reset filters' }))

    // THEN
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})
