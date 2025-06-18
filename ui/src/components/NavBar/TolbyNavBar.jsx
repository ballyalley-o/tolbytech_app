/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  Chip,
} from '@mui/material'
import {
  AvatarWrapper,
  AppBarBase,
  StyledBagBox,
} from '../../themes/styles/nav-styled.js'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { BtnTitles, CLIENT } from '../../constants.js'
import { MdAdminPanelSettings } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { BiStore } from 'react-icons/bi'
import CustomAvatar from '../CustomAvatar.jsx'
import SearchNav from './SearchNav.jsx'

const pages = [
  {
    id: 1,
    label: 'Tech',
    link: CLIENT.TECH_URL,
  },
  // {
  //   id: 3,
  //   label: 'Talks',
  //   link: CLIENT.TALKS_URL,
  // },
  // {
  //   id: 4,
  //   label: 'Kicks',
  //   link: CLIENT.KICKS_URL,
  // },
]
const settings = [
  {
    id: 1,
    label: 'Account',
    link: CLIENT.ACCOUNT_URL,
  },
  {
    id: 3,
    label: 'Orders History',
    link: CLIENT.HISTORY_URL,
  },
]

const TolbyNavBar = () => {
  const { cartItems }                   = useSelector((state) => state.cart)
  const { userInfo }                    = useSelector((state) => state.auth)
  const dispatch                        = useDispatch()
  const navigate                        = useNavigate()
  const [logoutCall]                    = useLogoutMutation()
  const [anchorElNav, setAnchorElNav]   = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [expanded, setExpanded]         = useState(false)
  const [isOpen, setIsOpen]             = useState(false)
  const [snackOpen, setSnackOpen]       = useState(false)
  const [searchValue, setSearchValue]   = useState('')
  const [isSignedIn, setIsSignedIn]     = useState(false)

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
          <SearchNav />

          <Typography
            variant="overline"
            sx={{ marginRight: '1rem', marginLeft: '.5rem' }}
          >
            &nbsp;
          </Typography>

          {/* bag  */}
          <StyledBagBox>
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
          </StyledBagBox>
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
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.3 }}>
                    <CustomAvatar name={userInfo?.response?.name} />
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
                  <MenuItem title={userInfo?.response?.name} id="username">
                    <Typography textAlign="center">
                     {userInfo?.response?.name}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  {userInfo && userInfo?.response?.isAdmin && (
                    <>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link to={CLIENT.ADMIN_ORDERS_URL}>
                          <Typography textAlign="right">
                            <MdAdminPanelSettings /> &nbsp; Orders
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link to={CLIENT.ADMIN_USERS_URL}>
                          <Typography textAlign="right">
                            <FaUsers />
                            &nbsp; Users
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Link to={CLIENT.ADMIN_PRODUCTS_URL}>
                          <Typography textAlign="right">
                            <BiStore />
                            &nbsp; Products
                          </Typography>
                        </Link>
                      </MenuItem>
                      <Divider />
                    </>
                  )}

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
                  {BtnTitles.SIGN_IN}
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
