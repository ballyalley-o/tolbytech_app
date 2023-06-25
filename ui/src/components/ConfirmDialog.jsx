/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { Divider } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ButtonBase, DialogBase } from '../themes/styles/default-styled'
import { useTheme } from '@mui/material/styles'

export default function ConfirmDialog({
  title,
  open,
  content,
  onClose,
  action,
  ...other
}) {
  const theme = useTheme()
  //   const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      <DialogBase
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={onClose}
        {...other}
        sx={{ p: 0 }}
      >
        <DialogTitle>{title}</DialogTitle>
        <Divider />
        {content && (
          <DialogContent sx={{ typography: 'body1', p: 2 }}>
            {content}
          </DialogContent>
        )}
        <DialogActions>
          {action}
          <ButtonBase color="info" onClick={onClose}>
            Cancel
          </ButtonBase>
        </DialogActions>
      </DialogBase>
    </div>
  )
}

ConfirmDialog.propTypes = {
  title: PropTypes.node,
  open: PropTypes.bool,
  content: PropTypes.node,
  action: PropTypes.node,
  onClose: PropTypes.func,
}
