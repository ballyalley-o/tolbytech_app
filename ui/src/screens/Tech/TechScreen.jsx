/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Divider, Grid } from '@mui/material'
import Product from '../../components/Product'
import { CONFIG } from '../../config-global'
import { useGetProductsQuery } from '../../slices/products-slice'
import Paginate from '../../components/Paginate'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import { CLIENT, Types } from '../../constants'

const TechScreen = () => {
  const { keyword, pageNumber } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })

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
          <Grid container spacing={2} pb={2}>
            {keyword ? (
              <Grid container justifyContent="flex-start" direction="column">
                <Grid item p={2}>
                  <BackButton variant="outlined" to={CLIENT.TECH_URL} />
                </Grid>
                {data.response.products?.length === 0 ? (
                  <Grid item p={2}>
                    <Heading
                      title="No Results Found for: "
                      subTitle={keyword}
                    />
                  </Grid>
                ) : (
                  <Grid item p={2}>
                    <Heading title={Types.SEARCH_RESULTS} subTitle={keyword} />
                  </Grid>
                )}
              </Grid>
            ) : (
              <Heading title="Tech." subTitle="Shop" />
            )}
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
                  root="tech"
                  keyword={keyword ? keyword : ''}
                />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container py={2} justifyContent="center">
            <Footer />
          </Grid>
        </>
      )}
    </>
  )
}

export default TechScreen
