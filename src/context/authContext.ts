import { createContext, useContext } from 'react';
import { userType } from '@api/user';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (user: userType) => void;
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
