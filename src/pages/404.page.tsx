import Image from 'next/image'
import React, { ReactElement, VFC } from 'react'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

import Illustration from '@images/404.png'

import Layout from '@components/Layout'
import Link from 'next/link'

const PageNotFound: VFC = (): ReactElement => (
  <Layout>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="90vh"
      maxH="90vh"
    >
      <Text mb="lg" textAlign="center" variant="h3">
        Sorry, this page does not exist
      </Text>
      <Image
        src={Illustration}
        layout="intrinsic"
        alt="page not found"
        width={400}
        height={250}
      />
      <Link href="/">
        <Button borderRadius={0} mt="lg" variant="secondary" title="Home">
          Home
        </Button>
      </Link>
    </Box>
  </Layout>
)

export default PageNotFound
