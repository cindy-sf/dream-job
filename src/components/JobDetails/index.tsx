import React, { ReactElement } from 'react'

import ReactHtmlParser from 'react-html-parser'

import { Text } from '@welcome-ui/text'
import { VFC } from 'react'

import type { Job } from '@src/types'

interface Props {
  job: Job
}

const JobDetails: VFC<Props> = ({ job }): ReactElement => {
  const { description, name, profile, recruitment_process } = job

  return (
    <>
      <Text variant="h3" mb="xl" lines={2}>
        {name}
      </Text>
      <Text variant="subtitle1" mb="md">
        Description
      </Text>
      <Text as="span" mb="xl">
        {ReactHtmlParser(description)}
      </Text>
      <Text variant="subtitle1" my="md">
        Profile
      </Text>
      <Text as="span" mb="xl">
        {ReactHtmlParser(profile)}
      </Text>
      <Text variant="subtitle1" mb="md">
        Recruitment process
      </Text>
      <Text as="span">{ReactHtmlParser(recruitment_process)}</Text>
    </>
  )
}

export default JobDetails
