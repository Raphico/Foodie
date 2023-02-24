import { cuisines } from "../constants"
import StyledCuisines from "../styles/StyledCuisines.styled"

type Props = {
  setSearchedTerm: Function
}

function Cuisines({ setSearchedTerm }: Props) {
  const cuisineElements: JSX.Element[] = cuisines.map(cuisine => 
    <button 
      onClick={() => handleSearch(cuisine.name)} 
      key={cuisine.id}
    >
      {cuisine.name}
    </button>)

  function handleSearch(cuisine: string) {
    setSearchedTerm(cuisine)
  }

  return (
    <StyledCuisines>
      {cuisineElements}
    </StyledCuisines>
  )
}

export default Cuisines
