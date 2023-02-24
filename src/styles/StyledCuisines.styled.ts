import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledCuisines = styled.div<ThemeType>`
  display: grid;
  gap: 2rem;
  grid-auto-flow: column;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  
  margin-top: 1rem;
  
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.clr.clrDark};
    transition: color 300ms ease-in-out;
  }

  button:hover,
  button:focus {
    color: ${({ theme }) => theme.clr.clrAccent};
  }
`

export default StyledCuisines
