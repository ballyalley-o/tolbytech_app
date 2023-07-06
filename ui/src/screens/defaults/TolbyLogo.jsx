/* eslint-disable no-unused-vars */
import tolby from '../../assets/icons/tolby.svg'
import {
  LogoContainerBase,
  LogoBase,
} from '../../themes/styles/default-styled.js'

const TolbyLogo = () => {
  return (
    <LogoContainerBase>
      <LogoBase src={tolby} />
    </LogoContainerBase>
  )
}

export default TolbyLogo
