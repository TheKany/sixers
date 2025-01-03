import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const Image = styled.img<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: block;
`;
