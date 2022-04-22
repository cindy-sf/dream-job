import React, { ReactElement, useState, VFC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { InputText } from '@welcome-ui/input-text'
import {
  ControlBackwardIcon,
  LocationIcon,
  SearchIcon,
} from '@welcome-ui/icons'
import { OptionValue, Select } from '@welcome-ui/select'
import { Text } from '@welcome-ui/text'

import type { Organization } from '@src/types'

import { departmentOptions } from './constants'

interface FormValues {
  department: string
  jobResearch: string
  officeResearch: string
}

interface Props {
  organizationName: Organization['name']
  register: UseFormRegister<FormValues>
  onDepartmentChange: (value: OptionValue) => void
  onReset: () => void
}

const Form: VFC<Props> = ({
  organizationName,
  onReset,
  register,
  onDepartmentChange,
}): ReactElement => {
  const [selectedDepartment, setSelectedDepartment] = useState<OptionValue>('')

  return (
    <Box
      backgroundColor="white"
      mb="md"
      position="sticky"
      py="xs"
      top={0}
      zIndex={5}
    >
      <Text my="xl" textAlign="center" variant="h2">
        {organizationName}
      </Text>
      <Box as="form" display="flex" justifyContent="center">
        <InputText
          icon={<SearchIcon color="light.100" />}
          placeholder="Search a job"
          {...register('jobResearch')}
        />
        <InputText
          icon={<LocationIcon color="light.100" />}
          placeholder="By location"
          {...register('officeResearch')}
        />
        <Select
          options={departmentOptions}
          placeholder="Department"
          {...register('department')}
          // Overwrite those props for using with good signatures
          value={selectedDepartment}
          onChange={(department) => {
            setSelectedDepartment(department as OptionValue)
            onDepartmentChange(department as OptionValue)
          }}
          onBlur={undefined} // Not the same signature with react-hook-form and don't handle blur
        />
        <Button
          borderRadius={0}
          variant="tertiary"
          onClick={(): void => {
            setSelectedDepartment('')
            onReset()
          }}
          title="Reset"
        >
          <ControlBackwardIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Form
