import styled from "styled-components";

type Props = {
  gap?: string,
  items?: string,
  justify?: string
}

const Flex = styled.div<Props>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ items }) => items && `align-items: ${items};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
`

export default Flex
