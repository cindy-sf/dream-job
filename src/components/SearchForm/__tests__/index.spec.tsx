import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchForm from '..'

describe('SearchForm', () => {
  afterEach(jest.clearAllMocks)

  const defaultProps = {
    organizationName: 'Secret organization',
    register: jest.fn(),
    onDepartmentChange: jest.fn(),
    onReset: jest.fn(),
  }

  it('should render the form properly', () => {
    // GIVEN
    render(<SearchForm {...defaultProps} />)

    // THEN
    expect(screen.getByText(defaultProps.organizationName)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('By location')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Department')).toBeInTheDocument()
    expect(screen.getByTitle('Reset')).toBeInTheDocument()
  })

  it('should update the department on department selection', () => {
    // GIVEN
    render(<SearchForm {...defaultProps} />)

    // WHEN
    userEvent.click(screen.getByPlaceholderText('Department'))
    userEvent.click(screen.getByRole('option', { name: 'Tech' }))

    // THEN
    expect(defaultProps.onDepartmentChange).toHaveBeenCalledTimes(1)
  })

  it('should reset the form by clicking on reset button', () => {
    // GIVEN
    render(<SearchForm {...defaultProps} />)

    // WHEN
    userEvent.click(screen.getByTitle('Reset'))

    // THEN
    expect(defaultProps.onReset).toHaveBeenCalledTimes(1)
  })
})
