/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Container } from '@mui/material'
import { styled, makeStyles } from '@mui/material/styles'

const Footer = () => {
  const FooterBase = styled('footer')(({ theme }) => ({
    position: 'relative',
    color: '#1c252c',
    minHeight: '80vh',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center'>
          <FooterBase>&copy; 2023 Tolby Technologies</FooterBase>
        </Typography>
      </Container>
    </>
  )
}

export default Footer
