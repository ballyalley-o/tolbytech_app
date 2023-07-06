/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Divider, Grid } from '@mui/material'
import Meta from '../../components/Meta/Meta'
import Product from '../../components/Product'
import TolbyCarousel from '../../components/TolbyCarousel'
import { CONFIG } from '../../config-global'
import { useGetProductsQuery } from '../../slices/products-slice'
import Paginate from '../../components/Paginate'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Heading from '../../components/Heading'
import BackButton from '../../components/BackButton'
import { CLIENT, MetaTitles, Types } from '../../constants'

const TechScreen = () => {
  const { keyword, pageNumber } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })

  return (
    <>
      <Meta title={MetaTitles.TECH} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" color="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Heading title="Tech." subTitle="Shop" />
          <TolbyCarousel />
          <Grid container spacing={2} pb={2}>
            {keyword ? (
              <Grid container justifyContent="flex-start" direction="column">
                <Grid item p={2}>
                  <BackButton variant="outlined" to={CLIENT.TECH_URL} />
                </Grid>
                {data.response.products?.length === 0 ? (
                  <Grid item p={2}>
                    <Heading
                      title={Types.SEARCH_RESULTS_EMPTY}
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
              <Heading />
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
        </>
      )}
    </>
  )
}

export default TechScreen
