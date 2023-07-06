/* eslint-disable no-unused-vars */
import { Typography, Box, Container, CardMedia } from '@mui/material'
import {
  ContainerLandingBase,
  ExtraLargeTypesBase,
  SubExtraLargeTypesBase,
  StyledCardMedia,
  StyledSubCardMedia,
} from '../../themes/styles/default-styled.js'
import TolbyLogo from './TolbyLogo.jsx'
import bg2 from '../../assets/images/bg2.png'
import bg from '../../assets/images/bg.png'

const LandingPage = () => {
  return (
    <>
      <ContainerLandingBase maxWidth="md">
        <Box height="800px">
          <Typography variant="h1" fontWeight="bold">
            CONVENTIONCVS 2023
          </Typography>
          <Typography variant="h4">
            Watch online on 6
            {new Date().toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
            at
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
              <SubExtraLargeTypesBase variant="h1" fontWeight="bold" sx={{}}>
                in
              </SubExtraLargeTypesBase>
              <ExtraLargeTypesBase variant="h1" color="white">
                AOTEAROA
              </ExtraLargeTypesBase>
            </Box>
          </Box>
          <StyledCardMedia component="img" height="140" image={bg} alt="Tech" />
          <StyledSubCardMedia
            component="img"
            height="140"
            image={bg2}
            alt="Tech"
          />
        </Box>
      </ContainerLandingBase>
    </>
  )
}

export default LandingPage
