/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, CardMedia, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import bg2 from '../../assets/images/bg2.png'

const RegisterGreeting = () => {
  const ContainerBase = styled(Container)(({ theme }) => ({
    color : theme.palette.common.black,
    mt: '50px'
  }))
  return (
    <>
      <ContainerBase maxWidth="lg" maxHeight="md">
        <Grid container direction="row" justifyContent="center">
          <Grid item lg={12}>
            <Typography variant="h1" fontWeight="bold">
              Join. Tolby Tech.
            </Typography>
          </Grid>
        </Grid>
      </ContainerBase>
    </>
  )
}

export default RegisterGreeting
