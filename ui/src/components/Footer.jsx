/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Container } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Footer = () => {
  const FooterBase = styled('footer')(({ theme }) => ({
    position: 'relative',
    color: '#',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  return (
    <>
      <Box sx={{ flexGrow: 1, minHeight: '80vh' }}>
        <Container maxWidth='lg'>
          <FooterBase>
            <Typography variant='body1' align='center'>
              &copy; 2023 Tolby Technologies
            </Typography>
          </FooterBase>
        </Container>
      </Box>
    </>
  )
}

export default Footer
