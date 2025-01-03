import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";

type DataItem = {
  descruption: string;
  image: string;
  link: string;
  title: string;
  idx: number;
};

const NBANews = React.memo(({ data }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  console.log(data);

  return (
    <NewsContainer key="news-container">
      <Slider {...settings}>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
        {/* {data.map(({ descruption, image, link, title, idx }: DataItem) => {
          return (
            <div key={idx}>
              <p>{title}</p>
              <img src={image} alt="썸네일" />
            </div>
          );
        })} */}
      </Slider>
    </NewsContainer>
  );
});

export default NBANews;

const NewsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid #5c665f;
  border-bottom: 2px solid #5c665f;
`;
