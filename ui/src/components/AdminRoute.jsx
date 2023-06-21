/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CLIENT } from '../constants'

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  return userInfo && userInfo.response.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={CLIENT.LOGIN_URL} replace />
  )
}

export default AdminRoute
