import { render, screen } from '@testing-library/react'

import Layout from '..'

describe('Layout', () => {
  it("should render the layout and it's child properly", () => {
    // GIVEN
    render(
      <Layout>
        <p>Children</p>
      </Layout>
    )

    // THEN
    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
