/* eslint-disable no-unused-vars */
import { Typography, Box, Container, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'
import TolbyLogo from './TolbyLogo.jsx'
import bg2 from '../../assets/images/bg2.png'
import bg from '../../assets/images/bg.png'

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
    background: `linear-gradient(90deg, #F2e121 0%, #FF0000 33%, #FF0060 66%, #FF0000 100%)`,
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
              <ExtraLargeTypesBase variant="h1" color="white">
                AOTEAROA
              </ExtraLargeTypesBase>
            </Box>
          </Box>
          <CardMedia
            component="img"
            height="140"
            image={bg}
            alt="Tech"
            sx={{
              zIndex: -1,
              position: 'absolute',
              objectFit: 'fill',
              float: 'left',
              right: 0,
              top: 0,
              width: 'auto',
              height: '100%',
              // center the image
            }}
          />
          <CardMedia
            component="img"
            height="140"
            image={bg2}
            alt="Tech"
            sx={{
              zIndex: -2,
              position: 'absolute',
              objectFit: 'fill',
              float: 'left',
              left: 0,
              top: 0,
              width: 'auto',
              height: '100vh',
              // center the image
            }}
          />
        </Box>
      </ContainerLandingBase>

      {/* <AbstractBg /> */}
    </>
  )
}

export default LandingPage
