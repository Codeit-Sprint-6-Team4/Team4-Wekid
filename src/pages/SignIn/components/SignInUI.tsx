import React from 'react';
import Button from '@components/button/Button';
import EmailPassword from '@components/input/EmailPassword';
//components
import { logInDataTypes } from '@pages/SignIn/components/SignInContainer';
import {
  StyledSignInWrap,
  StyledSignInForm,
  StyledSignInTitle,
  StyledLinkMessageWrap,
  StyledLinkMessage,
} from '@pages/SignIn/components/SignInUI.styled';

interface signInProps {
  value: logInDataTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInUI: React.FC<signInProps> = ({ value, onChange }) => {
  return (
    <StyledSignInWrap>
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
          로그인
        </Button>
        <StyledLinkMessageWrap>
          <StyledLinkMessage>회원가입</StyledLinkMessage>
        </StyledLinkMessageWrap>
      </StyledSignInForm>
    </StyledSignInWrap>
  );
};

export default SignInUI;
