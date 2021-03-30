import React from 'react'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import Header from './Header'
import Content from './Content'
function Layout() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#bae8e8',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default Layout
