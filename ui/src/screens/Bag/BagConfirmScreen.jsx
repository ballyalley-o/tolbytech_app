'use client'
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Meta from '../../components/Meta/Meta'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useCreateOrderMutation } from '../../slices/order-slice'
import { clearCartItems } from '../../slices/cart-slice'
import {
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  Box,
  CardMedia,
  Badge,
} from '@mui/material'
import { CardBase, ButtonBase } from '../../themes/styles/default-styled.js'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { styled } from '@mui/material/styles'
import { LinkBase } from '../../themes/styles.js'
import CheckoutSteps from '../../components/CheckoutSteps'
import Heading from '../../components/Heading'
import SnackAlert from '../../components/SnackAlert'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { MetaTitles } from '../../constants'

const BagConfirmScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorSnackOpen, setErrorSnackOpen] = useState(null)

  const cart = useSelector((state) => state.cart)

  const [createOrder, { isLoading, error }] = useCreateOrderMutation()

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping')
    } else if (!cart.paymentMethod) {
      navigate('/payment')
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate])

  const handleBagConfirm = async () => {
    try {
      const result = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap()
      dispatch(clearCartItems())
      navigate(`/orders/${result.response._id}`)
    } catch (error) {
      toast.error(error.message)
      setErrorSnackOpen(error.message)
      handleHideDuration(2000)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setErrorSnackOpen(null)
    }, duration)
  }

  return (
    <>
      <Meta title={MetaTitles.BAGCONFIRM} />
      <Grid container>
        <Heading title="Bag." subTitle="Review your bag" />
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
        <Grid item textAlign="center" m={3}>
          <Typography variant="h4">Confirm your Paypal details </Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={8}>
            <List>
              <ListItem>
                <Grid container direction="row" spacing={5} m={2}>
                  <Grid item>
                    <Typography variant="h2">Shipping</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: 'block',
                      flexDirection: 'column',
                    }}
                  >
                    <Box>
                      <Typography variant="body1">
                        <Typography variant="body1" fontWeight="bold">
                          Address:
                        </Typography>
                        {cart.shippingAddress.address},
                        {cart.shippingAddress.city},
                        {cart.shippingAddress.postalCode},
                        {cart.shippingAddress.country}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Grid container direction="row" spacing={5} m={2}>
                  <Grid item>
                    <Typography variant="h2">Payment</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: 'block',
                      flexDirection: 'column',
                    }}
                  >
                    <Box>
                      <Typography variant="body1">
                        <Typography variant="body1" fontWeight="bold">
                          Payment Method:
                        </Typography>
                        {cart.paymentMethod}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
              <List>
                <ListItem>
                  <Grid container direction="row" spacing={5} m={2}>
                    <Grid item>
                      <Typography variant="h2">Order Items</Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        display: 'block',
                        flexDirection: 'column',
                      }}
                    >
                      {cart.cartItems.length === 0 ? (
                        <Message>
                          Your Bag is empty &nbsp;
                          <LinkBase to="/">Go Back</LinkBase>
                        </Message>
                      ) : (
                        <List>
                          {cart.cartItems.map((item, index) => (
                            <ListItem key={index}>
                              <Grid container direction="row">
                                <Grid item lg={2}>
                                  <CardMedia
                                    component="img"
                                    image={item.image}
                                  />
                                </Grid>
                                <Grid item lg={4}>
                                  <Grid
                                    container
                                    direction="row"
                                    gap={2}
                                    spacing={2}
                                    ml={1}
                                  >
                                    <Grid item lg={12}>
                                      <Link to={`/product/${item.product}`}>
                                        <Typography variant="caption">
                                          {item.name}
                                        </Typography>
                                      </Link>
                                    </Grid>
                                    <Grid item lg={12}>
                                      <Typography variant="caption">
                                        <Badge
                                          badgeContent={item.qty}
                                          color="primary"
                                        />
                                        &nbsp;&nbsp;&nbsp; &nbsp; x NZ$
                                        {item.price} = $
                                        {(item.qty * item.price).toFixed(2)}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </List>
          </Grid>
          <Grid item lg={4}>
            <CardBase
              sx={{
                display: 'block',
                width: '100%',
              }}
            >
              <List>
                <ListItem>
                  <Grid
                    container
                    direction="row"
                    spacing={4}
                    margin={2}
                    mt={2}
                    gap={4}
                    justifyContent="center"
                  >
                    <Grid item lg={12}>
                      <Typography variant="h3">Order Summary</Typography>
                    </Grid>
                    <Divider
                      sx={{
                        display: 'block',
                        width: '100%',
                      }}
                    />
                    <Grid item lg={12}>
                      <Grid container direction="row" spacing={5} gap={2}>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="body1" fontWeight="bold">
                              Subtotal
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">
                              NZ$
                              {cart.itemsPrice}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          display="inline-flex"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="body1" fontWeight="bold">
                              GST
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">
                              NZ$
                              {cart.taxPrice}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          display="inline-flex"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="body1" fontWeight="bold">
                              Shipping
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">
                              {cart.shippingPrice > 0
                                ? `NZ$ ${cart.shippingPrice}`
                                : 'FREE'}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider
                          sx={{
                            display: 'block',
                            width: '100%',
                          }}
                        />
                        <Grid
                          container
                          display="inline-flex"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="h6" fontWeight="bold">
                              Your bag total
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">
                              NZ$
                              {cart.totalPrice}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Divider />
                        <Grid container gap={2}>
                          <Grid item lg={12}>
                            {error && (
                              <Message variant="danger" color="error">
                                {error?.data?.message || error.message}
                              </Message>
                            )}
                          </Grid>
                          {/* {cart.paymentMethod === 'PayPal' && (
                              <PayPalScriptProvider>
                                <PayPalButtons
                                  style={{
                                    layout: 'horizontal',
                                    backgroundColor: 'transparent',
                                    width: '100%',
                                  }}
                                  onClick={handleBagConfirm}
                                />
                              </PayPalScriptProvider>
                            )} */}
                          <ButtonBase
                            type="button"
                            fullWidth
                            disabled={cart.cartItems.length === 0}
                            onClick={handleBagConfirm}
                          >
                            {isLoading ? <Loader /> : 'Confirm Order'}
                          </ButtonBase>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </CardBase>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default BagConfirmScreen
