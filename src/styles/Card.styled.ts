import styled from "styled-components";
import { ThemeType } from "./theme";

const Card = styled.div<ThemeType>`
  max-width: 20rem;
  
  .thumbnail-container {
    cursor: pointer;
    width: 20rem;
  }
  .thumbnail {
    min-width: 100%;
    height: 11.25rem;
    border-radius: 5px;
  }

  .recipe-info {
    margin-top: 1rem;
  }
`

export default Card
