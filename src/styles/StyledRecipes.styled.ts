import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledRecipes = styled.div<ThemeType>`
  margin-top: 2rem;
  .title {
    font-weight: ${({ theme }) => theme.fw.fwBold};
  }
  .recipes {
    display: grid;
    place-items: center;
    gap: 2rem;
  }

  @media(min-width: 40em) {
    .recipes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default StyledRecipes
