import React, { useEffect } from "react";
import { Text } from "../../../components/layout/text";
import { Image } from "../../../components/layout/image";
import styled from "styled-components";
import Slider from "react-slick";

const MemberList = () => {
  const members = [
    { src: "/test/test.png", name: "심상민", position: "F", reward: 0 },
    { src: "/test/test.png", name: "조성은", position: "G", reward: 1 },
    { src: "/test/test.png", name: "이상엽", position: "C", reward: 2 },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Text
        type="p"
        fontSize={18}
        style={{ textAlign: "center", fontWeight: 700 }}
      >
        = SIXERS MEMBERS =
      </Text>
      <TeamsContainer>
        <Slider {...settings}>
          {members.map((item) => {
            return (
              <Slide>
                <Member>
                  {/* 인물 사진 */}
                  <ImgBox>
                    <Image src="/test/test.png" alt="프로필사진" />
                  </ImgBox>

                  {/* 인물 정보 ( 이름, 포지션, 우승/mvp 갯수 ) */}
                  <MemberInfo>
                    <Text type="p">이름: {item.name}</Text>
                    <Text type="p">포지션: {item.position}</Text>
                    <Text type="p">{item.reward}</Text>
                  </MemberInfo>
                </Member>
              </Slide>
            );
          })}
        </Slider>
      </TeamsContainer>
    </>
  );
};

export default MemberList;

const TeamsContainer = styled.div`
  margin: 12px auto;
  padding-bottom: 12px;
  border-bottom: 1px solid #5c665f;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Member = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImgBox = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
`;
