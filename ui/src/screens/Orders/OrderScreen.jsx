/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrderDetailsMutation } from '../../slices/order-slice'
import {
  Grid,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  Card,
} from '@mui/material'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const OrderScreen = () => {
  const { id: orderId } = useParams()
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsMutation(orderId)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(order)

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={6}>
          <Typography variant="h3" py={3} fontWeight="bold">
            Order {orderId}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default OrderScreen
