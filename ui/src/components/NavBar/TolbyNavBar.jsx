/* eslint-disable no-unused-vars */
import * as React from 'react'
import Header from '../Header.jsx'
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  InputBase,
  Menu,
  MenuItem,
  Container,
  Box,
  Tooltip,
  Avatar,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
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
  justifyContent: 'center',
  color: '#000',
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

const pages = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Gadgets',
    link: '/gadgets',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Sign In']

const TolbyNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBarBase position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleOpenNavMenu}
            >
              <Header />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Button}
                  to={page.link}
                >
                  <Typography variant='h6'>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ paddingRight: '1rem' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                to={page.link}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <IconButton size='small' aria-label='show cart' color='inherit'>
            <Tooltip title='Your Cart'>
              <ShoppingBagIcon />
            </Tooltip>
          </IconButton>
          <Typography
            variant='overline'
            sx={{ marginRight: '1rem', marginLeft: '.5rem' }}
          >
            &nbsp;
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Your Profile' src='' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBarBase>
  )
}

export default TolbyNavBar
