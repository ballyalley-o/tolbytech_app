/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../../../slices/products-slice.js'
import { Typography, Grid, Button, Table, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { CLIENT } from '../../../constants'

const AllProductsScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  console.log(products)
  return (
    <>
      <Helmet>
        <title>Admin | Products</title>
      </Helmet>
      <Grid container direction="row">
        <Grid item md={12}>
          <Grid container direction="column">
            <Typography>Hey</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AllProductsScreen
