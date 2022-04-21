import React from 'react'
import { render, screen } from '@testing-library/react'

import Loader from '..'

describe('Loader', () => {
  it('should render the loader properly', () => {
    // GIVEN
    render(<Loader />)

    // THEN
    expect(screen.getAllByTitle('Chargement...')).toBeDefined()
  })
})
