import React from "react";
import { Button } from "../../components/layout/text";
import { Image } from "../../components/layout/image";
import { Wrapper } from "../../components/layout/wrapper";
import { VStack } from "../../components/layout/v-stack";

const LoginPage = () => {
  const onClickLogin = () => {};

  return (
    <Wrapper marginVertical="100px">
      <VStack gap={40}>
        <Image src="/Title.png" alt="팀마스터 로고" />

        <Button onClick={onClickLogin} height={50} variant="kakao">
          카카오로 로그인
        </Button>
      </VStack>
    </Wrapper>
  );
};

export default LoginPage;
