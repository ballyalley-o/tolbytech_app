/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../slices/user-slice'
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
import RegisterGreeting from './defaults/RegisterGreeting'
import TolbyLogoBase from './defaults/TolbyLogoBase'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const InputBase = styled(TextField)(({ theme }) => ({
  root: {
    '& .MuiInputBase-root': {
      //   backgroundColor: '#f5f5f5',
      borderRadius: 4,
      padding: '8px 12px',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      //   color: '#555555',
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

const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  padding: '.3rem .5rem',
  '&:hover': {
    textDecoration: 'none',
    color: 'pink.main',
  },
  backgroundColor: 'pink.main',
  borderRadius: 4,
}))

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [snackOpen, setSnackOpen] = useState(null)
  const [transition, setTransition] = useState(undefined)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
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
    if (password !== confirmPassword) {
      setSnackOpen("PASSWORDS DON'T MATCH")
      handleHideDuration(2000)
    } else {
      try {
        const res = await register({ name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        setSnackOpen('Account Created', 'success')
        navigate(redirect)
      } catch (error) {
        // toast.error(error.data.message || error.message)
        setSnackOpen(error.data.message || error.message)
        handleHideDuration(2000)
      }
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }
  return (
    <>
      <Helmet>
        <title>Join Tolby</title>
      </Helmet>
      <Grid container justifyContent="center" direction="row">
        <Grid item lg={12} sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <RegisterGreeting />
            </Grid>
            <Grid item p={2} alignContent="center">
              {isLoading ? (
                <Box display="block">
                  <Loader />
                </Box>
              ) : (
                <Box justifyContent="flex-start">
                  <TolbyLogoBase height="100px" width="100px" />
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {snackOpen && (
          <SnackAlert
            open={snackOpen}
            severity="error"
            onClose={() => setSnackOpen(null)}
            message={snackOpen}
            transition="left"
            vertical="top"
            duration={2000}
            horizontal="right"
          >
            {snackOpen}
          </SnackAlert>
        )}
        <Grid item sm={12} lg={4} gap={2}>
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
            <FormContainer>
              <Box
                sx={{
                  display: 'block',
                  margin: '1rem 0 2rem 0',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Create Your Tolby ID
                </Typography>
                <Typography variant="body2">
                  One Tolby ID is all you need to access all Tolby services.
                </Typography>
              </Box>
              <Container>
                <FormControl component="form" onSubmit={handleSubmit}>
                  <FormGroup>
                    <Grid container spacing={2} gap={1}>
                      <Grid item xs={12}>
                        <InputBase
                          label="Tolby ID / Email"
                          name="email"
                          type="text"
                          fullWidth
                          size="small"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputBase
                          label="Name"
                          type="text"
                          name="name"
                          fullWidth
                          size="small"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                      <Grid item xs={12}>
                        <InputBase
                          label="Confirm Password"
                          name="password"
                          type="password"
                          fullWidth
                          size="small"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
                          fullWidth
                          sx={{ backgroundColor: 'pink.main', color: '#fff' }}
                          disabled={isLoading}
                        >
                          Register
                        </Button>
                        <Grid container justifyContent="center">
                          <Box m={1}>
                            <Typography variant="caption">
                              By continuing, you agree to Tolby's
                            </Typography>
                            <Typography></Typography>
                            <LinkBase to="/terms">
                              <Typography variant="caption">
                                Terms of Service
                              </Typography>
                            </LinkBase>

                            <Typography variant="caption">and </Typography>

                            <LinkBase to="/privacy">
                              <Typography variant="caption">
                                Privacy Policy
                              </Typography>
                            </LinkBase>
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
                {' '}
                <Grid item sx={{ display: 'block' }}>
                  <Typography variant="caption">
                    You already have a Tolby ID?
                  </Typography>
                  &nbsp;
                  <LinkBase
                    to={redirect ? `/auth?redirect=${redirect}` : '/auth'}
                    variant="caption"
                  >
                    <Typography variant="caption">Sign in</Typography>
                  </LinkBase>
                </Grid>
                <Grid item>
                  {/* <Link to="/forgot-password">
                    <Typography variant="caption">
                      Forgot your Tolby ID and password?
                      <CallMissedOutgoingIcon />
                    </Typography>
                  </Link> */}
                </Grid>
              </Grid>
            </FormContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterScreen
