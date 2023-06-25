/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box, Grid, Typography } from '@mui/material'

const FormContainer = ({ children }) => {
  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={2} gap={2}>
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </>
  )
}

FormContainer.propTypes = {
  children: PropTypes.node,
}

export default FormContainer
