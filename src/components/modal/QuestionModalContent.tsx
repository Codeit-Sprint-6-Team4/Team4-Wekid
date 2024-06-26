import React, { useState } from 'react';
import styled from 'styled-components';
import lockIcon from '@assets/icons/icon-lock.svg';
import Button from '@components/button/Button';
import { StyledInput } from '@components/input/input';
import { theme } from '@styles/theme';

interface QuestionModalContentProps {
  onConfirm: (answer: string) => void;
}

const StyledQuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLockIconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.gray[50]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLockIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${lockIcon});
`;

const StyledLockText = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
  margin-bottom: 36px;
  text-align: center;
`;

const StyledQeustionTitle = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 10px;
  align-self: start;
`;

const StyledAnswerInput = styled(StyledInput)`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledErrorMessage = styled.div`
  font: ${theme.fonts['pretendard/xs-12px-regular']};
  color: ${theme.colors.red[500]};
  align-self: start;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: ${theme.fonts['pretendard/xs-12px-regular']};
  color: ${theme.colors.gray[600]};
  margin-top: 20px;
  text-align: center;
`;

const QuestionModalContent: React.FC<QuestionModalContentProps> = ({
  onConfirm,
}) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('특별히 싫어하는 음식은?');
  const [correctAnswer, setCorrectAnswer] = useState('미나리');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleConfirm = () => {
    if (answer === correctAnswer) {
      onConfirm(answer);
    } else {
      setErrorMessage('정답이 아닙니다. 다시 시도해주세요.');
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

      <StyledQeustionTitle>{question}</StyledQeustionTitle>

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
          onKeyPress={handleKeyPress}
          placeholder="답을 입력하세요"
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
