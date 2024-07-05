import React, { ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './authContext';
import { userType, getUserMe } from '@api/user';

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
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
