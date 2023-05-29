/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Container } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Footer = () => {
  const FooterBase = styled('footer')(({ theme }) => ({
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    bgColor: '#1c252c',
  }))

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: '80vh' }}>
        <Container maxWidth='lg'>
          <FooterBase>
            <footer className='footer'>&copy; 2023 Tolby Technologies</footer>
          </FooterBase>
        </Container>
      </Box>
    </>
  )
}

export default Footer
