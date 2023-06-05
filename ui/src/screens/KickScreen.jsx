/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Message from '../components/Message'

const KickScreen = () => {
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
              Kicks.
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: 'gray', display: 'inline-flex' }}
              >
                What's a Tech without a Kick?
              </Typography>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {cartItems.length !== 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                Kicks list is empty &nbsp; <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <>
                <h1>Kicks here</h1>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default KickScreen
