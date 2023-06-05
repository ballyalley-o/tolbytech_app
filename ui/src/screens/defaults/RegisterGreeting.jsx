/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, CardMedia, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import bg from '../../assets/images/bg.png'
import bg2 from '../../assets/images/bg2.png'

const RegisterGreeting = () => {
  const ContainerBase = styled(Container)(({ theme }) => ({
    color: theme.palette.common.black,
  }))
  return (
    <>
      <ContainerBase maxWidth="lg" maxHeight="sm">
        <Grid container direction="row" justifyContent="center">
          <Grid item lg={12}>
            <Typography variant="h1" fontWeight="bold">
              Join. Tolby Tech
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image={bg}
              alt="Tech"
              sx={{
                zIndex: -1,
                position: 'absolute',
                objectFit: 'fill',
                float: 'left',
                right: 0,
                top: 0,
                width: 'auto',
                height: '100%',
                // center the image
              }}
            />
            <CardMedia
              component="img"
              height="140"
              image={bg2}
              alt="Tech"
              sx={{
                zIndex: -2,
                position: 'absolute',
                objectFit: 'fill',
                float: 'left',
                left: 0,
                top: 0,
                width: 'auto',
                height: '100vh',
                // center the image
              }}
            />
          </Grid>
        </Grid>
      </ContainerBase>
    </>
  )
}

export default RegisterGreeting
