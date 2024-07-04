import React, { ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './authContext';
import { userType, getUserMe } from '@api/user';  // @api/user로부터 userType과 getUserMe를 임포트합니다.

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

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
