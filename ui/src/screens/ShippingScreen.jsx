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
  Container,
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

const ShippingScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
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
      <Grid container direction="column">
        <Grid item lg={12} justifyContent="space-between">
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
        <Grid item lg={12}>
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
                item
                lg={12}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    //   alignItems: 'center',
                    py: '2rem',
                    pb: '4rem',
                    height: 'auto',
                    width: '400px',
                    backgroundColor: '#fff',
                    borderRadius: '1rem',
                  }}
                >
                  <Container>
                    <FormContainer
                      title="Shipping"
                      subtitle="Enter your shipping address"
                    >
                      <FormControl onSubmit={handleSubmit}>
                        <FormGroup controlId="address" sx={{ my: 2 }}>
                          <TextField
                            required
                            // size
                            fullWidth
                            id="address"
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          ></TextField>
                        </FormGroup>
                        <FormGroup controlId="city" sx={{ my: 2 }}>
                          <TextField
                            required
                            id="city"
                            label="City"
                            variant="outlined"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          ></TextField>
                        </FormGroup>
                        <FormGroup controlId="postalCode" sx={{ my: 2 }}>
                          <TextField
                            required
                            id="postalCode"
                            label="Postal Code"
                            variant="outlined"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                          ></TextField>
                        </FormGroup>
                        <FormGroup controlId="country" sx={{ my: 2 }}>
                          <TextField
                            required
                            id="country"
                            label="Country"
                            variant="outlined"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          ></TextField>
                        </FormGroup>
                        <Box sx={{ my: 2 }}>
                          <Button
                            color="primary"
                            type="submit"
                            fullWidth
                            sx={{ backgroundColor: 'pink.main', color: '#FFF' }}
                            //   onClick={() => setOpenSnack(true)}
                          >
                            Proceed to Checkout
                          </Button>
                        </Box>
                        {/* <SnackAlert
                  openSnack={openSnack}
                  setOpenSnack={setOpenSnack}
                  severity="success"
                  message="Shipping Address Saved"
                /> */}
                        <Box>
                          {/* add a label to switch */}
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
                      </FormControl>
                    </FormContainer>
                  </Container>
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
