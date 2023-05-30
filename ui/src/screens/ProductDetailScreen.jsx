/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
} from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Rating from '../components/Rating'
import Product from '../components/Product'
import axios from 'axios'
import { CONFIG } from '../config-global'

const ProductDetailScreen = () => {
  const [product, setProduct] = useState({})
  const { id: productId } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${CONFIG.SERVER_URL}/api/products/${productId}`
      )
      setProduct(data)
    }
    fetchProduct()
  }, [productId])

  const CardMediaBase = styled(CardMedia)(({ theme }) => ({
    display: 'block',
    objectFit: 'contain',
    paddingRight: '2rem',
    paddingTop: '2rem',
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

  const AccordionBase = styled(Accordion)(({ theme }) => ({
    width: '100%',
    shadow: 'none',
    backgroundColor: alpha('#fff', 0.1),
    '& .MuiAccordionSummary-root': {
      backgroundColor: alpha('#fff', 1),
      shadow: 'none',
      boxShadow: 'none',
      shadowColor: 'none',
    },
    '& .MuiAccordionDetails-root': {
      backgroundColor: alpha('#1c252c', 0.1),
    },
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
      <Link to='/'>
        <Button>
          <KeyboardDoubleArrowLeftIcon />
          <Typography>Go Back</Typography>
        </Button>
      </Link>
      <Grid container lg={12}>
        <Grid item lg={7}>
          <CardMediaBase component='img' image={product.image}></CardMediaBase>
        </Grid>
        <Grid item lg={5}>
          <Grid container lg={12}>
            <CardContentBase>
              <BoxBase>
                {product.model >= '2020' ? (
                  <Typography variant='body1'>New</Typography>
                ) : (
                  <Typography variant='body1'>{product.model}</Typography>
                )}
                <Typography variant='h3'>{product.name}</Typography>
                <Rating
                  value={product.rating}
                  rating={product.numReviews}
                  color='#F8E825'
                />
              </BoxBase>
              <BoxBase>
                <Typography variant='body1'>NZ${product.price}</Typography>
              </BoxBase>
            </CardContentBase>
            <CardContentBase>
              <BoxBase>
                <Typography variant='body1'>{product.description}</Typography>
              </BoxBase>
              <Typography variant='body2'>
                Category: {product.category}
              </Typography>
            </CardContentBase>
            <CardContentBase>
              <BoxBase fontSize={1}>
                <ChipBase
                  label={product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  variant='outlined'
                />
              </BoxBase>
            </CardContentBase>
            <CardContentBase>
              <BoxBase>
                <CartButton disabled={product.countInStock === 0}>
                  {product.countInStock === 0 ? '' : <AddShoppingCartIcon />}
                  <CartTypography variant='caption'>
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
  )
}

ProductDetailScreen.propTypes = {
  match: PropTypes.object,
}

export default ProductDetailScreen

// give a description on this application Tolby technologies
