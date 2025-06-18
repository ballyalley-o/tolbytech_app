/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import {
  Card,
  Grid,
  Button,
  Link,
  Switch,
  Box,
  OutlinedInput,
  Dialog,
  Container,
  Typography,
  CardMedia,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardBase = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  // border: '1px solid #D4D4D4',
  margin: '1rem 1rem',
  display: 'block',
  width: '100%',

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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },

    '&:hover fieldset': {
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
    '&.Mui-focused': {
      backgroundColor: 'red',
      color: '#000',
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

export const DialogBase = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(2px)',
  },
  '& .MuiDrawer-paper': {
    backgroundColor: '#FFF',
    backdropFilter: 'blur(5px)',
  },
  '& .MuiDrawer-paperAnchorDockedTop': {
    marginTop: '0px',
    backgroundColor: '#FFF',
  },
  WebkitBackdropFilter: 'blur(5px)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
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

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '2rem 0',
  paddingBottom: '4rem',
  height: 'auto',
  width: { xs: '100%', sm: '100%', md: '100%', lg: '30%' },
  backgroundColor: '#fff',
  borderRadius: '1rem',
}))

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
}))

//  login box
export const StyledLoginBox = styled(Box)(({ theme }) => ({
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  height         : 'auto',
  margin         : 'auto',
  width          : '100%',
  // backgroundColor: '#fff',
  borderRadius   : '1rem',
}))

// ----------------- Landing Page -----------------
export const ContainerLandingBase = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',
  alignText: 'center',
  height: '100vh'
}))

export const ExtraLargeTypesBase = styled(Typography)(({ theme }) => ({
  fontSize: '10rem',
  fontWeight: 'bold',
  background: `linear-gradient(90deg, #F2e121 0%, #FF0000 33%, #FF0060 66%, #FF0000 100%)`,
}))

export const SubExtraLargeTypesBase = styled(Typography)(({ theme }) => ({
  fontSize: '10rem',
  fontWeight: 'bold',
  background: `linear-gradient(90deg, #F2e121 0%, #FF0000 33%, #FF0060 66%, #FF0000 100%)`,
  fontFamily: 'Dynalight',
  display: 'inline-flex',
  position: 'absolute',
  zIndex: -1,
  top: '450px',
  left: '250px',
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  zIndex: -1,
  position: 'absolute',
  objectFit: 'fill',
  float: 'left',
  right: 0,
  top: 0,
  width: 'auto',
  height: '100%',
}))

export const StyledSubCardMedia = styled(CardMedia)(({ theme }) => ({
  zIndex: -2,
  position: 'absolute',
  objectFit: 'fill',
  float: 'left',
  left: 0,
  top: 0,
  width: 'auto',
  height: '100vh',
}))

export const LogoContainerBase = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
}))

export const LogoBase = styled('img')(({ theme }) => ({
  width: '400px',
  height: '400px',
  position: 'absolute',
  right: '40px',
  top: '190px',
  alignContent: 'right',
  zIndex: 1,
  animation: 'ease-in-out 1s',
  animationName: '$fadeIn',
  pointerEvents: 'none',
}))

// @root - Footer
export const FooterBase = styled('footer')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  bgColor: '#1c252c',
}))

export const FooterTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '2rem',
  paddingBottom: '4rem',
  paddingRight: '2rem',
}))

export const StyledCarouselCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '8px',
}))

/**
 * @root - TolbyCarousel Component - options
 */

export const CarouselConfig = {
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  pauseOnFocus: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: '500px',
}
