/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography } from '@mui/material'

const SpaceTaker = () => {
  const options = {
    variant: 'h1',
  }

  return (
    <Grid container py={10}>
      <Typography {...options}></Typography>
    </Grid>
  )
}

export default SpaceTaker
