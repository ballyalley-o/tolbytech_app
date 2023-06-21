import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
      light: '#FFF',
    },
    secondary: {
      main: '#f5f5f5',
    },
    pink: {
      main: '#f5f5f5',
      light: '#f5f5f5',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
  },
})

export default theme
