/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Meta from '../../../components/Meta/Meta'
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
  useUploadProductImageMutation,
} from '../../../slices/products-slice'
import {
  FormControl,
  Typography,
  FormGroup,
  Grid,
  Divider,
  InputBase,
} from '@mui/material'
import { ButtonBase } from '../../../themes/styles/default-styled'
import { CLIENT } from '../../../constants'
import { AdminHeading } from '../../../components/Heading'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import BackButton from '../../../components/BackButton'
import { toast } from 'react-toastify'
import InputViewField from '../../../components/Forms/InputViewField'
import MultiInputViewField from '../../../components/Forms/MultiInputViewField'
import InputUploadField from '../../../components/Forms/InputUploadField'
import SnackAlert from '../../../components/SnackAlert'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

const EditProductsScreen = () => {
  const { id: productId } = useParams()
  const [snackOpen, setSnackOpen] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId)

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation()

  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation()

  const handleUploadFile = async (e) => {
    const formData = new FormData()
    formData.append('image', e.target.files[0])

    try {
      const res = await uploadProductImage(formData).unwrap()
      setSnackOpen(res.message, 'success', 'success')
      handleHideDuration(3000)
      setImage(res.image)
    } catch (error) {
      setSnackOpen(error?.data?.message, 'error')
      handleHideDuration(3000)
    }
  }

  useEffect(() => {
    if (product) {
      setName(product.name)
      setPrice(product.price)
      setImage(product.image)
      setBrand(product.brand)
      setModel(product.model)
      setCategory(product.category)
      setCountInStock(product.countInStock)
      setDescription(product.description)
    }
  }, [product])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const updatedProduct = {
        productId,
        name,
        price,
        image,
        brand,
        model,
        category,
        countInStock,
        description,
      }
      const result = await updateProduct(updatedProduct)
      toast.success('Product Updated', { position: 'top-center' })
      // handleHideDuration(3000)
      refetch()
      navigate(CLIENT.ADMIN_PRODUCTS_URL)
    } catch (error) {
      setSnackOpen(error?.data?.message, 'error', 'error')
      handleHideDuration(3000)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <Meta title={`Admin | Edit ${product?.name}`} />
      <BackButton to={CLIENT.ADMIN_PRODUCTS_URL} />
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          severity={snackOpen?.severity}
          onClose={() => setSnackOpen(null)}
          message={snackOpen}
          transition="left"
          vertical="top"
          duration={2000}
          horizontal="right"
        >
          {snackOpen}
        </SnackAlert>
      )}
      <Grid container direction="column">
        <AdminHeading title="Update Product" />
        <Divider />
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.message}</Message>
        ) : (
          <Grid item md={12} py={2}>
            <FormControl component="form" onSubmit={handleSubmit}>
              <FormGroup>
                <Grid container direction="row" justifyContent="center" gap={4}>
                  <Grid item lg={5}>
                    <Grid
                      container
                      gap={2}
                      direction="row"
                      justifyContent="center"
                    >
                      <InputViewField
                        id="name"
                        label="Name"
                        title="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <InputViewField
                        id="price"
                        type="number"
                        label="Price"
                        title="Price"
                        value={price}
                        currency
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <InputViewField
                        id="brand"
                        label="Brand"
                        title="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      />
                      <InputViewField
                        id="category"
                        label="Category"
                        title="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      <InputViewField
                        id="model"
                        label="Model Year"
                        title="Model Year"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                      />
                      <InputViewField
                        id="countInStock"
                        label="Count in Stock"
                        title="Count in Stock"
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                      />
                      <MultiInputViewField
                        id="description"
                        label="Description"
                        title="Description"
                        multiline
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item lg={6}>
                    <Grid container justifyContent="center">
                      <Grid item md={12} my={2}>
                        <Typography variant="h6">Product Image</Typography>
                      </Grid>
                      <InputViewField
                        id="image"
                        label="Image URL"
                        title="Image URL"
                        value={image}
                        onChange={(e) => setImage}
                      />
                      <InputUploadField
                        size="large"
                        type="file"
                        label="Choose Image"
                        onChange={handleUploadFile}
                      />
                    </Grid>
                    {loadingUpload && <Loader />}
                    <Grid container direction="row">
                      <Grid item md={12}>
                        <Typography variant="h2"></Typography>
                      </Grid>
                      <Grid item md={12}>
                        <Grid container justifyContent="flex-end">
                          <ButtonBase type="submit" fullWidth>
                            UPDATE
                          </ButtonBase>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default EditProductsScreen
