import React from "react";
import { Text } from "../../../components/layout/text";
import styled from "styled-components";

type Teams = {
  name: string;
  score: string;
  rate: number;
};

interface Props {
  year: number;
  season: string;
  teamList: Teams[];
}

const LeagueInfo = ({ year, season, teamList }: Props) => {
  return (
    <>
      <Text
        type="p"
        fontSize={18}
        style={{ textAlign: "center", fontWeight: 700 }}
      >
        = {year} 시즌 {season} =
      </Text>
      <Text
        type="p"
        fontSize={12}
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        2025.01 - 2025.02
      </Text>
      <LeagueContainer>
        {teamList.map((item, idx) => {
          return (
            <TeamTag key={idx} rate={item.rate}>
              <Text type="span">{item.rate}위</Text>
              <Text type="span">{item.name}</Text>
              <Text type="span">{item.score}</Text>
            </TeamTag>
          );
        })}
      </LeagueContainer>
    </>
  );
};

export default LeagueInfo;

const LeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 8px;
  margin: 8px 0;
`;

const TeamTag = styled.div<{ rate: number }>`
  width: 90%;
  padding: 4px;
  border: 1px solid #5c665f;
  border-radius: 8px;
  background-color: #fff;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  box-shadow: ${({ rate }) =>
    rate === 1
      ? "0 0 8px #ecade3, 0 0 15px #ecade3, 0 0 20px #ecade3"
      : "none"};
  font-weight: ${({ rate }) => (rate === 1 ? 700 : 400)};
`;
