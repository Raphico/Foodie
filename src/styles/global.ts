import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./theme"

const GlobalStyle = createGlobalStyle<ThemeType>`
  /* CSS resets */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin, padding, and font */
  * {
    margin: 0;
    padding: 0;
    font: inherit
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(114, 113, 113);
    border-radius: 10px;
    height: 200px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Set core body defaults */

  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.ff.poppins};
    font-size: ${({ theme }) => theme.fs.fs400};
    font-weight: ${({ theme }) => theme.fw.fwRegular};
    color: ${({ theme }) => theme.clr.clrDark};
    background-color: ${({ theme }) => theme.clr.clrLight};
    text-rendering: optimizeSpeed;
    line-height: 1.6;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }


  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // Utilities

  .text-gradient {
    background: #5AFF15;
    background: linear-gradient(to right, #5AFF15 0%, #00B712 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }

  .sr-only {
    position: absolute; 
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px; 
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`

export default GlobalStyle
