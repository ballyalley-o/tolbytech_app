/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useGetTopProductsQuery } from '../slices/products-slice'
import { Link } from 'react-router-dom'
import { Grid, CardMedia, Typography } from '@mui/material'
import {
  StyledCarouselCardMedia,
  CarouselConfig,
} from '../themes/styles/default-styled'
import Loader from './Loader'
import Message from './Message'
import { Carousel } from 'antd'

const TolbyCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery()

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.message}</Message>
  ) : (
    <>
      <Carousel {...CarouselConfig} autoplay easing="ease-in-out">
        {products?.response.map((product) => (
          <Grid container key={product._id}>
            <Link to={`/products/${product._id}`}>
              <StyledCarouselCardMedia component="img" image={product.image} />
            </Link>
          </Grid>
        ))}
      </Carousel>
    </>
  )
}

export default TolbyCarousel
