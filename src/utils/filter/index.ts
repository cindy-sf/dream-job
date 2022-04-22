import { Job, Jobs, Organization } from '@src/types'

export const hasFoundJobByDepartments = (
  job: Job,
  selectedDepartment?: string
): boolean => {
  if (!selectedDepartment) return true

  return (
    // trime the department name because the api return some department with white space. Ex: 'Media '
    job.department.name.trim().toLowerCase() == selectedDepartment.toLowerCase()
  )
}

export const hasFoundJobByName = (job: Job, jobName?: string): boolean => {
  if (!jobName) return true
  return job.name.toLowerCase().includes(jobName.toLowerCase())
}

export const hasFoundJobByOffice = (job: Job, officeName?: string): boolean => {
  if (!officeName) return true
  return job.office.name.toLowerCase().includes(officeName.toLowerCase())
}

export const findJobsWebsiteByRef = (
  websites: Organization['websites']
): Organization['websites'] =>
  websites.filter(
    (website: { reference: string }) => website.reference === 'wttj_fr'
  )

export const groupFilters = (
  jobs: Jobs,
  jobName?: string,
  officeName?: string,
  department?: string
): Jobs =>
  jobs.filter(
    (job) =>
      hasFoundJobByName(job, jobName) &&
      hasFoundJobByOffice(job, officeName) &&
      hasFoundJobByDepartments(job, department)
  )
