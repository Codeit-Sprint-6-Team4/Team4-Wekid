import React from 'react';
import Header from './Header';
import { useAuth } from '@context/authContext';

const HeaderContainer: React.FC = () => {
  const { isLoggedIn, login, logout, user } = useAuth();

  return (
    <Header
      isLoggedIn={isLoggedIn}
      handleLogin={login}
      handleLogout={logout}
      user={user}
    />
  );
};

export default HeaderContainer;
