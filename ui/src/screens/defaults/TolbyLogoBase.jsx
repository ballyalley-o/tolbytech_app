/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import tolby from '../../assets/icons/tolby.svg'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const TolbyLogoBase = ({ width, height }) => {
  const LogoContainerBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    pointerEvents: 'none',
  }))

  const LogoBase = styled('img')(({ theme }) => ({
    width: width,
    height: height,
    position: 'relative',
    alignContent: 'right',
  }))

  return (
    <LogoContainerBase>
      <LogoBase src={tolby} />
    </LogoContainerBase>
  )
}

TolbyLogoBase.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

TolbyLogoBase.defaultProps = {
  width: '100px',
  height: '100px',
}

export default TolbyLogoBase
