import { useParams } from "react-router-dom"
import StyledWatch from "../styles/StyledWatch.div"
import ReactPlayer from "react-player"
import { fade } from "../utils/motion"
import { motion } from "framer-motion"

function Watch() {
  const { youTubeId, title } = useParams()
  
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
    >
      <StyledWatch>
        <h2 className="title">{title}</h2>
        
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${youTubeId}`}
          width="100%"
          height="20em"
          light="true"
          controls
        />
      </StyledWatch>
    </motion.div>
  )
}

export default Watch
