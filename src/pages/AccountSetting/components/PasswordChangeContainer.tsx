import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { patchPassword } from '@api/auth';
import { handleLogout } from '@utils/authUtils';
import PasswordChangeUI from './PasswordChangeUI';

const PasswordChangeContainer = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    passwordMismatch: false,
    sameCurrentPassword: false,
    incorrectCurrentPassword: false,
  });
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === 'password') {
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
    const { currentPassword, password: password, confirmPassword } = values;
    const { passwordMismatch, sameCurrentPassword } = errors;
    setIsConfirmDisabled(
      !currentPassword ||
        !password ||
        !confirmPassword ||
        passwordMismatch ||
        sameCurrentPassword,
    );
  }, [values, errors]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordMismatch = values.password !== values.confirmPassword;
    const sameCurrentPassword = values.currentPassword === values.password;

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
        password: values.password,
        passwordConfirmation: values.confirmPassword,
      });
      console.log('비밀번호 변경 성공', res);
      handleLogout(navigate);
      alert('비밀번호가 성공적으로 변경되었습니다.');
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

  return (
    <PasswordChangeUI
      values={values}
      errors={errors}
      isConfirmDisabled={isConfirmDisabled}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default PasswordChangeContainer;
