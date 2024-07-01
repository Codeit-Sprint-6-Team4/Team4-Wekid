import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { patchPassword } from '@api/auth';
import AccountSettingUI from './AccountSettingUI';

const AccountSettingContainer = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    question: '',
    answer: '',
  });
  const [errors, setErrors] = useState({
    passwordMismatch: false,
    sameCurrentPassword: false,
    incorrectCurrentPassword: false,
  });
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === 'newPassword') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sameCurrentPassword: values.currentPassword === value,
        passwordMismatch: false,
      }));
    }

    if (name === 'confirmPassword') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordMismatch: false,
      }));
    }
  };

  useEffect(() => {
    const { currentPassword, newPassword, confirmPassword } = values;
    const { passwordMismatch, sameCurrentPassword } = errors;
    setIsConfirmDisabled(
      !currentPassword ||
        !newPassword ||
        !confirmPassword ||
        passwordMismatch ||
        sameCurrentPassword,
    );
  }, [values, errors]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordMismatch = values.newPassword !== values.confirmPassword;
    const sameCurrentPassword = values.currentPassword === values.newPassword;

    setErrors({
      passwordMismatch,
      sameCurrentPassword,
      incorrectCurrentPassword: false,
    });

    if (passwordMismatch || sameCurrentPassword) {
      return;
    }

    try {
      const res = await patchPassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        passwordConfirmation: values.confirmPassword,
      });
      console.log('비밀번호 변경 성공', res);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            incorrectCurrentPassword: true,
          }));
        }
        console.log('비밀번호 변경 실패', error);
      }
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 질문 생성 로직 필요
    console.log('질문 생성:', values);
  };

  return (
    <AccountSettingUI
      values={values}
      errors={errors}
      isConfirmDisabled={isConfirmDisabled}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onQuestionSubmit={handleQuestionSubmit}
    />
  );
};

export default AccountSettingContainer;