import React, { useContext } from 'react';
import { useAuth } from '@context/authContext';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import Header from './Header';

const HeaderContainer: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const context = useContext(MyWekiDataContext);

  return (
    <Header
      isLoggedIn={isLoggedIn}
      handleLogout={() => {
        context?.setIsLogin(false);
        logout();
      }}
    />
  );
};

export default HeaderContainer;
