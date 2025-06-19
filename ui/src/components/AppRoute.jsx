import { Outlet } from 'react-router-dom'
import { StyledAppContainer } from '../themes/styles/default-styled'

const AppRoute = () => {
  return (
    <StyledAppContainer>
      <Outlet />
    </StyledAppContainer>
  )
}

export default AppRoute
