import { Wrapper } from "../../components/layout/wrapper";
import { Text } from "../../components/layout/text";
import { useDday } from "../../hooks/useDday";
import styled from "styled-components";
import NameTag from "../../components/layout/nameTag";
import { useEffect, useState } from "react";
import NBANews from "./components/NBANews";

type Article = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Main = () => {
  const { timePercent, timeLeft } = useDday("2025-01-03", "2024-12-30");
  const [articles, setArticles] = useState<Article[]>([]);

  // NBA 뉴스 가져오기
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("http://localhost:5000/api/news");
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      console.log(doc);
    };

    fetchNews();
  }, []);

  return (
    <Wrapper>
      <Text type="title" fontSize={36}>
        SIXERS
      </Text>

      {/* NBA 뉴스 */}
      <Text type="p" style={{ textAlign: "center" }}>
        Today NBA News
      </Text>
      <NBANews data={articles} />

      {/* 투표하기 */}
      <VoteContainer percent={Math.floor(timePercent)}>
        <InnerContainer>
          {/* 경기 타입 1.리그전 1-1. 리그 프리시즌 1-2. 리그 시즌 ing 2.이벤트전 3. 일반경기 */}
          <NameTag type="l-free" />

          <Text type="p" fontSize={24} style={{ margin: "8px 0" }}>
            2025.01.11 (토)
          </Text>
          <Text type="p">{String(timeLeft)}</Text>
        </InnerContainer>
      </VoteContainer>
    </Wrapper>
  );
};

export default Main;

const VoteContainer = styled.div<{ percent?: number }>`
  width: 90%;
  margin: 32px auto;
  padding: 8px;
  border: 2px solid #5c665f;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ percent }) =>
    `conic-gradient(#292D23 ${(percent as number) * 3.6}deg, white 0deg)`};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc(100% - 16px);
  border: 2px solid #5c665f;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  color: #5c665f;
  /* background-color: #121212; color: #fff; */
  /* background-color: #7661fb; color: #fff; */
`;

/**
 * 1. 투표할게 없으면 '아직 경기 일정이 없습니다.'
 * 2. 투표할게 있으면 타이머
 * 2-1. 투표 아직 안했으면 타이머 돌아가는 중
 * 2-2. 투표 했으면 '투표완료' 했다고 표시하고 타이머 돌아가는 중
 * 3. 투표 끝났으면 타이머 100%
 * 3-1. 팀 배정 끝났으면 팀 색 표시
 * 3-2. 팀 배정 안되었으면 회색표시
 *
 */
