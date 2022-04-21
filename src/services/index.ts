import { Organization } from '@src/types'

import { findJobsWebsiteByRef } from '@src/utils/filter'

export const getOrganizationInfos = async (): Promise<Organization> => {
  const data = await fetch(
    'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k'
  )

  const organisation: Organization = await data.json()
  const wttjWebsite = findJobsWebsiteByRef(organisation.websites)

  return {
    ...organisation,
    websites: wttjWebsite,
  }
}
