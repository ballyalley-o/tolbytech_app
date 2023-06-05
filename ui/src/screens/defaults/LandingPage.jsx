/* eslint-disable no-unused-vars */
import { Typography, Box, Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import TolbyLogo from './TolbyLogo.jsx'
import AbstractBg from '../../components/AbstractBg.jsx'

const LandingPage = () => {
  const ContainerLandingBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    alignText: 'center',
  }))

  const ExtraLargeTypesBase = styled(Typography)(({ theme }) => ({
    fontSize: '10rem',
    fontWeight: 'bold',
  }))
  return (
    <>
      <ContainerLandingBase maxWidth="md">
        <Box>
          <Typography variant="h1" fontWeight="bold">
            CONVENTIONCVS 2023
          </Typography>
          <Typography variant="h4">
            Watch online on 6
            {new Date().toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}{' '}
            at{' '}
            {new Date().toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </Typography>
          <Box>
            <ExtraLargeTypesBase variant="h1">
              LARGEST Tech
              <Typography
                variant="h1"
                sx={{ fontSize: '10rem', display: 'inline-flex' }}
              >
                <i>show</i>
              </Typography>
            </ExtraLargeTypesBase>
            <Box sx={{ alignItems: 'center' }}>
              <TolbyLogo />
              <ExtraLargeTypesBase
                variant="h1"
                fontWeight="bold"
                sx={{
                  fontSize: '10rem',
                  fontFamily: 'Dynalight',
                  display: 'inline-flex',
                  position: 'absolute',
                  zIndex: -1,
                  top: '450px',
                  left: '250px',
                }}
              >
                in
              </ExtraLargeTypesBase>
              <ExtraLargeTypesBase variant="h1">AOTEAROA</ExtraLargeTypesBase>
            </Box>
          </Box>
        </Box>
      </ContainerLandingBase>

      {/* <AbstractBg /> */}
    </>
  )
}

export default LandingPage
