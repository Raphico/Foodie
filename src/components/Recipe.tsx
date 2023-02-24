import { Link } from "react-router-dom"
import { RecipeType } from "../constants"
import Card from "../styles/Card.styled"

function Recipe({ shortTitle, thumbnail, youTubeId }: RecipeType) {
  return (
    <Card>
      <div className="thumbnail-container">
        <Link to={`/watch/${youTubeId}/${shortTitle}`}>
          <img 
            className="thumbnail"
            src={thumbnail} 
            alt="thumbnail" 
          />
        </Link>
      </div>
      <p className="title">{shortTitle}</p>
    </Card>
  )
}

export default Recipe
