import React, { useState } from 'react';
import SignUpUI from './SignUpUI';

export interface userDataTypes {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpContainer = () => {
  const [userData, setuserData] = useState<userDataTypes>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const isFillForm = () => {
    if (
      userData.email &&
      userData.name &&
      userData.password === userData.confirmPassword &&
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
