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
  userData: logInDataTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isFillForm: () => boolean;
}

const SignInUI: React.FC<signInProps> = ({
  userData,
  onChange,
  onSubmit,
  isFillForm,
}) => {
  return (
    <main className="layoutWrap">
      <StyledSignInWrap>
        <StyledSignInTitle>로그인</StyledSignInTitle>
        <StyledSignInForm onSubmit={onSubmit}>
          <EmailPassword
            type="email"
            name="이메일"
            inputName="email"
            placeholder="이메일을 입력해 주세요"
            value={userData.email}
            onChange={onChange}
          />
          <EmailPassword
            type="password"
            name="비밀번호"
            inputName="password"
            placeholder="비밀번호를 입력해 주세요"
            value={userData.password}
            onChange={onChange}
          />
          <Button $primary $width="100%" type="submit" disabled={isFillForm()}>
            로그인
          </Button>
        </StyledSignInForm>
        <StyledLinkMessageWrap>
          <StyledLinkMessage href="/signup">회원가입</StyledLinkMessage>
        </StyledLinkMessageWrap>
      </StyledSignInWrap>
    </main>
  );
};

export default SignInUI;
