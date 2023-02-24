import styled from "styled-components";
import { ThemeType } from "./theme";

const StyledSpinner = styled.div<ThemeType>`
  position: relative;
  margin-top: 3rem;
  width: 10rem;
  height: 10rem;
  left: 40%;

  & div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.clr.clrAccent};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

export default StyledSpinner
