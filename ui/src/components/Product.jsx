/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Link from '@mui/material/Link'

const Product = ({ product }) => {
  return (
    <Grid container>
      <Grid item>
        <Link href={`/product/${product._id}`} variant='body1' underline='none'>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
              width: 'auto',
            }}
          >
            <CardMedia component='img' image={product.image} />
            <CardContent>
              <Typography gutterBottom component='div' variant='h5'>
                {product.name}
              </Typography>
              <Typography gutterBottom variant='body2' color='text.secondary'>
                {product.description}
              </Typography>
              <Typography variant='overline' color='text.secondary'>
                {product.rating} from {product.numReviews} reviews
              </Typography>
              <Typography variant='h4' color='text.secondary'>
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Product
