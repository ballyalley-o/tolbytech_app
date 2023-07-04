/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useGetTopProductsQuery } from '../slices/products-slice'
import { Link } from 'react-router-dom'
import { Grid, CardMedia, Typography } from '@mui/material'
import Heading from './Heading'
import Loader from './Loader'
import Message from './Message'
import { Carousel } from 'antd'

const TolbyCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery()
  console.log(products)

  const CarouselConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: '500px',
  }

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.message}</Message>
  ) : (
    <>
      <Carousel {...CarouselConfig} autoplay easing="ease-in-out">
        {products?.response.map((product) => (
          <Grid container key={product._id}>
            <Link to={`/product/${product._id}`}>
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  height: '400px',
                  color: '#fff',
                  lineHeight: '160px',
                  textAlign: 'center',
                  background: '#364d79',
                  borderRadius: '8px',
                }}
              />
            </Link>
          </Grid>
        ))}
      </Carousel>
    </>
  )
}

export default TolbyCarousel
