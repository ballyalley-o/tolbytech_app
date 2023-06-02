/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  Badge,
  Collapse,
  Drawer,
  Grid,
  TextField,
  FormControl,
  InputLabel,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { alpha, styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  color: '#1C252C',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'transparent',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: '0px',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    paddingTop: '0px',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const AvatarWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 0,
  flexShrink: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiAvatar-root': {
    width: '2rem',
    height: '2rem',
  },
}))

const NavLabelsWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
}))

const AppBarBase = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
  shadow: 'none',
  height: '30px',
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    display: 'flex',
    justifyContent: 'space-between',
    shadow: 'none',
    boxShadow: 'none',
  },
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fill: '#000',
    fontSize: '1.2rem',
  },
  '& .MuiInputBase-root': {
    color: '#000',
    marginTop: '0px',
  },
  '& .MuiBadge-badge': {
    fontSize: '8px',
    padding: '1px',
    height: '12px',
    minWidth: '12px',
    borderRadius: '50%',
  },
  '& .MuiInputBase-input:focus': {
    color: '#1c252c',
  },
  // svg component inside the IconButton
  '& .MuiIconButton-root': {
    height: '30px',
    width: '30px',
  },
}))

const pages = [
  {
    id: 1,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    label: 'Tech',
    link: '/tech',
  },
  {
    id: 3,
    label: 'Blog',
    link: '/blog',
  },
  {
    id: 4,
    label: 'Kicks',
    link: '/kicks',
  },
]
const settings = [
  {
    id: 1,
    label: 'Account',
    link: '/account',
  },
  {
    id: 2,
    label: 'Orders',
    link: '/my-orders',
  },
  {
    id: 3,
    label: 'Orders History',
    link: '/history',
  },

  {
    id: 4,
    label: 'Sign Up',
    link: '/signup',
  },
]

const TolbyNavBar = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <AppBarBase position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box>
            <Link to="/">
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
              >
                <Header />
              </IconButton>
            </Link>
            <Menu
              id="menu-appbar"
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
                display: { xs: 'flex', md: 'none', lg: 'none' },
              }}
            >
              {/* Mobile nav */}
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  component={Link}
                >
                  <Link to={page.link}>
                    <Typography variant="body1">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Large/reg screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Search
            sx={{
              backgroundColor: 'transparent',
              marginTop: '0px',
              paddingTop: '0px',
            }}
          >
            <SearchIconWrapper
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <SearchIcon />
            </SearchIconWrapper>
            <Drawer anchor="top" open={isOpen} onClose={toggleDrawer}>
              <Grid container lg={12}>
                {/* create a list */}
                <Container
                  maxWidth="md"
                  sx={{
                    marginTop: '1rem',
                    padding: '5rem',
                  }}
                >
                  <Grid
                    item
                    lg={4}
                    sx={{
                      display: 'flex-end',
                    }}
                  >
                    <FormControl>
                      {/* label for search */}
                      <Box sx={{ display: 'inline-flex' }}>
                        <Box sx={{ height: '3rem' }}>
                          <SearchIcon />
                        </Box>
                        {/* input text field */}

                        <InputBase
                          placeholder="Search Tolby.co.nz"
                          sx={{
                            fontSize: '2rem',
                            height: '3rem',
                            width: '100%',
                            paddingLeft: '1rem',
                          }}
                        />
                      </Box>
                    </FormControl>
                  </Grid>
                </Container>
              </Grid>
            </Drawer>
          </Search>

          <Typography
            variant="overline"
            sx={{ marginRight: '1rem', marginLeft: '.5rem' }}
          >
            &nbsp;
          </Typography>

          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              marginRight: { xs: '2rem', md: '0px' },
              marginLeft: 'auto',
            }}
          >
            <IconButton
              size="small"
              aria-label="show cart"
              color="inherit"
              sx={{}}
            >
              <Tooltip title="Your Cart">
                <Badge
                  badgeContent="9"
                  color="primary"
                  size="small"
                  max="9"
                  invisible={cartItems.length === 0}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <ShoppingBagOutlinedIcon />
                </Badge>

                {/* {
                cartItems.length > 0 && (<></>)
              } */}
              </Tooltip>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },

              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                padding: '0px',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              paddingLeft: '1rem',
            }}
          >
            <AvatarWrapper>
              <Tooltip title="Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Your Profile" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '5px' }}
                id="menu-appbar"
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
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <Link to={setting.link}>
                      <Typography textAlign="center">
                        {setting.label}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </AvatarWrapper>
          </Box>
        </Toolbar>
      </Container>
    </AppBarBase>
  )
}

export default TolbyNavBar
