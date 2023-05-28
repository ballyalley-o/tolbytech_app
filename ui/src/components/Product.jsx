/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from '@mui/material/Link'
import Rating from './Rating'

const Product = ({ product }) => {
  const CardBase = styled(Card)(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: 'auto',
    borderRadius: '1em',
    padding: '1rem',
    mt: '1rem',
  }))
  return (
    <Grid container>
      <Grid item>
        <Link href={`/product/${product._id}`} variant='body1' underline='none'>
          <CardBase>
            <CardMedia
              component='img'
              image={product.image}
              sx={{
                height: '250px',
                objectFit: 'cover',
                width: '100%',
                my: '1rem',
              }}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom component='div' variant='h5'>
                {product.name}
              </Typography>
              <Typography variant='overline' color='text.secondary'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Typography>
              <Typography variant='h4' color='text.secondary'>
                ${product.price}
              </Typography>
            </CardContent>
          </CardBase>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Product
