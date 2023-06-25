/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Card, Button, Switch, TextField, Link } from '@mui/material'
// import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  padding: '.3rem .5rem',
  '&:hover': {
    textDecoration: 'none',
    color: 'pink.main',
  },
  backgroundColor: 'pink.main',
  borderRadius: 4,
}))
