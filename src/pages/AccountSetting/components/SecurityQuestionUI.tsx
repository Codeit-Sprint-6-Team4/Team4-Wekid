import React from 'react';
import Button from '@components/button/Button';
import Dropdown from '@components/dropdown/Dropdown';
import {
  StyledQuestionForm,
  StyledInputSubtitle,
  StyledQuestionInput,
  StyledButtonContainer,
} from '@pages/AccountSetting/components/AccountSettingUI.styled';

interface SecurityQuestionProps {
  question: string;
  answer: string;
  isQuestionSubmitDisabled: boolean;
  onQuestionSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onSelect: (option: { id: number; label: string }) => void;
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const options = [
  { id: 1, label: '특별히 싫어하는 음식은?' },
  { id: 2, label: '키우고 있는 반려동물의 이름은?' },
  { id: 3, label: 'MBTI는?' },
  { id: 4, label: '가장 좋아하는 색은?' },
];

const SecurityQuestionUI = ({
  question,
  answer,
  isQuestionSubmitDisabled,
  onQuestionSubmit,
  onSelect,
  onQuestionChange,
}: SecurityQuestionProps) => {
  return (
    <StyledQuestionForm onSubmit={onQuestionSubmit}>
      <StyledInputSubtitle>위키 생성하기</StyledInputSubtitle>
      <Dropdown
        options={options}
        onSelect={onSelect}
        placeholderText={question || '질문 선택하기'}
      />
      <StyledQuestionInput
        type="text"
        name="answer"
        placeholder="답을 입력해 주세요"
        value={answer}
        onChange={onQuestionChange}
      />
      <StyledButtonContainer>
        <Button
          $primary
          $width="89px"
          type="submit"
          disabled={isQuestionSubmitDisabled}
        >
          생성하기
        </Button>
      </StyledButtonContainer>
    </StyledQuestionForm>
  );
};

export default SecurityQuestionUI;
