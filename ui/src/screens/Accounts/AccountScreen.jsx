/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const AccountScreen = () => {
  const {
    userInfo: {
      response: { name },
    },
  } = useSelector((state) => state.auth)

  return (
    <>
      <Helmet>
        <title>Tolby | Account</title>
      </Helmet>
      <Typography variant="h1">Hi, {name}!</Typography>
      <Typography variant="h6">
        Welcome to your account page. This is where you will be able to view
        your orders, update your profile, and more.
      </Typography>
    </>
  )
}

export default AccountScreen
