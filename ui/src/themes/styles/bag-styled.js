/* eslint-disable no-unused-vars */
import { Card, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardBase = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  width: '50%',
  justifyContent: 'center',
  padding: '8px 12px',
  root: {
    // backgroundColor: '#f5f5f5',
    borderRadius: ' 20px',
    '& .MuiInputBase-root': {
      backgroundColor: '#f5f5f5',
      borderRadius: 4,

      boxShadow: 'none',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#555555',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#555555',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#555555',
    },
  },
}))

export const ButtonBase = styled(Button)(({ theme }) => ({
  backgroundColor: 'pink.main',
  color: '#FFF',
  fontWeight: 600,
  '&:hover': {
    color: '#000',
  },
}))
