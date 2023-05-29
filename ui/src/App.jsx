/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { Typography, Container, Box } from '@mui/material'

import Footer from './components/Footer'
import TolbyNavBar from './components/NavBar/TolbyNavBar'

import HomeScreen from './Screens/HomeScreen'
import GadgetsScreen from './Screens/GadgetsScreen'
import BlogScreen from './Screens/BlogScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'

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
        <Router>
          <Box>
            <TolbyNavBar />
            <Typography variant='h1'>&nbsp;</Typography>
            <Container>
              <Routes>
                <Route path='/product/:id' element={<ProductDetailScreen />} />
                <Route path='/gadgets' element={<GadgetsScreen />} />
                <Route path='/blog' element={<BlogScreen />} />
                <Route path='/' element={<HomeScreen />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
