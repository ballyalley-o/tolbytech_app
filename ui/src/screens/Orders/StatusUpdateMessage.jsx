/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '@mui/material'
import Message from '../../components/Message'

const StatusUpdateMessage = ({
  StatusToUpdate,
  order,
  date,
  status1,
  status2,
}) => {
  return (
    <>
      <ListItem>
        {StatusToUpdate ? (
          <Message variant="success" color="success" severity="success">
            STATUS: <b>{status1}</b> | {date}
          </Message>
        ) : (
          <Message variant="danger" color="error" severity="error">
            STATUS: <b>{status2}</b>
          </Message>
        )}
      </ListItem>
    </>
  )
}

StatusUpdateMessage.propTypes = {
  StatusToUpdate: PropTypes.bool,
  order: PropTypes.object,
  date: PropTypes.string,
  status1: PropTypes.string,
  status2: PropTypes.string,
}

export default StatusUpdateMessage
