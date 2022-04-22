import type { AppProps } from 'next/app'

import { createTheme, GlobalStyle, WuiProvider } from '@welcome-ui/core'

const theme = createTheme()

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WuiProvider theme={theme} hasGlobalStyle>
    <GlobalStyle useReset />
    <Component {...pageProps} />
  </WuiProvider>
)

export default MyApp
