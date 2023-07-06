/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import PropTypes from 'prop-types'
import {
  createTheme,
  ThemeProvider as TolbyThemeProvider,
} from '@mui/material/styles'
import { useMemo } from 'react'

ThemeProvider.PropTypes = {
  children: PropTypes.node,
}

export const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c252c',
      },
      secondary: {
        main: '#12ekl1',
      },
      info: {
        main: '#1c252c',
      },
      pink: {
        main: '#FF1288',
        light: '#D9B6E0',
        contrastText: '#FFF',
      },
    },
  })

  return (
    <>
      <TolbyThemeProvider theme={theme}>{children}</TolbyThemeProvider>
    </>
  )
}
