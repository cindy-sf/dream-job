import React, { ReactElement, VFC } from 'react'
import Image from 'next/image'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

import Illustration from '@images/error.png'

interface Props {
  onRetry: () => void
}

const Error: VFC<Props> = ({ onRetry }): ReactElement => (
  <Box
    margin="auto"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    minH="90vh"
  >
    <Text mb="lg" textAlign="center" variant="h3">
      Unfortunately an error has occurred...
    </Text>
    <Image
      src={Illustration}
      layout="intrinsic"
      alt="error"
      width={400}
      height={250}
    />
    <Button borderRadius={0} mt="lg" onClick={onRetry} variant="secondary">
      Retry
    </Button>
  </Box>
)

export default Error
