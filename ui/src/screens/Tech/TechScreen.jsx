/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Grid } from '@mui/material'
import Product from '../../components/Product'
import { CONFIG } from '../../config-global'
import { useGetProductsQuery } from '../../slices/products-slice'
import Paginate from '../../components/Paginate'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'

const TechScreen = () => {
  const { pageNumber } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber })

  return (
    <>
      <Helmet>
        <title>Techs</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" color="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Grid container spacing={2}>
            <Heading title="Tech." subTitle="Shop" />
            <Grid item lg={12}>
              <Grid container justifyContent="space-evenly">
                {data.response.products?.map((product) => {
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
              <Grid container justifyContent="center">
                <Paginate
                  pages={data.response.pages}
                  page={data.response.page}
                />
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
