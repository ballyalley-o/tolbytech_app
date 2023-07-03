/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async'
import SqueezePage from '../components/Squeeze/SqueezePage'

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>Tolby Technologies</title>
      </Helmet>
      <SqueezePage />
    </>
  )
}

export default HomeScreen
