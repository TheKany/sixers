import styled from "styled-components";

export const VStack = styled.div<{
  gap?: number;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap}px;
  ${({ padding }) => padding && `padding: ${padding};`}
`;
