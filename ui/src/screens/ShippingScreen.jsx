/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from '../slices/cart-slice'
import PropTypes from 'prop-types'
import SnackAlert from '../components/SnackAlert'
import Message from '../components/Message'
import {
  FormControl,
  Divider,
  Box,
  Typography,
  FormGroup,
  TextField,
  Grid,
  Link,
  Button,
  Switch,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FormContainer from '../components/FormCotainer'

const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 600,
  border: '1px solid #000',
  padding: '.3rem .5rem',
  borderRadius: '1em',
  cursor: 'pointer',
}))

const InputBase = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },

    '&:hover fieldset': {
      borderColor: '#000',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
    '& .MuiInputBase-input': {
      fontSize: '1rem',
      '&::placeholder': {
        color: '#000',
        fontWeight: 400,
        fontSize: '1em',
      },
    },
  },
}))

const ButtonBase = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: '#000',
  },
}))

const ShippingScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const { shippingAddress } = useSelector((state) => state.cart)
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [openSnack, setOpenSnack] = useState(false)
  const [underDevelopment, setUnderDevelopment] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <Grid container>
        <Grid item sm={12} lg={12}>
          <Typography variant="h3" pr={3} py={3} fontWeight="bold">
            Shipping.
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: 'gray', display: 'inline-flex' }}
            >
              It's Free!
            </Typography>
          </Typography>
          <Grid
            container
            direction="column"
            textAlign="right"
            alignContent="flex-end"
            sx={{ mt: 2, display: 'flex' }}
          >
            <Grid item lg={12}>
              <Typography variant="body1" pr={3} py={3} fontWeight="bold">
                Order summary: NZ$
                {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          {/* for admin only, */}
          {userInfo.response.isAdmin && (
            <Box alignContent="flex-end">
              <Switch
                label="Set under development"
                title="Set under development"
                checked={underDevelopment}
                onChange={() => setUnderDevelopment(!underDevelopment)}
                inputProps={{
                  'aria-label': 'controlled',
                }}
              />
            </Box>
          )}
        </Grid>
        <Grid item sm={12} lg={12} pt={2}>
          {underDevelopment ? (
            <Message
              variant="h3"
              pr={3}
              py={3}
              fontWeight="bold"
              severity="warning"
              color="warning"
            >
              Under development, We apologize for the inconvenience.{' '}
              <LinkBase to="/">Go Back</LinkBase>
            </Message>
          ) : (
            <>
              <Grid
                container
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    py: '2rem',
                    pb: '4rem',
                    height: 'auto',
                    width: { xs: '100%', sm: '100%', md: '100%', lg: '30%' },
                    backgroundColor: '#fff',
                    borderRadius: '1rem',
                  }}
                >
                  <FormContainer>
                    <Grid
                      container
                      textAlign="center"
                      py={2}
                      alignContent="center"
                    >
                      <Grid item lg={12}>
                        <Typography variant="h5" fontWeight="bold">
                          Where should we send your order?
                        </Typography>
                      </Grid>
                    </Grid>
                    <FormControl onSubmit={handleSubmit} fullWidth>
                      <FormGroup controlId="address" sx={{ my: 2 }}>
                        <TextField
                          required
                          fullWidth
                          id="address"
                          label="Address"
                          variant="outlined"
                          size="small"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup controlId="city" sx={{ my: 2 }}>
                        <TextField
                          required
                          fullWidth
                          id="city"
                          label="City"
                          variant="outlined"
                          size="small"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup controlId="postalCode" sx={{ my: 2 }}>
                        <TextField
                          required
                          fullWidth
                          id="postalCode"
                          label="Postal Code"
                          variant="outlined"
                          size="small"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup controlId="country" sx={{ my: 2 }}>
                        <TextField
                          required
                          fullWidth
                          id="country"
                          label="Country"
                          variant="outlined"
                          size="small"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </FormGroup>
                      <Box sx={{ my: 2 }}>
                        <Divider>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                              color: 'gray',
                            }}
                          >
                            Your contact Information.
                          </Typography>
                        </Divider>
                      </Box>
                      <FormGroup controlId="name" sx={{ my: 2 }}>
                        <TextField
                          id="name"
                          label="Name"
                          variant="outlined"
                          size="small"
                          value={userInfo.response.name}
                          onChange={(e) => setPostalCode(e.target.value)}
                          disabled
                        />
                      </FormGroup>
                      <FormGroup controlId="email" sx={{ my: 2 }}>
                        <TextField
                          id="email"
                          label="E-mail"
                          variant="outlined"
                          size="small"
                          value={userInfo.response.email}
                          onChange={(e) => setPostalCode(e.target.value)}
                          disabled
                        />
                      </FormGroup>
                      <Box sx={{ my: 2 }}>
                        <ButtonBase
                          color="primary"
                          type="submit"
                          fullWidth
                          sx={{ backgroundColor: 'pink.main', color: '#FFF' }}
                        >
                          Proceed to Checkout
                        </ButtonBase>
                      </Box>
                      {/* <SnackAlert
                            openSnack={openSnack}
                            setOpenSnack={setOpenSnack}
                            severity="success"
                            message="Shipping Address Saved"
                        /> */}
                      <Grid container justifyContent="flex-end">
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{ color: 'gray', display: 'inline-flex' }}
                          >
                            Save this address for next time
                          </Typography>

                          <Switch
                            checked={saveShippingAddress}
                            onChange={() => {}}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                        </Box>
                      </Grid>
                    </FormControl>
                  </FormContainer>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default ShippingScreen
