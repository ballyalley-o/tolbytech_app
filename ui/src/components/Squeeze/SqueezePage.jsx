/* eslint-disable no-unused-vars */
import React from 'react'
import { StyledSubCardMedia } from '../../themes/styles/default-styled'
import abstract1 from '../../assets/images/abstract1.jpg'

const SqueezePage = () => {
  return (
    <StyledSubCardMedia
      component="img"
      height="100%"
      width="100%"
      image={abstract1}
      alt="Tech"
      sx={{
        width: '100%',
      }}
    />
  )
}

export default SqueezePage