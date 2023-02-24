import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledWatch = styled.div<ThemeType>`
  margin-top: 3rem;
  .title {
    font-size: ${({ theme }) => theme.fs.fs500};
    font-weight: ${({ theme }) => theme.fw.fwBold};
    text-align: center;
    margin-bottom: 1rem;
  }
  .player {
    border-radius: 5px;
  }
`

export default StyledWatch
