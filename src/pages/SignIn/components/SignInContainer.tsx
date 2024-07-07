import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/authContext';
import { postSignIn } from '@api/auth';
import SignInUI from '@pages/SignIn/components/SignInUI';

export interface logInDataTypes {
  email: string;
  password: string;
}

const SignInContainer = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userData, setUserDate] = useState<logInDataTypes>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDate((prev) => ({ ...prev, [name]: value }));
  };

  const postServerLogIn = async () => {
    try {
      const response = await postSignIn(userData);
      const { user } = response;
      login(user); // 상태 업데이트
      alert('로그인이 완료되었습니다.');
      navigate(-1); // 메인 페이지로 리디렉션
    } catch (error) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postServerLogIn();
  };

  const isFillForm = () => {
    return userData.email.trim() === '' || userData.password.trim() === '';
  };

  return (
    <SignInUI
      userData={userData}
      onChange={onChange}
      onSubmit={onSubmit}
      isFillForm={isFillForm}
    />
  );
};

export default SignInContainer;
