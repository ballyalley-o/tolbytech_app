/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Typography, Grid, Tooltip } from '@mui/material'
import { Star, StarBorder, StarHalf } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const Rating = ({ value, rating, color }) => {
  const RatingBase = styled('div')(({ theme }) => ({
    color: color,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
  }))

  return (
    <Box lg={4}>
      <Tooltip title={`${value} stars out of 5 , with ${rating} reviews`}>
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
      </Tooltip>
    </Box>
  )
}

Rating.defaultProps = {
  color: '#FFBF46',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
