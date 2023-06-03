/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Container, Box, IconButton } from '@mui/material'
import Header from './Header'
import { styled } from '@mui/material/styles'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

import PaymentRegulations from '../screens/defaults/PaymentRegulations'
import TolbyIcon from './NavBar/TolbyIcon'

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

  const FooterTextWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    paddingTop: '2rem',
    paddingBottom: '4rem',
    paddingRight: '2rem',
  }))

  return (
    <>
      <Box sx={{ minHeight: '80vh' }}>
        <Container maxWidth="md">
          <Box display="inline-flex" sx={{ color: 'gray' }}>
            <Box>
              <IconButton
                disabled
                aria-label="Tolby Technologies"
                aria-controls="menu-appbar"
                sx={{
                  width: '35px',
                  height: '35px',
                }}
              >
                <TolbyIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography>
                <KeyboardDoubleArrowRightIcon />
                Tolby Online
              </Typography>
            </Box>
          </Box>

          <FooterTextWrapper sx={{ flexGrow: 1 }}>
            <Typography variant="h3">
              Can't find what you're looking for?
            </Typography>
          </FooterTextWrapper>

          <FooterBase>
            <footer className="footer">
              <PaymentRegulations />
              <hr />
              Copyright &copy; 2023 Tolby Technologies. All rights reserved.{' '}
            </footer>
          </FooterBase>
        </Container>
      </Box>
    </>
  )
}

export default Footer
