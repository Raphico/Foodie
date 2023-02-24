import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledSearch = styled.div<ThemeType>`
  border-bottom: 2px solid ${({ theme }) => theme.clr.clrAccent};
  margin-top: 2rem;

  input[type="text"] {
    font-size: ${({ theme }) => theme.fs.fs500};
    color: ${({ theme }) => theme.clr.clrDark};
    border: 0;
    outline: 0;
    width: 80%;
  }

  .search {
    cursor: pointer;
    width: 1.5rem;
  }
`

export default StyledSearch
