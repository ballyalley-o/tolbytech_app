/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Message from '../components/Message'

const BlogScreen = () => {
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
              Talks.
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: 'gray', display: 'inline-flex' }}
              >
                Tech Talks
              </Typography>
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {cartItems.length !== 0 ? (
              <Message variant="h3" pr={3} py={3} fontWeight="bold">
                Blog list is empty &nbsp; <Link to="/">Go Back</Link>
              </Message>
            ) : (
              <>
                <h1>Blog here</h1>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default BlogScreen
