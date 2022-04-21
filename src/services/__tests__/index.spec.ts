import { organizationStub } from '@src/__mocks__/stubs/organization'

import { getOrganizationInfos } from '..'

describe('getOrganizationInfos', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(organizationStub),
    })
  ) as jest.Mock
  afterEach(jest.clearAllMocks)

  describe('fetch infos', () => {
    it('should fetch with the good url', async () => {
      // GIVEN
      await getOrganizationInfos()

      // THEN
      expect(global.fetch).toHaveBeenCalledWith(
        'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k'
      )
    })

    it('should collect the organization with the filtered website', async () => {
      // GIVEN
      const results = await getOrganizationInfos()

      // THEN
      expect(results).toEqual({
        ...organizationStub,
        websites: [organizationStub.websites[0]],
      })
    })
  })
})
