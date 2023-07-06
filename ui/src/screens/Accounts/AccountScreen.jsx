/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Meta from '../../components/Meta/Meta'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyOrdersQuery } from '../../slices/order-slice.js'
import {
  Typography,
  FormControl,
  Grid,
  Divider,
  FormGroup,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@mui/material'
import CollapsibleTable from '../../components/Accounts/Table.jsx'
import { InputBase, ButtonBase } from '../../themes/styles/default-styled.js'
import { useAccountMutation } from '../../slices/user-slice'
import { setCredentials } from '../../slices/auth-slice'
import { CLIENT } from '../../constants'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import SnackAlert from '../../components/SnackAlert'
import { MetaTitles } from '../../constants'

const AccountScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [snackOpen, setSnackOpen] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)
  const [updateAccount, { isLoading: loadingUpdateAcccount }] =
    useAccountMutation()

  const { data: orders, isLoading, error } = useGetMyOrdersQuery()

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.response.name)
      setEmail(userInfo.response.email)
    } else {
      navigate(CLIENT.LOGIN)
    }
  }, [userInfo, userInfo.response.name, userInfo.response.email, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setSnackOpen('Passwords do not match', 'error')
    } else {
      try {
        const res = await updateAccount({
          _id: userInfo.response._id,
          name,
          email,
          password,
        }).unwrap()
        dispatch(setCredentials(res))
        setSnackOpen('Account updated', 'success')
        handleHideDuration(2000)
      } catch (error) {
        setSnackOpen(error?.response?.data.message || error?.message, 'error')
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
      <Meta title={MetaTitles.ACCOUNT} />
      <Grid container>
        <Typography variant="h1">
          Hi, {userInfo?.response?.name !== '' && userInfo?.response?.name}!
        </Typography>
      </Grid>
      <Divider />
      <Grid container direction="row">
        <Grid item md={12} m={2} mb={4}>
          <Typography variant="h6">
            Welcome to your account page. This is where you will be able to view
            your orders, update your profile, and more.
          </Typography>
        </Grid>
        {snackOpen && (
          <SnackAlert
            open={snackOpen}
            onClose={() => setSnackOpen(null)}
            message={snackOpen}
            transition="left"
            horizontal="right"
            vertical="top"
            duration={2000}
          >
            {snackOpen}
          </SnackAlert>
        )}
        <Grid item md={4}>
          <Grid container direction="column">
            <Typography variant="h3">Your Account</Typography>
            <FormControl
              component="form"
              controlId="name"
              onSubmit={handleSubmit}
            >
              <Grid container gap={1} spacing={2} my={2} mr={2}>
                <Grid item md={12}>
                  <FormGroup row>
                    <FormControl sx={{ width: '52ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-name">Name</InputLabel>
                      <InputBase
                        label="Name"
                        type="text"
                        name="name"
                        id="outlined-name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                      />
                    </FormControl>
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  <FormGroup row>
                    <FormControl sx={{ width: '52ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-name">
                        Tolby ID/ E-Mail
                      </InputLabel>
                      <InputBase
                        label=" Tolby ID/ E-Mail"
                        type="text"
                        name="email"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                      />
                    </FormControl>
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  <FormGroup row>
                    <FormControl sx={{ width: '52ch' }} variant="outlined">
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
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  {password !== '' && (
                    <FormGroup aria-autocomplete="none" row>
                      <FormControl sx={{ width: '52ch' }} variant="outlined">
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
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          fullWidth
                          size="small"
                        />
                      </FormControl>
                    </FormGroup>
                  )}
                </Grid>
              </Grid>
              <Grid item md={12} mr={2}>
                <ButtonBase type="submit" fullWidth>
                  {loadingUpdateAcccount ? <Loader /> : 'Update Account'}
                </ButtonBase>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item md={8}>
          <Grid container mx={4} direction="column" gap={2}>
            <Typography variant="h3">Orders</Typography>
            <Divider />
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">
                {error?.data?.message || error.message}
              </Message>
            ) : (
              <CollapsibleTable orders={orders} user={userInfo?.response} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AccountScreen
