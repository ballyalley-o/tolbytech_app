/* eslint-disable no-unused-vars */
import * as React from 'react'
import Header from '../Header.jsx'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  InputBase,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#1c252c',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  color: '#1c252c',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: '#1c252c',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const AppBarBase = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#C0C0C0',
  color: '#ffffff',
  '& .MuiSvgIcon-root': {
    fill: '#9a886b',
  },
  '& .MuiInputBase-root': {
    color: '#9a886b',
  },
  '& .MuiInputBase-input': {
    color: '#1c252c',
  },
  '& .MuiInputBase-input:hover': {
    color: '#ff6600',
  },
  '& .MuiInputBase-input:focus': {
    color: '#1c252c',
  },
  '& .MuiInputBase-input:active': {
    color: '#ff6600',
  },
  '& .MuiInputBase-input.Mui-focused': {
    color: '#ff6600',
  },
}))

const TolbyNavBar = () => {
  return (
    <AppBarBase position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <Header />
          {/* <MenuIcon /> */}
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBarBase>
  )
}

export default TolbyNavBar
