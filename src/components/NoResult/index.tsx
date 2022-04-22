import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

import Illustration from '@images/no-search-result.png'

interface Props {
  onReset: () => void
}

const NoResult: VFC<Props> = ({ onReset }): ReactElement => (
  <Box
    margin="auto"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    mt={42}
  >
    <Text mb="lg" textAlign="center" variant="h3">
      No job found for your search...
    </Text>
    <Image
      src={Illustration}
      layout="intrinsic"
      alt="no result"
      width={400}
      height={250}
    />
    <Button borderRadius={0} mt="lg" onClick={onReset} variant="secondary">
      Reset filters
    </Button>
  </Box>
)

export default NoResult
