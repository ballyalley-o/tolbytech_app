'use client'
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
  useDeliverOrderMutation,
} from '../../slices/order-slice'
import {
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  CardMedia,
  Chip,
} from '@mui/material'
import { CardBase } from '../../themes/styles/default-styled.js'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { FaCcPaypal } from 'react-icons/fa'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import CheckoutSteps from '../../components/CheckoutSteps'
import SnackAlert from '../../components/SnackAlert'
import Heading from '../../components/Heading'
import OrderButton from './OrderButton'
import StatusUpdateMessage from './StatusUpdateMessage'
import { StatusMsg } from '../../constants'

const OrderScreen = () => {
  const [snackOpen, setSnackOpen] = useState(null)
  const { userInfo } = useSelector((state) => state.auth)
  const { id: orderId } = useParams()
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId)

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation()
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation()
  const [{ isPending, isPaid }, paypalDispatch] = usePayPalScriptReducer()
  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPayPalClientIdQuery()

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'NZD',
          },
        })
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
      }
      if (order && !order.response.isPaid) {
        if (!window.paypal) {
          loadPayPalScript()
        }
      }
    }
  }, [order, paypal, errorPayPal, loadingPayPal, paypalDispatch])

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details })
        // dispatch order paid action
        refetch()
        setSnackOpen('Payment successful', 'success')
        handleHideDuration(2000)
      } catch (error) {
        setSnackOpen(
          error?.data?.response?.message || error.message || 'Payment failed',
          'error'
        )
        handleHideDuration(2000)
      }
    })
  }

  const handleDelivered = async () => {
    try {
      await deliverOrder(orderId)
      refetch()
      setSnackOpen('ORDER DELIVERED', 'success', 'success')
      handleHideDuration(2000)
    } catch (error) {
      setSnackOpen(error?.data?.message || error?.message)
      handleHideDuration(2000)
    }
  }

  function onError(error) {
    setSnackOpen(
      error?.data?.message || error.message || 'Payment failed',
      'error'
    )
    handleHideDuration(2000)
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.response.totalPrice,
            },
          },
        ],
      })
      .then((orderID) => {
        return orderID
      })
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  // FOR TESTING ONLY
  // async function onApproveTest() {
  //   await payOrder({ orderId, details: { payer: {} } })
  //   refetch()
  //   setSnackOpen('Payment successful', 'success')
  // }

  return (
    <>
      <Helmet>
        <title>Your Tolby Order</title>
      </Helmet>
      <Grid container justifyContent="center">
        <Heading title="Order" subtitle="Your Tolby Order" />
        {snackOpen && (
          <SnackAlert
            open={snackOpen}
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

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="h3" color="error">
            {error?.message}
          </Message>
        ) : (
          <>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item md={12} lg={12} p={2} mt={2}>
                <Typography variant="h4" fontWeight="bold">
                  Order no: {order.response._id}
                </Typography>
              </Grid>
              <Grid item lg={8}>
                <Grid container direction="column" ml={2}>
                  <Grid item lg={8}>
                    <List>
                      <Typography variant="h5" my={2}>
                        Shipping
                      </Typography>
                      <ListItem>
                        <Typography variant="body1" fontWeight="bold">
                          Name:&nbsp;
                        </Typography>
                        <Typography variant="body1">
                          {order.response.user.name}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1" fontWeight="bold">
                          Email:&nbsp;
                        </Typography>
                        <Typography variant="body1">
                          {order.response.user.email}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1" fontWeight="bold">
                          Address:&nbsp;
                        </Typography>
                        <Typography variant="body1">
                          {order.response.shippingAddress?.address},
                          {order.response.shippingAddress?.city},
                          {order.response.shippingAddress?.postalCode},
                          {order.response.shippingAddress?.country}
                        </Typography>
                      </ListItem>
                      <StatusUpdateMessage
                        order={order}
                        date={order.response.deliveredAt}
                        StatusToUpdate={order.response.isDelivered}
                        status1={StatusMsg.DELIVERED}
                        status2={StatusMsg.NOTEDELIVERED}
                      />
                    </List>
                  </Grid>
                  <Divider />
                  <Grid item lg={8}>
                    <List>
                      <Typography variant="h5" my={2}>
                        Payment Method
                      </Typography>
                      <ListItem>
                        <Typography variant="body1" fontWeight="bold">
                          Method:&nbsp;
                        </Typography>
                        <Typography variant="body1">
                          {order.response.paymentMethod === 'PayPal' && (
                            <FaCcPaypal size={25} />
                          )}
                        </Typography>
                      </ListItem>
                      <StatusUpdateMessage
                        order={order}
                        StatusToUpdate={order.response.isPaid}
                        date={order.response.paidAt}
                        status1={StatusMsg.PAID}
                        status2={StatusMsg.NOTPAID}
                      />
                    </List>
                  </Grid>
                  <Divider />
                  <Grid item lg={8}>
                    <List>
                      <Typography variant="h5" my={2}>
                        Order Items
                      </Typography>
                      {order.response.orderItems.map((item, index) => (
                        <ListItem key={index}>
                          <Grid
                            item
                            md={2}
                            mr={2}
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={item.image}
                              sx={{ borderRadius: '5px' }}
                            />
                          </Grid>
                          <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                          >
                            <Grid item md={12}>
                              <Link to={`/product/${item.product}`}>
                                <Typography variant="caption">
                                  {item.name}
                                </Typography>
                              </Link>
                            </Grid>
                            <Grid item md={12}>
                              <Typography variant="caption">
                                <Chip label={item.qty}></Chip> x ${item.price} =
                                $ {item.qty * item.price}
                              </Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
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
                                  {order.response.itemsPrice}
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
                                  {order.response.taxPrice}
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
                                  {order.response.shippingPrice === 0
                                    ? 'FREE'
                                    : `NZ$${order.response.shippingPrice}`}
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
                                  {order.response.totalPrice}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Divider />
                            <Grid container direction="column">
                              <Grid item lg={12}>
                                {error && (
                                  <Message variant="danger" color="error">
                                    {error?.data?.message || error.message}
                                  </Message>
                                )}
                                {/* disable immediately after
                                payment is made to prevent multiple payments
                                 */}

                                {!order.isPaid && (
                                  <ListItem>
                                    {loadingPay && <Loader />}
                                    {isPending ? (
                                      <Loader />
                                    ) : (
                                      <Grid item md={12}>
                                        <Grid md={12}>
                                          <PayPalButtons
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                            onError={onError}
                                            disabled={isPaid}
                                          ></PayPalButtons>
                                        </Grid>
                                      </Grid>
                                    )}
                                  </ListItem>
                                )}

                                {loadingDeliver && <Loader />}
                                {userInfo &&
                                  userInfo?.response?.isAdmin &&
                                  order.response.isPaid &&
                                  !order.isDelivered && (
                                    <OrderButton
                                      onClick={handleDelivered}
                                      order={order}
                                    />
                                  )}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </CardBase>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}

export default OrderScreen
