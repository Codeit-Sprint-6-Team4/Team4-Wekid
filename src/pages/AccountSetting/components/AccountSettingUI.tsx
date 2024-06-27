import React from 'react';
import Button from '@components/button/Button';
import Dropdown from '@components/dropdown/Dropdown';
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

const options = [
  { id: 1, label: '특별히 싫어하는 음식은?' },
  { id: 2, label: '키우고 있는 반려동물의 이름은?' },
  { id: 3, label: 'MBTI는?' },
  { id: 4, label: '가장 좋아하는 색은?' },
];
const handleSelectOption = (option: { id: number; label: string }) => {
  console.log('Selected:', option);
};

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
        <Dropdown options={options} onSelect={handleSelectOption} />
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
