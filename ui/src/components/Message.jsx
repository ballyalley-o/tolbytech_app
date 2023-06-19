import { Alert } from '@mui/material'
import propTypes from 'prop-types'

const Message = ({ severity, color, children, fontSize }) => {
  return (
    <Alert severity={severity} color={color} sx={{ fontSize: fontSize }}>
      {children}
    </Alert>
  )
}

Message.propTypes = {
  severity: propTypes.string,
  color: propTypes.string,
  children: propTypes.node.isRequired,
  fontSize: propTypes.string,
}

Message.defaultProps = {
  severity: 'info',
  color: 'info',
  fontSize: '.7rem',
}

export default Message
