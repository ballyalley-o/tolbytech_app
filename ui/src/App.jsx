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
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const dispatch = useDispatch()
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c252c',
        light: '#FFF',
        lighter: '#F4FAFF',
      },
      secondary: {
        main: '#1c252c',
      },
      pink: {
        main: '#FF1288',
        light: '#D9B6E0',
        contrastText: '#FFF',
      },
      gray: {
        main: '#B3B5BB',
      },
    },
    minHeight: '80vh',
  })

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime')
    if (expirationTime) {
      const currentTime = new Date().getTime()

      if (currentTime > expirationTime) {
        dispatch(logout())
      }
    }
  }, [dispatch])

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
