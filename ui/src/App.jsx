/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import TolbyNavBar from './components/NavBar/TolbyNavBar'
import { Typography, Box, Container } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

const App = () => {
  return (
    <>
      <Box>
        <TolbyNavBar />
        <Container>
          <Typography variant='h1'>Welcome to Tolby Tech</Typography>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default App
