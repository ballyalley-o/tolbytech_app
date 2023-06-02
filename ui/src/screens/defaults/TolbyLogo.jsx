import tolby from '../../assets/icons/tolby.svg'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const TolbyLogo = () => {
  const LogoContainerBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  }))

  const LogoBase = styled('img')(({ theme }) => ({
    // create logo animation
    width: '200px',
    height: '200px',
    position: 'relative',
  }))

  return (
    <Link to="/">
      <LogoContainerBase>
        <LogoBase src={tolby} />
      </LogoContainerBase>
    </Link>
  )
}

export default TolbyLogo
