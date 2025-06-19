/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import TolbyNavBar from './components/NavBar/TolbyNavBar'
import Footer from './components/Footer'
import theme from './themes/theme'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <TolbyNavBar />
            <Container>
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
