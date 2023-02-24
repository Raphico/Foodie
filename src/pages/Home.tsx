import Search from "../components/Search"
import Cuisines from "../components/Cuisines"
import { useState } from "react"
import Recipes from "../components/Recipes"
import { RecipeType } from "../constants"
import Spinner from "../components/Spinner"
import { useQuery } from "react-query"

function Home() {
  const [searchedTerm, setSearchedTerm] = useState('salad')
  const [recipesArray, setRecipesArray] = useState<RecipeType[]>([])

  const { isLoading, error } = useQuery(["recipes", searchedTerm], fetchRecipesFromApi)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    if (error instanceof Error) {
      return <p>{error.message}</p>
    }
  }

  async function fetchRecipesFromApi() {
    const res = await fetch(`https://api.spoonacular.com/food/videos/search?query=${searchedTerm}&apiKey=${process.env.REACT_APP_API_KEY}&number=14`)
    const data = await res.json()
    
    setRecipesArray(data.videos)
  }


  return (
    <>
      <Search 
        setSearchedTerm={setSearchedTerm}
      />
      <Cuisines 
        setSearchedTerm={setSearchedTerm}
      />
      <Recipes 
        title={searchedTerm} 
        recipesArray={recipesArray} 
      />
    </>
  )
}

export default Home
