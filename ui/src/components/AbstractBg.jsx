/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Box, Container, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'

const AbstractBg = () => {
  const ContainerLandingBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  }))

  return (
    // create a component for the abstract background using mui
    <Box>
      <ContainerLandingBase maxWidth="lg">
        <CardMedia
          component="img"
          image="https://i.pinimg.com/originals/a2/76/5f/a2765f34d2a55bdf60e3e122d55016ba.png"
        />
        <Typography variant="h1" fontWeight="bold">
          CONVENTIONCVS 2023
        </Typography>
      </ContainerLandingBase>
    </Box>
  )
}

export default AbstractBg
