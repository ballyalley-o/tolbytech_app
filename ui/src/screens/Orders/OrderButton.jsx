/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Button, ListItem } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { BtnTitles } from '../../constants'

const OrderButton = ({ onClick, disabled, order }) => {
  return (
    <>
      <Grid item>
        <ListItem>
          <Button
            variant="outlined"
            color="info"
            fullWidth
            onClick={onClick}
            disabled={order.response.isDelivered}
            sx={{
              mb: '10px',
              fontWeight: 'bold',
            }}
          >
            <LocalShippingIcon />
            &nbsp;
            {order.response.isDelivered
              ? BtnTitles.DELIVERED
              : BtnTitles.DELIVER}
          </Button>
        </ListItem>
      </Grid>
    </>
  )
}

OrderButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  order: PropTypes.object,
}

export default OrderButton
