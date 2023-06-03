/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography } from '@mui/material'
import Product from '../components/Product'
import { CONFIG } from '../config-global'
import { useGetProductsQuery } from '../slices/products-slice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Footer from '../components/Footer'

const TechScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" color="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Grid item lg={8}>
                <Typography variant="h3" pr={3} py={3} fontWeight="bold">
                  Shop.
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ color: 'gray', display: 'inline-flex' }}
                  >
                    The best tech products in{' '}
                    <Typography
                      variant="h2"
                      color="pink.main"
                      fontWeight="bold"
                    >
                      one
                    </Typography>
                    place
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container justifyContent="space-evenly">
                {products.map((product) => {
                  return (
                    <Grid
                      item
                      key={product._id}
                      sm={12}
                      md={6}
                      lg={3}
                      xl={3}
                      p={3}
                    >
                      <Product product={product} />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </>
      )}
    </>
  )
}

export default TechScreen