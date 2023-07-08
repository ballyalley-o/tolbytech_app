/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import Meta from '../../components/Meta/Meta'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../slices/user-slice'
import { setCredentials } from '../../slices/auth-slice'
import { CLIENT } from '../../constants'
import Loader from '../../components/Loader'
import SnackAlert from '../../components/SnackAlert'
import SpaceTaker from '../../components/SpaceTaker'
import {
  FormControl,
  FormGroup,
  Button,
  Grid,
  Typography,
  Box,
  Badge,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@mui/material'
import {
  InputBase,
  StyledLoginBox,
} from '../../themes/styles/default-styled.js'
import FormContainer from '../../components/FormContainer'
import LoginGreeting from '../defaults/LoginGreeting'
import TolbyLogoBase from '../defaults/TolbyLogoBase'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { MetaTitles } from '../../constants'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorSnackOpen, setErrorSnackOpen] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [transition, setTransition] = useState(undefined)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()

  const sp = new URLSearchParams(search)

  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('login')
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      setErrorSnackOpen('LOGGED IN')
      navigate(redirect)
    } catch (error) {
      // toast.error(error.data.message || error.message)
      setErrorSnackOpen(error.data.message || error.message)
      handleHideDuration(2000)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setErrorSnackOpen(null)
    }, duration)
  }

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Meta title={MetaTitles.SIGNIN} />
      <Grid container justifyContent="flex-inline" direction="row">
        <Grid item lg={8} sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <LoginGreeting />
        </Grid>
        {errorSnackOpen && (
          <SnackAlert
            open={errorSnackOpen}
            severity="error"
            onClose={() => setErrorSnackOpen(null)}
            message={errorSnackOpen}
            transition="left"
            vertical="top"
            duration={2000}
            horizontal="right"
          >
            {errorSnackOpen}
          </SnackAlert>
        )}
        <Grid item sm={12} lg={4} gap={2}>
          <StyledLoginBox>
            <FormContainer>
              <Box marginTop={-8}>
                {isLoading ? (
                  <Box display="block">
                    <Loader />
                  </Box>
                ) : (
                  <TolbyLogoBase />
                )}
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'block',
                  flexDirection: 'row',
                  margin: '1rem 0 2rem 0',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Sign In to Tolby
                </Typography>
                <Typography variant="body2">Manage your account</Typography>
              </Box>
              <Container maxWidth="xs">
                <FormControl component="form" onSubmit={handleSubmit}>
                  <FormGroup>
                    <Grid container gap={1}>
                      <FormControl
                        sx={{ m: 1, width: '37ch' }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-email">
                          Tolby ID
                        </InputLabel>
                        <InputBase
                          label="Tolby ID"
                          name="email"
                          value={email}
                          size="small"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                      <FormControl
                        sx={{ m: 1, width: '37ch' }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <InputBase
                          label="Password"
                          id="outlined-adornment-password"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          size="small"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormControl>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        margin={3}
                        justifyContent="center"
                        textAlign="center"
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{ backgroundColor: 'pink.main', color: '#fff' }}
                          disabled={isLoading}
                        >
                          Sign In
                        </Button>
                        <Grid container>
                          <Box m={1}>
                            <Typography variant="caption">
                              By continuing, you agree to Tolby's{' '}
                              <Link to="#">
                                <Badge>Conditions of Use</Badge>
                              </Link>{' '}
                              and{' '}
                              <Link to="#">
                                <Badge>Privacy Notice</Badge>
                              </Link>
                              .
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={10}></Grid>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </FormControl>
              </Container>
              <hr />
              <Grid
                container
                display="block"
                spacing={3}
                justifyContent="center"
                textAlign="center"
                alignContent="center"
              >
                <Grid item>
                  <Typography variant="caption">
                    New to Tolby? &nbsp;
                  </Typography>
                  <Link to={CLIENT.REGISTER_REDIRECT}>
                    {/* redirect ? `/register?redirect=${redirect}` : '/register' */}
                    <Typography variant="caption" fontWeight="bold">
                      Create your Tolby account
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={CLIENT.FORGOT_PASSWORD}>
                    <Typography variant="caption">
                      Forgot your Tolby ID and password?
                      <CallMissedOutgoingIcon />
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </FormContainer>
          </StyledLoginBox>
          <SpaceTaker />
        </Grid>
      </Grid>
    </>
  )
}

export default LoginScreen
