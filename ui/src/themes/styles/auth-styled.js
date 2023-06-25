/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Link, Box } from '@mui/material'
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

export const BoxBase = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  py: '2rem',
  pb: '4rem',
  height: 'auto',
  width: '400px',
  backgroundColor: '#fff',
  borderRadius: '1rem',
}))

export const FormBoxTitle = styled(Box)(({ theme }) => ({
  display: 'block',
  margin: '1rem 0 2rem 0',
  textAlign: 'center',
}))
