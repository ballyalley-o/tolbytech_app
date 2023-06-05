/* eslint-disable no-unused-vars */
import tolby from '../../assets/icons/tolby.svg'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const TolbyLogo = () => {
  const LogoContainerBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    pointerEvents: 'none',
  }))

  const LogoBase = styled('img')(({ theme }) => ({
    width: '100px',
    height: '100px',
    position: 'relative',
    alignContent: 'right',
  }))

  return (
    <LogoContainerBase>
      <LogoBase src={tolby} />
    </LogoContainerBase>
  )
}

export default TolbyLogo
