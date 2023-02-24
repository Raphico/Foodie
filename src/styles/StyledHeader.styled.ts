import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledHeader = styled.header<ThemeType>`
  margin-top: 1rem;
  .logo {
    width: 2.5rem;
  }

  .logo-title {
    cursor: pointer;
    font-family: ${({ theme }) => theme.ff.cursive};
    font-size: ${({ theme }) => theme.fs.fs600};
    font-weight: ${({ theme }) => theme.fw.fwBold};
  }
`

export default StyledHeader