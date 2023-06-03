/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
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
  Drawer,
  Grid,
  FormControl,
  InputAdornment,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import { alpha, styled } from '@mui/material/styles'

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
  width: '100px',
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    // auto focus
    '&:focus': {
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

const DrawerBase = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paperAnchorTop': {
    top: '0px',
    height: '30vh',
    width: '100%',
    boxShadow: 'none',
  },
  drawerBackground: {
    backgroundColor: '#FFF',
    backdropFilter: 'blur(10px)',
  },
  '& .MuiDrawer-paper': {
    backgroundColor: '#FFF',
    backdropFilter: 'blur(10px)',
  },
  '& .MuiDrawer-paperAnchorDockedTop': {
    marginTop: '0px',
    backgroundColor: '#FFF',
  },
  WebkitBackdropFilter: 'blur(10px)',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.97)',
  scrollBehavior: 'smooth',
  animation: 'fadeInUp .5s ease-in-out',
  transition: 'all .5s ease-in-out',
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
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
    '&:focus': {
      color: '#1c252c',
    },
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
  const [searchValue, setSearchValue] = useState('')

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
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

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
  }

  useEffect(() => {
    if (isOpen) {
      //  other events
      document.addEventListener('mousedown', closeDrawer)
    } else {
      document.removeEventListener('mousedown', closeDrawer)
    }
    return () => {
      document.removeEventListener('mousedown', closeDrawer)
    }
  }, [isOpen])

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
              marginLeft: { xs: '2rem', md: '0rem' },
            }}
          >
            <SearchIconWrapper
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: isOpen ? 'none' : 'block', padding: '0px' }}
            >
              <SearchOutlinedIcon />
            </SearchIconWrapper>
            <DrawerBase
              anchor="top"
              open={isOpen}
              onClose={closeDrawer || toggleDrawer}
              ModalProps={{
                disableEnforceFocus: true,
                disableRestoreFocus: true,
                disableAutoFocus: true,
                disablePortal: false,
                BackdropProps: {
                  sx: {
                    backgroundColor: 'transparent',
                  },
                },
              }}
            >
              <Grid container>
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
                    lg={12}
                    sx={{
                      display: 'flex-end',
                    }}
                  >
                    <FormControl>
                      <Box sx={{ display: 'inline-flex' }}>
                        <Box sx={{ height: '3rem' }}>
                          <SearchOutlinedIcon />
                        </Box>
                        <Box>
                          <StyledInputBase
                            placeholder="Search Tolby.co.nz"
                            autoFocus={true}
                            showSearch={true}
                            allowClear={true}
                            allowCancel={true}
                            autoCorrect={true}
                            onChange={handleInputChange}
                            endAdornment={
                              searchValue && (
                                <InputAdornment position="end">
                                  <IconButton
                                    edge="end"
                                    onClick={handleClearSearch}
                                  >
                                    <BackspaceOutlinedIcon size="sm" />
                                  </IconButton>
                                </InputAdornment>
                              )
                            }
                            // onChange={handleSearchChange}
                            sx={{
                              fontSize: '2rem',
                              height: '3rem',
                              width: '100%',
                              paddingLeft: '1rem',
                            }}
                          />
                        </Box>
                      </Box>
                    </FormControl>
                  </Grid>
                </Container>
              </Grid>
            </DrawerBase>
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
            <Link to="/cart">
              <IconButton size="small" aria-label="show cart" color="inherit">
                <Tooltip title="Your Cart">
                  {cartItems.length > 0 && (
                    <Badge
                      badgeContent={cartItems.reduce(
                        (acc, item) => acc + item.qty,
                        0
                      )}
                      color="primary"
                      size="small"
                      max={9}
                      invisible={cartItems.length === 0}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    >
                      <ShoppingBagOutlinedIcon />
                    </Badge>
                  )}
                </Tooltip>
              </IconButton>
            </Link>
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
