/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom/client'

import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { Typography, Container, Box } from '@mui/material'

import Footer from './components/Footer'
import TolbyNavBar from './components/NavBar/TolbyNavBar'

import HomeScreen from './Screens/HomeScreen'
import GadgetsScreen from './Screens/GadgetsScreen'
import BlogScreen from './Screens/BlogScreen'

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c252c',
      },
      secondary: {
        main: '#1c252c',
      },
    },
    minHeight: '80vh',
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <TolbyNavBar />
          <Container>
            <Typography variant='h1'>&nbsp;</Typography>
            <HomeScreen />
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
