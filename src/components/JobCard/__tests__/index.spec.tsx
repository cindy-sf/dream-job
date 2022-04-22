import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { organizationStub } from '@src/__mocks__/stubs/organization'

import JobCard from '..'

describe('JobCard', () => {
  const job = organizationStub.jobs[0]

  it('should display the name, office name and department of the job properly', () => {
    // GIVEN
    render(<JobCard job={job} />)

    // THEN
    expect(screen.getByText(job.name)).toBeInTheDocument()
    expect(screen.getByText(job.office.name)).toBeInTheDocument()
    expect(screen.getByText(job.department.name.trim())).toBeInTheDocument()
  })

  it('should have a link which redirect to job reference website', () => {
    // GIVEN
    render(<JobCard job={job} />)

    // THEN
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      job.websites_urls[0].url
    )
  })

  it('should display the modal properly by clicking on "See more" button', () => {
    // GIVEN
    render(<JobCard job={job} />)

    // WHEN
    userEvent.click(screen.getByRole('button', { name: 'See more' }))

    // THEN
    expect(screen.getByText(job.description)).toBeInTheDocument()
  })
})
