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
  onSelect: (
    option: { id: number; label: string },
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
  options: { id: number; label: string }[];
  isInputEnabled: boolean;
}

const SecurityQuestionUI = ({
  question,
  answer,
  isQuestionSubmitDisabled,
  onQuestionSubmit,
  onSelect,
  onQuestionChange,
  onInputChange,
  isEditing,
  options,
  isInputEnabled,
}: SecurityQuestionProps) => {
  const initialSelectedOption =
    options.find((option) => option.label === question) || null;

  return (
    <StyledQuestionForm onSubmit={onQuestionSubmit}>
      <StyledInputSubtitle>
        {isEditing ? '질문 수정하기' : '위키 생성하기'}
      </StyledInputSubtitle>
      <Dropdown
        options={options}
        onSelect={onSelect}
        initialSelectedOption={initialSelectedOption}
        placeholderText={question || '질문 선택하기'}
        onInputChange={onInputChange}
        isInputEnabled={isInputEnabled}
      />
      {isInputEnabled && (
        <StyledQuestionInput
          type="text"
          name="question"
          placeholder="질문을 입력해 주세요"
          value={question}
          onChange={onInputChange}
        />
      )}
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
          {isEditing ? '수정하기' : '생성하기'}
        </Button>
      </StyledButtonContainer>
    </StyledQuestionForm>
  );
};

export default SecurityQuestionUI;
