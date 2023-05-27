/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from './components/Footer'
import TolbyNavBar from './components/NavBar/TolbyNavBar'
import { Typography, Container, Box } from '@mui/material'

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
            <Typography variant='h1'>Welcome to Tolby Tech</Typography>
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
