import React, { useState } from 'react';
import AccountSettingUI from './AccountSettingUI';

const AccountSettingContainer = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    question: '',
    answer: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 비밀번호 변경 로직 필요
    console.log('비밀번호 변경:', values);
  };

  const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 질문 생성 로직 필요
    console.log('질문 생성:', values);
  };

  return (
    <AccountSettingUI
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onQuestionSubmit={handleQuestionSubmit}
    />
  );
};

export default AccountSettingContainer;
