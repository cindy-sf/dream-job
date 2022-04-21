import { Job, Jobs, Organization } from '@src/types'

type Department = string[]

const departments: Department = [
  'business',
  'marketing',
  'media',
  'operations',
  'product',
  'tech',
]

export const findJobsByName = (job: Job, jobName?: string): boolean => {
  if (!jobName) return true
  return job.name.toLowerCase().includes(jobName)
}

export const findJobsByOffice = (job: Job, officeName?: string): boolean => {
  if (!officeName) return true
  return job.office.name.toLowerCase().includes(officeName.toLowerCase())
}

export const findJobsByDepartments = (
  job: Job,
  selectedDepartment?: string
) => {
  if (!selectedDepartment) return true

  return job.department.name.trim().toLowerCase() == selectedDepartment
}

export const findJobsWebsiteByRef = (websites: Organization['websites']) =>
  websites.filter(
    (website: { reference: string }) => website.reference === 'wttj_fr'
  )

export const groupFilters = (
  jobs: Jobs,
  jobName?: string,
  officeName?: string,
  department?: string
) =>
  jobs.filter(
    (job) =>
      findJobsByName(job, jobName) &&
      findJobsByOffice(job, officeName) &&
      findJobsByDepartments(job, department)
  )
