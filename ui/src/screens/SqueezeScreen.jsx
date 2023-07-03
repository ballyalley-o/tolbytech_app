/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async'
import LandingPage from './defaults/LandingPage.jsx'

const SqueezeScreen = () => {
  return (
    <>
      <Helmet>
        <title>Tolby Technologies</title>
      </Helmet>
      <LandingPage />
    </>
  )
}

export default SqueezeScreen
