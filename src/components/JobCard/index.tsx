import React, { ReactElement, VFC } from 'react'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { LocationIcon, WriteIcon } from '@welcome-ui/icons'
import { Modal, useModalState } from '@welcome-ui/modal'
import { Text } from '@welcome-ui/text'

import JobDetails from '@components/JobDetails'

import type { Job } from '@src/types'
import { Badge } from '@welcome-ui/badge'

interface Props {
  job: Job
}

const JobCard: VFC<Props> = ({ job }): ReactElement => {
  const modal = useModalState()

  const { contract_type, department, name, office, websites_urls } = job

  return (
    <Box as="article" border="1px solid" marginBottom="lg" padding="md">
      <Box display="flex" justifyContent="space-arround">
        <Text variant="h4" mb="xxs" lines={1}>
          {name}
        </Text>
        <Badge ml="sm" variant="primary">
          {department.name}
        </Badge>
      </Box>
      <Box display="flex" mb="md">
        <Text as="li" mr="xs">
          <WriteIcon size="sm" mr="xxs" />
          {contract_type.en}
        </Text>
        <Text>
          <LocationIcon size="sm" mr="xxs" />
          {office.name}
        </Text>
      </Box>
      <Button
        as="a"
        href={websites_urls[0].url}
        target="_blank"
        borderRadius={0}
        variant="primary"
        mr="xs"
        size="sm"
      >
        Apply
      </Button>
      <Modal.Trigger
        as={Button}
        variant="tertiary"
        borderRadius={0}
        size="sm"
        {...modal}
      >
        See more
      </Modal.Trigger>
      {modal.visible && (
        <Modal ariaLabel="job details" {...modal}>
          <Modal.Content>
            <JobDetails job={job} />
          </Modal.Content>
        </Modal>
      )}
    </Box>
  )
}

export default JobCard
