/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const Heading = ({ title, subTitle }) => {
  return (
    <>
      <Grid item lg={12} display="inline-flex">
        <Typography variant="h3" py={3} fontWeight="bold">
          {title}
        </Typography>
        <Typography
          variant="h3"
          pr={3}
          py={3}
          fontWeight="bold"
          sx={{ color: 'gray.main', display: 'inline-flex' }}
        >
          {subTitle}
        </Typography>
      </Grid>
    </>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Heading

export const AdminHeading = ({ title, variant, ...other }) => {
  return (
    <>
      <Grid item md={6}>
        <Typography variant={variant}>{title}</Typography>
      </Grid>
    </>
  )
}

AdminHeading.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
}

AdminHeading.defaultProps = {
  variant: 'h1',
}
