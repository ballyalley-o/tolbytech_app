/* eslint-disable no-unused-vars */
import {
  AppBar,
  Box,
  InputBase,
  IconButton,
  Drawer,
  TextField,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

export const Search = styled('div')(({ theme }) => ({
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
  marginTop: '0px',
  paddingTop: '0px',
}))

export const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'transparent',
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
    fontSize: '2rem',
    height: '3rem',
    paddingLeft: '1rem',
  },
}))

export const DrawerBase = styled(Drawer)(({ theme }) => ({
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
export const AvatarWrapper = styled(Box)(({ theme }) => ({
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

export const AppBarBase = styled(AppBar)(({ theme }) => ({
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

export const StyledBagBox = styled(Box)(({ theme }) => ({
  display: { xs: 'block', md: 'flex' },
  marginRight: { xs: '2rem', md: '0px' },
  marginLeft: 'auto',
}))
