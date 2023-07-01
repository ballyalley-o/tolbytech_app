/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from './slices/auth-slice'
import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { Typography, Container, Snackbar, Alert } from '@mui/material'
import TolbyNavBar from './components/NavBar/TolbyNavBar'
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
          <Container>
            <Typography variant="h1">&nbsp;</Typography>
            <Outlet />
          </Container>
        </ThemeProvider>
      </HelmetProvider>
      <ToastContainer />
    </>
  )
}

export default App
