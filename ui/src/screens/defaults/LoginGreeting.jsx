/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, CardMedia, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import bg from '../../assets/images/bg.png'
const LoginGreeting = () => {
  const ContainerBase = styled(Container)(({ theme }) => ({
    color: theme.palette.common.black,
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
            <CardMedia
              component="img"
              height="140"
              image={bg}
              alt="Tech"
              sx={{
                zIndex: -1,
                position: 'absolute',
                float: 'left',
                right: 0,
                top: 0,
                width: '70%',
                height: '100%',
              }}
            />
          </Grid>
        </Grid>
      </ContainerBase>
    </>
  )
}

export default LoginGreeting
