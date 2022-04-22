import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { organizationStub } from '@src/__mocks__/stubs/organization'

import Home from '../index.page'

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...props: any) => {
    const dynamicModule = jest.requireActual('next/dynamic')
    const dynamicActualComp = dynamicModule.default
    const RequiredComponent = dynamicActualComp(props[0])
    RequiredComponent.preload
      ? RequiredComponent.preload()
      : RequiredComponent.render.preload()
    return RequiredComponent
  },
}))

describe('Home', () => {
  afterEach(jest.clearAllMocks)

  describe('with organization infos', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(organizationStub),
      })
    ) as jest.Mock

    it('should display the organization infos', async () => {
      // GIVEN
      render(<Home />)

      // THEN
      expect(await screen.findByText(organizationStub.name)).toBeInTheDocument()
      expect(
        screen.getByText(organizationStub.jobs[0].name)
      ).toBeInTheDocument()
    })

    describe('without search result', () => {
      it('should display the no result screen without find result on search', async () => {
        // GIVEN
        render(<Home />)

        // WHEN
        userEvent.click(await screen.findByPlaceholderText('Department'))
        userEvent.click(screen.getByRole('option', { name: 'Tech' }))
        userEvent.type(screen.getByPlaceholderText('Search a job'), 'azertyuio')

        // THEN
        expect(
          screen.getByText('No job found for your search...', { exact: true })
        ).toBeInTheDocument()
      })

      it('should reset the search form by clicking on no result reset button', async () => {
        // GIVEN
        render(<Home />)

        // WHEN
        userEvent.click(await screen.findByPlaceholderText('Department'))
        userEvent.click(screen.getByRole('option', { name: 'Tech' }))
        userEvent.type(screen.getByPlaceholderText('Search a job'), 'azertyuio')

        // AND
        userEvent.click(screen.getByRole('button', { name: 'Reset filters' }))

        // THEN
        expect(
          screen.getByText(organizationStub.jobs[0].name)
        ).toBeInTheDocument()
      })
    })
  })

  describe('without organization infos', () => {
    describe('loader', () => {
      it('should display the loader when the data is fetching', () => {
        // GIVEN
        render(<Home />)

        // THEN
        expect(screen.getAllByTitle('Chargement...')).toBeDefined()
      })
    })

    describe('error', () => {
      beforeEach(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            json: () => Promise.reject('error'),
          })
        ) as jest.Mock
      })

      it('should display an error screen on error', async () => {
        // GIVEN
        render(<Home />)

        // THEN
        expect(
          await screen.findByText('Unfortunately an error has occurred...', {
            exact: true,
          })
        ).toBeDefined()
      })

      it('should refetch the organization by clicking on retry button', async () => {
        // GIVEN
        render(<Home />)

        // WHEN
        userEvent.click(await screen.findByRole('button', { name: 'Retry' }))

        // THEN
        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledTimes(2)
        })
      })
    })
  })
})
