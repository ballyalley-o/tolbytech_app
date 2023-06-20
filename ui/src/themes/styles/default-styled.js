/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import {
  Card,
  Button,
  Link,
  Switch,
  TextField,
  OutlinedInput,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardBase = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  border: '1px solid #D4D4D4',
  margin: '1rem 1rem',
  root: {
    borderRadius: '20px',
    '& .MuiInputBase-root': {
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
      boxShadow: 'none',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#555555',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#555555',
    },
  },
}))

export const ButtonBase = styled(Button)(({ theme }) => ({
  display: 'block',
  backgroundColor: theme.palette.primary.main,
  color: '#FFF',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'pink.main',
    color: '#000',
  },
}))

// export const ButtonBase = styled(Button)(({ theme }) => ({
//   backgroundColor: 'pink.main',
//   color: '#FFF',
//   fontWeight: 600,
//   '&:hover': {
//     backgroundColor: 'pink.dark',
//     color: '#000',
//   },
// }))

export const LinkBase = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 600,
  border: '1px solid #000',
  padding: '.3rem .5rem',
  borderRadius: '1em',
  cursor: 'pointer',
}))

export const InputBase = styled(OutlinedInput)(({ theme }) => ({
  py: 0,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },

    '&:hover fieldset': {
      borderColor: '#000',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
    '& .MuiInputBase-input': {
      fontSize: '1rem',
      '&::placeholder': {
        color: '#000',
        fontWeight: 400,
        fontSize: '1em',
      },
    },
  },
}))

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 4,
  display: 'flex-inline',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

// export const InputBase = styled(TextField)(({ theme }) => ({
//   root: {
//     '& .MuiInputBase-root': {
//       backgroundColor: '#f5f5f5',
//       borderRadius: 4,
//       padding: '8px 12px',
//     },
//     '& .MuiFormLabel-root.Mui-focused': {
//       color: '#555555',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: '#555555',
//     },
//     '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
//       borderBottomColor: '#555555',
//     },
//   },
//   '& .MuiInputBase-input': {
//     fontSize: '1rem',
//     '&::placeholder': {
//       color: '#000',
//       fontWeight: 400,
//       fontSize: '1em',
//     },
//   },
// }))
