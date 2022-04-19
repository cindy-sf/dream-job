import Head from 'next/head'
import type { VFC } from 'react'
import { Text } from '@welcome-ui/text'

const Home: VFC = () => {
  return (
    <main>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <title>Dream Job</title>
      </Head>
      <Text>edededede</Text>
      <Text>Discover and deploy boilerplate example Next.js projects.</Text>
    </main>
  )
}

export default Home
