/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoginGreeting = () => {
  const ContainerBase = styled(Container)(({ theme }) => ({
    color: theme.palette.common.black,
    margin: 'auto'
    // height: '100%'
  }))
  return (
    <>
      <ContainerBase maxWidth="md">
        <Grid container direction="row" justifyContent="flex-start">
          <Grid item lg={6}>
            <Typography variant="h1" fontWeight="bold">
              <i>Everything</i> <br /> <i>Tech.</i> <br /> <br />
              <i>One</i> <br /> <i>Place.</i>
              <br />
            </Typography>
          </Grid>
        </Grid>
      </ContainerBase>
    </>
  )
}

export default LoginGreeting
