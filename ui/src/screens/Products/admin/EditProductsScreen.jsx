/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
} from '../../../slices/products-slice'
import { Helmet } from 'react-helmet-async'
import {
  FormControl,
  Button,
  Typography,
  FormGroup,
  Grid,
  InputLabel,
  InputBase,
} from '@mui/material'
import { ButtonBase } from '../../../themes/styles/default-styled'
import { CLIENT } from '../../../constants'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import FormContainer from '../../../components/FormContainer'
import SnackAlert from '../../../components/SnackAlert'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

const EditProductsScreen = () => {
  const [snackOpen, setSnackOpen] = useState(null)
  const { id: productId } = useParams()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [mode, setModel] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery()

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation()

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  const handleSubmit = () => {}

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

  return (
    <>
      <Helmet>
        <title>{product?.name}</title>
      </Helmet>
      <Link to={CLIENT.ADMIN_PRODUCTS_URL}>
        <Button>
          <KeyboardDoubleArrowLeftIcon />
          <Typography>Go Back</Typography>
        </Button>
      </Link>
      {snackOpen && (
        <SnackAlert
          open={snackOpen}
          severity="error"
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
      <FormContainer>
        <Typography variant="h2">Edit Product</Typography>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.message}</Message>
        ) : (
          <FormControl component="form" onSubmit={handleSubmit}>
            <FormGroup>
              <Grid container gap={1}>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-Tolby-ID">
                      Tolby ID / Email
                    </InputLabel>
                    <InputBase
                      label="Tolby ID / Email"
                      name="email"
                      type="text"
                      fullWidth
                      size="small"
                      value=""
                      onChange={(e) => e.preventDefault()}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </FormGroup>
          </FormControl>
        )}
      </FormContainer>
    </>
  )
}

export default EditProductsScreen
