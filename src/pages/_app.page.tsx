import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { createTheme, WuiProvider } from '@welcome-ui/core'

const theme = createTheme()

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WuiProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </WuiProvider>
)

export default MyApp
