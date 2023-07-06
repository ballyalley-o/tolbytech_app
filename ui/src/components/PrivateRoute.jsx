/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CLIENT } from '../constants'

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  return userInfo ? <Outlet /> : <Navigate to={CLIENT.LOGIN_URL} replace />
}

export default PrivateRoute
