/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import Rating from './Rating'

const Product = ({ product }) => {
  const CardBase = styled(Card)(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'flex',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    border: '1px solid #C0C0C0',
    alignItems: 'center',
    height: '300px',
    width: '200px',
    borderRadius: '1em',
    padding: '.5rem',
    m: '1rem',
    boxShadow: 'none',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 0 20px 0 rgba(0,0,0,0.2)',
    },
  }))

  const CardMediaBase = styled(CardMedia)(({ theme }) => ({
    display: 'block',
    height: '150px',
    objectFit: 'cover',

    // normalize all images to the same height
    // height: '100%',
    borderRadius: '.5em',
  }))

  const CardContentBase = styled(CardContent)(({ theme }) => ({
    display: 'block',
    width: '95%',
    height: '50px',
  }))

  return (
    <Grid container>
      <Grid item>
        <Link to={`/products/${product._id}`} variant="body1" underline="none">
          <CardBase>
            <CardMediaBase
              component="img"
              image={product.image}
              alt={product.name}
            />
            <CardContentBase>
              <Typography gutterBottom component="div" variant="body1">
                {product.name}
              </Typography>
              <Typography
                gutterBottom
                variant="overline"
                color="text.secondary"
              >
                <Box>
                  <Rating
                    value={product.rating}
                    rating={`${product.numReviews} reviews`}
                  />
                </Box>
              </Typography>
            </CardContentBase>
            <CardContentBase>
              <Box justifyContent="flex-end">
                <Typography
                  variant="h5"
                  color="text.secondary"
                  fontWeight="bold"
                  py={2}
                >
                  ${product.price}
                </Typography>
              </Box>
            </CardContentBase>
          </CardBase>
        </Link>
      </Grid>
    </Grid>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
