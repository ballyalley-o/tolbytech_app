/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { CLIENT } from '../constants'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

const BackButton = ({ to }) => {
  return (
    <>
      <Link to={to}>
        <Button>
          <KeyboardDoubleArrowLeftIcon />
          <Typography>Go Back</Typography>
        </Button>
      </Link>
    </>
  )
}

BackButton.propTypes = {
  to: PropTypes.string,
}

export default BackButton
