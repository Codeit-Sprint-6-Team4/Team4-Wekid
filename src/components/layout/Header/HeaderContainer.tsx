import React, { useState } from 'react';
import Header from './Header';

const HeaderContainer = () => {
  // Context API 생성 후 수정 필요
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} />;
};

export default HeaderContainer;
