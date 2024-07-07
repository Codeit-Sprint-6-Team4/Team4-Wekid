import { ReactNode, createContext } from 'react';
import { userType } from '@api/user';
import useGetUserData from '@hooks/useGetUserData';

export interface contextType {
  myUserData: userType | null;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyWekiDataContext = createContext<contextType | undefined>(
  undefined,
);

export const MyDataContext = ({ children }: { children: ReactNode }) => {
  const { myUserData, isLogin, setIsLogin } = useGetUserData();

  return (
    <MyWekiDataContext.Provider value={{ myUserData, isLogin, setIsLogin }}>
      {children}
    </MyWekiDataContext.Provider>
  );
};
