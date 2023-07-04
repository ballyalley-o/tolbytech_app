/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography } from '@mui/material'
import {
  StyledSubCardMedia,
  ExtraLargeTypesBase,
} from '../../themes/styles/default-styled'
import abstract8 from '../../assets/images/abstract8.jpg'

const UsersEditSqueeze = () => {
  return (
    <>
      <StyledSubCardMedia
        component="img"
        height="100%"
        width="100%"
        image={abstract8}
        alt="Tech"
        sx={{
          width: '100%',
        }}
      />
    </>
  )
}

export default UsersEditSqueeze
