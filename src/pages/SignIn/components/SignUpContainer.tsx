import React, { useState } from 'react';
import SignInUI from '@pages/SignIn/components/SignInUI';

export interface logInDataTypes {
  email: string;
  password: string;
}

const SignUpContainer = () => {
  const [userData, setUserDate] = useState<logInDataTypes>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDate((prev) => ({ ...prev, [name]: value }));
  };

  return <SignInUI value={userData} onChange={onChange} />;
};

export default SignUpContainer;
