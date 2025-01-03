import styled from "styled-components";
import { Text } from "../text";

interface Props {
  type: "l-free" | "l-ing" | "normal" | "event";
}

const NameTag = ({ type }: Props) => {
  switch (type) {
    case "l-free":
      return (
        <Badge background="#7e7639">
          <Text type="p" fontSize={12} color="white">
            리그 프리시즌
          </Text>
        </Badge>
      );

    case "l-ing":
      return (
        <Badge background="#FFDC00">
          <Text type="p" fontSize={12}>
            리그 시즌 ing
          </Text>
        </Badge>
      );

    case "normal":
      return (
        <Badge background="#3C0800">
          <Text type="p" fontSize={12} color="white">
            일반경기
          </Text>
        </Badge>
      );

    case "event":
      return (
        <Badge background="#7661FB">
          <Text type="p" fontSize={12} color="white">
            이벤트전
          </Text>
        </Badge>
      );

    default:
      return <p>설정필요</p>;
  }
};

export default NameTag;

const Badge = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  width: fit-content;
  padding: 2px 6px;
  border-radius: 8px;
  margin-bottom: 4px;
`;
