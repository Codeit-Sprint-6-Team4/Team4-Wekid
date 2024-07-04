import { createContext, useContext } from 'react';
import { userType } from '@api/user';  // @api/user로부터 userType과 getUserMe를 임포트합니다.

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  user: userType | null;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: null,
});

export const useAuth = (): AuthContextProps => {
  return useContext(AuthContext);
};

export default AuthContext;
