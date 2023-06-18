/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../../slices/user-slice.js'
import { logout } from '../../slices/auth-slice.js'
import SnackAlert from '../SnackAlert.jsx'
import Header from '../Header.jsx'
import {
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Container,
  Box,
  Tooltip,
  Divider,
  Button,
  Badge,
  Grid,
  FormControl,
  InputAdornment,
} from '@mui/material'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DrawerBase,
  AvatarWrapper,
  AppBarBase,
} from '../../themes/styles/nav-styled.js'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import CustomAvatar from '../CustomAvatar.jsx'
import { CLIENT } from '../../constants.js'

const pages = [
  {
    id: 1,
    label: 'Home',
    link: CLIENT.HOME_URL,
  },
  {
    id: 2,
    label: 'Tech',
    link: CLIENT.TECH_URL,
  },
  {
    id: 3,
    label: 'Talks',
    link: CLIENT.TALKS_URL,
  },
  {
    id: 4,
    label: 'Kicks',
    link: CLIENT.KICKS_URL,
  },
]
const settings = [
  {
    id: 1,
    label: 'Account',
    link: CLIENT.ACCOUNT_URL,
  },
  {
    id: 2,
    label: 'Orders',
    link: CLIENT.ORDERS_URL,
  },
  {
    id: 3,
    label: 'Orders History',
    link: CLIENT.HISTORY_URL,
  },
]

const TolbyNavBar = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutCall] = useLogoutMutation()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

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

  const handleLogout = async () => {
    try {
      await logoutCall().unwrap()
      dispatch(logout())
      navigate(CLIENT.LOGIN_URL)
      setSnackOpen('Logout successful')
      handleHideDuration(2000)
    } catch (error) {
      console.log(error)
    }
  }

  const handleHideDuration = (duration) => {
    setTimeout(() => {
      setSnackOpen(null)
    }, duration)
  }

  useEffect(
    (userInfo) => {
      if (userInfo) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
    },
    [userInfo]
  )

  useEffect(() => {
    if (searchValue.length > 0) {
      document.addEventListener('mousedown', handleClearSearch)
    } else {
      document.removeEventListener('mousedown', handleClearSearch)
    }

    if (isOpen && searchValue.length === 0) {
      document.addEventListener('mousedown', closeDrawer)
    } else {
      document.removeEventListener('mousedown', closeDrawer)
    }
    return () => {
      document.removeEventListener('mousedown', closeDrawer)
    }
  }, [isOpen, searchValue.length])

  return (
    <AppBarBase position="sticky">
      <Container maxWidth="md">
        {snackOpen && (
          <SnackAlert
            open={snackOpen}
            onClose={() => setSnackOpen(null)}
            message={snackOpen}
            transition="left"
            vertical="top"
            duration={2000}
            horizontal="right"
          >
            {snackOpen}
          </SnackAlert>
        )}
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
              popperprops={{
                disablePortal: true,
              }}
              onPointerEnter={handleOpenNavMenu}
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

          {/* search bar */}
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
                      {searchValue && (
                        <Box sx={{ marginLeft: '3rem' }}>
                          <Typography variant="body2">
                            Search Tolby.co.nz
                          </Typography>
                        </Box>
                      )}

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
                            value={searchValue}
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

          {/* bag  */}
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              marginRight: { xs: '2rem', md: '0px' },
              marginLeft: 'auto',
            }}
          >
            <Link to={CLIENT.BAG_URL}>
              <Tooltip title="Your Bag">
                <IconButton size="small" aria-label="show cart" color="inherit">
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
                    sx={{
                      '& .MuiBadge-badge': {
                        fontSize: cartItems.length > 8 ? '7px' : '8px',
                      },
                    }}
                  >
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
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
          {userInfo ? (
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                paddingLeft: '1rem',
              }}
            >
              <AvatarWrapper>
                <Tooltip title="Account & Settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <CustomAvatar name={userInfo.response.name} />
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
                  <MenuItem title={userInfo.response.name} id="username">
                    <Typography textAlign="center">
                      Hi &nbsp;{userInfo.response.name},
                    </Typography>
                  </MenuItem>
                  <Divider />
                  {settings.map((setting) => (
                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                      <Link to={setting.link}>
                        <Typography textAlign="center">
                          {setting.label}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleLogout}>
                    <Link to={CLIENT.LOGOUT_URL}>
                      <Typography textAlign="center">Logout</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </AvatarWrapper>
            </Box>
          ) : (
            <Box>
              <Link to={CLIENT.LOGIN_URL} onClick={handleCloseNavMenu}>
                <Button
                  disabled={CLIENT.LOGIN_URL === location.pathname}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBarBase>
  )
}

export default TolbyNavBar
