import { RecipeType } from "../constants"
import StyledRecipes from "../styles/StyledRecipes.styled"
import Recipe from "./Recipe"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"
import { fade } from "../utils/motion"

type Props = {
  title: string,
  recipesArray: RecipeType[]
}

function Recipes({ title, recipesArray }: Props) {
  const recipeElements = recipesArray.map(recipe => <Recipe 
    key={nanoid()}
    shortTitle={recipe.shortTitle}
    thumbnail={recipe.thumbnail}
    youTubeId={recipe.youTubeId}
  />) || "Error"

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
    >
      <StyledRecipes>
        <h1 className="title">{title}</h1>

        <div className="recipes">
          {recipeElements}
        </div>
      </StyledRecipes>
    </motion.div>
  )
}

export default Recipes
