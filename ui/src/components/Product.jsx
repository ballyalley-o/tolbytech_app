/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box } from '@mui/material'
import {
  CardBase,
  CardMediaTechBase,
  CardContentTechBase,
} from '../themes/styles/product-styled'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Grid container>
      <Grid item>
        <Link to={`/products/${product._id}`} variant="body1" underline="none">
          <CardBase>
            <CardMediaTechBase
              component="img"
              image={product.image}
              alt={product.name}
            />
            <CardContentTechBase>
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
            </CardContentTechBase>
            <CardContentTechBase>
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
            </CardContentTechBase>
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
