import React from 'react';
import Button from '@components/button/Button';
import EmailPassword from '@components/input/EmailPassword';
//components
import Layout from '@components/layout/Layout';
import {
  StyledSignInFrame,
  StyledSignInForm,
  StyledSignInTitle,
  StyledLinkMessageWrap,
  StyledLinkMessage,
} from '@pages/SignIn/components/SignInUI.styled';
import { logInDataTypes } from '@pages/SignIn/components/SignUpContainer';

interface signInProps {
  value: logInDataTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInUI: React.FC<signInProps> = ({ value, onChange }) => {
  return (
    <Layout>
      <StyledSignInFrame>
        <StyledSignInForm>
          <StyledSignInTitle>로그인</StyledSignInTitle>
          <EmailPassword
            type="email"
            name="이메일"
            inputName="email"
            placeholder="이메일을 입력해 주세요"
            value={value.email}
            onChange={onChange}
          />
          <EmailPassword
            type="password"
            name="비밀번호"
            inputName="password"
            placeholder="비밀번호를 입력해 주세요"
            value={value.password}
            onChange={onChange}
          />
          <Button $primary $width="100%" type="submit">
            가입하기
          </Button>
          <StyledLinkMessageWrap>
            <StyledLinkMessage>회원가입</StyledLinkMessage>
          </StyledLinkMessageWrap>
        </StyledSignInForm>
      </StyledSignInFrame>
    </Layout>
  );
};

export default SignInUI;
