/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Meta from '../../components/Meta/Meta'
import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../../slices/user-slice'
import { setCredentials } from '../../slices/auth-slice'
import {
  FormControl,
  FormGroup,
  Grid,
  Typography,
  Box,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
} from '@mui/material'
import { InputBase, ButtonBase } from '../../themes/styles/default-styled.js'
import {
  LinkBase,
  BoxBase,
  FormBoxTitle,
} from '../../themes/styles/auth-styled.js'
import { styled } from '@mui/material/styles'
import FormContainer from '../../components/FormContainer'
import Loader from '../../components/Loader'
import SnackAlert from '../../components/SnackAlert'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import RegisterGreeting from '../defaults/RegisterGreeting'
import TolbyLogoBase from '../defaults/TolbyLogoBase'
import { CLIENT, MetaTitles } from '../../constants'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [snackOpen, setSnackOpen] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Meta title={MetaTitles.SIGNIN} />
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
          <BoxBase>
            <FormContainer>
              <FormBoxTitle>
                <Typography variant="h6" fontWeight="bold">
                  Create Your Tolby ID
                </Typography>
                <Typography variant="body2">
                  One Tolby ID is all you need to access all Tolby services.
                </Typography>
              </FormBoxTitle>
              <Container>
                <FormControl component="form" onSubmit={handleSubmit}>
                  <FormGroup>
                    <Grid container gap={1}>
                      <Grid item xs={12}>
                        <FormControl
                          sx={{ m: 1, width: '40ch' }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-Tolby-ID">
                            Tolby ID / Email
                          </InputLabel>
                          <InputBase
                            label="Tolby ID / Email"
                            name="email"
                            type="text"
                            fullWidth
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          sx={{ m: 1, width: '40ch' }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-name">Name</InputLabel>
                          <InputBase
                            label="Name"
                            type="text"
                            name="name"
                            fullWidth
                            size="small"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          sx={{ m: 1, width: '40ch' }}
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
                            fullWidth
                            size="small"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          sx={{ m: 1, width: '40ch' }}
                          variant="outlined"
                        >
                          <InputLabel htmlFor="outlined-adornment-password">
                            Confirm Password
                          </InputLabel>
                          <InputBase
                            label="Confirm Password"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  aria-label="toggle password visibility"
                                  edge="end"
                                >
                                  {showConfirmPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            name="password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            fullWidth
                            size="small"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        margin={3}
                        justifyContent="center"
                        textAlign="center"
                      >
                        <ButtonBase
                          type="submit"
                          fullWidth
                          sx={{ backgroundColor: 'pink.main', color: '#fff' }}
                          disabled={isLoading}
                        >
                          Register
                        </ButtonBase>
                        <Grid container justifyContent="center">
                          <Box m={1}>
                            <Typography variant="caption">
                              By continuing, you agree to Tolby's
                            </Typography>
                            <Typography></Typography>
                            <LinkBase href={CLIENT.TERMS}>
                              <Typography variant="caption">
                                Terms of Service
                              </Typography>
                            </LinkBase>

                            <Typography variant="caption">and </Typography>

                            <LinkBase href={CLIENT.PRIVACY}>
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
                <Grid item sx={{ display: 'block' }}>
                  <Typography variant="caption">
                    You already have a Tolby ID?
                  </Typography>
                  &nbsp;
                  <LinkBase
                    href={redirect ? CLIENT.LOGIN_REDIRECT : CLIENT.LOGIN_URL}
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
          </BoxBase>
        </Grid>
      </Grid>
    </>
  )
}

export default RegisterScreen
