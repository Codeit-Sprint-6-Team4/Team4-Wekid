import React, { useEffect, useState } from 'react';
import { postSecurityQuestion } from '@api/auth';
import SecurityQuestionUI from './SecurityQuestionUI';

const SecurityQuestionContainer = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isQuestionSubmitDisabled, setIsQuestionSubmitDisabled] =
    useState(true);

  const handleSelectOption = (
    option: { id: number; label: string },
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
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
      const res = await postSecurityQuestion(question, answer);
      const userURL = `https://your-destination-url.com/${res.code}`;
      window.location.href = userURL;
      alert(
        '성공적으로 위키페이지를 만들었습니다.\n\n질문: ${question}\n답변: ${answer}',
      );
      console.log('질문 생성 성공', res);
    } catch (error) {
      console.log('질문 생성 실패', error);
      alert('이미 위키페이지를 생성 하였습니다.');
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
