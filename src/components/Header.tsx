import { useNavigate } from "react-router-dom"
import Flex from "../styles/Flex.styled"
import StyledHeader from "../styles/StyledHeader.styled"

function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <Flex justify="center" items="center">
        <Flex items="center" gap="2px">
          <img className="logo" src="/food!e.svg" alt="foodie logo" />
          
          <h1 
            className="logo-title" 
            onClick={() => navigate('/')}
          >
            Food<span className="text-gradient">!e</span>
          </h1>
        </Flex>
      </Flex>
    </StyledHeader>
  )
}

export default Header
