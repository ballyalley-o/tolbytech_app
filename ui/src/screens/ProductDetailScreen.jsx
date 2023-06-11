/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { alpha, styled } from '@mui/material/styles'
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Accordion,
  Chip,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Rating from '../components/Rating'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { CONFIG } from '../config-global'
import { CART_URL } from '../constants'
import { useDispatch } from 'react-redux'
import { useGetProductDetailsQuery } from '../slices/products-slice'
import { addToCart } from '../slices/cart-slice'

const ProductDetailScreen = () => {
  const { id: productId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty }))
    navigate(CART_URL)
  }

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId)

  const CardMediaBase = styled(CardMedia)(({ theme }) => ({
    display: 'block',
    border: '1px solid #C0C0C0',
    objectFit: 'contain',
    marginRight: '3rem',
    marginTop: '2rem',
  }))

  const CardContentBase = styled(CardContent)(({ theme }) => ({
    display: 'block',
    width: '100%',
    paddingLeft: '1rem',
    paddingTop: '2rem',
    paddingRight: '1rem',
  }))

  const BoxBase = styled(Box)(({ theme }) => ({
    display: 'block',
    width: '100%',
    paddingBottom: '1rem',
  }))

  const ChipBase = styled(Chip)(({ theme }) => ({
    color: product.countInStock > 0 ? '#4CAF50' : '#F44336',
    borderColor: product.countInStock > 0 ? '#4CAF50' : '#F44336',
    padding: 0,
  }))

  const CartButton = styled(Button)(({ theme }) => ({
    color: '#C0C0C0',
    backgroundColor: product.countInStock > 0 ? '#1c252c' : 'transparent',
    width: '25%',
    '&:hover': {
      backgroundColor: '#1c252c',
      transitionDelay: '0.4s',
      easeIn: '0.8s',
      easeOut: '0.8s',
    },
    disabled: {
      backgroundColor: 'red',
    },
  }))

  const CartTypography = styled(Typography)(({ theme }) => ({
    color: '#C0C0C0',
    '&:hover': {
      display: 'none',
      easeIn: '0.8s',
      easeOut: '0.8s',
      AnimationEffect: 'ease-in',
      scrollBehavior: 'smooth',
      WebkitTransform: 'translateX(-100%)',
      MozTransform: 'translateX(-100%)',
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      msTransform: 'translateZ(0)',
      OTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      transitionDelay: '0.2s',
    },
  }))

  return (
    <>
      <Helmet>
        <title>{product?.name}</title>
      </Helmet>
      <Link to="/">
        <Button>
          <KeyboardDoubleArrowLeftIcon />
          <Typography>Go Back</Typography>
        </Button>
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message severity="error" color="error">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Grid container>
            <Grid item lg={7}>
              <CardMediaBase
                component="img"
                image={product.image}
              ></CardMediaBase>
            </Grid>
            <Grid item lg={5}>
              <Grid container>
                <CardContentBase>
                  <BoxBase>
                    {product.model >= '2020' ? (
                      <Typography variant="body1">New</Typography>
                    ) : (
                      <Typography variant="body1">{product.model}</Typography>
                    )}
                    <Typography variant="h3">{product.name}</Typography>
                    <Rating
                      value={product.rating}
                      rating={product.numReviews}
                    />
                  </BoxBase>
                  <BoxBase>
                    <Typography variant="body1">NZ${product.price}</Typography>
                  </BoxBase>
                </CardContentBase>
                <CardContentBase>
                  <BoxBase>
                    <Typography variant="body1">
                      {product.description}
                    </Typography>
                  </BoxBase>
                  <Typography variant="body2">
                    Category: {product.category}
                  </Typography>
                </CardContentBase>
                <CardContentBase>
                  <BoxBase fontSize={1}>
                    <ChipBase
                      label={
                        product.countInStock > 0 ? 'In Stock' : 'Out of Stock'
                      }
                      variant="outlined"
                    />
                  </BoxBase>
                </CardContentBase>

                {product.countInStock > 0 && (
                  <CardContentBase>
                    <BoxBase>
                      <FormControl size="medium">
                        <InputLabel id="qty">Qty</InputLabel>
                        <Select
                          labelId="qty"
                          id="qty-select"
                          value={qty}
                          label="Qty"
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </BoxBase>
                  </CardContentBase>
                )}

                <CardContentBase>
                  <BoxBase>
                    <CartButton
                      onClick={handleAddToCart}
                      disabled={product.countInStock === 0}
                    >
                      {product.countInStock === 0 ? (
                        ''
                      ) : (
                        <AddShoppingCartIcon />
                      )}
                      <CartTypography variant="caption">
                        {product.countInStock === 0
                          ? 'Stocks are on its way'
                          : 'Add to Cart'}
                      </CartTypography>
                    </CartButton>
                  </BoxBase>
                </CardContentBase>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default ProductDetailScreen
