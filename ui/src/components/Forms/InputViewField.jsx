/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, Grid, InputAdornment } from '@mui/material'
import { InputBase } from '../../themes/styles/default-styled.js'

const InputViewField = ({
  id,
  name,
  type,
  size,
  value,
  label,
  title,
  adornment,
  currency,
  onChange,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
            <InputLabel htmlFor={id}>{title}</InputLabel>
            <InputBase
              id={id}
              label={label}
              name={name}
              type={type}
              size={size}
              value={value}
              startAdornment={currency && adornment}
              onChange={onChange}
              fullWidth
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

InputViewField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.node,
  adornment: PropTypes.node,
  currency: PropTypes.bool,
  onChange: PropTypes.func,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
}

InputViewField.defaultProps = {
  size: 'small',
  type: 'text',
  adornment: <InputAdornment position="start">NZD</InputAdornment>,
}

export default InputViewField
