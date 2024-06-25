import React, { useState } from 'react';
import styled from 'styled-components';
import lockIcon from '@assets/icons/icon-lock.svg';
import { theme } from '@styles/theme';

interface QuestionModalContentProps {
  onConfirm: (answer: string) => void;
}

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LockIconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.gray[50]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LockIcon = styled.img`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${lockIcon});
`;
const LockIconText = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
  margin-bottom: 36px;
  text-align: center;
`;

const QeustionTitle = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 10px;
  align-self: start;
`;

//임시 인풋
const AnswerInput = styled.input`
  position: relative;
  border-radius: 10px;
  padding-left: 14px;
  width: 355px;
  height: 45px;
  background-color: ${theme.colors.gray[50]};
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  font-weight: 500;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${theme.colors.main[500]};
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray[600]};
    font-weight: 400;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  font: ${theme.fonts['pretendard/xs-12px-regular']};
  color: ${theme.colors.red[500]};
  margin-top: 10px;
  align-self: start;
`;

const Footer = styled.div`
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

  return (
    <QuestionContent>
      <LockIconContainer>
        <LockIcon />
      </LockIconContainer>
      <LockIconText>
        다음 퀴즈를 맞추고
        <br />
        위키를 작성해 보세요.
      </LockIconText>

      <QeustionTitle>특별히 싫어하는 음식은?</QeustionTitle>
      <AnswerInput value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <ErrorMessage>정답이 아닙니다. 다시 시도해주세요.</ErrorMessage>
      <button onClick={() => onConfirm(answer)}>확인</button>
      <Footer>
        위키드는 지인들과 함께하는 즐거운 공간입니다.
        <br />
        지인에게 상처를 주지 않도록 작성해 주세요.
      </Footer>
    </QuestionContent>
  );
};

export default QuestionModalContent;
