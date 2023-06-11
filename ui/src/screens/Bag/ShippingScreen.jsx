/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from '../../slices/cart-slice'
import SnackAlert from '../../components/SnackAlert'
import Message from '../../components/Message'
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
import FormContainer from '../../components/FormCotainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import { CLIENT } from '../../constants'

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

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 4,
  display: 'flex-inline',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))
const ButtonBase = styled(Button)(({ theme }) => ({
  backgroundColor: 'pink.main',
  color: '#FFF',
  fontWeight: 600,
  '&:hover': {
    color: '#000',
  },
}))

const ShippingScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [address, setAddress] = useState(shippingAddress?.address || '')
  const [city, setCity] = useState(shippingAddress?.city || '')
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ''
  )
  const [country, setCountry] = useState(shippingAddress?.country || '')
  const [openSnack, setOpenSnack] = useState(false)
  const [underDevelopment, setUnderDevelopment] = useState(false)
  const [memoShippingAddress, setMemoShippingAddress] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate(CLIENT.PAYMENT_URL)
  }

  const handleShippingAddress = (e) => {
    e.preventDefault()
    setMemoShippingAddress(!memoShippingAddress)
    if (memoShippingAddress) {
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
    } else {
      dispatch(saveShippingAddress({}))
    }
    setOpenSnack(true)
  }

  return (
    <>
      <Helmet>
        <title>Shipping</title>
      </Helmet>
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
            direction="row"
            textAlign="right"
            alignContent="flex-end"
            sx={{ mt: 2, display: 'inline-flex' }}
          >
            <Grid item sm={6}>
              <CheckoutSteps step1 step2 />
            </Grid>
            <Grid item lg={6}>
              <Typography variant="body1" pr={3} py={2} fontWeight="bold">
                Order summary: NZ$
                {cart.cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
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
              <LinkBase to={CLIENT.HOME_URL}>Go Back</LinkBase>
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
                    <FormControl
                      onSubmit={handleSubmit}
                      component="form"
                      fullWidth
                    >
                      <FormGroup sx={{ my: 2 }}>
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
                      <FormGroup sx={{ my: 2 }}>
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
                      <FormGroup sx={{ my: 2 }}>
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
                      <FormGroup sx={{ my: 2 }}>
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
                      <FormGroup sx={{ my: 2 }}>
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
                      <FormGroup sx={{ my: 2 }}>
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
                      <SnackAlert
                        openSnack={openSnack}
                        setOpenSnack={setOpenSnack}
                        severity="success"
                        message="Shipping Address Saved"
                      />
                      <Grid container justifyContent="flex-end">
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{ color: 'gray', display: 'inline-flex' }}
                          >
                            Save this address for next time
                          </Typography>
                          <AntSwitch
                            color="pink"
                            checked={memoShippingAddress}
                            onChange={handleShippingAddress}
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
