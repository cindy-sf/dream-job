import Head from 'next/head'
import React, { FC, ReactElement } from 'react'

import { Box } from '@welcome-ui/box'

const Layout: FC = ({ children }): ReactElement => (
  <>
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.png"
      />
      <title>Dream Job</title>
    </Head>
    <Box as="main" maxWidth={1066} margin="auto" padding={22} minH="100vh">
      {children}
    </Box>
  </>
)

export default Layout
