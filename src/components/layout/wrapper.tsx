import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
export default function Wrapper({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: ${(props) => (props.theme.left ? "calc(100% - 80px)" : "100%")};
  max-width: 1200px;
  margin: ${(props) => (props.theme.left ? "0" : "0 auto")};
  overflow: hidden;
`;
