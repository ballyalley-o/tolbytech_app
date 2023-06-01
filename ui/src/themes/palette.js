/* eslint-disable no-unused-vars */
import * as React from 'react'
import PropTypes from 'prop-types'
import {
  createTheme,
  ThemeProvider as TolbyThemeProvider,
} from '@mui/material/styles'
import { useMemo } from 'react'

ThemeProvider.PropTypes = {
  children: PropTypes.any,
}

export const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c252c',
      },
      secondary: {
        main: '#1c252c',
      },
      info: {
        main: '#1c252c',
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
