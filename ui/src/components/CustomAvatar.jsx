/* eslint-disable no-unused-vars */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

function CustomAvatar({ name }) {
  const { userInfo } = useSelector((state) => state.auth)
  const firstLetter = userInfo.response.name?.charAt(0)
  const secondLetter =
    userInfo.response.name?.split(' ')[1] && name?.split(' ')[1]?.charAt(0)

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Avatar sx={{ bgcolor: 'primary.main', fontSize: '1rem' }}>
          {firstLetter}
          {secondLetter && secondLetter}
        </Avatar>
      </Box>
    </>
  )
}

CustomAvatar.propTypes = {
  name: PropTypes.string,
}

export default CustomAvatar
