/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Product from '../components/Product'
import axios from 'axios'
import { CONFIG } from '../config-global'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${CONFIG.SERVER_URL}/api/v1/products`)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Typography variant="h3" pr={3} py={3}>
          Latest Products
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Grid container justifyContent="space-evenly">
          {products.map((product) => {
            return (
              <Grid item key={product._id} sm={12} md={6} lg={3} xl={3} p={3}>
                <Product product={product} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScreen
