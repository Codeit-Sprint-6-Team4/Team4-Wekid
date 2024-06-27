import React from 'react';
import Button from '@components/button/Button';
import {
  StyledAccountSettingWrap,
  StyledAccountSettingForm,
  StyledAccountSettingTitle,
  StyledPasswordInput,
  StyledQuestionForm,
  StyledQuestionInput,
  StyledInputSubtitle,
  StyledButtonContainer,
} from '@pages/AccountSetting/components/AccountSettingUI.styled';

interface AccountSettingProps {
  values: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    question: string;
    answer: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onQuestionSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AccountSettingUI = ({
  values,
  onChange,
  onSubmit,
  onQuestionSubmit,
}: AccountSettingProps) => {
  return (
    <StyledAccountSettingWrap>
      <StyledAccountSettingForm onSubmit={onSubmit}>
        <StyledAccountSettingTitle>계정 설정</StyledAccountSettingTitle>
        <StyledInputSubtitle>비밀번호 변경</StyledInputSubtitle>
        <StyledPasswordInput
          type="password"
          name="currentPassword"
          placeholder="기존 비밀번호"
          value={values.currentPassword}
          onChange={onChange}
        />
        <StyledPasswordInput
          type="password"
          name="newPassword"
          placeholder="새 비밀번호"
          value={values.newPassword}
          onChange={onChange}
        />
        <StyledPasswordInput
          type="password"
          name="confirmPassword"
          placeholder="새 비밀번호 확인"
          value={values.confirmPassword}
          onChange={onChange}
        />
        <StyledButtonContainer>
          <Button $primary $width="89px" type="submit">
            변경하기
          </Button>
        </StyledButtonContainer>
      </StyledAccountSettingForm>
      <StyledQuestionForm onSubmit={onQuestionSubmit}>
        <StyledInputSubtitle>위키 생성하기</StyledInputSubtitle>
        <StyledQuestionInput
          type="text"
          name="question"
          placeholder="질문을 입력해 주세요"
          value={values.question}
          onChange={onChange}
        />
        <StyledQuestionInput
          type="text"
          name="answer"
          placeholder="답을 입력해 주세요"
          value={values.answer}
          onChange={onChange}
        />
        <StyledButtonContainer>
          <Button $primary $width="89px" type="submit">
            생성하기
          </Button>
        </StyledButtonContainer>
      </StyledQuestionForm>
    </StyledAccountSettingWrap>
  );
};

export default AccountSettingUI;
