import dynamic from 'next/dynamic'
import React, { ReactElement, useEffect, useState, VFC } from 'react'
import { useForm } from 'react-hook-form'

import { getOrganizationInfos } from '@src/services'
import { groupFilters } from '@src/utils/filter'

import Layout from '@components/Layout'

import type { OptionValue } from '@welcome-ui/select'
import type { Jobs, Organization } from '@src/types'

const Error = dynamic(() => import('@components/Error'))
const SearchForm = dynamic(() => import('@components/SearchForm'))
const JobCard = dynamic(() => import('@components/JobCard'))
const Loader = dynamic(() => import('@components/Loader'))
const NoResult = dynamic(() => import('@components/NoResult'))

const Home: VFC = (): ReactElement => {
  const [organization, setOrganization] = useState<Organization>()
  const [filteredJobs, setFilteredJobs] = useState<Jobs>([])
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState<boolean>(true)
  const [shouldDisplayError, setShouldDisplayError] = useState<boolean>(false)
  const { register, reset, setValue, watch } = useForm({
    defaultValues: {
      department: '',
      jobResearch: '',
      officeResearch: '',
    },
  })

  useEffect(() => {
    fetchOrganizationInfos()
  }, [])

  useEffect(() => {
    const jobs = organization?.jobs

    if (!jobs) return

    const subscription = watch(
      ({ jobResearch, officeResearch, department }) => {
        setFilteredJobs(
          groupFilters(jobs, jobResearch, officeResearch, department)
        )
      }
    )

    return () => subscription.unsubscribe()
  }, [organization?.jobs, watch])

  const fetchOrganizationInfos = async (): Promise<void> => {
    try {
      setShouldDisplayLoader(true)

      const organization = await getOrganizationInfos()
      setOrganization(organization)
      setFilteredJobs(organization.jobs)
    } catch (error) {
      setShouldDisplayError(true)
    } finally {
      setShouldDisplayLoader(false)
    }
  }

  const resetForm = (): void => {
    reset({ jobResearch: '', officeResearch: '', department: '' })
    setFilteredJobs(organization!.jobs)
  }

  return (
    <Layout>
      <>
        {shouldDisplayLoader && <Loader />}
        {shouldDisplayError && <Error onRetry={fetchOrganizationInfos} />}
        {organization && (
          <SearchForm
            organizationName={organization.name}
            register={register}
            onDepartmentChange={(department: OptionValue): void => {
              setValue('department', department as string)
            }}
            onReset={resetForm}
          />
        )}
        {!shouldDisplayLoader && !filteredJobs.length && (
          <NoResult onReset={resetForm} />
        )}
        {filteredJobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </>
    </Layout>
  )
}

export default Home
