/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Typography, Card, CardMedia } from '@mui/material'
import Rating from '../components/Rating'
import products from '../assets/data/products'
import Product from '../components/Product'

const ProductDetailScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return <div>{product.name}</div>
}

ProductDetailScreen.propTypes = {
  match: PropTypes.object,
}

export default ProductDetailScreen
