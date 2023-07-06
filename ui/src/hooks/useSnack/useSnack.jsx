/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import SnackAlert from '../../components/SnackAlert'

const useSnack = () => {
  const [snackOpen, setSnackOpen] = useState(null)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('success')

  const handleSnackOpen = () => {
    setMessage(message)
    setSeverity(severity)
    setSnackOpen(true)
  }

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  useEffect(() => {
    if (snackOpen) {
      const timer = setTimeout(() => {
        setSnackOpen(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [snackOpen])

  return {
    snackOpen,
    handleSnackOpen,
    handleSnackClose,
    handleHideDuration,
    message,
    setMessage,
    severity,
    setSeverity,
  }
}

export default useSnack
