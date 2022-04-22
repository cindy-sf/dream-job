import { organizationStub } from '@src/__mocks__/stubs/organization'

import {
  findJobsWebsiteByRef,
  groupFilters,
  hasFoundJobByDepartments,
  hasFoundJobByName,
  hasFoundJobByOffice,
} from '..'

describe('filters', () => {
  const job = organizationStub.jobs[0]

  describe('hasFoundJobByDepartments', () => {
    it('should return true without selectedDepartment', () => {
      // GIVEN
      const result = hasFoundJobByDepartments(job)

      // THEN
      expect(result).toBe(true)
    })

    it('should return true with a found department', () => {
      // GIVEN

      const result = hasFoundJobByDepartments(job, job.department.name.trim())

      // THEN
      expect(result).toBe(true)
    })

    it('should return false without occurrence', () => {
      // GIVEN
      const result = hasFoundJobByDepartments(job, 'Tech')

      // THEN
      expect(result).toBe(false)
    })
  })

  describe('hasFoundJobByName', () => {
    it('should return true without job name', () => {
      // GIVEN
      const result = hasFoundJobByName(job)

      // THEN
      expect(result).toBe(true)
    })

    it('should return true with a found job name', () => {
      // GIVEN
      const result = hasFoundJobByName(job, job.name)

      // THEN
      expect(result).toBe(true)
    })

    it('should return false without occurrence', () => {
      // GIVEN
      const result = hasFoundJobByName(job, 'Frontend developer')

      // THEN
      expect(result).toBe(false)
    })
  })

  describe('hasFoundJobByOffice', () => {
    it('should return true without office name', () => {
      // GIVEN
      const result = hasFoundJobByOffice(job)

      // THEN
      expect(result).toBe(true)
    })

    it('should return true with a found office name', () => {
      // GIVEN
      const result = hasFoundJobByOffice(job, job.office.name)

      // THEN
      expect(result).toBe(true)
    })

    it('should return false without occurrence', () => {
      // GIVEN
      const result = hasFoundJobByOffice(job, 'Paris')

      // THEN
      expect(result).toBe(false)
    })
  })

  describe('findJobsWebsiteByRef', () => {
    it('should return the good jobs reference website', () => {
      // GIVEN
      const result = findJobsWebsiteByRef(organizationStub.websites)

      // THEN
      expect(result).toStrictEqual([organizationStub.websites[0]])
    })
  })

  describe('groupFilters', () => {
    it('should filter the job properly', () => {
      // GIVEN
      const result = groupFilters(
        organizationStub.jobs,
        job.name,
        job.office.name,
        job.department.name.trim()
      )

      // THEN
      expect(result).toStrictEqual([job])
    })
  })
})
