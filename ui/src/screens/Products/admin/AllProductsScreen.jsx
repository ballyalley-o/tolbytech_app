/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Meta from '../../../components/Meta/Meta'
import { useSelector } from 'react-redux'
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../../../slices/products-slice.js'
import { Typography, Grid, TableBody } from '@mui/material'
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
import Paginate from '../../../components/Paginate.jsx'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ConfirmDialog from '../../../components/ConfirmDialog.jsx'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import SnackAlert from '../../../components/SnackAlert.jsx'
import { MetaTitles } from '../../../constants'

const AllProductsScreen = () => {
  const { pageNumber } = useParams()
  const [open, setOpen] = useState(false)
  const [snackOpen, setSnackOpen] = useState(null)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  })
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation()
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const theme = useTheme()

  const handleCreateProduct = async () => {
    try {
      await createProduct()
      refetch()
      setSnackOpen('Product Created', 'success')
      handleHideDuration(3000)
      console.log('hey: ', createProduct)
      setOpen(false)
    } catch (error) {
      setSnackOpen(error?.response.message, 'error')
      handleHideDuration(3000)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id)
      refetch()
      setSnackOpen('Product Deleted', 'success')
      handleHideDuration(2000)
    } catch (error) {
      setSnackOpen(error?.response.message, 'error')
      handleHideDuration(2000)
    }
  }

  const handleConfirm = async () => {
    setDialogTitle('Confirm Navigate to Product Listing')
    setDialogContent('List a product?')
    setOpen(true)
  }

  const handleCancel = async () => {
    setOpen(false)
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <Meta title={MetaTitles.ADMIN_PRODUCTS} />
      <ConfirmDialog
        open={open}
        onClose={handleCancel}
        title={dialogTitle}
        content={dialogContent}
        action={
          <ButtonBase
            onClick={handleCreateProduct}
            disabled={loadingCreate}
            color="error"
            sx={{
              fontWeight: 'bold',
              bgcolor: theme.palette.pink.main,
            }}
          >
            {loadingCreate ? (
              <Loader
                color={theme.palette.primary.main}
                type="Oval"
                width={23}
                height={23}
              />
            ) : (
              'Create'
            )}
          </ButtonBase>
        }
      />
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          onClose={() => setSnackOpen(null)}
          message={snackOpen}
          transition="left"
          horizontal="right"
          vertical="top"
          duration={2000}
        >
          {snackOpen}
        </SnackAlert>
      )}
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
                <ButtonBase
                  variant="h1"
                  onClick={() => {
                    handleConfirm()
                  }}
                >
                  <AddCircleIcon />
                  &nbsp;Products
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {loadingCreate && <Loader />}
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
                {data?.response.products.map((product) => (
                  <RowProduct key={product._id} row={product} />
                ))}
              </TableBody>
            </TableBase>
          </TableContainerBase>
          <Grid container justifyContent="center" py={2}>
            <Paginate
              pages={data?.response.pages}
              page={data?.response.page}
              isAdmin={true}
              adminRoot="products"
            />
          </Grid>
        </>
      )}
    </>
  )
}

export default AllProductsScreen
