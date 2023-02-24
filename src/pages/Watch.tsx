import { useParams } from "react-router-dom"
import StyledWatch from "../styles/StyledWatch.div"
import ReactPlayer from "react-player"

function Watch() {
  const { youTubeId, title } = useParams()
  
  return (
    <StyledWatch>
      <h2 className="title">{title}</h2>
      
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${youTubeId}`}
        width="100%"
        height="20em"
        controls
      />
    </StyledWatch>
  )
}

export default Watch
