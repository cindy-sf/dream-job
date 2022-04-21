import React, { FC, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { createTheme, WuiProvider } from '@welcome-ui/core'

const theme = createTheme()

const AllTheProviders: FC = ({ children }): ReactElement => (
  <WuiProvider theme={theme}>{children}</WuiProvider>
)

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: AllTheProviders })

export * from '@testing-library/react'

export { customRender as render }
