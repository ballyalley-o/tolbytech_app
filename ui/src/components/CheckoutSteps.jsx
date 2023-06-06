/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Breadcrumbs,
  Typography,
  Container,
  AppBar,
  Menu,
  MenuItem,
  Grid,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import HdrWeakOutlinedIcon from '@mui/icons-material/HdrWeakOutlined'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import TimelineIcon from '@mui/icons-material/Timeline'
import CommitIcon from '@mui/icons-material/Commit'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Grid justifyContent="flex-end" alignContent="center">
      <Grid container justifyContent="flex-start">
        <Breadcrumbs
          separator={<ArrowRightIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {step1 ? (
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" fontWeight="bolder" color="#7E2E84">
                {step2 ? 'Signed In' : 'Sign In'}
              </Typography>
            </Link>
          ) : (
            <Link disabled>
              <Typography variant="body2" color="gray">
                Sign In
              </Typography>
            </Link>
          )}
          {step2 ? (
            <Link to="/shipping" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" fontWeight="bolder" color="#D14081">
                {step3 ? 'Shipping Address saved' : 'Shipping'}
              </Typography>
            </Link>
          ) : (
            <Link disabled>
              <Typography variant="body2" color="gray">
                Shipping
              </Typography>
            </Link>
          )}
          {step3 ? (
            <Link to="/payment" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" fontWeight="bolder" color="#EF798A">
                Payment
              </Typography>
            </Link>
          ) : (
            <Link disabled>
              <Typography variant="body2" color="gray">
                Payment
              </Typography>
            </Link>
          )}
          {step4 ? (
            <Link to="/bagit" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" fontWeight="bolder" color="#35A7FF">
                Bag It!
              </Typography>
            </Link>
          ) : (
            <Link disabled>
              <Typography variant="body2" color="gray">
                Bag It
              </Typography>
            </Link>
          )}
        </Breadcrumbs>
      </Grid>
    </Grid>
  )
}

CheckoutSteps.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
  step3: PropTypes.bool,
  step4: PropTypes.bool,
}

export default CheckoutSteps
