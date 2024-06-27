import React, { useState } from 'react';
import Header from './Header';

const HeaderContainer: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header
      isLoggedIn={isLoggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
