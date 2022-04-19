import Head from 'next/head'
import type { VFC } from 'react'

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
      <p>edededede</p>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
    </main>
  )
}

export default Home
