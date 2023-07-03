/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useGetTopProductsQuery } from '../slices/products-slice'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { Carousel as CarouselUI } from 'react-responsive-carousel'

const Carousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery()
  return <div>Carousel</div>
}

export default Carousel
