/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Typography, Grid } from '@mui/material'
import { Star, StarBorder, StarHalf } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const Rating = ({ value, text, color }) => {
  const RatingBase = styled('div')(({ theme }) => ({
    color: color,
  }))
  return (
    <Box>
      <RatingBase>
        <Grid container>
          <Grid item>
            {value >= 1 ? (
              <Star />
            ) : value >= 0.5 ? (
              <StarHalf />
            ) : (
              <StarBorder />
            )}
          </Grid>
          <Grid item>
            {value >= 2 ? (
              <Star />
            ) : value >= 1.5 ? (
              <StarHalf />
            ) : (
              <StarBorder />
            )}
          </Grid>
          <Grid item>
            {value >= 3 ? (
              <Star />
            ) : value >= 2.5 ? (
              <StarHalf />
            ) : (
              <StarBorder />
            )}
          </Grid>
          <Grid item>
            {value >= 4 ? (
              <Star />
            ) : value >= 3.5 ? (
              <StarHalf />
            ) : (
              <StarBorder />
            )}
          </Grid>
          <Grid item>
            {value >= 5 ? (
              <Star />
            ) : value >= 4.5 ? (
              <StarHalf />
            ) : (
              <StarBorder />
            )}
          </Grid>
        </Grid>
      </RatingBase>
      <Grid item>
        <Typography variant='overline' color='text.secondary'>
          {text && text}
        </Typography>
      </Grid>
    </Box>
  )
}

Rating.defaultProps = {
  color: '#FFBF46',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
