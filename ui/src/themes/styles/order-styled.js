/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  objectFit: 'cover',
}))
