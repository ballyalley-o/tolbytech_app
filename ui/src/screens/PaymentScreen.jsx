/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Box,
  Divider,
  TextField,
  Card,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FormContainer from '../components/FormCotainer'
import CheckoutSteps from '../components/CheckoutSteps'
import TolbyLogoBase from './defaults/TolbyLogoBase'

const CardBase = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  width: '50%',
  justifyContent: 'center',
  padding: '8px 12px',
  root: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    padding: '8px 12px',
    boxShadow: 'none',
    shadow: 'none',
    '& .MuiInputBase-root': {
      backgroundColor: '#f5f5f5',
      borderRadius: 4,

      boxShadow: 'none',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#555555',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#555555',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#555555',
    },
  },
}))

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const { cartItems } = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Grid item sm={12} lg={12}>
      <Typography variant="h3" pr={3} py={3} fontWeight="bold">
        Payment.
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: 'gray', display: 'inline-flex' }}
        >
          Secured.
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
          <CheckoutSteps step1 step2 step3 />
        </Grid>
        <Grid item lg={6}>
          <Typography variant="body1" pr={3} py={2} fontWeight="bold">
            Order summary: NZ$
            {cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <CardBase>
        <Grid container justifyContent="center" alignContent="center">
          <Grid item sm={12} lg={12}>
            <Grid container textAlign="center" py={2} alignContent="center">
              <Grid item direction="column" lg={4} sx={{ display: 'block' }}>
                {' '}
                <TolbyLogoBase
                  width="50px"
                  height="50px"
                  sx={{ marginBottom: -10 }}
                />
                <Typography
                  variant="h3"
                  sx={{ zIndex: 1, textAlign: 'center' }}
                >
                  Pay
                </Typography>
              </Grid>
              <Grid item sm={12} lg={6} center>
                <Grid container alignText="center">
                  <Typography variant="h4">How do you want to Pay? </Typography>
                </Grid>
              </Grid>
            </Grid>
            <FormContainer>
              <FormControl>
                <FormGroup>
                  <FormControlLabel
                    label="PayPal or Credit Card"
                    control={
                      <Checkbox
                        checked={paymentMethod === 'PayPal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value="PayPal"
                        name="paymentMethod"
                        color="primary"
                      />
                    }
                  />
                  <FormControlLabel
                    label="Google Pay"
                    control={
                      <Checkbox
                        checked={paymentMethod === 'Google Pay'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value="Google Pay"
                        name="paymentMethod"
                        color="primary"
                      />
                    }
                  />
                  <FormControlLabel
                    label="Bank transfer"
                    control={
                      <Checkbox
                        checked={paymentMethod === 'Bank transfer'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value="Bank transfer"
                        name="paymentMethod"
                        color="primary"
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
            </FormContainer>
          </Grid>
        </Grid>
      </CardBase>
    </Grid>
  )
}

export default PaymentScreen
