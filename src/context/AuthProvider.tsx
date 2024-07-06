import React, { ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { userType, getUserMe } from '@api/user';
import AuthContext from './authContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
      getUserMe(accessToken).then(setUser).catch(console.error);
    }
  }, []);

  const login = (userData: userType) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    sessionStorage.removeItem('boardsCurrentPage');
    sessionStorage.removeItem('wekilistCurrentPage');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
