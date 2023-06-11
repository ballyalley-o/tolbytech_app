/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/user-slice'
import { setCredentials } from '../slices/auth-slice'
import Loader from '../components/Loader'
import SnackAlert from '../components/SnackAlert'
import { toast } from 'react-toastify'
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Badge,
  Alert,
  Snackbar,
  Container,
  Slide,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import FormContainer from '../components/FormCotainer'
import LoginGreeting from './defaults/LoginGreeting'
import TolbyLogoBase from './defaults/TolbyLogoBase'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'

const InputBase = styled(TextField)(({ theme }) => ({
  root: {
    '& .MuiInputBase-root': {
      backgroundColor: '#f5f5f5',
      borderRadius: 4,
      padding: '8px 12px',
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
  '& .MuiInputBase-input': {
    fontSize: '1rem',
    '&::placeholder': {
      color: '#000',
      fontWeight: 400,
      fontSize: '1em',
    },
  },
}))

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorSnackOpen, setErrorSnackOpen] = useState(null)
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
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
          <Box
            sx={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '1rem',
            }}
          >
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
                    <Grid container spacing={2} gap={1}>
                      <Grid item xs={12}>
                        <InputBase
                          label="Tolby ID"
                          name="email"
                          fullWidth
                          size="small"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputBase
                          label="Password"
                          name="password"
                          type="password"
                          fullWidth
                          size="small"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Grid>
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
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : '/register'
                    }
                  >
                    <Typography variant="caption" fontWeight="bold">
                      Create your Tolby account
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/forgot-password">
                    <Typography variant="caption">
                      Forgot your Tolby ID and password?
                      <CallMissedOutgoingIcon />
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </FormContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginScreen
