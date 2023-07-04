/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import Meta from '../../components/Meta/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Typography, Grid, Box } from '@mui/material'
import { MetaTitles } from '../../constants'
import { LinkBase } from '../../themes/styles/default-styled'
import { useTheme } from '@emotion/react'
import Message from '../../components/Message'

const TalksScreen = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  return (
    <>
      <Meta title={MetaTitles.TALKS} />
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
                News list is empty &nbsp; <LinkBase to="/">Go Back</LinkBase>
              </Message>
            ) : (
              <>
                <Grid container justifyContent="center">
                  <Container>
                    <Typography variant="h5" color={theme.palette.gray.main}>
                      Stay tuned for more tech talks!
                    </Typography>
                    <Box my={5}>
                      <Typography variant="h5" color={theme.palette.gray.main}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Itaque dolor laborum aperiam, molestias culpa
                        neque reiciendis repudiandae quia! Minima nostrum ipsum
                        ut impedit. Quaerat quae neque itaque reiciendis
                        praesentium nostrum!
                      </Typography>
                      {/* generate a transparent container */}
                      <Box sx={{ height: '500px' }} />
                    </Box>
                  </Container>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default TalksScreen
