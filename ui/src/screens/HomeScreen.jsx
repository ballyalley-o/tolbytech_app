/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Typography } from '@mui/material'
import SqueezePage from '../components/Squeeze/SqueezePage'
import SpaceTaker from '../components/SpaceTaker'
import Meta from '../components/Meta/Meta'

const HomeScreen = () => {
  return (
    <>
      <Meta />
      <SpaceTaker />
      <SqueezePage />
    </>
  )
}

export default HomeScreen
