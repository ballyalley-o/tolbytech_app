/* eslint-disable no-unused-vars */
import {
  Card,
  Chip,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import theme from '../theme'

export const CardMediaBase = styled(CardMedia)(({ theme }) => ({
  display: 'block',
  border: '1px solid #C0C0C0',
  objectFit: 'contain',
  marginRight: '3rem',
  marginTop: '2rem',
}))

export const CardMediaTechBase = styled(CardMedia)(({ theme }) => ({
  display: 'block',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '.5em',
}))

export const CardContentBase = styled(CardContent)(({ theme }) => ({
  display: 'block',
  width: '100%',
  paddingLeft: '1rem',
  paddingTop: '2rem',
  paddingRight: '1rem',
}))

export const CardContentTechBase = styled(CardContent)(({ theme }) => ({
  display: 'block',
  width: '95%',
  height: '50px',
}))

export const BoxBase = styled(Box)(({ theme }) => ({
  display: 'block',
  width: '100%',
  paddingBottom: '1rem',
}))

export const ChipBase = styled(Chip)(({ theme, productCountInStock }) => ({
  color: productCountInStock > 0 ? '#4CAF50' : '#F44336',
  borderColor: productCountInStock > 0 ? '#4CAF50' : '#F44336',
  padding: 0,
}))

export const CartButton = styled(Button)(({ theme, productCountInStock }) => ({
  color: '#C0C0C0',
  backgroundColor: productCountInStock > 0 ? '#1c252c' : 'transparent',
  width: '25%',
  '&:hover': {
    backgroundColor: '#1c252c',
    transitionDelay: '0.4s',
    easeIn: '0.8s',
    easeOut: '0.8s',
  },
  disabled: {
    backgroundColor: 'red',
  },
}))

export const CartTypography = styled(Typography)(({ theme }) => ({
  color: '#C0C0C0',
  '&:hover': {
    display: 'none',
    easeIn: '0.8s',
    easeOut: '0.8s',
    AnimationEffect: 'ease-in',
    scrollBehavior: 'smooth',
    WebkitTransform: 'translateX(-100%)',
    MozTransform: 'translateX(-100%)',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msTransform: 'translateZ(0)',
    OTransform: 'translateZ(0)',
    transform: 'translateZ(0)',
    transitionDelay: '0.2s',
  },
}))

export const CardBase = styled(Card)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: 'flex',
  backgroundColor: 'white',
  flexDirection: 'column',
  border: '0px solid #C0C0C0',
  alignItems: 'center',
  height: '300px',
  width: '200px',
  borderRadius: '1em',
  padding: '.5rem',
  m: '1rem',
  boxShadow: 'none',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 0 20px 0 rgba(234,43,233,0.2)',
  },
}))
