import React, { useEffect, useState } from 'react';
import { updateSecurityQuestion } from '@api/auth';
import SecurityQuestionUI from './SecurityQuestionUI';

const SecurityQuestionContainer = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isQuestionSubmitDisabled, setIsQuestionSubmitDisabled] =
    useState(true);

  const handleSelectOption = (option: { id: number; label: string }) => {
    setQuestion(option.label);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    setIsQuestionSubmitDisabled(!question || !answer);
  }, [question, answer]);

  const handleQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await updateSecurityQuestion(question, answer);
      console.log('질문 생성 성공', res);
    } catch (error) {
      console.log('질문 생성 실패', error);
    }
  };

  return (
    <SecurityQuestionUI
      question={question}
      answer={answer}
      isQuestionSubmitDisabled={isQuestionSubmitDisabled}
      onSelect={handleSelectOption}
      onQuestionChange={handleQuestionChange}
      onQuestionSubmit={handleQuestionSubmit}
    />
  );
};

export default SecurityQuestionContainer;
