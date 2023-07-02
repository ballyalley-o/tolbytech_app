/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel } from '@mui/material'
import { InputBase } from '../../themes/styles/default-styled.js'

const InputDescField = ({ label, value, size, id, onChange, ...props }) => {
  return (
    <>
      <FormControl variant="outlined" fullWidth sx={{ my: 2 }}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <InputBase
          multiline
          id={id}
          size={size}
          label={label}
          title={label}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </>
  )
}

InputDescField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
  size: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
}

InputDescField.defaultProps = {
  size: 'large',
}

export default InputDescField
