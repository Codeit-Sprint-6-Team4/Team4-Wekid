import React, { createContext, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

export interface AuthContextProps {
  accessToken: string | null;
  refreshToken: string | null;
  login: (newAccessToken: string, newRefreshToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    Cookies.get('accessToken') || null,
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    Cookies.get('refreshToken') || null,
  );

  const login = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    Cookies.set('accessToken', newAccessToken);
    Cookies.set('refreshToken', newRefreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
