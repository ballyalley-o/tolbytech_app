/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Typography, Container, Snackbar, Alert } from '@mui/material'
import TolbyNavBar from './components/NavBar/TolbyNavBar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import theme from './themes/theme'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <TolbyNavBar />
            <Container sx={{ height: '100%', alignContent: 'center', margin: 'auto', padding: '50px' }}>
            <Outlet />
            <Footer />
          </Container>
        </ThemeProvider>
      </HelmetProvider>
      <ToastContainer />
    </>
  )
}

export default App
