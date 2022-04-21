import React from 'react'
import { render, screen } from '@testing-library/react'

import { organizationStub } from '@src/__mocks__/stubs/organization'

import JobDetails from '..'

describe('JobDetails', () => {
  it('should render the job subtitles properly', () => {
    // GIVEN
    render(<JobDetails job={organizationStub.jobs[0]} />)

    // THEN
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Recruitment process')).toBeInTheDocument()
  })

  it('should render the parsed texts properly', () => {
    // GIVEN
    render(<JobDetails job={organizationStub.jobs[0]} />)

    // THEN
    expect(screen.getByText('Lorem ipsum description')).toBeInTheDocument()
    expect(screen.getByText('Lorem ipsum profile')).toBeInTheDocument()
    expect(
      screen.getByText('Lorem ipsum recruitment process')
    ).toBeInTheDocument()
  })
})
