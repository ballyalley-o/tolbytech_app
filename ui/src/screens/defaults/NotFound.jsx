/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ justifyContent: 'center', alignText: 'center' }}
      >
        <Box>
          <Typography variant="h1">
            The page you’re looking for can’t be found.
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default NotFound
