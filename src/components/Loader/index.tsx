import React, { ReactElement, VFC } from 'react'

import { Box } from '@welcome-ui/box'
import { Loader as WelcomeUILoader } from '@welcome-ui/loader'

const Loader: VFC = (): ReactElement => (
  <Box
    minH="100vh"
    maxH="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <WelcomeUILoader size="md" title="Chargement..." />
  </Box>
)

export default Loader
