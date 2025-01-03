import styled from "styled-components";

interface Props {
  marginVertical?: string;
}

export const Wrapper = styled.section<Props>`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: ${({ marginVertical }) => `${marginVertical || "0"} auto`};
  overflow: hidden;
`;
