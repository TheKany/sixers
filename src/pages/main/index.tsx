import { Wrapper } from "../../components/layout/wrapper";
import { Text } from "../../components/layout/text";
import { useDday } from "../../hooks/useDday";
import styled from "styled-components";
import NameTag from "../../components/layout/nameTag";
import { useEffect, useState } from "react";
// import NBANews from "./components/NBANews";
import MemberList from "./components/MemberList";
import LeagueInfo from "./components/LeagueInfo";

// type Article = {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// };

type Teams = {
  name: string;
  score: string;
  rate: number;
};

const Main = () => {
  const { timePercent, timeLeft, timeYear } = useDday(
    "2025-01-03",
    "2024-12-30"
  );
  // const [articles, setArticles] = useState<Article[]>([]);
  const [season, setSeason] = useState<string>("1");
  const [teamList, setTeamList] = useState<Teams[]>([]);

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

  // 시즌 데이터 (임시)
  useEffect(() => {
    setSeason("4");
    setTeamList([
      {
        name: "런앤건",
        score: "4승",
        rate: 1,
      },
      {
        name: "캐치! 감마핑",
        score: "3승 1패",
        rate: 2,
      },
      {
        name: "출석체크",
        score: "2승 2패",
        rate: 3,
      },
    ]);
  }, []);

  return (
    <Wrapper>
      <Text type="title" fontSize={36}>
        SIXERS
      </Text>

      {/* NBA 뉴스 */}
      {/* <Text type="p" style={{ textAlign: "center" }}>
        Today NBA News
      </Text>
      <NBANews data={articles} /> */}

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

      {/* 팀 멤버 */}
      <MemberList />

      {/* 리그전용 ( 리그 안하면 사라짐 ) */}
      <LeagueInfo year={timeYear} season={season} teamList={teamList} />
    </Wrapper>
  );
};

export default Main;

const VoteContainer = styled.div<{ percent?: number }>`
  width: 90%;
  border: 1px solid #5c665f;
  border-radius: 8px;
  margin: 24px auto;
  padding: 8px;

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
  border: 1px solid #5c665f;
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
 */

// TODO: 화이트보드판 ( 점수 기입 / 저장용 )
// TODO: 배경색 눈편한 보라색 ( 테마색은 보라색으로 )
