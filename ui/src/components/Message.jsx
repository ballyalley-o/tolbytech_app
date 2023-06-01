import { Alert } from '@mui/material'
import propTypes from 'prop-types'

const Message = ({ severity, color, children }) => {
  return (
    <Alert severity={severity} color={color}>
      {children}
    </Alert>
  )
}

Message.propTypes = {
  severity: propTypes.string,
  color: propTypes.string,
  children: propTypes.node.isRequired,
}

Message.defaultProps = {
  severity: 'info',
  color: 'info',
}

export default Message
