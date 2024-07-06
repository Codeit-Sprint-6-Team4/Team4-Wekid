import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  getSecurityQuestion,
  patchSecurityQuestion,
  postSecurityQuestion,
} from '@api/auth';
import { getUserMe } from '@api/user';
import SecurityQuestionUI from './SecurityQuestionUI';

const SecurityQuestionContainer = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isQuestionSubmitDisabled, setIsQuestionSubmitDisabled] =
    useState(true);
  const [profileCode, setProfileCode] = useState<string | null>(null);
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const options = [
    { id: 1, label: '특별히 싫어하는 음식은?' },
    { id: 2, label: '키우고 있는 반려동물의 이름은?' },
    { id: 3, label: 'MBTI는?' },
    { id: 4, label: '가장 좋아하는 색은?' },
  ];

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = Cookies.get('accessToken');
        const userData = await getUserMe(token);
        setProfileCode(userData.profile?.code || null);
        if (userData.profile?.code) {
          const securityData = await getSecurityQuestion(userData.profile.code);
          const selectedOption = options.find(
            (option) => option.label === securityData.securityQuestion,
          );
          if (selectedOption) {
            setQuestion(selectedOption.label);
            setIsInputEnabled(false);
            setQuestion(securityData.securityQuestion);
          } else {
            setQuestion(securityData.securityQuestion);
            setIsInputEnabled(true);
          }
          setAnswer('');
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSelectOption = (
    option: { id: number; label: string },
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (option.label === '직접 입력') {
      setQuestion('');
      setIsInputEnabled(true);
    } else {
      setQuestion(option.label);
      setIsInputEnabled(false);
    }
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  useEffect(() => {
    setIsQuestionSubmitDisabled(!question || !answer);
  }, [question, answer]);

  const handleQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profileCode) {
      try {
        const res = await patchSecurityQuestion(profileCode, question, answer);
        alert(
          `성공적으로 질문을 수정했습니다.\n\n질문: ${question}\n답변: ${answer}`,
        );
        console.log('질문 수정 성공', res);
      } catch (error) {
        console.log('질문 수정 실패', error);
        alert('질문과 답변 수정에 실패했습니다.');
      }
    } else {
      try {
        const res = await postSecurityQuestion(question, answer);
        const userURL = `${res.code}`;
        window.location.href = `/weki/${userURL}`;
        alert(
          `성공적으로 위키페이지를 만들었습니다.\n\n질문: ${question}\n답변: ${answer}`,
        );
        console.log('질문 생성 성공', res);
      } catch (error) {
        console.log('질문 생성 실패', error);
        alert('이미 위키페이지를 생성 하였습니다.');
      }
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
      onInputChange={handleInputChange}
      isEditing={!!profileCode}
      options={options}
      isInputEnabled={isInputEnabled}
    />
  );
};

export default SecurityQuestionContainer;
