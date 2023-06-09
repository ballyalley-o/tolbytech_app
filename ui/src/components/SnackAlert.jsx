/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Snackbar, Slide } from '@mui/material'

const SnackAlert = ({
  children,
  severity,
  duration,
  transition,
  vertical,
  horizontal,
  ...props
}) => {
  function Transition(props) {
    return <Slide {...props} direction={transition} />
  }

  return (
    <>
      <Snackbar
        open={true}
        autoHideDuration={duration}
        TransitionComponent={(props) => (
          <Transition {...props} direction={transition} />
        )}
        anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
      >
        <Alert severity={severity}>{children}</Alert>
      </Snackbar>
    </>
  )
}

SnackAlert.propTypes = {
  children: PropTypes.node,
  severity: PropTypes.string,
  duration: PropTypes.number,
  transition: PropTypes.string,
  horizontal: PropTypes.string,
  vertical: PropTypes.string,
}

SnackAlert.defaultProps = {
  vertical: 'top',
  horizontal: 'right',
  transition: 'left',
  duration: 2000,
}

export default SnackAlert
