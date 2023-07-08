/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  Chip,
  CardMedia,
  Button,
} from '@mui/material'

import { FaCcPaypal } from 'react-icons/fa'
import { FcDownload } from 'react-icons/fc'
import Message from '../Message'
import { CLIENT } from '../../constants'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const OrderViewProducts = ({ order, error, user, adminOrder }) => {
  // const { data: orders, isLoading, error: errors } = useGetOrderByIdQuery(id)

  return (
    <>
      <Grid
        container
        direction={adminOrder ? 'column' : 'row'}
        justifyContent="flex-start"
      >
        <Grid item lg={adminOrder ? 12 : 6}>
          <Grid container direction={adminOrder ? 'row' : 'column'}>
            <Grid item md={6} lg={4}>
              <List>
                <Typography variant="body1" my={1}>
                  Shipping
                </Typography>
                <ListItem>
                  <Typography variant="caption" fontWeight="bold">
                    Name:&nbsp;
                  </Typography>
                  <Typography variant="caption">{user.name}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="caption" fontWeight="bold">
                    Email:&nbsp;
                  </Typography>
                  <Typography variant="caption">
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Grid container direction="column">
                    <Typography variant="caption" fontWeight="bold" mb={1}>
                      Address:&nbsp;
                    </Typography>
                    <Typography variant="caption">
                      {order.shippingAddress?.address}
                    </Typography>
                    <Typography variant="caption">
                      {order.shippingAddress?.city}
                    </Typography>
                    <Typography variant="caption">
                      {order.shippingAddress?.postalCode}
                    </Typography>
                    <Typography variant="caption">
                      {order.shippingAddress?.country}
                    </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                  {order.isDelivered ? (
                    <Message
                      variant="success"
                      color="success"
                      severity="success"
                    >
                      STATUS: DELIVERED | {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger" color="error" severity="error">
                      STATUS: <b>NOT DELIVERED</b>
                    </Message>
                  )}
                </ListItem>
              </List>
            </Grid>
            <Grid item lg={4}>
              <List>
                <Typography variant="body1" my={1}>
                  Payment Method
                </Typography>
                <ListItem>
                  <Typography variant="caption" fontWeight="bold">
                    Method:&nbsp;
                  </Typography>
                  <Typography variant="caption">
                    {order.paymentMethod === 'PayPal' ? (
                      <FaCcPaypal size={25} />
                    ) : (
                      order.paymentMethod
                    )}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="caption" fontWeight="bold">
                    &nbsp;
                  </Typography>
                  <Typography variant="caption">&nbsp;</Typography>
                </ListItem>
                <ListItem></ListItem>
                <ListItem>
                  {order.isPaid ? (
                    <Message
                      variant="success"
                      color="success"
                      severity="success"
                    >
                      STATUS: <b>PAID</b> | {order.paidAt}
                    </Message>
                  ) : (
                    <Message variant="danger" color="error" severity="error">
                      STATUS: <b>NOT PAID</b>
                    </Message>
                  )}
                </ListItem>
              </List>
            </Grid>

            {adminOrder && (
              <Grid item lg={adminOrder ? 4 : 6}>
                <List>
                  <ListItem>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      margin={1}
                      gap={1}
                      justifyContent="center"
                      p={1}
                      sx={{
                        border: '1px solid black',
                        borderRadius: '5px',
                        color: 'primary.light',
                        backgroundColor: 'primary.main',
                      }}
                    >
                      <Grid item lg={12}>
                        <Typography variant="caption">Order Summary</Typography>
                      </Grid>
                      <Divider
                        sx={{
                          display: 'block',
                          width: '100%',
                          color: 'primary.light',
                          backgroundColor: 'primary.light',
                          mx: 2,
                        }}
                      />
                      <Grid item lg={12}>
                        <Grid container direction="row">
                          <Grid container justifyContent="space-between">
                            <Grid item>
                              <Typography variant="caption" fontWeight="bold">
                                Subtotal
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="caption">
                                NZ$
                                {order.itemsPrice}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            display="inline-flex"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Typography variant="caption" fontWeight="bold">
                                GST
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="caption">
                                NZ$
                                {order.taxPrice}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            display="inline-flex"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Typography variant="caption" fontWeight="bold">
                                Shipping
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="caption">
                                {order.shippingPrice === 0
                                  ? 'FREE'
                                  : `NZ$${order.shippingPrice}`}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Divider
                            sx={{
                              display: 'block',
                              width: '100%',
                              py: 1,
                              color: 'primary.light',
                            }}
                          />
                          <Grid
                            container
                            display="inline-flex"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Typography variant="body1" fontWeight="bold">
                                Your bag total
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body1">
                                NZ$
                                {order.totalPrice}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container direction="column">
                            <Grid item lg={12}>
                              {error && (
                                <Message variant="danger" color="error">
                                  {error?.data?.message || error.message}
                                </Message>
                              )}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {order.isPaid && (
                    <Button
                      color="info"
                      fullWidth
                      // onClick={onApproveTest}
                    >
                      <FcDownload /> Receipt
                    </Button>
                  )}
                </List>
              </Grid>
            )}
          </Grid>
        </Grid>
        {!adminOrder && (
          <Grid item md={6} lg={adminOrder ? 3 : 6}>
            <List>
              <ListItem>
                <Grid
                  container
                  direction="row"
                  spacing={1}
                  margin={1}
                  gap={1}
                  justifyContent="center"
                  p={1}
                  sx={{
                    border: '1px solid black',
                    borderRadius: '5px',
                    color: 'primary.light',
                    backgroundColor: 'primary.main',
                  }}
                >
                  <Grid item lg={12}>
                    <Typography variant="caption">Order Summary</Typography>
                  </Grid>
                  <Divider
                    sx={{
                      display: 'block',
                      width: '100%',
                      color: 'primary.light',
                      backgroundColor: 'primary.light',
                      mx: 2,
                    }}
                  />
                  <Grid item lg={12}>
                    <Grid container direction="row">
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Typography variant="caption" fontWeight="bold">
                            Subtotal
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption">
                            NZ$
                            {order.itemsPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        display="inline-flex"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="caption" fontWeight="bold">
                            GST
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption">
                            NZ$
                            {order.taxPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        display="inline-flex"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="caption" fontWeight="bold">
                            Shipping
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption">
                            {order.shippingPrice === 0
                              ? 'FREE'
                              : `NZ$${order.shippingPrice}`}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider
                        sx={{
                          display: 'block',
                          width: '100%',
                          py: 1,
                          color: 'primary.light',
                        }}
                      />
                      <Grid
                        container
                        display="inline-flex"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography variant="body1" fontWeight="bold">
                            Your bag total
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">
                            NZ$
                            {order.totalPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="column">
                        <Grid item lg={12}>
                          {error && (
                            <Message variant="danger" color="error">
                              {error?.data?.message || error.message}
                            </Message>
                          )}

                          {/* MARK AS DELIVERED PLACEHOLDER */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              {order.isPaid && (
                <Button
                  color="info"
                  variant="outlined"
                  fullWidth
                  // onClick={onApproveTest}
                >
                  <FcDownload /> Receipt
                </Button>
              )}
            </List>
          </Grid>
        )}
        <Divider
          sx={{
            width: '100%',
          }}
        />
        <Grid item lg={6}>
          <Grid container direction={adminOrder ? 'row' : 'column'}>
            <Grid item lg={adminOrder && 6}>
              <List>
                <Typography variant="body1" my={1}>
                  Order Items
                </Typography>
                {order.orderItems.map((item, index) => (
                  <ListItem key={index}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        border: '1px solid #cfcfcf',
                        p: 1,
                        borderRadius: '5px',
                      }}
                    >
                      <Grid item md={12}>
                        <Link to={`/product/${item.product}`}>
                          <Typography variant="caption">{item.name}</Typography>
                        </Link>
                      </Grid>
                      <Grid item md={12}>
                        <Typography variant="caption">
                          <Chip label={item.qty}></Chip> x ${item.price} = ${' '}
                          {item.qty * item.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Orders Summary */}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

OrderViewProducts.propTypes = {
  order: PropTypes.object,
  error: PropTypes.object,
  user: PropTypes.object,
  adminOrder: PropTypes.bool,
}

export default OrderViewProducts
