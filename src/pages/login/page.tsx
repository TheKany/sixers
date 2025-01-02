import React from "react";
import Wrapper from "../../components/layout/wrapper";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Wrapper>
      <Image src="./login/basket-net.png" alt="농구골대" />
      <p>로그인</p>
    </Wrapper>
  );
};

export default LoginPage;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;
