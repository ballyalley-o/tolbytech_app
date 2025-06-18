import { Typography, Box } from '@mui/material'
import {
  ContainerLandingBase,
  ExtraLargeTypesBase,
  SubExtraLargeTypesBase,
} from '../../themes/styles/default-styled.js'
import TolbyLogo from './TolbyLogo.jsx'

const LandingPage = () => {
  return (
    <>
      <ContainerLandingBase maxWidth="md">
        <Box height="800px">
          <Typography variant="h1" fontWeight="bold">
            CONVENTIONCVS 2025
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
        </Box>
      </ContainerLandingBase>
    </>
  )
}

export default LandingPage
