/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Container, Box, IconButton, Divider } from '@mui/material'
import { FooterBase, FooterTextWrapper } from '../themes/styles/default-styled'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import PaymentRegulations from '../screens/defaults/PaymentRegulations'
import TolbyIcon from './NavBar/TolbyIcon'

const Footer = () => {
  return (
    <>
      <Box sx={{ minHeight: '80vh' }} mt={2}>
        <Divider />
        <Container maxWidth="md">
          <Box display="inline-flex" sx={{ color: 'gray' }} my={2}>
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
