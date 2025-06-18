/* eslint-disable no-unused-vars */
import React from 'react'
import { useTheme } from '@emotion/react'
import { Typography, Box } from '@mui/material'
import {
  ExtraLargeTypesBase,
} from '../../themes/styles/default-styled'

const SqueezePage = () => {
  const theme = useTheme()
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: '15rem',
            fontWeight: 'bold',
            color: theme.palette.pink.main,
          }}
        >
          TECHNO
        </Typography>
        <ExtraLargeTypesBase
          variant="h1"
          sx={{
            fontSize: '15rem',
            color: '#FFF',
            gradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          }}
        >
          FUNK!
        </ExtraLargeTypesBase>
        {/* <StyledSubCardMedia
          component="img"
          height="100%"
          width="100%"
          image={abstract5}
          alt="Tech"
          sx={{
            width: '100%',
          }}
        /> */}
      </Box>
    </>
  )
}

export default SqueezePage
