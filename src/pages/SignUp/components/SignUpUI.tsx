import React from 'react';
import Button from '@components/button/Button';
import EmailPassword from '@components/input/EmailPassword';
import { userDataTypes } from './SignUpContainer';
import {
  StyledErrorMessage,
  StyledIsMember,
  StyledIsMemberFrame,
  StyledLinkLogin,
  StyledSignUpForm,
  StyledSignUpFrame,
  StyledSignUpName,
  StyledSignUpUserInfoFrame,
} from './signUpForm';

interface signInUIProps {
  value: userDataTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLDivElement>) => void;
  isFillForm: () => boolean;
}

const SignUpUI = ({ value, onChange, onSubmit, isFillForm }: signInUIProps) => {
  const isFill = isFillForm();
  return (
    <StyledSignUpFrame>
      <StyledSignUpName>회원가입</StyledSignUpName>
      <StyledSignUpForm>
        <StyledSignUpUserInfoFrame onSubmit={onSubmit}>
          <EmailPassword
            type="text"
            name="이름"
            inputName="name"
            placeholder="이름을 입력해 주세요"
            value={value.name}
            onChange={onChange}
          />
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
          <EmailPassword
            type="password"
            name="비밀번호 확인"
            inputName="confirmPassword"
            placeholder="비밀번호를 입력해 주세요"
            value={value.confirmPassword}
            onChange={onChange}
          />
          {value.password !== value.confirmPassword ? (
            <StyledErrorMessage>
              비밀번호가 일치하지 않습니다.
            </StyledErrorMessage>
          ) : (
            <StyledErrorMessage />
          )}
        </StyledSignUpUserInfoFrame>
        <Button $primary $width="100%" type="submit" disabled={isFill}>
          가입하기
        </Button>
      </StyledSignUpForm>
      <StyledIsMemberFrame>
        <StyledIsMember>이미 회원이신가요?</StyledIsMember>
        <StyledLinkLogin href="/login">로그인 하기</StyledLinkLogin>
      </StyledIsMemberFrame>
    </StyledSignUpFrame>
  );
};

export default SignUpUI;
