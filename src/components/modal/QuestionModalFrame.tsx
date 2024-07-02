import React, { useState } from 'react';
import Button from '@components/button/Button';
import {
  StyledQuestionContent,
  StyledLockIconContainer,
  StyledLockIcon,
  StyledLockText,
  StyledQeustionTitle,
  StyledAnswerInput,
  StyledErrorMessage,
  StyledFooter,
} from '@components/modal/questionModal.styled';
import { theme } from '@styles/theme';

interface QuestionModalContentProps {
  securityQuestion: string;
  onConfirm: (answer: string) => Promise<string | null>;
}

const QuestionModalContent = ({
  securityQuestion,
  onConfirm,
}: QuestionModalContentProps) => {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleConfirm = async () => {
    const message = await onConfirm(answer);
    if (message) {
      setErrorMessage(message);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <StyledQuestionContent>
      <StyledLockIconContainer>
        <StyledLockIcon />
      </StyledLockIconContainer>
      <StyledLockText>
        다음 퀴즈를 맞추고
        <br />
        위키를 작성해 보세요.
      </StyledLockText>

      <StyledQeustionTitle>{securityQuestion}</StyledQeustionTitle>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConfirm();
        }}
      >
        <StyledAnswerInput
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setErrorMessage(null);
          }}
          onKeyDown={handleKeyPress}
          placeholder="답을 입력하세요"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            border: errorMessage
              ? `1px solid ${theme.colors.red[500]}`
              : isFocused
                ? `1px solid ${theme.colors.main[500]}`
                : `1px solid ${theme.colors.gray[50]}`,
          }}
        />
        {errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
        <Button
          style={{ marginTop: '36px' }}
          $primary
          $width="100%"
          onClick={handleConfirm}
        >
          확인
        </Button>
      </form>
      <StyledFooter>
        위키드는 지인들과 함께하는 즐거운 공간입니다.
        <br />
        지인에게 상처를 주지 않도록 작성해 주세요.
      </StyledFooter>
    </StyledQuestionContent>
  );
};

export default QuestionModalContent;
