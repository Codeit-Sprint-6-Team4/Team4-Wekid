import React from 'react';
import Header from './Header';
import { useAuth } from '@context/authContext';

const HeaderContainer: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Header
      isLoggedIn={isLoggedIn}
      handleLogout={logout}
    />
  );
};

export default HeaderContainer;
