/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyOrdersQuery } from '../../slices/order-slice.js'
import { Helmet } from 'react-helmet-async'
import {
  Typography,
  FormControl,
  Grid,
  Divider,
  FormGroup,
} from '@mui/material'
import CollapsibleTable from '../../components/Accounts/Table.jsx'
import { InputBase, ButtonBase } from '../../themes/styles/default-styled.js'
import { useAccountMutation } from '../../slices/user-slice'
import { setCredentials } from '../../slices/auth-slice'
import { CLIENT, SERVER_URL } from '../../constants'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import SnackAlert from '../../components/SnackAlert'

const AccountScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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

  return (
    <>
      <Helmet>
        <title>Tolby | Account</title>
      </Helmet>
      <Grid container>
        <Typography variant="h1">
          Hi, {userInfo.response.name !== '' && userInfo.response.name}!
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
                    <InputBase
                      label="Name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  <FormGroup row>
                    <InputBase
                      label="Email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  <FormGroup row>
                    <InputBase
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                  </FormGroup>
                </Grid>
                <Grid item md={12}>
                  {password !== '' && (
                    <FormGroup aria-autocomplete="none" row>
                      <InputBase
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        fullWidth
                      />
                    </FormGroup>
                  )}
                </Grid>
                <Grid item md={12}>
                  <ButtonBase type="submit" fullWidth>
                    {loadingUpdateAcccount ? <Loader /> : 'Update Account'}
                  </ButtonBase>
                </Grid>
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
              <CollapsibleTable orders={orders} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AccountScreen
