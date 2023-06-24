/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../../../slices/products-slice.js'
import { Typography, Grid, TableBody, Table, TableRow } from '@mui/material'
import {
  TableContainerBase,
  TableRowHeaderBase,
  TableCellBase,
  TableBase,
  TableHeadBase,
} from '../../../themes/styles/table-styled'
import RowProduct from '../../../components/RowProduct'
import { ButtonBase } from '../../../themes/styles/default-styled'
import { useTheme } from '@mui/material/styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import ConfirmDialog from '../../../components/ConfirmDialog.jsx'

const AllProductsScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  const { userInfo } = useSelector((state) => state.auth)
  const theme = useTheme()
  console.log(products)
  return (
    <>
      <Helmet>
        <title>Admin | Products</title>
      </Helmet>
      <Grid container direction="row">
        <Grid item md={12}>
          <Grid container direction="column">
            <Grid item md={6}>
              <Typography variant="h1">Products</Typography>
              <Typography variant="body1">
                User:
                <b>{userInfo?.response.name}</b>
              </Typography>
              <Typography variant="body1">
                Role:
                <b>SuperAdmin</b>
              </Typography>
            </Grid>
            <Grid item md={6} my={2}>
              <Grid container justifyContent="flex-end">
                <ButtonBase variant="h1">
                  <AddCircleIcon />
                  &nbsp;Products
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.message}</Message>
      ) : (
        <>
          <TableContainerBase>
            <TableBase>
              <TableHeadBase>
                <TableRowHeaderBase color={theme.palette.primary.main}>
                  <TableCellBase align="left"></TableCellBase>
                  <TableCellBase align="left">ID</TableCellBase>
                  <TableCellBase align="left">NAME</TableCellBase>
                  <TableCellBase align="center">PRICE</TableCellBase>
                  <TableCellBase align="center">CATEGORY</TableCellBase>
                  <TableCellBase align="center">BRAND</TableCellBase>
                  <TableCellBase align="center"></TableCellBase>
                </TableRowHeaderBase>
              </TableHeadBase>
              <TableBody>
                {products?.response.map((product) => (
                  <RowProduct key={product._id} row={product}></RowProduct>
                ))}
              </TableBody>
            </TableBase>
          </TableContainerBase>
        </>
      )}
    </>
  )
}

export default AllProductsScreen
