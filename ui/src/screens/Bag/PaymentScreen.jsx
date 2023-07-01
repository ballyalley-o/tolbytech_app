/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../../slices/cart-slice'
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Divider,
} from '@mui/material'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
import TolbyLogoBase from '../defaults/TolbyLogoBase'
import { CLIENT } from '../../constants'
import { CardBase, ButtonBase } from '../../themes/styles/bag-styled'
import Heading from '../../components/Heading'

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!shippingAddress) {
      navigate(CLIENT.SHIPPING_URL)
    }
  }, [shippingAddress, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate(CLIENT.BAGCONFIRM_URL)
  }
  return (
    <Grid container>
      <Helmet>
        <title>Secured Payment</title>
      </Helmet>
      <Heading title="Payment." subTitle="Secured." />
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
            {cart.cartItems
              .reduce((acc, item) => acc + item.price * item.qty, 0)
              .toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid item textAlign="center" m={3}>
        <Typography variant="h4">Select the Payment Method </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        direction="row"
        sx={{ padding: 5 }}
      >
        <CardBase>
          <FormContainer>
            <FormControl component="form" onSubmit={handleSubmit}>
              <Grid item lg={12} padding={5}>
                <Grid container justifyContent="center" alignContent="center">
                  <TolbyLogoBase width="50px" height="50px" />
                  <Divider sx={{ width: '100%' }}>
                    <Typography
                      variant="h3"
                      sx={{ zIndex: 1, textAlign: 'center' }}
                    >
                      Pay
                    </Typography>
                  </Divider>
                </Grid>
              </Grid>
              <Grid item lg={12} align="center" sx={{ margin: 'auto' }}>
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
                    label="Stripe"
                    control={
                      <Checkbox
                        checked={paymentMethod === 'Stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value="Stripe"
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
              </Grid>
              <Grid item m={5}>
                <ButtonBase
                  type="submit"
                  color="pink"
                  fullWidth
                  sx={{ backgroundColor: 'pink.main', color: '#FFF' }}
                >
                  Proceeed to Payment
                </ButtonBase>
              </Grid>
            </FormControl>
          </FormContainer>
        </CardBase>
      </Grid>
    </Grid>
  )
}

export default PaymentScreen
