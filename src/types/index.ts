export interface Job {
  id: number
  reference: string
  name: string
  slug: string
  description: string
  published_at: string
  created_at: Record<'en' | 'fr', string>
  office: Office
  department: {
    id: number
    name: string
  }
  contract_type: Record<string, string>
  profile: string
  recruitment_process: string
  salary: {
    min: null | number
    max: null | number
    currency: 'EUR'
    period: 'none'
  }
  cms_sites_references: string[]
  websites_urls: {
    website_reference: string
    url: string
  }[]
}

export type Jobs = Job[]

interface Office {
  id: number
  name: string
  address: string
  zip_code: string
  district: string
  city: string
  country: Record<'fr' | 'en', string>
}

export interface Organization {
  name: string
  jobs: Job[]
  websites: Website[]
}

interface Website {
  reference: string
  kind: string
  root_url: string
  organization_url: string
}
