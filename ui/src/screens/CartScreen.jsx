/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from '@mui/material'
import Message from '../components/Message'

const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Typography variant="h3" pr={3} py={3} fontWeight="bold">
              Cart.
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: 'gray', display: 'inline-flex' }}
              >
                Your cart
              </Typography>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {cartItems.length === 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                Your cart is empty <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default CartScreen
