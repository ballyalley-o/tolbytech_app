'use client'
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrderDetailsQuery } from '../../slices/order-slice'
import {
  Grid,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  Card,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import CheckoutSteps from '../../components/CheckoutSteps'
import SnackAlert from '../../components/SnackAlert'

const OrderScreen = () => {
  const [errorSnackOpen, setErrorSnackOpen] = useState(null)
  const { id: orderId } = useParams()
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(order)

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setErrorSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <Helmet>
        <title>Your Tolby Order</title>
      </Helmet>
      <Grid container justifyContent="center">
        <Grid item lg={12} sm={12}>
          <Typography variant="h3" pr={3} py={3} fontWeight="bold">
            Order.
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: 'gray', display: 'inline-flex' }}
            >
              Your Tolby Order.
            </Typography>
          </Typography>
          {errorSnackOpen && (
            <SnackAlert
              open={errorSnackOpen}
              severity="error"
              onClose={() => setErrorSnackOpen(null)}
              message={errorSnackOpen}
              transition="left"
              vertical="top"
              duration={2000}
              horizontal="right"
            >
              {errorSnackOpen}
            </SnackAlert>
          )}
          <Grid
            container
            direction="row"
            textAlign="right"
            alignContent="flex-end"
            sx={{ mt: 2, display: 'inline-flex' }}
          >
            <Grid item sm={6}>
              <CheckoutSteps step1 step2 step3 step4 />
            </Grid>
            <Grid item lg={6}>
              <Typography variant="body1" pr={3} py={2} fontWeight="bold">
                &nbsp;
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" color="error" />
        ) : (
          <>
            <Grid container direction="row" justifyContent="flex-start">
              <Grid item lg={8} p={2}>
                <Typography variant="h4" fontWeight="bold">
                  Order no: {order.response._id}
                </Typography>
              </Grid>
              <Grid container direction="row">
                <Grid item lg={8}>
                  <List>
                    <Typography variant="h5">Shipping</Typography>
                    <ListItem>
                      <Typography variant="body1" fontWeight="bold">
                        Name:
                      </Typography>
                      <Typography variant="body1">
                        {order.response.user.name}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="body1" fontWeight="bold">
                        Email:
                      </Typography>
                      <Typography variant="body1">
                        {order.response.user.email}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="body1" fontWeight="bold">
                        Address:
                      </Typography>
                      <Typography variant="body1">
                        {order.response.shippingAddress.address},
                        {order.response.shippingAddress.city},
                        {order.response.shippingAddress.postalCode},
                        {order.response.shippingAddress.country}
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item lg={4}>
                  hey
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}

export default OrderScreen
