/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography, FormControl, Button, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'
import CheckoutSteps from '../components/CheckoutSteps'

const BagConfirmScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress, paymentMethod, cartItems } = cart
  return (
    <>
      <Grid container>
        <Grid item sm={12} lg={12}>
          <Typography variant="h3" pr={3} py={3} fontWeight="bold">
            Bag.
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: 'gray', display: 'inline-flex' }}
            >
              Review your bag.
            </Typography>
          </Typography>

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
                Order summary: NZ$
                {cart.cartItems.reduce(
                  (acc, item) => acc + item.price * item.qty,
                  0
                )}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid item textAlign="center" m={3}>
            <Typography variant="h4">Confirm your Paypal details </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default BagConfirmScreen
