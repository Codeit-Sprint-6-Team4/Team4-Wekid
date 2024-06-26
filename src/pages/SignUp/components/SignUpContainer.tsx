import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { postSignUp } from '@api/auth';
import SignUpUI from './SignUpUI';

export interface userDataTypes {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const SignUpContainer = () => {
  const [userData, setuserData] = useState<userDataTypes>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const navigate = useNavigate();
  const serveSignUp = async () => {
    try {
      await postSignUp(userData);
      alert('회원가입완료');
      navigate('/');
    } catch (error) {
      const err = error as AxiosError;
      alert(err.message);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    serveSignUp();
  };

  const isFillForm = () => {
    if (
      userData.email &&
      userData.name &&
      userData.password === userData.passwordConfirmation &&
      userData.password.length !== 0
    ) {
      return false;
    }
    return true;
  };
  return (
    <>
      <SignUpUI
        value={userData}
        onChange={onChange}
        onSubmit={onSubmit}
        isFillForm={isFillForm}
      />
    </>
  );
};

export default SignUpContainer;
